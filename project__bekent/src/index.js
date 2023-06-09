import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import { ChakraProvider } from '@chakra-ui/react';
import Header from './header/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Header/>
  </ChakraProvider>
)