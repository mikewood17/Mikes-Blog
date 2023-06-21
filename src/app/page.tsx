import Image from "next/image";
import Link from "next/link";
import { WEBSITE_URL } from "config";
import { ContactForm } from "./components/ContactForm";

export default async function Home() {
  return (
    <main>
      <div className="container content homeWrapper">
        <div className="homeWelcome content">
          <Image
            className="meHeroImg"
            height="500"
            width="400"
            src="/images/mecambridge.jpg"
            alt="picture of me at the Berlin Wall"
          ></Image>
          <div className="welcomeContent contentWidth">
            <h1 className="heading">Who is Mike?</h1>
            <p>Mike Wood is a Junior Web developer from the mustard capitol of England, Norwich in Norfolk.</p>
            <p>
              I have been training to become a web developer and currently searching for my first junior role. To see more
              about this check out my{" "}
              <Link className="colorAccent" href="/about">
                Portfolio Page
              </Link>
              .
            </p>
            <p>
              I am a creative thinker who loves to design whatever my ADHD brain comes up with. This usually includes tattoo
              styled designs based around other interests. I&apos;m also a big sports fan who loves nothing more than sitting
              infront of red-zone for hours watching the NFL or staying up late to catch my favourite NBA team the Toronto
              Raptors play.
            </p>
          </div>
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
          <Image src="/images/SS-hero.jpg" alt="bannerImage" className="bannerImg" width="800" height="800"></Image>
        </div>
      </div>
      <div className="container content contentWidth formZone">
        <ContactForm />
      </div>
    </main>
  );
}
