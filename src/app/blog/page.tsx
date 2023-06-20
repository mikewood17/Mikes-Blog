import React from "react";
import Image from "next/image";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function BlogPage({ searchParams }: { searchParams: { [key: string]: string } }) {
  const posts = getPosts();

  let thePosts = posts;

  if (searchParams.filter) {
    // @ts-ignore
    thePosts = posts.filter((post) => post[searchParams.filterCat] == searchParams.filter);
    console.log(searchParams.filter);
  } else {
    thePosts = posts;
  }

  return (
    <div>
      <div className="container content blogListContainer">
        <h1>Destiny 2 Builds</h1>
        <div className="keyContainer">
          <ul className="classList">
            <li>
              <Link className="hunter" href="/blog?filter=hunter&filterCat=theClass">
                Hunter
              </Link>
            </li>
            <li>
              <Link className="titan" href="/blog?filter=titan&filterCat=theClass">
                Titan
              </Link>
            </li>
            <li>
              <Link className="warlock" href="/blog?filter=warlock&filterCat=theClass">
                Warlock
              </Link>
            </li>
          </ul>
          <ul className="subclassList">
            <li>
              <Link className="arc" href="/blog?filter=arc&filterCat=subclass">
                <Image src="/images/arc.webp" height="20" width="20" alt="arc subclass icon"></Image>
              </Link>
            </li>
            <li>
              <Link className="solar" href="/blog?filter=solar&filterCat=subclass">
                <Image src="/images/solar.webp" height="20" width="20" alt="solar subclass icon"></Image>
              </Link>
            </li>
            <li>
              <Link className="void" href="/blog?filter=void&filterCat=subclass">
                <Image src="/images/void.webp" height="20" width="20" alt="void subclass icon"></Image>
              </Link>
            </li>
            <li>
              <Link className="stasis" href="/blog?filter=stasis&filterCat=subclass">
                <Image src="/images/stasis.webp" height="20" width="20" alt="stasis subclass icon"></Image>
              </Link>
            </li>
            <li>
              <Link className="strand" href="/blog?filter=strand&filterCat=subclass">
                <Image src="/images/strand.webp" height="20" width="20" alt="strand subclass icon"></Image>
              </Link>
            </li>
          </ul>
        </div>
        <ul className="blogList">
          {thePosts.map((post) => (
            <li key={post.slug} className="blogCard">
              <Link href={`/blog/${post.slug}`}>
                <Image src={post.image} alt="blog hero img" className="blogCardImg" width="500" height="500"></Image>

                <div className="blogCardContent">
                  <h3 className="blogTitle">{post.title}</h3>
                  <p>{post.desc}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link className="viewAll" href="/blog">
          View All
        </Link>
      </div>
      <div className="contentCover">
        <div className="container content toolListContainer">
          <div className="contentHeader">
            <h1>Useful Tools</h1>
            <p>
              The Destiny community is full of useful third party apps and sites to help streamline your buildcrafting, swap
              gear between characters and appraise the roles on your weapons
            </p>
          </div>
          <ul className="toolList">
            <li>
              <Link className="toolCard" href="https://app.destinyitemmanager.com/login">
                <div className="toolImgContainer">
                  <Image
                    className="toolImg"
                    src="/images/DIM-logo.png"
                    height="300"
                    width="300"
                    alt="Destiny Item Manager Logo"
                  ></Image>
                </div>
                <div className="toolContent">
                  <h3>DIM</h3>
                  <p>
                    Destiny Item Manager has a multitude of uses for helping out your Destiny 2 experience including swapper
                    gear, creating loadouts and much more.
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link className="toolCard" href="https://www.light.gg/">
                <div className="toolImgContainer">
                  <Image className="toolImg" src="/images/light.gg.png" height="300" width="300" alt="Light.gg Logo"></Image>
                </div>
                <div className="toolContent">
                  <h3>Light.GG</h3>
                  <p>
                    Light.gg is a progress tracker and leaderboard showcase for Destiny 2 but is also useful for checking
                    weapon roles and its godroll appraiser.
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link className="toolCard" href="https://d2armorpicker.com/#/">
                <div className="toolImgContainer">
                  <Image
                    className="toolImg"
                    src="/images/armorPicker.png"
                    height="300"
                    width="300"
                    alt="D2 armour picker Logo"
                  ></Image>
                </div>
                <div className="toolContent">
                  <h3>D2 Armor Picker</h3>
                  <p>
                    This amazing tool selects optimal armour for you based on your needs for your chosen subclass, fragments
                    and exotic.
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="toolCard"
                href="https://ishtar.app/%7B_locale%3Cen%7Cja%7Cde%7Ces%7Ces-mx%7Cfr%7Cpt%7Cit%7Cpl%7Czh-cht%7Czh-chs%7Cru%7Cko%7D/"
              >
                <div className="toolImgContainer">
                  <Image
                    className="toolImg"
                    src="/images/ishtar.png"
                    height="300"
                    width="300"
                    alt="Ishtar Commander Logo"
                  ></Image>
                </div>
                <div className="toolContent">
                  <h3>Ishtar</h3>
                  <p>
                    This Mobile App is a must need for any guardian. A sleek and easy way to transfer gear between each of
                    your characters and vault seemlessly.
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
