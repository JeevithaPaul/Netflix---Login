import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <nav className="navbar">
        <h2>NETFLIX</h2>

        <button onClick={() => window.location.reload()}>
          Logout
        </button>
      </nav>

      <div className="hero">
        <p className="small-text">WELCOME BACK</p>

        <h1>Unlimited movies,<br />TV shows and more.</h1>

        <p className="description">
          Enjoy your favourite movies and TV shows anytime, anywhere.
        </p>

        <button
          className="browse-button"
          onClick={() => alert("Browse feature coming soon!")}
        >
          Browse Movies
        </button>
      </div>
    </div>
  );
}

export default Dashboard;