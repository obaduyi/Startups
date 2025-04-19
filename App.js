import React, { useEffect, useState } from "react"; 
import "./App.css";
import { Auth } from "./components/Auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));

  // Sign-out logic
  const logout = () => {
    cookies.remove("auth-token");
    setIsAuth(false);
  };

  useEffect(() => {
    // Event listener for messages from the iframe
    const handleIframeMessage = (event) => {
      // Check if the message is a signout request
      if (event.data?.type === "sign_up") {
        logout();
      }
    };

    window.addEventListener("message", handleIframeMessage);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("message", handleIframeMessage);
    };
  }, []);

  return (
    <div>
      {!isAuth ? (
        <Auth setIsAuth={setIsAuth} />
      ) : (
        <div className="dashboard">
          {/* Embed the Hackerton project */}
          <iframe
            src="/hackerton/index.html"
            title="Hackerton Project"
            style={{ width: "100%", height: "100vh", border: "none" }}
          ></iframe>
          
        </div>
      )}
    </div>
  );
}

export default App;
