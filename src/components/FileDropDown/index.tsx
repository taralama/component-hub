import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

const ALLOWED_TYPES = ['application/pdf', 'image/jpg', 'image/png'];

const FileDropDown = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showDark, setShowDark] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // Prevent browser default behavior on files
  useEffect(() => {
    const handleWindowDragOver = (e: DragEvent) => e.preventDefault();
    const handleWindowDrop = (e: DragEvent) => e.preventDefault();

    window.addEventListener('dragover', handleWindowDragOver);
    window.addEventListener('drop', handleWindowDrop);

    return () => {
      window.removeEventListener('dragover', handleWindowDragOver);
      window.removeEventListener('drop', handleWindowDrop);
    };
  }, []);

  const handleFile = (selectedFile: File) => {
    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setError(`File type not supported: ${selectedFile.type}`);
      setFile(null);
      return;
    }
    setError(null);
    setFile(selectedFile);
    console.log(selectedFile.name);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) handleFile(selectedFile);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFile(droppedFile);
  };

  return (
    <div className="bg-white mt-6 p-6">
      <h1 className="font-bold text-xl">Drag file Here!</h1>

      <div
        onClick={() => inputRef.current?.click()}
        className={classNames(
          'h-64 w-64 border-5 rounded-2xl border-dotted flex items-center justify-center relative cursor-pointer',
          {
            'bg-gray-400': showDark,
          },
        )}
        onDragEnter={(e) => {
          // e.preventDefault();
          console.log(e.dataTransfer.items[0]);
          setShowDark(true);
          console.log('mouse entering');
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setShowDark(false);
          console.log('Mouse exited');
        }}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleInputChange}
        />
        {file ? <p>{file.name}</p> : <p>Drop or select a file</p>}
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default FileDropDown;
