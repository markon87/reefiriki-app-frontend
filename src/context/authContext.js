import { useReducer, createContext } from "react";
import { jwtDecode } from "jwt-decode";

const initialState = {
  user: null,
};

if (localStorage.getItem("token")) {
  // const decodedToken = jwtDecode(localStorage.getItem("token"));
  //console.log(localStorage.getItem("token"));
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      // Proceed with using the decoded token
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
      } else {
        initialState.user = decodedToken;
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      // Handle the error appropriately (e.g., logout the user, display an error message)
    }
  } else {
    // Handle the case where the token is missing
    console.error("Token not found in localStorage");
  }

  // if (decodedToken.exp * 1000 < Date.now()) {
  //   localStorage.removeItem("token");
  // } else {
  //   initialState.user = decodedToken;
  // }
}

const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispach] = useReducer(authReducer, initialState);

  const login = (userData) => {
    localStorage.setItem("token", userData.token);
    dispach({
      type: "LOGIN",
      payload: userData,
    });
  };

  function logout() {
    localStorage.removeItem("token");
    dispach({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
