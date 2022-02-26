import React from "react";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../redux/basket";
import { useSelector } from "react-redux";
import CheckoutProducts from "../components/checkoutProducts";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();
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
              <CheckoutProducts
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                description={item.description}
              />,
            ])}
          </div>
        </div>

        {/* right side */}
        <div>
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                SubTotal {items.length} items :
                <span className="font-bold p-2">{total} GBP</span>
              </h2>
              <button className="btn">
                {!session ?"sign In to checkout" : "Proceed to Checkoout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
