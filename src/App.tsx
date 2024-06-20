import React, { useState } from "react";
import "./App.css";

// Function to find the longest common prefix among an array of strings
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) {
        return "";
      }
    }
  }

  return prefix;
}

const App: React.FC = () => {
  const [inputStrings, setInputStrings] = useState<string[]>([]);
  const [commonPrefix, setCommonPrefix] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    const lines = inputValue
      .split("\n")
      .map((line) => line.trim().toLowerCase());

    const validatedLines = lines.filter(
      (line) => 0 <= line.length && line.length <= 200
    );

    setInputStrings(validatedLines);
  };

  const findLongestCommonPrefix = () => {
    const prefix = longestCommonPrefix(inputStrings);
    setCommonPrefix(prefix);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Longest Common Prefix Finder</h1>
        <p>ใส่ข้อความโดยแบ่งข้อความละ 1 บรรทัด</p>
        <textarea
          rows={5}
          cols={50}
          value={inputStrings.join("\n")}
          onChange={handleInputChange}
          placeholder="Enter strings here..."
        />
        <br />
        <button onClick={findLongestCommonPrefix}>
          Find Longest Common Prefix
        </button>
        <br />
        {commonPrefix && <p>Longest Common Prefix: {commonPrefix}</p>}
      </header>
    </div>
  );
};

export default App;
