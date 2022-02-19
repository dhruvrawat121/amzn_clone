import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import {addToBasket} from "../redux/basket"
const MAX_RATING = 5;
const MIN_RATING = 1;
export default function Item({
  id,
  description,
  image,
  title,
  price,
  rating,
  category,
}) {
  const dispatch = useDispatch();

  const [Rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const addItemToBasket = () => {
    const product = {
      id,
      description,
      image,
      title,
      price,
      rating,
      category,
    };
    dispatch(addToBasket(product));
  };

  return (
    <div
      className="relative flex flex-col m-5 bg-white z-30 p-10 m-3 rounded-md items-center h-auto"
      id={id}
    >
      <p className="absolute top-2 right-2 text-xs italic text-gray-500">
        {category}
      </p>
      <img
        src={image}
        alt={description}
        width={200}
        height={300}
        loading="lazy"
        objectfit="contain"
        className="w-25 h-30"
      />
      <h4>{title}</h4>
      <div className="flex">
        {Array(Rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 clamp-2">{description}</p>
      <p>{price} GBP</p>
      <button onClick={addItemToBasket} className="btn mt-2">
        Add to basket
      </button>
    </div>
  );
}
