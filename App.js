import React from "react";
import ReactDOM from "react-dom/client";

let Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Food Villa"
      src="https://tmlogosave.s3.ap-south-1.amazonaws.com/5653883.jpeg"
    />
  </a>
);

const Header = () => (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const Body = () => <h4>Body</h4>;

const Footer = () => <h4>Footer</h4>;

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
