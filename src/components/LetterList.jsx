import styled from "styled-components";
import Letter from "./Letter";

function LetterList({ data }) {
  return (
    <Container>
      <Letters>
        {data.length === 0 ? (
          <p>
            아직 등록된 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되세요!
          </p>
        ) : (
          data.map((letterData) => (
            <Letter key={letterData.id} data={letterData} />
          ))
        )}
      </Letters>
    </Container>
  );
}

export default LetterList;

const Container = styled.div`
  width: 100vh;
  color: white;
  margin-bottom: 20px;
`;

const Letters = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  background-color: black;
  padding: 20px;
  border-radius: 5px;
  margin: 0 auto;
`;
