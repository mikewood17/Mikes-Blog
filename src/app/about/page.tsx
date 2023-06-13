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
            have completed the Netmatters Scion Coalition Bootcamp on full stack web development and now currently studying
            under Tech Educators learning how to use Next.js.
          </p>
        </div>
      </div>
      <div className="banner">
        <div className="bannerInfo">
          <div className="bannerContent">
            <h2>Destiny 2 Builds</h2>
            <p>
              One of my biggest passions is gaming, primarily on Destiny 2 created by Bungie. head over to the blog section
              to have a look at some made by popular content creators in the Destiny 2 community.
            </p>
            <div className="bannerActions">
              <Link href="/blog" className="bannerBtn btn">
                Builds
              </Link>
            </div>
          </div>
        </div>
        <div className="bannerImgContainer">
          <Image src="/images/arc-hunter.png" alt="bannerImage" className="bannerImg" width="800" height="800"></Image>
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
      <div className="container content">
        <h1>My Projects</h1>
        <div className="projectsCont">
          <ul className="projectsList">
            <li className="projectCard">
              <Image
                src="/images/arc-hunter.png"
                className="projectImg"
                height="500"
                width="500"
                alt="project Image"
              ></Image>
              <div className="projectContent">
                <h3>Project 1</h3>
                <p>Project 1</p>
              </div>
            </li>
            <li className="projectCard">
              <Image
                src="/images/arc-hunter.png"
                className="projectImg"
                height="500"
                width="500"
                alt="project Image"
              ></Image>
              <div className="projectContent">
                <h3>Project 2</h3>
                <p>Project 2</p>
              </div>
            </li>
            <li className="projectCard">
              <Image
                src="/images/arc-hunter.png"
                className="projectImg"
                height="500"
                width="500"
                alt="project Image"
              ></Image>
              <div className="projectContent">
                <h3>Project 3</h3>
                <p>Project 3</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
