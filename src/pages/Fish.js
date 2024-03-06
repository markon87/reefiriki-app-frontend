import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_FISH } from "../queries/fishQueries";
import Spinner from "../components/Spinner";

export default function Fish() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_FISH, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <pre>{error.message}</pre>;

  return (
    <>
      {!loading && !error && (
        <div className="py-9 px-5">
          <div className="max-w-screen-sm mx-auto rounded-[30px] overflow-hidden shadow-even-spread-large">
            <img
              src={data.getFish.imageUrl}
              alt={data.getFish.name}
              className="w-full"
            />
            <div className="p-5 md:p-12">
              <h1 className="text-3xl md:text-5xl mb-4 font-title">
                {data.getFish.name}
              </h1>
              <p>
                <strong>Family: </strong>
                {data.getFish.family.name}
              </p>
              <p>
                <strong>Care Level: </strong>
                {data.getFish.careLevel}
              </p>
              <p>
                <strong>Temperament: </strong>
                {data.getFish.temperament}
              </p>
              <p>
                <strong>Diet: </strong>
                {data.getFish.diet}
              </p>
              <p>
                <strong>Reef Compatible: </strong>
                {data.getFish.reefCompatibility}
              </p>
              <p>
                <strong>Max Fish Size: </strong>
                {data.getFish.maxSize} inch
              </p>
              <p>
                <strong>Minimum Tank Size: </strong>
                {data.getFish.minTankSize} gallon
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
