import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
function Github() {
  
  // const [data,setData] = useState("")
  const data = useLoaderData()
  useEffect(() => {
    fetch('https://api.github.com/users/NaruSudarshan')
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      setData(data)
    })
  })
  return (
    <div className='text-center m-4 bg-gray-600 text-white'>
      GutHub followers : {data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/NaruSudarshan')
    return response.json()
}