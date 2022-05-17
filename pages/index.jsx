import Head from 'next/head.js'
import Link from 'next/link.js'
import React, { useState, useEffect } from 'react'

export default function index() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('api/hello')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>
      <ul>
        <li>
          <Link href="/">index</Link>
        </li>
        <li>
          <Link href={`/about`}>about</Link>
        </li>
      </ul>
      <h1>hello world</h1>
    </div>
  )
}
