import { Header, Input } from "./styled";

interface HeaderProps {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>
}

const Component = ({query, setQuery}: HeaderProps) => {
  return (
    <Header>
      <Input placeholder="Search a Character" type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
    </Header>
  );
};

export { Component as Header };
export default Component;
