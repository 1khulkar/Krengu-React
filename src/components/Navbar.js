import React, {Component, Fragment} from 'react';
import './navbar.css';

class Navbar extends Component {
    render() {
        return(
      <div>
    <img src="images/Banner.jpg" className='shape shape_1' alt="error" />
    <div class="top">
        <nav class="navbar navbar-expand-md ">
            <div class="container">
                <a href="#" class="navbar-brand"> <img src="images/logo.png" alt="error" /></a>
                <div class="navbar-nav-one">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="#" class="nav-link">Shop</a>
                        </li>
                        <li class="nav-item"> 
                            <a href="#" class="nav-link">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Contact</a>
                        </li>
                        <li class="nav-item"> 
                            <a href="#" class="nav-link">About</a>
                        </li>
                    </ul>
                </div>
                <div class="navbar-nav-two">
                    <img src="images/search (1).png" alt="error" />
                    <img src="images/shopping-bag (1).png" alt="error" className='navbar-nav-img'/>
                </div>
            </div>
        </nav>

        <header>
    <div class="container">
        <div class="header-title">
        <h1 class="header-h1">Perfect Sound 
            Immersive World</h1>
            <p class="header-p">Beats by Erkaboy Pro</p>
            <p class="header-select">Select your colors:</p>
            <div class="colors">
                <div class="color1"></div>
                <div class="color2"></div>
                <div class="color3"></div>
                <div class="color4"></div>
                <img src="images/Group 4.png" alt="error" className='color-img'/>
            </div>
            <div class="price">
                <h5 class="dol-h5">$413<span class="dol-span">.00</span></h5>
                <button class="header-btn">Buy now</button>
            </div>
            <div class="distribute d-flex align-items-center">
            <div class="distribute-left d-flex align-items-center">
                <img src="images/truck.png" alt="error" className='distribute-img' />
                <p>Free US Shipping</p>
            </div>
            <div class="distribute-right d-flex align-items-center">
                <img src="images/tag.png" alt="error" className='distribute-img'/>
                <p>Now Save over 33%</p>
            </div>
            </div>
        </div>
    </div>
    </header>
    </div>
      </div>
        );
    }
}

export default Navbar;