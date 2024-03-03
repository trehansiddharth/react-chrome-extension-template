import { useState, useEffect } from "react";
import { DisplayMessage } from "../common/Types";
import "./App.less";

type AppState = "loading" | "loaded" | "error";

const App = () => {
  const [appState, setAppState] = useState<AppState>("loading");
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    fetch("http://localhost:3000/api/get_display_message")
      .then(async (response) => {
        const msg : DisplayMessage = await response.json();
        if ("err" in msg) {
          setAppState("error");
          setMessage(`Error in React Chrome Extension: ${msg.err}`);
        } else {
          setAppState("loaded");
          setMessage(msg.message);
        }
      })
      .catch((err) => {
        setAppState("error");
        setMessage(`Error in React Chrome Extension: ${err}`);
      });
  }, []);

  return <div className={`app app-${appState}`}>
    <div className="app-content">
      {message}
    </div>
  </div>;
}

export default App;
