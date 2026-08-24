import { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return <Dashboard />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setLoggedIn(true);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
      setError("Unable to connect to the server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>NETFLIX</h1>

        <h2>Sign In</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email or mobile number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {error && <p className="error">{error}</p>}
        </form>

        <div className="help">
          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#">Need help?</a>
        </div>

        <p className="new-user">
          New to Netflix? <span>Sign up now.</span>
        </p>
      </div>
    </div>
  );
}

export default App;