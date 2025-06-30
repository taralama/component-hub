const Switch = () => {
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          onChange={(e) => console.log(e.target.checked)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Switch;
