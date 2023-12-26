import cors from "cors";
import express, { type Request } from "express";

const app = express();

app.use(cors());

app.get("/login", (req: Request, res) => {
  const header = new Headers();

  const re = new URLSearchParams({
    response_type: "code",
    client_id: "ed6d4b75963044a0aadbc0527fa426a3", // process.env.SPOTIFY_CLIENT_ID,
    scope: "user-read-private user-read-email",
    redirect_uri: "http://localhost:3000/api/auth/callback",
  });
  const url = `https://accounts.spotify.com/authorize?${re.toString()}`;
  header.append("Location", url);
  header.append("Access-Control-Allow-Origin", "*");
  res.redirect(307, url);
});
app.listen(4000, () => {
  console.log("app is running on port 4000");
});
