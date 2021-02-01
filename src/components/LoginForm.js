import { useState } from "react";
import axios from "axios";

export const LoginForm = () => {
  const projectID = "d40fab79-485d-4a64-b1ca-d875ae19bf25";
  //State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //Handlers
  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (error) {
      setError("Ah! incorrect credentials.");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">DisEngine</h1>
        <form onSubmit={handleSubmit} className="">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Hop in the chat</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
