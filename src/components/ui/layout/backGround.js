import styled from 'styled-components'


const HeroWrapper =  styled.div `
  
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh; 
  display: flex;
  align-items: start;
  justify-content: center;
  border-bottom: 15px solid black;
  
  
  `; //filter: contrast(80%);


export default HeroWrapper;