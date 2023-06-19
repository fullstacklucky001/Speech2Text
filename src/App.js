import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  console.log(browserSupportsSpeechRecognition)
  console.log('listening=', listening)
  console.log('transcript=', transcript)
  console.log('resetTranscript=', resetTranscript)
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
}

export default App;