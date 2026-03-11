
// import React from "react";
// import "./App.css";
// import { motion } from "framer-motion";
// import { FaHeart } from "react-icons/fa";

// import img0 from "./Aanchal1.jpeg";
// import img1 from "./Aachu1.jpeg";
// import img2 from "./Aachu2.jpeg";
// import img3 from "./Aachu3.jpeg";
// import img4 from "./Aachu4.jpeg";
// import img5 from "./Aachu5.jpeg";
// import img6 from "./Aachu6.jpeg";
// import img7 from "./Aachu7.jpeg";
// import img8 from "./Aachu8.jpeg";

// function App() {

// const lovePoints = [
// "Your smile that brightens my day",
// "The support you always prvoide me",
// "The way you make simple moments special",
// "Your beautiful eyes,lips and everything related to you",
// "Your laughter that feels like happiness",
// "The comfort I feel when I talk to you",
// "Your each and every effort to make me happy",
// "Also tmhara daily daily ka 'created dukh' 😉 "
// ];

// return (
// <div className="container">

// {/* NAVBAR */}

// <nav className="navbar">

// <div className="logo">
// <FaHeart className="nav-heart"/> Aanchal
// </div>

// <ul>
// <li><a href="#home">Home</a></li>
// <li><a href="#about">About</a></li>
// <li><a href="#gallery">Gallery</a></li>
// <li><a href="#love">Love</a></li>
// <li><a href="#message">Message</a></li>
// </ul>

// </nav>


// {/* floating hearts */}
// <div className="hearts">
// <FaHeart/>
// <FaHeart/>
// <FaHeart/>
// <FaHeart/>
// <FaHeart/>
// <FaHeart/>
// <FaHeart/>
// </div>


// {/* HERO */}

// <section id="home" className="hero">

// <motion.div
// className="hero-left"
// initial={{opacity:0, x:-50}}
// animate={{opacity:1, x:0}}
// transition={{duration:1}}
// >

// <h1>Aanchal Jha ❤️</h1>

// <p>
// Some people enter your life quietly and somehow become
// the most beautiful part of it.
// For me, that person is you.
// </p>

// </motion.div>


// <motion.div
// className="hero-right"
// initial={{opacity:0, scale:0.8}}
// animate={{opacity:1, scale:1}}
// transition={{duration:1}}
// >

// <img src={img0} alt="Aanchal"/>

// </motion.div>

// </section>



// {/* ABOUT */}

// <section id="about" className="about">

// <motion.h2
// initial={{opacity:0,y:30}}
// whileInView={{opacity:1,y:0}}
// transition={{duration:0.8}}
// >
// About You
// </motion.h2>

// <p>
// Ladna bhi tumse hi hai,
// aur rehna bhi tumhare saath hi hai…
// jaise taqraar bhi ek rishta ho,
// aur sukoon bhi tumhari hi baahon mein mile...!!

// Iss bechain si kaynaat ke kisi kone mein,
// shayad is ehsaas ko hi
// “soulmate” kehte hain...✨❤️!!!
// </p>

// </section>



// {/* GALLERY */}

// <section id="gallery" className="gallery">

// <h2>Our Beautiful Moments together</h2>

// <div className="gallery-grid">

// <motion.img whileHover={{scale:1.1}} src={img1} alt="moment1"/>
// <motion.img whileHover={{scale:1.1}} src={img2} alt="moment2"/>
// <motion.img whileHover={{scale:1.1}} src={img3} alt="moment3"/>
// <motion.img whileHover={{scale:1.1}} src={img4} alt="moment4"/>
// <motion.img whileHover={{scale:1.1}} src={img5} alt="moment5"/>
// <motion.img whileHover={{scale:1.1}} src={img6} alt="moment6"/>
// <motion.img whileHover={{scale:1.1}} src={img7} alt="moment7"/>
// <motion.img whileHover={{scale:1.1}} src={img8} alt="moment8"/>

// </div>

// </section>



// {/* LOVE CARDS */}

// <section id="love" className="love">

// <h2>Things I Love About You</h2>

// <div className="love-grid">

// {lovePoints.map((item,index)=>(
// <motion.div
// className="love-card"
// key={index}
// whileHover={{scale:1.05}}
// >
// <FaHeart className="heart-icon"/>
// <p>{item}</p>
// </motion.div>
// ))}

// </div>

// </section>



// {/* MESSAGE */}

// <section id="message" className="message">

// <h2>A Small Message For You</h2>

// <p>
// Dear aachu, the world genuinely feels brighter because
// you're in it.
// </p>

// <p>
// I made this small website because sometimes a message
// isn't enough to explain how special someone is.
// </p>



