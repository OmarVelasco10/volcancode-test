import { Character } from "../../types/types";
import { Card } from "../Card";
import { Header } from "../Header";
import { Main } from "./styled";

interface BoardProps {
  characters: Character[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

const Component = ({ characters,query, setQuery }: BoardProps) => {
  return (
    <>
      <Header query={query} setQuery={setQuery}/>
      <Main>
        {
            characters.map((character: Character) => (
                <Card key={`${character.name}-${character.id}`} character={character}/>
            ))
        }
      </Main>
    </>
  );
};

export { Component as Board };
export default Component;
