import { getEpisodeNumber } from '../../helpers/getEpisodeNumber';
import { Character } from '../../types/types';
import { CardContainer, ContentContainer, Dot, ImageContainer, Information, Label, Name, StatusContainer } from './styled';

interface CardProps {
    character: Character
}

const Component = ({character}: CardProps) => {
    return (
      <CardContainer>
      <ImageContainer>
        <img src={character.img} alt={character.name}/>
      </ImageContainer>
      <ContentContainer>
        <Name>{character.name}</Name>
        <StatusContainer><Dot status={character.status}></Dot><span>{character.status}-{character.species}</span></StatusContainer>

        <Label>Last know location:</Label>
        <Information>{character.location}</Information>
        <Label>First seen in:</Label>
        <Information>{getEpisodeNumber(character.episode)}</Information>
      </ContentContainer>
      </CardContainer>
    );
  };
  
  export { Component as Card };
  export default Component;