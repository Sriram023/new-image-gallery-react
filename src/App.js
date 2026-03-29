import React from "react";
import ImageCard from "./components/ImageCard";
import images from "./data/images";
import "./style.css";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Image Gallery</h1>

      <div className="gallery">
        {images.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </>
  );
}

export default App;