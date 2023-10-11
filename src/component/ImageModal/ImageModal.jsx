import React, { useEffect, useState, useRef } from "react";

import Modal from "react-modal";

import styles from "./style.module.css";

function ImageCaptureModal({ open, handleModal }) {
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
        <div>
          <video ref={videoRef} autoPlay playsInline />
        </div>
        <div>
          <div onClick={handleModal}>X</div>
          <div>Camera</div>
        </div>
      </div>
    </Modal>
  );
}

export default ImageCaptureModal;
