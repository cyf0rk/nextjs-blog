import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  console.log(allPostsData)

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Marijan. I'm web developer and cyber security
          researcher. You can contact me over LinkedIn.
        </p>
        <section>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            )) }
          </ul>
        </section>
      </section>
    </Layout>
  )
}

