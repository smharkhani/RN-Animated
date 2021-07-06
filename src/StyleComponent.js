import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';

export const StyleComponent = () => {
    return (
        <Container>
            <Texts> Hello </Texts>
            <Texts>Good</Texts>
        </Container>
    )
}
const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const Texts = styled.Text`
  font-size: 25px;
  color: blue;
  font-weight: 500;
`;


// const Container = styled.View`
//   width: 100%;
//   padding: 0 24px;
//   background-color: ${({theme}) => theme.background};

//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   flex-wrap: wrap;

//   ${({theme: {isDesktop}}) =>
//     isDesktop &&
//     css`
//       flex-direction: row;
//       align-items: center;
//       justify-content: space-between;
//     `}
// `;
