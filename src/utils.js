// write a function to add word meaning and date to local storage

export function addWord(word, meaning, date) {
  // word should be added to the list of words in local storage
  const words = JSON.parse(localStorage.getItem("words"));
  // if words is null, set it to an empty array
  if (!words) {
    localStorage.setItem(
      "words",
      JSON.stringify([{ word, meaning, date, key: 1 }])
    );
    return;
  }

  const key = words.length + 1;
  // based on the length of the words array, set the key of the new word
  words.push({ word, meaning, date, key });
  localStorage.setItem("words", JSON.stringify(words));
}

export function deleteWord(key) {
  // delete the word from local storage
  const words = JSON.parse(localStorage.getItem("words"));
  const filteredWords = words.filter((word) => word.key !== key);
  localStorage.setItem("words", JSON.stringify(filteredWords));
}

export function getWords() {
  // return the list of words from local storage
  const allWords = JSON.parse(localStorage.getItem("words"));
  // sort the words by date such that the latest word is at the top
  if (!allWords) {
    return [];
  }
  const sortedWords = allWords.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });
  return sortedWords;
}

export const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();

  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
};
