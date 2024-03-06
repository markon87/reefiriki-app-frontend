import { Header } from "../components/Header";

const Home = ({ fishes }) => {
  return (
    <div>
      <div className="home">
        <Header />
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-5xl text-center font-body mb-7 font-bold">
            Featured Fish
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-around">
            {fishes.getFishes.map((fish) => (
              <div key={fish.id} className="sm:w-1/2 lg:w-1/4 m-0 p-4">
                <div className="bg-gray-50 rounded-3xl overflow-hidden text-center shadow-2xl text-lg pb-7 hover:shadow-xl transition-shadow">
                  <a href={`/${fish.id}`} className="block overflow-hidden">
                    <img src={fish.imageUrl} alt="Fish" className="w-full" />
                  </a>
                  <p className="my-4 font-title text-highlight text-3xl md:text-2xl mb-6">
                    {fish.name}
                  </p>
                  <p>
                    <a
                      href={`/${fish.id}`}
                      className="text-white text-sm lg:text-xs no-underline py-2 px-4 bg-purple-600 rounded-lg uppercase font-semibold inline-block"
                    >
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
