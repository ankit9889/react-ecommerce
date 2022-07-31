import { useState } from 'react';
import '../assets/css/product.css';


function Products(props) {


    const { product, onAdd } = props;
    

    const [cartItems, setCartItems] = useState([]);
    

    return (
        
        <div className="col">
            <div className="card h-100 shadow-sm">
                <img src={product.image} alt={product.name} className="card-img-top"  />
                <div className="card-body">
                    <div className="clearfix mb-3"><span className="float-start badge rounded-pill bg-primary">{product.name}</span> <span className="float-end price-hp">{product.price}&euro;</span></div>
                    <h5 className="card-title">
                        {product.name}
                    </h5>
                    <p>{product.description}</p>
                    <div className="text-center my-4">
                        <button onClick={() => { return onAdd(product) } } className="btn btn-warning">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
        
            
    );
}

export default Products;
