import { useState } from "react";
import { Box, TextInput, TextArea, Button } from "grommet";

import { addWord, getDate } from "./utils";

const AddWord = ({ newWordAdded }) => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const submitWords = () => {
    // add word to local storage
    // clear the input fields
    // new Date should be readable by humans in the format: dd/mm/yyyy like 15 Feb 2021
    if (word && meaning) {
      addWord(word, meaning, getDate());
      setWord("");
      setMeaning("");
      newWordAdded({ word, meaning, date: getDate() });
    }
  };

  return (
    // box should start at the same level as the heading
    <Box direction="row" pad="medium" gap="medium">
      <Box pad="small">
        <TextInput
          placeholder="type word here"
          value={word}
          onChange={(event) => setWord(event.target.value)}
        />
      </Box>
      <Box pad="small">
        <TextArea
          placeholder="type meaning here"
          value={meaning}
          size="large"
          onChange={(event) => setMeaning(event.target.value)}
        />
      </Box>
      <Box pad="small">
        <Button secondary label="Add" onClick={submitWords} />
      </Box>
    </Box>
  );
};

export default AddWord;
