import { useState } from "react";
import ImageCaptureModal from "./component/ImageModal/ImageModal";
import Procuct from "./component/Product/Procuct";
import Popup from "./component/Product_popup/Popup";

function App() {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <div>This is for image capture</div>
      <button onClick={handleModal}>Scan card</button>
      {/* <Procuct/> */}
      {/*  <Popup/>*/}
      <ImageCaptureModal open={open} handleModal={handleModal} />
    </div>
  );
}

export default App;
