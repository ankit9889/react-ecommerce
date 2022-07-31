import React from 'react';
import Products from './Products.js';

export default function Main(props) {
  const { products, onAdd } = props;
  return (

    <main>
        <div className="container-fluid bg-trasparent my-4 p-3"  >
            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                {products.map((product) => (
                <Products key={product.id} product={product} onAdd={onAdd} ></Products>
                ))}
            </div>
        </div>
    </main>
  );
}