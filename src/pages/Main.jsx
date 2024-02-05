import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { filterData } from "../redux/modules/jsonSet";


function Main({setData, addLetterJson}) {
  const jsonData = useSelector((state) => state.jsonSet.data);

  const dispatch = useDispatch()
  const [selectedMember, setSelectedMember] = useState("카리나");

  // useEffect(() => {
  //   if (jsonData) {
      
  //     console.log(filtered, selectedMember);
  //     dispatch(filterData(filtered)); // setFilteredLetters 이후에 dispatch 호출
  //   }
  // }, [selectedMember]);
  console.log(jsonData);

const filtered = jsonData.filter((letter) => letter.writedTo === selectedMember);

  return (
    <Container>
      <Header selectedMember={selectedMember} setSelectedMember={setSelectedMember}/>
      <LetterForm setData={setData} addLetterJson={addLetterJson}/>
      <LetterList filtered={filtered} />
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