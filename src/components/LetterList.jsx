import Letter from "./Letter";

function LetterList({ data }) {
  return (
    <div>
      {data.map((letterData) => (
        <Letter key={letterData.id} data={letterData} />
      ))}
    </div>
  );
}

export default LetterList;