import React from "react";
import styled from 'styled-components';

const StylesCharacter = styled.li`
  width: 200px;
  border: 3px solid #333;
  border-radius: 5px;
  padding: 20px;
  list-style: none; 
  text-align: center;
  margin: 5px;
  box-shadow: .1px .1px 5px #000;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    border-bottom: 3px solid #333;
  }

  span {
    font-weight: bold;
  }
`;

const Character = props => {
  return (
    <StylesCharacter>
        <h2>{props.character.name}</h2>
        <p>Birth Year: <span>{props.character.birth_year}</span></p>
        <p>Height: <span>{props.character.height}</span></p>
        <p>Skin Color: <span>{props.character.skin_color}</span></p>
        <p>Eye Color: <span>{props.character.eye_color}</span></p>
        <p>Gender: <span>{props.character.gender}</span></p>
    </StylesCharacter>
  )
};

export default Character;
