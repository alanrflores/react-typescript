import React from 'react'

const Welcome: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div>
        <h1>Hello, {name}</h1>
    </div>
  )
}

export default Welcome;