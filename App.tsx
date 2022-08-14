import * as React from 'react';
import './style.css';
import { ChakraProvider } from '@chakra-ui/react';

import Something from './Something';

export default function App() {
  return (
    <ChakraProvider>
      <div>
        <h1>App</h1>
        <Something />
      </div>
    </ChakraProvider>
  );
}
