import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="bg-heroImage bg-hero-offset-r-50 lg:bg-center bg-cover pt-20 pb-4 px-0 mb-20 rounded-bl-[30px] rounded-br-[30px] lg:rounded-br-[30px] lg:rounded-tl-md shadow-lg">
        <div className="max-w-screen-xl mx-auto py-4 md:py-24">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-title mb-9">
            About Reefiriki
          </h1>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mb-20">
        <p>
          Reefiriki is a personal project born out of my deep-seated passion for
          the captivating world of saltwater fish and corals. Continuously
          evolving, this application is currently under active development, with
          a strong focus on both design refinement and feature enhancement. It
          aims to provide users with a comprehensive platform where they can
          effortlessly explore various marine species, assess their
          compatibility, and understand their specific care requirements.
          Looking ahead, one of the planned features includes user registration,
          enabling individuals to create personalized virtual fish tanks. These
          tanks will offer insights into compatibility, allowing users to curate
          their aquatic ecosystems with ease. Backend functionalities are
          powered by GraphQL and Atlas server, leveraging MongoDB as the
          database solution. On the frontend, ReactJS drives the user interface,
          while Tailwind CSS facilitates layout and styling.
        </p>
      </div>
    </>
  );
}
