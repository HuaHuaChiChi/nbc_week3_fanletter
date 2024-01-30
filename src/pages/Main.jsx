import { useNavigate } from "react-router-dom";
import BaseButton from "../style/common/BaseButton";

function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/Detail")}>fd</button>
      <BaseButton>테스트</BaseButton>
    </div>
  )
}

export default Main