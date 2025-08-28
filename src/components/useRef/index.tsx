import { useRef, useState } from 'react';

const OldWordCompare = () => {
  const oldWord = useRef('');
  const [currentWord, setCurrentWord] = useState('');

  function wordChecker() {
    if (oldWord.current !== currentWord) {
      return (oldWord.current = currentWord);
    }

    console.log('same as previous word');
  }

  return (
    <div>
      <input
        type="text"
        value={currentWord}
        onChange={(e) => setCurrentWord(e.target.value)}
        placeholder="Type a word"
      />

      <button onClick={wordChecker}>Check</button>
    </div>
  );
};

export default OldWordCompare;
