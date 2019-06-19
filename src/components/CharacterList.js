import React from "react";
import styled from 'styled-components';

import Character from "./Character";

const StylesCharacterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const CharacterList = props => {
  return (
    <StylesCharacterList>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </StylesCharacterList>
  );
};

export default CharacterList;
