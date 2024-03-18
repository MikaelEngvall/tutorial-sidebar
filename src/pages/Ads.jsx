import React from "react";
import pdfFile from "./Mikael_Engvall.pdf";

const Ads = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <iframe
        src={pdfFile}
        width="600px"
        height="600px"
        style={{ border: "none" }}
        title="PDF in an iFrame"
      ></iframe>
    </div>
  );
};

export default Ads;
