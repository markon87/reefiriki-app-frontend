import Header from "../components/Header";
import Hero from "../components/Hero";

export default function About() {
  return (
    <>
      <Header />
      <Hero />
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
