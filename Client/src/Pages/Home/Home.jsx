import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <button onClick={() => navigate("/online")}>Play Online</button>
      <button onClick={() => navigate("/friends")}>Play With Friends</button>
      <button onClick={() => navigate("/ai")}>Play With AI</button>
    </div>
  );
};

export default Home;
