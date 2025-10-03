import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import {Link} from 'react-router-dom';
import React from 'react';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    
    {/*Navigation Bar starts*/}
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">MyShopBuddy<i class="fa-solid fa-cart-plus"></i></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Categories
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Accessories</a></li>
                      <li><a className="dropdown-item" href="#">Computers</a></li>
                      <li><a className="dropdown-item" href="#">Clothings</a></li>
                      <li><a className="dropdown-item" href="#">Utensils</a></li>
                      <li><a className="dropdown-item" href="#">Foodstufs</a></li>
                      <li><a className="dropdown-item" href="#">Tvs</a></li>
                      <li><hr className="dropdown-divider"  /></li>
                      <li><a className="dropdown-item" href="#">My Acconts</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
      </nav>
    {/*Navigation Bar ends*/}
   
    <Routes>
      <Route exact path='/' Component={HomePage}/>
      <Route exact path='products/:productId' Component={ProductDetails}/>
    </Routes>
    
    </Router>
  );
}

export default App;
