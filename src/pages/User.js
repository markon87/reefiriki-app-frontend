import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../queries/userQueries";
import Spinner from "../components/Spinner";
import Header from "../components/Header";

export default function User() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_USER, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <pre>{error.message}</pre>;

  return (
    <>
      <Header />
      {!loading && !error && (
        <div className="pt-36 pb-9 px-5">
          <div className="max-w-screen-sm mx-auto rounded-[30px] overflow-hidden shadow-even-spread-large">
            <div className="p-5 md:p-12">
              <h1 className="text-3xl md:text-5xl mb-4 font-title">
                {data.getUser.username}
              </h1>
              <p>
                <strong>Email: </strong>
                {data.getUser.email}
              </p>
              <br />
              <Link
                to="/"
                className="text-white text-sm no-underline py-2 px-4 bg-purple-600 rounded-lg uppercase font-semibold inline-block"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
