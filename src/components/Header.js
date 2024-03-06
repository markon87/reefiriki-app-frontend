export const Header = () => {
  return (
    <header>
      <div className="bg-heroImage bg-hero-offset-r-50 lg:bg-center bg-cover min-h-[50vh] lg:min-h-[70vh] py-20 px-6 lg:px-24 mb-20 rounded-bl-[30px] rounded-br-[30px] lg:rounded-br-[300px] lg:rounded-tl-md shadow-lg">
        <div className="w-full p-4 md:p-24">
          <h1 className="text-white text-7xl sm:text-8xl md:text-10xl font-title mb-9">
            <span className="block text-2xl sm:text-3xl md:text-4xl uppercase text-highlight font-extrabold font-body">
              Welcome to
            </span>
            Reefiriki
          </h1>
          <h2 className="text-gray-200 text-2xl sm:text-3xl md:text-4xl">
            All things fish and coral
          </h2>
        </div>
      </div>
    </header>
  );
};
