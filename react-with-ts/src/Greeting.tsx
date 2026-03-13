import React from 'react'

interface greeting {
    name: string,
    age: number
}
export const Greeting = ({name, age}: greeting) => {
  return (
    <div>
        <p>{name}</p>
        <p>{age}</p>
    </div>
  )
}
