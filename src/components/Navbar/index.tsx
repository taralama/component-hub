const Navbar = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="h-15 shadow-2xl w-full flex justify-between">
      <button
        className="hover:cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      <button
        className="hover:cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
    </div>
  );
};

export default Navbar;
