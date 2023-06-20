import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../about/about.css";

export default function AboutPage() {
  return (
    <div className="">
      <div className="container content aboutWrapper">
        <h1>About Me</h1>
        <div className="aboutMeContainer">
          <Image className="meImg" src="/images/about-me.GIF" height="300" width="300" alt="me"></Image>
          <p className="meTxt">
            My Name is Michael Wood and I am training to become a web developer with a focus on front-end web development. I
            have completed the Netmatters Scion Coalition Bootcamp on full stack web development and the Tech Educators
            Next.js Bootcamp where I created this very site.
          </p>
        </div>
      </div>
      <div className="container content contentWidth">
        <h1>More About Me</h1>
        <h3>What do you get when you cross a physiotherapist student with a global pandemic?</h3>
        <p>
          According to my story an aspiring web developer. This meant I didn&apos;t start my journey into the technological
          industry until later in life, but I can confidently say this has been the best decision of my life as I feel as if
          I&apos;ve truly found my passion. Initially, I attended Sheffield Hallam University with dreams of wanting to
          become a physiotherapist but realised it wasn&apos;t for me. So I moved to Norwich and during lockdown, I started
          my first piece of coding by doing a javascript course on Udemy. This was a big step for me as the most programming
          I had ever done before was some simple Minecraft and Skyrim mods. This led me to enrolling on the Netmatters Scion
          Coalition Bootcamp where I completed their intensive full stack training program. It didn&apos;t stop there
          however, I have since been learning more on treehouse learn to code and udemy to further my skills. I am currently
          undertaking a Next.js course through Tech educators. My reason for wanting to become a front-end developer is I
          believe it merges my two strongest skills which are creativity and problem-solving along with my passion for
          wanting to help people. I believe this comes from my keen interest in technology whether through gaming or creating
          digital art.
        </p>
      </div>

      <div className="banner">
        <div className="bannerInfo">
          <div className="bannerContent">
            <h2>My Projects</h2>
            <p>
              Here you will find my portfolio of projects, some personal and some created whilst on bootcamp courses. I never
              though a year ago I would be able to create sites like this and now it truly is my passion. This website you're
              on currently is also a project I created through Next.js and Typescript whilst on a course from{" "}
              <Link className="colorAccent" href="https://techeducators.co.uk/">
                Tech Educators
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="bannerImgContainer">
          <Image src="/images/meImg.jpeg" alt="bannerImage" className="bannerImg" width="1000" height="1000"></Image>
        </div>
      </div>
      <div className="projectWrapper container content">
        <div className="projectsCont">
          <ul className="projectsList">
            <li>
              <Link className="projectCard" href="#">
                <Image
                  src="/images/project-1.png"
                  className="projectImg"
                  height="500"
                  width="500"
                  alt="project Image"
                ></Image>
                <div className="projectContent">
                  <h3>Netmatters Mock Website</h3>
                  <p>
                    This is a Mock of the official Netmatters website which was used as my master project whilst attending
                    the bootcamp to showcase the use of multiple languages working together in tendem. It includes a working
                    contact form which is linked to a database, a responesive layout and design, working side menu and news
                    cards with its content provided through the database using PHP.
                  </p>
                  <p>
                    <small>Laguages used: HTML, CSS, SASS/SCSS, JavaScript, JQuery, PHP, SQL, MySQL</small>
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link className="projectCard" href="#">
                <Image
                  src="/images/Project-2.png"
                  className="projectImg"
                  height="500"
                  width="500"
                  alt="project Image"
                ></Image>
                <div className="projectContent">
                  <h3>Random Image Generator with Email Assign</h3>
                  <p>
                    This project is a site which displays a random image to be assigned to an email displaying them in a
                    container to that designated email. It includes a working dropdown menu to switch between inputted emails
                    and see which selected images have been designated to their specific emails
                  </p>
                  <p>
                    <small>Languages used: HTML, CSS, SASS/SCSS, JavaScript, JQuery</small>
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link className="projectCard" href="#">
                <Image
                  src="/images/wordpress-project.jpg"
                  className="projectImg"
                  height="500"
                  width="500"
                  alt="project Image"
                ></Image>
                <div className="projectContent">
                  <h3>Wordpress Project</h3>
                  <p>
                    This site was my first run through using wordpress and boasts a large amount of webpages which are all
                    based around my favourite game of Destiny 2. It comes with a working contact form, responsive design and
                    news section all created in Wordpress and Elementor.
                  </p>
                  <p>
                    <small>Languages used: Wordpress, PHP, SQL, MySQL, CSS, HTML</small>
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
