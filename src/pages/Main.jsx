import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";
import styled from "styled-components";
import { useSelector } from 'react-redux';

function Main({setData, addLetterJson}) {
  const jsonData = useSelector((state) => state.jsonSet.data);

  const [selectedMember, setSelectedMember] = useState("카리나");
  const [filteredLetters, setFilteredLetters] = useState([]);

  useEffect(() => {
    if (jsonData) {
      const filtered = jsonData.filter(letter => letter.writedTo === selectedMember);
      setFilteredLetters(filtered);
    }
  }, [jsonData, selectedMember]);



  return (
    <Container>
      <Header selectedMember={selectedMember} setSelectedMember={setSelectedMember}/>
      <LetterForm setData={setData} addLetterJson={addLetterJson}/>
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