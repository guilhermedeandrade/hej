import Head from 'next/head'
import type { ReactElement } from 'react'
import LinkButton from '@/components/link-button'

export default function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>guilherme de andrade | software engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-indigo-50">
        <h1 className="mb-12 text-purple-600 text-8xl">coming soon...</h1>
        <LinkButton
          content="say hi!"
          className="p-6 text-6xl text-purple-600 bg-transparent border-4 border-purple-600 transition-colors duration-300 rounded-md hover:bg-purple-600 hover:text-indigo-50"
          href="https://twitter.com/ubmit"
        />
      </main>
    </>
  )
}
