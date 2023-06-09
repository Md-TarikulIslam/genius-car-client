import React from "react";
import './BannerItem.css'

const BannerItem = ({ item }) => {
  const { image, prev, next, id } = item;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full rounded-xl" alt=""/>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br />
          Price for Car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform w-2/5 -translate-y-1/2 left-24 top-1/2">
        <p className="text-white text-xl ">
          There Are Many Variations of Passages Of Available, But The Majority
          Have Suffered Alteration in Some Form
        </p>
      </div>
      <div className="absolute flex justify-start transform w-2/5 -translate-y-1/2 left-24 top-3/4">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Button</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
