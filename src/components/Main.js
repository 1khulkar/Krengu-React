import React, { Component } from 'react';
import './main.css'

class Main extends Component {
    render() {
        return (
            <div className="main">
<div className='container'>
    <div class="main_top d-flex justify-content-between">
<img src="images/Group 13.jpg" alt="error" />
<div class="main_top-right">
    <h3 class="main-h3">Our Sound <br /> Made for You</h3>
    <p class="main-p">Relax, and enjoy your music with our sound. Its totaily <br />
        perfect for you. Select your device and rock it!</p>
</div>
    </div>
    <div class="main_bottom d-flex justify-content-between">
        <div class="main_bottom-left">
        <h3 class="main-h3">Our Latest <br /> Stuff</h3>
        <p class="main-p">Wide range of sounds products and all <br /> are handpicker andfor you to see.</p>
      <button class="main_btn">See more</button>
    </div>
    <div class="main_bottom-right ">
        <div class="boxes d-flex justify-content-between">
            <div class="box">
        <img src="images/image 6 (1).jpg" alt="error" className="box-img" />
        <h6 class="box-title">Jabra Move Matte Gold</h6>
        <p class="box-name">Headphone</p>
             </div>
            <div class="box">
        <img src="images/kisspng-noise-cancelling-headphones-beats-electronics-wire-headphone-5a735422334681 1.jpg" alt="error" className="box-img" />
        <h6 class="box-title">Jabra Move Matte Gold</h6>
        <p class="box-name">Headphone</p>
             </div>
            <div class="box">
        <img src="images/kisspng-headphones-digital-data-headset-yellow-headphones-5a70a8db7b8331 1 (1).jpg" alt="error" className="box-img" />
        <h6 class="box-title">Jabra Move Matte Gold</h6>
        <p class="box-name">Headphone</p>
             </div>
        </div>
    </div>
    </div>
<div class="wireless d-flex justify-content-between">
   <img src="images/Subtract.png" alt="error" className="shape_2" />
    <div class="wireless-left">
   <div class="wireless-boxes d-flex">
    <div class="wireless-box">
         <img src="images/image 8.png" alt="error" className="wireless-img" />
        <h6 class="wireless-title">JBL Tune 220</h6>
        <p class="wireless-name">True Wireless</p>
    </div>
    <div class="wireless-box">
         <img src="images/image 9.png" alt="error" className="wireless-img" />
        <h6 class="wireless-title">JBL Tune 220</h6>
        <p class="wireless-name">True Wireless</p>
    </div>
    <img src="images/Group 20.png" alt="error" className='wireless-img-right' />
   </div>
    </div>
    <div class="wireless-right">
        <h3 class="main-h3">Popular <br /> This Week</h3>
        <p class="main-p">Weekly popular handpick for yoiu. there are various <br /> product from a big vedor. Somethin specials come in <br /> every week with ap perfect goods</p>
        <button class="main_btn">See more</button>
    </div>
</div>
<div class="hear">
    <h4 class="hear-h4">Hear What <br /> They Heard</h4>
    <p class="hear-p">Glad to know they hear, we work for you and wi provide te oe and <br /> only stuff for your sound stuff. Enjoy your music, and happy that.</p>
</div>
<img src="images/Group 26.png" alt="error" className="slider-yellow" />
<div class="job">
    <div class="job-boxes d-flex justify-content-between">
        <div class="job-box">
            <div class="job-title d-flex">
    <img className='job-img' src="images/unsplash_C8Ta0gwPbQg.png" alt="error" />
    <div class="job-name">Abbos Janizakov <span class="job-type d-flex">Teacher</span></div>
            </div>
<p class="job-p">Lorem ipsum dolor sit adipiscing elit. Commodo sapien, pretium. Id vel in massa nisl sed pellentesque. </p>
    </div>
        <div class="job-box">
            <div class="job-title d-flex">
    <img className='job-img' src="images/unsplash_mEZ3PoFGs_k.png" alt="error" />
    <div class="job-name">Angella<span class="job-type d-flex">Student</span></div>
            </div>
<p class="job-p">Lorem ipsum dolor sit adipiscing elit. Commodo sapien, pretium. Id vel in massa nisl sed pellentesque. </p>
    </div>
    <img src="images/Group 25.png" alt="error" className='job-img-ic' />
</div>
</div>
<div class="registr d-flex justify-content-between">
    <div class="registr-left">
  <img className='registr-img' src="images/image 10.png" alt="error" />
  <img className='registr-img-1' src="images/Mask group.png" alt="error" />
    </div>
    <div class="registr-right">
   <h3 class="registr-title">Join Our <br/> Newsletter</h3>
   <p class="registr-p">Just insert your email into the fieldbelow, And you <br /> will get the updates about our stuff.</p>
   <div class="registr-form d-flex">
    <input className='email' type="email" placeholder='Your e-mail' />
    <div class="subscribe-btn d-flex justify-content-center align-items-center">
    <a class="regisrt-btn" >Subscribe</a>
</div>
</div>
</div>
</div>
</div>
</div>
        );
    }
}

export default Main;