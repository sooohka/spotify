import { useState } from "react";

function App() {
  const [me, setMe] = useState(null);
  const [search, setSearch] = useState("");
  async function handleClick() {
    const res = await fetch("http://localhost:4000/api/user/me", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setMe(data);
  }

  async function handleSearch() {
    const val = { q: "kanye west" };
    const params = new URLSearchParams(val);
    const res = await fetch(
      `http://localhost:4000/api/search/artist?${params.toString()}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      },
    );
    const data = await res.json();
    setSearch(data);
  }

  async function handleReco() {
    const val = { q: "kanye west" };
    const params = new URLSearchParams(val);
    params.append("seed_artists", "5K4W6rqBFWDnAN6FQUkS6x");
    const res = await fetch(
      `http://localhost:4000/api/recommendation?${params.toString()}`,
      {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      },
    );
    const data = await res.json();
    setSearch(data);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <a
        href="https://prod-sibling-trip.koyeb.app/oauth/login/google"
        style={{ background: "red" }}
      >
        google login
      </a>
      <a href={"http://localhost:4000/api/auth/spotify/"}>login</a>
      <button type="button" onClick={handleClick}>
        get me
      </button>
      <button type="button" onClick={handleSearch}>
        get search
      </button>
      <button type="button" onClick={handleReco}>
        get recommendations
      </button>
      <pre>{JSON.stringify(me, null, 2)}</pre>
      <pre>{JSON.stringify(search, null, 2)}</pre>
    </div>
  );
}

export default App;
