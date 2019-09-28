import React,{useEffect, useState} from 'react';
import styled from 'styled-components';

const Navigation = styled.nav`
display:flex;
justify-content:center;
`
const Atag = styled.a`
color:white;
width:100px;
padding:10px 10px;
`
const Pagination = ({postsPerPage,totalPosts,paginate}) =>{
   const pageNumbers=[];

   for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++) {
       pageNumbers.push(i);
   }

    return (
      <Navigation>
          
            {pageNumbers.map(number =>(
                <nav key={number}>
                 <Atag href="!#" onClick ={()=>paginate(number)}>
                     <strong>page{number}</strong>  
                 </Atag>
                 </nav>))}

              
         
      </Navigation>
    )
};


export default Pagination;