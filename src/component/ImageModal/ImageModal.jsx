import React, { useEffect, useState, useRef } from "react";

import Modal from "react-modal";

import styles from "./style.module.css";

function ImageCaptureModal({ open, handleModal }) {
  const [photo, setPhoto] = useState(null);
  console.log(photo);
  const videoRef = useRef(null);

  useEffect(() => {
    async function openFrontCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
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
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const capturedPhoto = canvas.toDataURL("image/jpeg");
    setPhoto(capturedPhoto);
    const base64WithoutPrefix = capturedPhoto.replace(/^data:[^;]+;base64,/, "");
    const blob = new Blob([atob(base64WithoutPrefix)], {
      type: "application/octet-stream",
    });
    const file = new File([blob], "card.png", {
      type: "application/octet-stream",
    });

    // Now you can use the 'file' as needed, for example, upload it to a server
    console.log("Converted file:", file);
  };
  return (
    <Modal
      ariaHideApp={false}
      isOpen={open}
      onRequestClose={handleModal}
      // style={customStyles}
      shouldCloseOnOverlayClick={false}
      // closeTimeoutMS={2000}

      contentLabel="Example Modal"
      className={{
        base: styles.modal_base ?? "",
        afterOpen: styles.modal_base_after_open ?? "",
        beforeClose: styles.modal_base_before_close ?? "",
      }}
      overlayClassName={{
        base: open ? styles.overlay_base : "",
        afterOpen: open ? styles.overlay_base_after_open : "",
        beforeClose: open ? styles.overlay_base_before_close : "",
      }}
    >
      <div>
        <h1>Front Camera Photo Capture</h1>
        <video ref={videoRef} autoPlay playsInline />
        <button onClick={capturePhoto}>Capture Photo</button>
        {photo && <img src={photo} alt="Captured" />}
      </div>
    </Modal>
  );
}

export default ImageCaptureModal;
