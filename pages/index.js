// import Head from "next/head";
// import Link from "next/link";
// import React, { useState, useEffect } from 'react';
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import AOS from "aos";
// import "aos/dist/aos.css";
import Index from "../components/Index";


// AOS.init();

// const index = () => {
//   return (
//     <div>

//     </div>
//   )

// export default function Home() {

const index = () => {

//     useEffect(() => {
//     window.scrollTo(0, 0);
// }, [])

  return (
    <div>
      <Index/> 
    </div>
  );
};

export default index;