// <p className="sign">— Made with love by your love @Ankit Mishra ❤️</p>

// </section>

// </div>
// );
// }

// export default App;


import React, {useState} from "react";
import "./App.css";
import { motion } from "framer-motion";
import { FaHeart, FaBars } from "react-icons/fa";

import img0 from "./Aanchal1.jpeg";
import img1 from "./Aachu1.jpeg";
import img2 from "./Aachu2.jpeg";
import img3 from "./Aachu3.jpeg";
import img4 from "./Aachu4.jpeg";
import img5 from "./Aachu5.jpeg";
import img6 from "./Aachu6.jpeg";
import img7 from "./Aachu7.jpeg";
import img8 from "./Aachu8.jpeg";

function App(){

const [menuOpen,setMenuOpen] = useState(false);

const lovePoints = [
"Your smile that brightens my day",
"The support you always provide me",
"The way you make simple moments special",
"Your beautiful eyes, lips and everything related to you",
"Your laughter that feels like happiness",
"The comfort I feel when I talk to you",
"Your every effort to make me happy",
"Also tumhara daily-daily ka 'created dukh' wala story 😉"
];

return(

<div className="container">

{/* NAVBAR */}

<nav className="navbar">

<div className="logo">
<FaHeart className="nav-heart"/> Aanchal
</div>

<div className="menu-icon" onClick={()=>setMenuOpen(!menuOpen)}>
<FaBars/>
</div>

<ul className={menuOpen ? "nav-links active":"nav-links"}>

<li><a href="#home" onClick={()=>setMenuOpen(false)}>Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#gallery">Gallery</a></li>
<li><a href="#love">Love</a></li>
<li><a href="#message">Message</a></li>

</ul>

</nav>



{/* FLOATING HEARTS */}

<div className="hearts">
<FaHeart/><FaHeart/><FaHeart/><FaHeart/><FaHeart/>
</div>



{/* HERO */}

<section id="home" className="hero">

<motion.div
className="hero-left"
initial={{opacity:0,x:-60}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
>

<h1>Aanchal Jha ❤️</h1>

<p>
Some people enter your life quietly and somehow become
the most beautiful part of it.
For me, that person is you.
</p>

</motion.div>

<motion.div
className="hero-right"
initial={{opacity:0,scale:0.8}}
animate={{opacity:1,scale:1}}
transition={{duration:1}}
>

<img src={img0} alt="Aanchal"/>

</motion.div>

</section>



{/* ABOUT */}

<section id="about" className="about">

<h2>About You</h2>

<p>
Ladna bhi tumse hi hai aur rehna bhi tumhare saath hi hai…
jaise taqraar bhi ek rishta ho,
aur sukoon bhi tumhari hi baahon mein mile.
</p>

<p>
Iss bechain si kaynaat ke kisi kone mein
shayad is ehsaas ko hi soulmate kehte hain. ✨❤️
</p>

</section>



{/* GALLERY */}

<section id="gallery" className="gallery">

<h2>Our Beautiful Moments Together</h2>

<div className="gallery-grid">

<motion.img whileHover={{scale:1.1}} src={img1} alt=""/>
<motion.img whileHover={{scale:1.1}} src={img2} alt=""/>
<motion.img whileHover={{scale:1.1}} src={img3} alt=""/>
<motion.img whileHover={{scale:1.1}} src={img4} alt=""/>
<motion.img whileHover={{scale:1.1}} src={img5} alt=""/>
<motion.img whileHover={{scale:1.1}} src={img6} alt=""/>
<motion.img whileHover={{scale:1.1}} src={img7} alt=""/>
<motion.img whileHover={{scale:1.1}} src={img8} alt=""/>

</div>

</section>



{/* LOVE */}

<section id="love" className="love">

<h2>Things I Love About You</h2>

<div className="love-grid">

{lovePoints.map((item,index)=>(
<motion.div
className="love-card"
key={index}
whileHover={{scale:1.05}}
>

<FaHeart className="heart-icon"/>

<p>{item}</p>

</motion.div>
))}

</div>

</section>



{/* MESSAGE */}

<section id="message" className="message">

<h2>A Small Message For You</h2>

<p>
Dear moto,You can never imagine how much I love uhh.. Bas itna kahunga ki jab se tum mile ho , it was not even a single day jis din ankh khulte hi tum yaad na aaye ho... I really love uhh more than any person in this world and will love u forever❤️... I really can't wait to marry you and be your official husband forever..!!!
</p>
<p>
I made this small website because sometimes a message
isn't enough to explain how special someone is...!🤌❤️
</p><br/><br/><br/>
<p className="sign">— Made with love by yr love Ankit Mishra❤️</p>

</section>

</div>

)

}

export default App;