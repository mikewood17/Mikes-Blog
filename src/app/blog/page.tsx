import React from "react";
import Image from "next/image";
import { getPostBySlug, getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function BlogPage() {
  const posts = getPosts();
  return (
    <div className="container content blogListContainer">
      <h1>Destiny 2 Builds</h1>
      <ul className="blogList">
        {posts.map((post) => (
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
    </div>
  );
}
