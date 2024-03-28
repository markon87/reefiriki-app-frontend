import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="bg-heroImage bg-hero-offset-r-50 lg:bg-center bg-cover pt-20 pb-4 px-0 mb-20 rounded-bl-[30px] rounded-br-[30px] lg:rounded-br-[30px] lg:rounded-tl-md shadow-lg">
        <div className="max-w-screen-xl mx-auto py-4 md:py-24">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-title mb-9">
            Get in Touch
          </h1>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mb-20">
        <p>
          If you have any questions or comments, feel free to contact me
          whenever it's the most convenient for you.
        </p>
        <ul>
          <li>
            Email:
            <Link to="mailto:novakovicmarko87@gmail.com">
              novakovicmarko87@gmail.com
            </Link>
          </li>
          <li>
            Phone: <Link to="tel:+15713386735">571-338-6735</Link>
          </li>
          <li>
            <Link to="https://github.com/markon87">GitHub</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/marko-novakovic-mn/">
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
