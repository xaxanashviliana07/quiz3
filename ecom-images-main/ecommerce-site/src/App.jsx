import { useState } from "react";
import Image from './images/img1b.jpg'
import Lightbox from "./components/Lightbox";

function App() {
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <>
      {showLightbox && (
        <Lightbox/>
      )}
      <img src={Image} onClick={() => setShowLightbox(true)}/>
    </>
  )
}

export default App;
