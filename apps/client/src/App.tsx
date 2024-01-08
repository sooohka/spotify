import axios from "axios";
import { useState } from "react";

function App() {
  const [me, setMe] = useState(null);
  async function handleClick() {
    const { data } = await axios.get("/api/user/me", {
      baseURL: import.meta.env.VITE_APP_SERVER_URL,
      withCredentials: true,
    });
    setMe(data);
  }
  return (
    <>
      <a href={"http://localhost:4000/api/auth/spotify/"}>login</a>
      <button type="button" onClick={handleClick}>
        get me
      </button>
      <pre>{JSON.stringify(me, null, 2)}</pre>
    </>
  );
}

export default App;
