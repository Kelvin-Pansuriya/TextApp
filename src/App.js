import React, {useState} from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textapp from './components/Textapp';
import Popup from './components/Popup';

function App() {
  const [mode, setMode] = useState("Dark Mode")
  const [cssMode, setCssMode] = useState({
    color:"black",
    backgroundColor:"white"
  })

  const [popup, setPopup] = useState(null)

  function showPop(type,message){
    setPopup({
      type:type,
      msg:message
    })
    setTimeout(()=>{
      setPopup(null)
    },2000)
  }

  function toggleMode() {
    if(mode === "Dark Mode"){
      setCssMode({
        color:"white",
        backgroundColor:"black"
      })
      setMode("Light Mode")
      showPop("Success","Dark Mode Is On....")
    }
    else{
      setCssMode({
        color:"black",
        backgroundColor:"white"
      })
      setMode("Dark Mode")
      showPop("Success","Light Mode Is On....")
    }
  }

  return (
    <>
      <Navbar title="TextUtilities" fsLink="Home" ssLink="About" mode={mode} toggleMode={toggleMode} cssMode={cssMode} />
      <Popup popup={popup} cssMode={cssMode}/>
      <Textapp heading="Text - Application" textAreaHeading ="This Is Text-Area" cssMode={cssMode} showPop={showPop} />
      <About aboutHeading="This Is About Us Page...." cssMode={cssMode} />
    </>
  );
}

export default App;
