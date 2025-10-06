import { useState } from 'react'
import './App.css'
import bowtie from './assets/bowtieImage.png'
import videoFile from './assets/video.mp4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <img src={bowtie} alt="Bowtie" style={{ width: '700px', height: 'auto', margin: '20px 0' }} />
      <div>
        <video 
          width="600" 
          autoPlay 
          loop 
          muted 
          style={{ borderRadius: '10px' }}  // optional styling
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default App
