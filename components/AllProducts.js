import React from 'react'
import Item from "../components/Item"

export default function AllProducts({ products }) {
    return <div>
        {products.map(({  id, description, title, price}) => (
            <Item key={id} title={title} desc={description} id={id} price={price}/>
      ))}
  </div>;
}
