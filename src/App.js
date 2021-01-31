import { ChatEngine } from "react-chat-engine";
import "./App.css";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="d40fab79-485d-4a64-b1ca-d875ae19bf25"
      userName="Blizzards"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
