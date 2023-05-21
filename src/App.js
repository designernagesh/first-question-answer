import { useState } from "react";

function App() {
  const [ questionAnswer, setQuestionAnswer ] = useState('What\'s your Career Goal?');

  const getAnswer = () => {
    setQuestionAnswer('Full Stack developer')
  }
  return (
    <div>
	<h1>Question & Answer</h1>
      <h2>{ questionAnswer }</h2>
      <button onClick={getAnswer}>Get the Answer</button>
    </div>
  );
}

export default App;
