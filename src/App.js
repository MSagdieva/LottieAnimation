import logo from './logo.svg';
import './App.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function App() {
  return (
    <div className="App">
    <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/packages/lf20_7x45GFUqeu.json"
        style={{ height: '500px', width: '500px' }}
      >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
  </Player>
    </div>
  );
}

export default App;
