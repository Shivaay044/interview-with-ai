import React from 'react';







const QuestionSpeaker =  ({ responses }) => {

  return (
    <div>
      <p>Say "Complete Ai" to hear next Question</p>
      <ul>
        {responses?.map((response, index) => (
          <li key={index}>{response}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionSpeaker;
