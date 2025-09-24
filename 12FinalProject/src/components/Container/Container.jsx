import React from 'react'
// A simple container component to center content and provide padding
function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
}

export default Container