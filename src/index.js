import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu/>
      <Footer/>
      
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu(){
  const pizzas=pizzaData;
  const pizzaNum = pizzas.length;
  return(
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {
          pizzaNum >0 ? (
        pizzaData.map((pizza)=>
        (<Pizza pizzaObj={pizza} key={pizza.name}/>))
      ):<p>We are working on our menu come back later</p>
        }
      </ul>
      
    </main>
  )

}

function Pizza(props){
  return(
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
      <div >

      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      <span>{props.pizzaObj.price}</span>
      </div>

    </li>
  )
}
function Footer(){
  const hour = new Date().getHours()
  const openHour = 8;
  const closehour = 22;
  const isOpen= hour>=openHour && hour<=closehour

  return(
    <div className="footer">
      {isOpen && (
        <div className="order">
          <p>We are open until {closehour}:00. come and visit</p>
          <button className="btn">Order</button>
        </div>
      )
      
      }

    </div>
  )


}









// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
