import React from 'react';
import styled from 'styled-components';
import {media} from '../utils/media';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: auto; 
   width: 60%;
   min-height: 80vh;
   margin-top: 50px;
   font-size: 20px;
   font-family: 'Ubuntu', sans-serif;
   //border: 2px solid #5e35b1 ;
   border-radius: 5px;
  ${
      media.handheld`
      width:100%;`
  }
`

export const Main = (props) => {
    return (
        <Container>
            <h3>Thank You</h3>
            <p>All the quotes are taken from the <br />
                <a style={{color: "#5e35b1" , textDecoration:"none"}} href="https://www.brainyquote.com/">Brainy Quote</a>
            </p>
            <br />
            <p></p>
        </Container>   
    )
}