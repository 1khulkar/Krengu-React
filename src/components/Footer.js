import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div>
    <div class="container">
        <div class="footer d-flex justify-content-between">
            <div class="footer-left">
                <img src="images/logo_footer.png" alt="error" />
                <p class="footer-left-p">Hear what you wanna hear <br /> with our stuff</p>
                <img src="images/Group 38.png" alt="error" />
            </div>
            <div class="footer-right">
<div class="footer-sections d-flex justify-content-between">
    <ul class="footer-section">
        <h6>More</h6>
    <li class="footer-item"> <a class="footer-link" href="#">FAQ</a></li>
    <li class="footer-item"> <a class="footer-link" href="#">Contact US</a></li>
</ul>
    <ul class="footer-section">
        <h6>Products</h6>
    <li class="footer-item"> <a class="footer-link" href="#">True Wirelles</a></li>
    <li class="footer-item"> <a class="footer-link" href="#">Speaker</a></li>
    <li class="footer-item"> <a class="footer-link" href="#">Condensor</a></li>
    <li class="footer-item"> <a class="footer-link" href="#">Microphone</a></li>
    <li class="footer-item"> <a class="footer-link" href="#">Headphone</a></li>
</ul>
    <ul class="footer-section">
        <h6>Company</h6>
    <li class="footer-item"> <a class="footer-link" href="#">About</a></li>
    <li class="footer-item"> <a class="footer-link" href="#">Terms</a></li>
    <li class="footer-item"> <a class="footer-link" href="#">Privacy Policy</a></li>
    <li class="footer-item"> <a class="footer-link" href="#">Careers</a></li>
</ul>

</div>
            </div>
        </div>
    </div>
            </div>
        );
    }
}

export default Footer;