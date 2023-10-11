import React, { useState, useEffect, useRef } from "react";

function App() {
  const [photo, setPhoto] = useState(null);
  console.log(photo);
  const videoRef = useRef(null);

  useEffect(() => {
    async function openFrontCamera() {
      try {
        console.log("hiii")
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" }
        });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error("Error accessing the camera:", error);
      }
    }

    openFrontCamera();
  }, []);

  const capturePhoto = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas
      .getContext("2d")
      .drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const capturedPhoto = canvas.toDataURL("image/jpeg");
    setPhoto(capturedPhoto);
    const base64WithoutPrefix = capturedPhoto.replace(
      /^data:[^;]+;base64,/,
      ""
    );
    const blob = new Blob([atob(base64WithoutPrefix)], {
      type: "application/octet-stream"
    });
    const file = new File([blob], "card.png", {
      type: "application/octet-stream"
    });

    // Now you can use the 'file' as needed, for example, upload it to a server
    console.log("Converted file:", file);
  };

  return (
    <div>
      <h1>Front Camera Photo Capture</h1>
      <video ref={videoRef} autoPlay playsInline style={{border:"2px solid red"}}/>
      <button onClick={capturePhoto}>Capture Photo</button>
      {photo && <img src={photo} alt="Captured" />}
    </div>
  );
}

export default App;
