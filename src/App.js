import React, { useState } from 'react';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import LoginForm from './components/LoginForm.js';
import Main from './components/Main.js';
import ShowCartItems from './components/ShowCartIems.js';
import data from './data';

function App() {


  const adminUser = {
    email: "admin@gmail.com",
    password: "admin123",
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");


  const Login = details => {

    if (details.username == adminUser.email && details.password == adminUser.password) {
      console.log('logedin');
      setUser({
        name: details.username,
        email: details.username
      });
      var removeClass = document.getElementById("LogoutButton");
      removeClass.classList.remove("d-none");

    } else {
      var addClass = document.getElementById("LogoutButton");
      addClass.classList.add("d-none");
      console.log('Details do not match!');
      setError("Details do not match!")
    }

  }

  const Logout = () => {
    setUser({ name: "", email: "" });
    var addClass = document.getElementById("LogoutButton");
    addClass.classList.add("d-none");
  }



  const { products } = data;


  const getDataFromLocatStrg = localStorage.getItem('userDeails');
  const localCartItems =JSON.parse(getDataFromLocatStrg);
  const getCurrentUserCartItems =localCartItems !=null ? localCartItems.filter((item) => item.userEmail === user.email ) : [];
  


  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);



//    console.log(cartItems);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1, userEmail: user.email } : x
        )
      );
      localStorage.setItem('userDeails', JSON.stringify(cartItems));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1, userEmail: user.email }]);
      localStorage.setItem('userDeails', JSON.stringify(cartItems));
    }
  };


  

  return (

    <div className="App">
      <Header Logout={Logout} />


      {(user.email != "") ? ( 
        
          <div className="row">
            <Main products={products} onAdd={onAdd} />

            <ShowCartItems getCurrentUserCartItems={getCurrentUserCartItems} />
          </div>

      ) : (
        <LoginForm Login={Login} error={error} />
      )};


      <Footer />
    </div>
  );
}

export default App;
