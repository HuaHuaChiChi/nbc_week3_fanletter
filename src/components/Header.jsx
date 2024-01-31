import { useState } from "react";
import HeaderStyle from "../style/HeaderStyle"

function Header() {

  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (memberName) => {
    setSelectedMember(memberName);
  };

  return (
    <HeaderStyle selectedMember={selectedMember} handleMemberClick={handleMemberClick}/>
  )
}

export default Header
