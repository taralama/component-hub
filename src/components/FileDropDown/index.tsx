const FileDropDown = () => {
  return (
    <div className="bg-white mt-6 p-6">
      <h1 className="font-bold text-xl">Drag file Here!</h1>

      <div
        className="h-64 w-64 border-5 rounded-2xl border-dotted"
        onDragEnter={() => console.log('Entering drag')}
        onDrop={(e) => console.log(e.target)}
      >
        <input
          type="file"
          className="h-full border w-full"
          placeholder=""
          id="drop"
        />
      </div>
    </div>
  );
};

export default FileDropDown;
