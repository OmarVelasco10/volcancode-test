import { useEffect, useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { Character } from './types/types';
import { fetchCharacters } from "./api/fetchCharacters";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchAllCharacters = async () => {
      const allCharacters: Character[] = await fetchCharacters();
      setCharacters(allCharacters);
    };
    console.log(characters);
    fetchAllCharacters();
  }, []);

  const filteredCharacters = characters.filter((character: Character) => {
    return character.name.toLowerCase().match(query.toLowerCase());
  });

  return (
    <div className="App">
      <Board characters={filteredCharacters} query={query} setQuery={setQuery}/>
    </div>
  );
}

export default App;
