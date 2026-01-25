import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import OnlineGame from "./Pages/OnlineGame/OnlineGame";
import FriendGame from "./Pages/FriendGame/FriendGame";
import AIGame from "./Pages/AiGame/AiGame";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/online" element={<OnlineGame />} />
        <Route path="/friends" element={<FriendGame />} />
        <Route path="/ai" element={<AIGame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
