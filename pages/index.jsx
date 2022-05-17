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
  return <h1>{data.name}</h1>
}
