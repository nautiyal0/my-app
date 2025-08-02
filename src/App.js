import React from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import About from './components/About'
import { useState } from 'react'
import Alert from './components/Alert'
// import {BrowserRouter , Routes,Route} from 'react-router-dom' 



const App = () => {



  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);


  }



  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#000f1aff'
      document.body.style.color='white'
      showAlert("DArk mode is enabled","success")
      document.title='TextUtils - Dark Mode'
    }
    else{
      setMode('light')
         document.body.style.backgroundColor='white'
      document.body.style.color='black'
       showAlert("Light mode is enabled","success") 
      document.title='TextUtils - Light Mode'}

  }

  return (
    <>
{/* <BrowserRouter> */}

<Navbar title="TextUtils" aboutText="About Us"  mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />

<div className="container my-5 ">

  {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />} />
          </Routes> */}

          <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />

</div>
  {/* </BrowserRouter> */}

    </>
  )
}

export default App
