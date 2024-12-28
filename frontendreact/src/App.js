import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian/Accordian';
import ToggleDisplay from './components/hideshow/ToggleDisplay';
import Randomcolor from './components/Randomcolor/Randomcolor';
import StarRating from './components/StarRating/StarRating';
import menus from './components/Treeview/treedata';


import ImageGeneration from './components/imagegenearion/ImageGeneration';
import LoadMore from './components/Loadmoredata/LoadMore';
import Treeview from './components/Treeview/Treeview';
import Qrcode from './components/Qrcode/Qrcode';
import Darklightmode from './components/Darklight/Darklightmode';

function App() {
  return (
    <div className="App">
     
     {/* <Accordian/> */}
     {/* <ToggleDisplay/> */}
     {/* <Randomcolor/> */}
     <StarRating stars={10}/>
{/* <ImageGeneration url={"https://picsum.photos/v2/list"} page={1} limit={10}/> */}
{/* <LoadMore/> */}
{/* <Treeview menus={menus}/> */}
{/* <Qrcode/> */}
{/* <Darklightmode/> */}
    </div>
  );
}

export default App;
