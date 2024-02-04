import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";
import styled from "styled-components";
import { LetterContext } from "../context/LetterContext";

function Main() {
  const {data} = useContext(LetterContext)

  const [selectedMember, setSelectedMember] = useState("카리나");
  const [filteredLetters, setFilteredLetters] = useState([]);

  useEffect(() => {
    if (selectedMember) {
      const filtered = data.filter(letter => letter.writedTo === selectedMember);
      setFilteredLetters(filtered);
    }
  }, [data, selectedMember]); //이것도 의존성배열에 data를 넣으면 서버를 무한으로 요청하는 것 같은데 괜찮은가?



  return (
    <Container>
      <Header selectedMember={selectedMember} setSelectedMember={setSelectedMember}/>
      <LetterForm />
      <LetterList data={filteredLetters}/>
      <Footer/>
    </Container>
  )
}

export default Main


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;