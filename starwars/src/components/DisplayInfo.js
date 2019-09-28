import React from 'react';
import './StarWars.css';
import styled from 'styled-components';


const CharacterCard = styled.div`
width:300px;
color:navy;
border: 2px solid navy;
box-shadow: 2px 5px grey;
margin:2% ;
padding:2%;
background-color:white;
`;

export default function DisplayInfo(props) {
    

  return <CharacterCard>
            
                <p><strong>Name:</strong> {props.character.name}</p>
                <p><strong>Birth Year:</strong> {props.character.birth_year}</p>
                <p><strong>Gender:</strong> {props.character.gender}</p>
                <p><strong>url:</strong> <a href={props.character.url}>{props.character.url}</a></p>                 
            
        </CharacterCard>

  
};