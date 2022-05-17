import Head from 'next/head.js'
import React, { useEffect, useState } from 'react'

export default function about() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await fetch('api/hello')
      const data = await res.json()
      setData(data)
    }
    fetchPosts()
    setLoading(false)
  }, [])

  if (isLoading) return <p>Loading...</p>
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <h1>Name: {data.name}</h1>
    </>
  )
}
