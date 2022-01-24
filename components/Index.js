import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// AOS.init();

// const index = () => {
//   return (
//     <div>

//     </div>
//   )

// export default function Home() {

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Head>
        {/* <script>AOS.init();</script> */}
        {/* <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        /> */}
        {/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}
        <title>Ayodele Timothy</title>
        {/* <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        ></script>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link> */}
        <title>
          Timothy Ayodele - A Fullstack developer, a father, an husband, a
          teacher...
        </title>
        <meta name="theme-color" content="#14213D" />
        <meta
          name="description"
          content="Timothy Ayodele - A Fullstack developer, a father, an husband, a teacher..."
        />
      </Head>

      <div className={styles.homecont}>
        <div className={styles.sec1}>
          <div className={styles.leftsec1}>
            <h1
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Hi, I am Timothy -{" "}
              <span className={styles.techborder}> A Tech-preneur </span>{" "}
            </h1>
            <p
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              I help people, companies and organizations build modern,
              resilient, and inclusive products solving real-life problems
            </p>
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className={styles.touchbtn}
            >
              <p>Get in Touch</p>
              <img className={styles.toucharrow} src="/arrowRight.svg" />
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className={styles.rightsec1}
          >
            {/* <img src="/profileImg.svg" alt="" /> */}
            <img className={styles.profileimg} src="/prf2.jpg" />
            <div className={styles.scrollcont}>
              <p href="#about">SCROL DOWN</p>
              <img src="/arrowDown.svg" />
            </div>
          </div>
        </div>
        {/* ABOUT SECTION */}
        <div className={styles.aboutcont}>
          <h1
            id="about"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            About Me
          </h1>

          <div className={styles.aboutleftright}>
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className={styles.aboutleft}
            >
              <img src="/prf2.jpg" />
            </div>

            <div className={styles.aboutright}>
              <p
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                Timothy is a Techprenuer and Software Engineer, who is an astute
                believer in creative and critical thinking as a pathway to
                problem solving.{" "}
              </p>

              <p
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                {" "}
                As a developer, he has collaborated with other creatives over
                the years to develop a handful of useful digital products,
                particularly in the FinTech industry.  He is the MD of MoreTims{" "}
              </p>
              <p
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Investment Ltd., CEO of Fireswitch Technologies, co-founder of
                Shèdá House and Founder/ Executive director Cypher Power
                Systems, Ibadan Nigeria.{" "}
              </p>

              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className={styles.seebtn}
              >
                <p>See other projects</p>
                <img className={styles.toucharrow} src="/arrowRight.svg" />
              </div>
            </div>
          </div>
        </div>

        {/* FEATURED SECTION */}
        <div className={styles.featcont}>
          <h1
            id="projects"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Fetured Projects
          </h1>

          <div className={styles.featleftright}>
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className={styles.featleft}
            >
              {" "}
              <img
                className={styles.prodimg}
                src="/renitrust.png"
                // width={700}
                // height={1000}
              />
            </div>

            <div className={styles.featright}>
              <p
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Renitrust
              </p>
              <h1
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                RenitrustAn Escrow app for your safe transactions
              </h1>
              <p
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                design, product, prototyping
              </p>
            </div>
          </div>
        </div>
        {/* E */}

        <div className={styles.feat2cont}>
          <div className={styles.feat2leftright}>
            <div className={styles.feat2right}>
              <p
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Renistore
              </p>
              <h1
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
               The best and safest online market place.
              </h1>
              <p
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                design, product, prototyping
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className={styles.featleft}
            >
              {" "}
              <img className={styles.secondfeat} src="/renistore.png" />
            </div>
          </div>

          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className={styles.viewbtn}
          >
            <p>View all my projects</p>{" "}
            <img className={styles.toucharrow} src="/arrowRight.svg" />
          </div>
        </div>

        {/* SOLUTIONS CONTAINER */}
        <div id="education" className={styles.solutioncont}>
          <div className={styles.solutiontext}>
            <h1 data-aos="fade">
              I help young creatives create solutions from problems
            </h1>
          </div>

          <div className={styles.solutionimg}>
            <img
              data-aos="fade-right"
              className={styles.solutioneachimg}
              src="/other1.svg"
              // width={350}
              // height={350}
            />
            <img
              data-aos="fade-up"
              className={styles.solutioneachimg2}
              src="/other2.svg"
              // width={350}
              // height={350}
            />
            <img
              data-aos="fade-left"
              className={styles.solutioneachimg}
              src="/other3.svg"
              // width={350}
              // height={350}
            />
          </div>

          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className={styles.viewbtn}
          >
            <p>View all my projects</p>{" "}
            <img className={styles.toucharrow} src="/arrowRight.svg" />
          </div>
        </div>

        {/* SOCIAL MEDIA FIELD */}
        <div className={styles.social1cont}>
          <div
            id="socialmedia"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className={styles.social1text}
          >
            <h1>
              Social media <br />
              <span className={styles.feedbold}> Feeds</span>
            </h1>
          </div>

          <div className={styles.socialimg}>
            <img
              data-aos="fade-right"
              src="/social1.png"
              // width={400}
              // height={400}
            />
            <img
              data-aos="fade-down"
              src="/social2.png"
              // width={450}
              // height={450}
            />
            <img
              data-aos="fade-left"
              src="/social1.png"
              // width={400}
              // height={400}
            />
          </div>
        </div>

        {/* FIND ME CONTAINER */}
        <div className={styles.findcont}>
          <div
            id="contactme"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className={styles.findtext}
          >
            <h1>
              Find
              <span className={styles.mebold}>
                {" "}
                <br /> Me
              </span>
            </h1>
          </div>

          <div className={styles.socialcont}>
            <a
              href="https://www.linkedin.com/in/ayodeletim"
              target="_blank"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className={styles.eachsocials}
            >
              <img src="./linkdin.svg" />
              <div className={styles.socialtext}>
                <h6>Linkedin</h6>
                <p>ayodeletim</p>
              </div>
            </a>

            <a
              href="https://twitter.com/ayodeletim"
              target="_blank"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className={styles.eachsocials}
            >
              <img src="./github.svg" />
              <div className={styles.socialtext}>
                <h6>Github</h6>
                <p>ayodeletim</p>
              </div>
            </a>

            <a
              href="https://twitter.com/ayodeletim"
              target="_blank"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className={styles.eachsocials}
            >
              <img src="./twitter.svg" />
              <div className={styles.socialtext}>
                <h6>Twitter</h6>
                <p>ayodeletim</p>
              </div>
            </a>

            <a
              href="https://instagram.com/ayodeletim
              "
              target="_blank"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className={styles.eachsocials}
            >
              <img src="./instagram.svg" />
              <div className={styles.socialtext}>
                <h6>Instagram</h6>
                <p>ayodeletim</p>
              </div>
            </a>

            <a
              href="https://fb.me/ayodeletim"
              target="_blank"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className={styles.eachsocials}
            >
              <img src="./facebook.svg" />
              <div className={styles.socialtext}>
                <h6>Facebook</h6>
                <p>ayodeletim</p>
              </div>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=2348037837313"
              target="_blank"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className={styles.eachsocials}
            >
              <img src="./whatsapp.svg" />
              <div className={styles.socialtext}>
                <h6>Whatsapp</h6>
                <p>ayodeletim</p>
              </div>
            </a>
          </div>
        </div>

        {/* CONTACT ME CONTAINER */}
        <div className={styles.contactme}>
          <div className={styles.findtext}>
            <h1>
              Contact
              <span className={styles.mebold}>
                {" "}
                <br /> Me
              </span>
            </h1>
          </div>

          <div className={styles.formcont}>
            <form className={styles.form}>
              <div className={styles.email}>
                <p>Email</p>
                <input
                  type="email"
                  required
                  placeholder="Enter your email here"
                />
              </div>

              <div className={styles.message}>
                <p>Message</p>
                <input type="text" required placeholder="Type a message here" />
              </div>
            </form>
          </div>
          <div className={styles.viewbtn}>
            <p>Send a message</p>{" "}
            <img className={styles.toucharrow} src="/arrowRight.svg" />
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div className={styles.footercont}>
          <div className={styles.mailleft}>
            <a className={styles.mailto} href="mailto:someone@yoursite.com">
              ayodele@gmail.com{" "}
            </a>
            <hr className={styles.hr} />
            <a className={styles.footwhatsapp} href="#">
              wa.me/ayodeletim
            </a>
          </div>

          <div className={styles.mainfooter}>
            <a href="#">Feed</a>
            <a href="#">Resume</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
