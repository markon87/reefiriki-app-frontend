import { useQuery, gql } from "@apollo/client";

//components
import Home from './components/Home'

const GET_FISHES = gql`
query GetFishes {
  getFishes {
    id
    name
    imageUrl
  }
}`

function App() {
  const { data, loading, error } = useQuery(GET_FISHES);

  if (loading) return "Loading..."
  if(error) return <pre>{error.message}</pre>

  return (
    <div className="App">
      <Home fishes={data} />
    </div>
  );
}

export default App;
