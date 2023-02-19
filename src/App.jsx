import { useState } from "react";
import { Container, Title, Number, Div } from "./index.js";
import { Button } from "./components/Button";
function App() {
  const [number, setNumber] = useState(0);

  return (
    <Container>
      <Div>
        <Title>Counter</Title>
      </Div>
      <Div>
        <Number>{number >= 100? `${number} Still clicking?`: ` ${number}`}</Number>
      </Div>
      <Div>
        <Button onClick={() => setNumber((prevNumber) => prevNumber - 1)}>-</Button>
        <Button onClick={() => setNumber((prevNumber) => prevNumber + 1)}>+</Button>
      </Div>
    </Container>
  );
}

export default App;
