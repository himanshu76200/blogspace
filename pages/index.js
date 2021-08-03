import fs from 'fs';
const path = require("path");
const matter = require('gray-matter');
import Link from "next/link"
import Layout from "../components/Layout"
import Post from "../components/Post"

export default function HomePage({ posts }) {
  // console.log(posts)
  return (
    <Layout>
      <h1 className="text-3xl border-b-4 p-5 font-bold">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) =>
          <Post post={post} key={index} />
        )}
      </div>
      <Link href="/blog">
        <a className='block text-center
          border border-gray-500 text-gray-800
          rounded-md py-4 my-5 transition
          duration-500 ease select-none
          hover:text-white hover:bg-gray-900
          focus:outline-none focus:shadow-outline
          w-full'>
          All Posts
        </a>
      </Link>
    </Layout>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(fileName => {
    const slug = fileName.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join("posts", fileName), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter
    }
  })

  // console.log(posts)

  return {
    props: {
      posts
    },
  }
}