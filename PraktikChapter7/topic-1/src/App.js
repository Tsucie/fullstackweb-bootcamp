import { useState } from 'react';
import { Container } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

import Card from './components/Card';
import Count from './components/Count';

function App() {
  /* Declare state variable */
  const [count, setCount] = useState(0);
  const [logoDisplay, setLogoDisplay] = useState(logo);

  const handleClick = () => {
    let newCount = count++;
    setCount(newCount); // Set new value to state variable

    if (count % 2 === 0) {
      setLogoDisplay(logo); // Set new value to state variable
    } else {
      setLogoDisplay("https://placeimg.com/640/480/any");
    }
  };

  // Using the state variable in the return statement
  return (
    <div className="App">
      <header className="App-header">
        <Count count={count} logo={logoDisplay} handleClick={handleClick}>
          <h1>Hello World</h1>
          <p>lorem ipsum dolor sit amet.</p>
        </Count>
      </header>
      <Container className="mt-4">
        <Card
          title="Hello"
          description="Lorem ipsum dolor"
          btnText="Go Somewhere"
          btnHref="https://google.com"
          imgSrc="https://placeimg.com/640/480/any"
          imgAlt="Hello"
        />
      </Container>
    </div>
  );
}

export default App;
