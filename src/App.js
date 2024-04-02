import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useQuery } from "@apollo/client";

// components
import Spinner from "./components/Spinner";

// queries
import { GET_FISHES } from "./queries/fishQueries";

//Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Fish from "./pages/Fish";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";

function App() {
  const { data, loading, error } = useQuery(GET_FISHES);

  if (loading) return <Spinner />;
  if (error) return <pre>{error.message}</pre>;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home fishes={data} />} />
          <Route path="/:id" element={<Fish />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
