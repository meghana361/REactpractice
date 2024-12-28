import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";
const ImageGeneration = ({ url, limit, page }) => {
  const [images, setImages] = useState([]);
  const [currentslide, setCurrentslide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchimages = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
      console.log(data);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };
  console.log(images);
  useEffect(() => {
    fetchimages();
    console.log("rendered");
    
  },[url]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }
  const handlePrevious = () => {
    setCurrentslide(currentslide === 0 ? images.length - 1 : currentslide - 1);
  };
  const handleNext = () => {
    setCurrentslide(currentslide === images.length - 1 ? 0 : currentslide + 1);
  };

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => {
            return (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                width={"500px"}
                height={"400px"}
                className={
                  currentslide === index
                    ? "showcurrentimage"
                    : "hidenotcurrentimage" //hide all other images
                }
              />
            );
          })
        : null}
      <BsArrowRightCircleFill onClick={handleNext} 
         className="arrow arrow-right"
      />
      <span className="circles">
        {images && images.length
          ? images.map((_,index) => {
              return <button
                key={index}
                className={
                  currentslide === index ? "currentcircle" : "notcurrentcirlce"
                }
                onClick={() => setCurrentslide(index)}
              />;
          })
          : null}
      </span>
    </div>
  );
};

export default ImageGeneration;
