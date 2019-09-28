import React,{useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import DisplayInfo from './components/DisplayInfo.js';
import styled,{ keyframes } from 'styled-components';
import Pagination from './components/Pagination.js';

const Container = styled.div`
width: 98%;
display:flex;
border-box:box-sizing;
flex-wrap:wrap;
justify-content: space-evenly;
margin-top:20%;
`;
const rotate = keyframes`
from {
  
  transform: skew(0deg,30deg);
}
to {
 
  transform: skew(30deg, 0deg);

}`;
const Header =styled.h1`{
  animation: ${rotate} infinite 30s linear;
  text-align:center;
  margin:2% auto;
  color:white;
  
  text-shadow: 3px 3px 3px blue,
                3px 3px 3px blue, 
                3px 3px 3px  blue;
  position:absolute;
  top:12px;
  left:200px
}`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);
  const [currentPage,setCurrentPage]= useState(1);
  const [postPerPage] = useState(3);

   useEffect(() => {
  axios
  .get(`https://swapi.co/api/people/`)
  .then(response => {
    const characters = response.data.results;
    console.log(response.data.results);
    setPeople(characters);
    
  })
  .catch(error => {
    console.log("Sorry no people", error);
  });
 },[]);

 const indexOfLastPost = currentPage*postPerPage;
 const indexOfFirstPost = indexOfLastPost - postPerPage;
 const currentPeople = people.slice(indexOfFirstPost ,indexOfLastPost);

 const paginate = (pageNumber)=> setCurrentPage(pageNumber);

  return (
    <div>
    <Header>
      <p>React Wars</p>
      <p>StarWars Characters</p>
    </Header>
    <Container>
      
      {currentPeople.map((person,index) => {
          return <DisplayInfo key={index} character={person} />;
        })}
    </Container>
    <Pagination postsPerPage={postPerPage} totalPosts={people.length}
                paginate = {paginate}>
    </Pagination>
      
    </div>
  );
}

export default App;
