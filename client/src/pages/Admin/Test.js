// import "./App.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from "react";

const Test = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000
  });

  const [targetText, setTargetText] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"); // target text to compare with
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
      Target Text: {targetText}
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
     Target Text: {targetText}
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
    Target Text: {targetText}
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
   Target Text: {targetText}
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
