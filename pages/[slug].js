import Container from '../components/container'
import PostBody from '../components/post-body'
import Layout from '../components/layout'
import { getPostBySlug, getAllPosts } from '../lib/api'
import Head from 'next/head'
import markdownToHtml from '../lib/markdownToHtml'

export default function Post({ post }) {
  return (
    <Layout>
      <Container>
        <article className="mb-32">
          <Head>
            <title>
              {post.title}
            </title>
          </Head>
          <PostBody content={post.content} />
        </article>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'content'])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
