import { HTMLAttributes, useState } from 'react';

interface DropAreaProps extends HTMLAttributes<HTMLDivElement> {
  onDrop: () => void; // parent callback
}

const DropArea = ({ onDrop }: DropAreaProps) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div
      onDragOver={(e) => e.preventDefault()} // allow drop
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={(e) => {
        e.preventDefault();
        setShowDrop(false);
        onDrop(); //
      }}
      className={showDrop ? 'drop_area' : 'hide_drop'}
    >
      {showDrop && 'Drop Here'}
    </div>
  );
};

export default DropArea;
