import {
  useEffect,
  useOptimistic,
  useState,
  // useTransition,
} from 'react';

interface Skill {
  id: number;
  skill: string;
}

type Skills = Skill[];

const Optimistic = () => {
  const [skills, setSkills] = useState<Skills>([]);
  const [skill, setSkill] = useState<string>('');

  // const [isPending, startTransition] = useTransition();
  const id = Math.floor(Math.random() * 1000000);
  const newSkill: Skill = { id, skill: skill };

  useEffect(() => {
    //calling the getSkill in the initial render
    getSkill();
  }, []);

  const getSkill = async () => {
    // getting Skills from backend
    try {
      const response = await fetch('http://localhost:8383/user');
      const data = await response.json();
      setSkills(data.users);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  function sleep(ms: number) {
    // making time delay as real api call
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const addSkill = async () => {
    //sending skill to backend
    setOptiSkill(newSkill);
    try {
      const response = await fetch('http://localhost:8383/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSkill),
      });

      //waiting for 3 sec
      await sleep(3000);

      const res = await response.json();
      if (res) {
        setSkills(res.users);
        getSkill();
        setSkill('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [optiSkill, setOptiSkill] = useOptimistic<Skills, Skill>(
    skills,
    (prev, optimisticValue) => {
      console.log(prev, 'prev value in optimistic');
      return [...prev, optimisticValue];
    },
  );

  return (
    <main>
      <div className="p-4">
        <h1 className="text-amber-600 font-bold underline text-3xl">
          useOptimistic()
        </h1>

        <form action={addSkill}>
          <input
            type="text"
            value={skill}
            placeholder="Enter new skill"
            className="border p-2 mt-6 rounded"
            onChange={(e) => setSkill(e.target.value)}
          />
          <button
            type="submit"
            className="border px-6 py-2 ml-3 rounded bg-green-700 text-white hover:cursor-pointer"
          >
            Add
          </button>
        </form>

        <ul className="mt-6">
          {optiSkill?.map((s, i) => (
            <li key={i}>
              {i + 1}. {s.skill}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Optimistic;
