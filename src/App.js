import { Container, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [ questionAnswer, setQuestionAnswer ] = useState('What\'s your Career Goal?');

  const getAnswer = () => {
    setQuestionAnswer('Full Stack developer')
  }
  return (
    <Container align='center'>
	    <Heading as='h1' my='30px'>Question & Answer</Heading>
        <Heading fontSize='24px'>{ questionAnswer }</Heading>
      <Button mt='20px' onClick={getAnswer} bg='teal'>Get the Answer</Button>
    </Container>
  );
}

export default App;