import { useRef, useState } from 'react';
import Button from '../Button';

const OldWordCompare = () => {
  const oldWord = useRef('');
  const [currentWord, setCurrentWord] = useState('');
  const [result, setResult] = useState('');

  function wordChecker() {
    if (oldWord.current !== currentWord) {
      setResult('current and previous words are not same');
      oldWord.current = currentWord;
      return;
    }
    setResult('current and previous words are same');
  }

  return (
    <div className="m-3">
      <input
        type="text"
        value={currentWord}
        onChange={(e) => setCurrentWord(e.target.value)}
        placeholder="Type a word"
        className="border py-2 mr-2"
      />

      <Button btnText="Check" variant="primary" onClick={wordChecker}>
        Check
      </Button>

      <h1 className="mt-3">Result: {result}</h1>
    </div>
  );
};

export default OldWordCompare;
