import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";
import styled from "styled-components";

function Main({data, setData}) {

  const [selectedMember, setSelectedMember] = useState("카리나");
  const [filteredLetters, setFilteredLetters] = useState([]);

  useEffect(() => {
    if (selectedMember) {
      const filtered = data.filter(letter => letter.writedTo === selectedMember);
      setFilteredLetters(filtered);
    }
  }, [data, selectedMember]);



  return (
    <Container>
      <Header selectedMember={selectedMember} setSelectedMember={setSelectedMember}/>
      <LetterForm setData={setData}/>
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