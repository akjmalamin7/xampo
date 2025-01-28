const Loader = () => {
  return (
    <div className="flex absolute left-[50%] top-[50%]">
      <div className="relative">
        <div
          className="w-12 h-12 rounded-full absolute
    border-8 border-dashed border-gray-200"
        ></div>

        <div
          className="w-12 h-12 rounded-full animate-spin absolute
    border-8 border-dashed border-purple-500 border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default Loader;
