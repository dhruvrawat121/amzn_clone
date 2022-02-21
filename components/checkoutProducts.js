import React from "react";
import Image from "next/Image"
import { addToBasket, removeFromBasket } from "../redux/basket";
import {useDispatch} from "react-redux"

function CheckoutProducts({ id, title, image, price, description }) {
    const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id, price, title,description, image
    }
    dispatch(addToBasket(product))
  }
  const removeItemFromBasket = () => {
   
    dispatch(removeFromBasket({id}))
  }
  return (
    <div className="grid grid-cols-5">
      <img src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-3">
        <p className="font-bold">{title}</p>
        <p>{price}GBP</p>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-center">
        <button onClick={ removeItemFromBasket}className="btn mt-2">Remove</button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
