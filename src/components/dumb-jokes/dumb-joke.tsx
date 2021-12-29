import React, { useState } from "react"
import Age from "./age"

const DumbJoke: React.FC = () => {
  const jokes = [
    <Age />,
    <p>
      My other <span className="code">car</span> is a{" "}
      <span className="code">cdr</span>
    </p>,
    <p>Fluent in LISP, C, and Ancient Babylonian</p>,
  ]
  const [jokeIndex, setJokeIndex] = useState<number>(
    Math.floor(Math.random() * jokes.length)
  )
  const nextJoke = () => setJokeIndex((jokeIndex + 1) % jokes.length)

  return <div onClick={nextJoke}>{jokes[jokeIndex]}</div>
}
export default DumbJoke
