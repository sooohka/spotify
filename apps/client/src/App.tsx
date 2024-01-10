import { useState } from "react";
import { searchSchema } from "schema";

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
    const val = { q: "kanye west", type: "artist,album" };
    searchSchema.parse(val);
    const params = new URLSearchParams(val);
    const res = await fetch(
      `http://localhost:4000/api/search?${params.toString()}`,
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
    <>
      <a href={"http://localhost:4000/api/auth/spotify/"}>login</a>
      <button type="button" onClick={handleClick}>
        get me
      </button>
      <button type="button" onClick={handleSearch}>
        get search
      </button>
      <pre>{JSON.stringify(me, null, 2)}</pre>
      <pre>{JSON.stringify(search, null, 2)}</pre>
    </>
  );
}

export default App;
