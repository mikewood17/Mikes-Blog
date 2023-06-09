import postcss from "postcss"

// /lib/posts.ts
    import { allPosts } from 'contentlayer/generated';
  
  export function getPosts() {
    return allPosts;
  }
  
//   export function getPostById(postId: number) {
//     return getPosts().find((post) => post.id === postId);
//   }
  
  export function getPostBySlug(slug: string) {
    return getPosts().find((post) => post.slug === slug);
  }