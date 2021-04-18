/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import "./style.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Clients from "../../components/Clients";
import Portfolio from "../../components/Portfolio";
import Blogs from "../../components/Blogs";
import Products from "../../components/Products";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
 
<div>
  {/* ======= Navbar ======= */}
  <Navbar />
  {/* ======= Hero Section ======= */}
  <Hero />
 
  <main id="main">

    {/* ======= Clients Section ======= 
   <Clients />
   */}
    {/* ======= Portfolio Section ======= */}
   <Portfolio />
    {/* ======= Blogs Section ======= */}
   <Blogs />
    {/* ======= Products Section ======= */}
   <Products />
    {/* ======= About Section ======= */}
   <About />
    {/* ======= Contact Section ======= */}
   <Contact />
  </main>
  {/* End #main */}

  {/* ======= Footer ======= */}
   <Footer />
 
</div>

 
  );
}
