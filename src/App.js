import { useState } from "react";
import { Main, Heading, Paragraph } from "grommet";

import MeaningTable from "./meaning";
import AddWord from "./addWord";
import "./App.css";

function App() {
  // set the words in state
  const [newWord, setNewWord] = useState("");

  const newWordAdded = (word) => {
    // add the new word to the state
    setNewWord(word);
  };

  return (
    <div className="App">
      <Main pad="large" margin={{ horizontal: "xlarge" }}>
        <AddWord newWordAdded={newWordAdded} />
        <Heading>Vocab Wise</Heading>
        <Paragraph>Words and their meaning I come accross.</Paragraph>
        <MeaningTable newWord={newWord} />
      </Main>
    </div>
  );
}

export default App;
