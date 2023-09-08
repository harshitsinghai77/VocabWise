import { useEffect, useState } from "react";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "grommet";

import { getWords } from "./utils";

const MeaningTable = ({ newWord }) => {
  // set the words in state
  const [words, setWords] = useState([]);

  useEffect(() => {
    // get words from local storage
    // set the words in state
    const words = getWords();
    setWords(words);
  }, []);

  useEffect(() => {
    // add the new word to the state
    if (newWord) {
      setWords((prevWords) => [newWord, ...prevWords]);
    }
  }, [newWord]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            Word
          </TableCell>
          <TableCell scope="col" border="bottom">
            Meaning
          </TableCell>
          <TableCell scope="col" border="bottom">
            Date
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {words.map((word) => (
          <TableRow key={word.word} color="red">
            <TableCell scope="row" color="red">
              <strong>{word.word}</strong>
            </TableCell>
            <TableCell>{word.meaning}</TableCell>
            <TableCell>{word.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MeaningTable;
