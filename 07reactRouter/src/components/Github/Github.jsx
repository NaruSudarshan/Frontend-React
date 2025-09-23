import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // Using loader data instead of useEffect for better performance
  const data = useLoaderData()
  
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <div className='text-center'>
        <img src={data.avatar_url} alt="Git picture" width={300} className='rounded-full mx-auto mb-4' />
      </div>
      GitHub followers: {data.followers}
      <br />
      Name: {data.name}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/NaruSudarshan')
    return response.json()
}