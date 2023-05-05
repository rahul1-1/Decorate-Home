import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowLeft,FaArrowRight} from 'react-icons/fa'

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  const [index,setIndex] = useState(0)
  const setMainIndex = (ind) =>{
    if(ind>=images.length)
    {
      ind=0;
    }
    if(ind < 0)
    {
      ind=images.length-1;
    }
    setIndex(ind)
    // setMain(images[index])
  }
  useEffect(()=>{
    setMain(images[index])
  },[index])
  return (
    <Wrapper>
    <div className="slider">
    <FaArrowLeft className="arrow arrow-left" onClick={()=>setMainIndex(index-1)} />
    <img src={main.url} alt="main image" className="main" />
    <FaArrowRight  className="arrow arrow-right" onClick={()=>setMainIndex(index+1)} />
    </div>
     
      <div className="gallery">
        {images.map((image, ind) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={ind}
              onClick={() => setMainIndex(ind)}
              className={`${image.url === main.url?'active':null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .slider{
    position: relative;
    /* display: flex; */

  }
  .arrow{
    background-color: var(--clr-primary-8);
    height: 2rem;
    width: 2rem;
    padding: .5rem;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
  }
  .arrow-left{
    top: 50%;
  }
  .arrow-right{
    top: 50%;
    right: 0%;
  }
  .arrow:hover{
    background-color: var(--clr-primary-4); 
    height: 2.2rem;
    width: 2.2rem;
  }
  .active {
    box-shadow: 0px 0px 0px 2.5px var(--clr-primary-5); 
    border-radius: 15%;
    
    
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
