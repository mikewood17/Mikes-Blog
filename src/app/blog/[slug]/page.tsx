import postcss from "postcss";
import "../[slug]/blogs.css";
import React, { Suspense } from "react";
import Link from "next/link";
import { getPostBySlug, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import PageViews from "@/app/components/PageViews";
import Comments from "@/app/components/Comments";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: "Mikes Blog | " + post?.title,
    description: post?.title,
    openGraph: {
      title: "You won't believe what NextJS has done now!",
    },
  };
}

// export async function generateStaticParams() {
//   // get the posts
//   const posts = getPosts();

//   // return an array of props objects that will be passed to
//   // our page component one by one, generating a unique page
//   // (in the example we use the post object, hard coded to more clearly show what is returned)
//   return [{ slug: "my-first-post" }, { slug: "my-second-post" }, { slug: "my-third-post" }];
// }

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  // if the post is missing, return a 404 by running the Next.js notFound function
  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="container">
        <div className="headerContainer">
          <h1 className="header">{post.title}</h1>
          <time dateTime={post.date} className="mb-1 text-xs text-gray-200">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <div className="readContainer">
            <p>This Blog has been read: &nbsp;</p>
            {/* @ts-ignore-error Server Component */}
            <PageViews className="viewTracker" kvKey={params.slug} />
            <p> &nbsp; times.</p>
          </div>
        </div>
        <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.body.html }} />
        <br />
        <div className="revertLink">
          <Link href="/blog">Back to posts</Link>
        </div>
        <div className="commentsCont">
          <Suspense fallback="Loading comments...">
            {/* @ts-ignore */}
            <Comments slug={params.slug} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
