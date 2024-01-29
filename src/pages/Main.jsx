import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/Detail")}>fd</button>
    </div>
  )
}

export default Main