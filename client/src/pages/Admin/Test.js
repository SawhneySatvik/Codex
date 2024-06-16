// import "./App.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from "react";

const Test = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000
  });

  const [targetText, setTargetText] = useState("A 9-year-old boy looks down and his pants are wet and there is a puddle between his legs; he has peed his pants. This is an awful situation for any person to be in, but just when he thought this was the worst day in his life, Susie slips and spills a fish bowl of water right in the boy's lap. The boy is so happy that no one noticed before the water got spilt on him. The teacher rushes him to the nurse because his pants are soaked in fish water, his friends feel bad for him, and Susie whispers to him, 'I've wet my pants too.' This shows kids that we all have bad days and it is important to remember to have empathy at all times."); // target text to compare with
  const [correctness, setCorrectness] = useState(0); // percentage correctness

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

  const { transcript, browserSupportsSpeechRecognition,  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  const calculateCorrectness = () => {
    const targetArray = targetText.split(" ");
    const transcriptArray = transcript.split(" ");
    const correctWords = targetArray.filter((word, index) => word === transcriptArray[index]);
    const correctnessPercentage = (correctWords.length / targetArray.length) * 100;
    setCorrectness(correctnessPercentage.toFixed(2));
  };

  return (
    <>
    
     <div className="container" style={{ margin: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
     <h1>STORY</h1>
     <br />
     {/* <p>A React hook that converts speech from the microphone to text and makes it available to your React components.</p> */}

     <div className="main-content" onClick={() => setTextToCopy(transcript)}>
       {transcript}
     </div>

     <div className="btn-style">
       <button onClick={setCopied} style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
         {isCopied? 'Copied!' : 'Copy to clipboard'}
       </button>
       <button onClick={startListening} style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
         Start Listening
       </button>
       <button onClick={SpeechRecognition.stopListening} style={{ backgroundColor: '#f44336', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
         Stop Listening
       </button>
       <button onClick={calculateCorrectness} style={{ backgroundColor: '#2196F3', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
         Calculate Correctness
       </button>
     </div>
     <br />
     <p>
       Target Text: {targetText}
     </p>
     <br />
     <p>
       Correctness: {correctness}%
     </p>

   </div>
    <div className="container" style={{ margin: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
    <h1>PARAGRAPH</h1>
    <br />
    {/* <p>A React hook that converts speech from the microphone to text and makes it available to your React components.</p> */}

    <div className="main-content" onClick={() => setTextToCopy(transcript)}>
      {transcript}
    </div>

    <div className="btn-style">
      <button onClick={setCopied} style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        {isCopied? 'Copied!' : 'Copy to clipboard'}
      </button>
      <button onClick={startListening} style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
        Start Listening
      </button>
      <button onClick={SpeechRecognition.stopListening} style={{ backgroundColor: '#f44336', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
        Stop Listening
      </button>
      <button onClick={calculateCorrectness} style={{ backgroundColor: '#2196F3', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
        Calculate Correctness
      </button>
    </div>
    <br />
    <p>
      Target Text: Discipline is one such trait

that requires a set of rules,

behavioral patterns and

paradigm. If you bring

together these aspects, you

get a balanced life. To lead

a happy and fulfilling life,

one must have a sense of

control over their actions

and emotions.
    </p>
    <br />
    <p>
      Correctness: {correctness}%
    </p>

  </div>
   <div className="container" style={{ margin: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
   <h1>LINE</h1>
   <br />
   {/* <p>A React hook that converts speech from the microphone to text and makes it available to your React components.</p> */}

   <div className="main-content" onClick={() => setTextToCopy(transcript)}>
     {transcript}
   </div>

   <div className="btn-style">
     <button onClick={setCopied} style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
       {isCopied? 'Copied!' : 'Copy to clipboard'}
     </button>
     <button onClick={startListening} style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
       Start Listening
     </button>
     <button onClick={SpeechRecognition.stopListening} style={{ backgroundColor: '#f44336', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
       Stop Listening
     </button>
     <button onClick={calculateCorrectness} style={{ backgroundColor: '#2196F3', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
       Calculate Correctness
     </button>
   </div>
   <br />
   <p>
     Target Text: Honesty is the best policy
   </p>
   <br />
   <p>
     Correctness: {correctness}%
   </p>

 </div>
  <div className="container" style={{ margin: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
  <h1>WORD</h1>
  <br />
  {/* <p>A React hook that converts speech from the microphone to text and makes it available to your React components.</p> */}

  <div className="main-content" onClick={() => setTextToCopy(transcript)}>
    {transcript}
  </div>

  <div className="btn-style">
    <button onClick={setCopied} style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      {isCopied? 'Copied!' : 'Copy to clipboard'}
    </button>
    <button onClick={startListening} style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
      Start Listening
    </button>
    <button onClick={SpeechRecognition.stopListening} style={{ backgroundColor: '#f44336', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
      Stop Listening
    </button>
    <button onClick={calculateCorrectness} style={{ backgroundColor: '#2196F3', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
      Calculate Correctness
    </button>
  </div>
  <br />
  <p>
    Target Text: bat
  </p>
  <br />
  <p>
    Correctness: {correctness}%
  </p>

</div>
 <div className="container" style={{ margin: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
 <h1>LETTER</h1>
 <br />
 {/* <p>A React hook that converts speech from the microphone to text and makes it available to your React components.</p> */}

 <div className="main-content" onClick={() => setTextToCopy(transcript)}>
   {transcript}
 </div>

 <div className="btn-style">
   <button onClick={setCopied} style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
     {isCopied? 'Copied!' : 'Copy to clipboard'}
   </button>
   <button onClick={startListening} style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
     Start Listening
   </button>
   <button onClick={SpeechRecognition.stopListening} style={{ backgroundColor: '#f44336', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
     Stop Listening
   </button>
   <button onClick={calculateCorrectness} style={{ backgroundColor: '#2196F3', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>
     Calculate Correctness
   </button>
 </div>
 <br />
 <p>
   Target Text: A
 </p>
 <br />
 <p>
   Correctness: {correctness}%
 </p>

</div>
</>

  );
};

export default Test;
