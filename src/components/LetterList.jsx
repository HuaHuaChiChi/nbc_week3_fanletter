import Letter from "./Letter";
import * as S from "../style/LetterListStyle"
import { useSelector } from "react-redux";

function LetterList() {
  const jsonData = useSelector((state) => state.jsonSet.data);
  return (
    <S.Container>
      <S.Letters>
        {jsonData.length === 0 ? (
          <p>
            아직 등록된 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되세요!
          </p>
        ) : (
          jsonData.map((letterData) => (
            <Letter key={letterData.id} data={letterData} />
          ))
        )}
      </S.Letters>
    </S.Container>
  );
}

export default LetterList;
