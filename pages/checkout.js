import React from "react";
import Header from "../components/Header";
import {selectItems} from "../redux/basket"
import { useSelector } from "react-redux";
import CheckoutProducts from "../components/checkoutProducts"


export default function Checkout() {

  const items = useSelector(selectItems)
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left side */}
        <div className="flex-grow shadow-sm m-5">
          <img
            src="https://links.papareact.com/ikj"
            width={1080}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "your amazon basket empty"
                : "Shopping Basket"}
            </h1>
            {items.map((item, i) => [
              <CheckoutProducts key={i} id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                description={item.description}
              />
              
            ])}
          </div>
        </div>

        {/* right side */}
      </main>
    </div>
  );
}
