import React from "react";
import Item from "../components/Item";

export default function AllProducts({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {products
        .slice(0, 4)
        .map(({ id, description, image, rating, title, price, category }) => (
          <Item
            key={id}
            title={title}
            description={description}
            image={image}
            price={price}
            category={category}
            rating={rating}
          />
        ))}
      <img className="md:col-span-full" src="https://links.papareact.com/dyz" />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, description, image, rating, title, price, category }) => (
            <Item
              key={id}
              title={title}
              description={description}
              image={image}
              price={price}
              category={category}
              rating={rating}
            />
          ))}
      </div>
      {products
        .slice(5,products.length)
        .map(({ id, description, image, rating, title, price, category }) => (
          <Item
            key={id}
            title={title}
            description={description}
            image={image}
            price={price}
            category={category}
            rating={rating}
          />
        ))}
    </div>
  );
}
