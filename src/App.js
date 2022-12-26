import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Pricing from './Components/Pricing/Pricing';
import Rechart from './Components/Rechart/Rechart';
import PhoneBar from './Components/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
         <NavBar></NavBar>
      <h1 className='text-4xl font-bold underline'>Hello Tailwind Css</h1>
      <p>This is just a paragaraph </p>
     <Pricing/>
     <Rechart/>
     <PhoneBar/>
    </div>
  );
}

export default App;
