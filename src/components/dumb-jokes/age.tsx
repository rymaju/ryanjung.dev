import React, { useEffect, useState } from "react"

function approximateAge() /* in ms */ {
  const birthday = 979534800000
  const ageInMs = new Date().getTime() - birthday
  return ageInMs
}

const Age: React.FC = () => {
  const [age, setAge] = useState<number>()

  useEffect(() => {
    const timer = setInterval(() => {
      setAge(approximateAge())
    }, 10)
    return () => clearInterval(timer)
  })

  return (
    <p>
      I'm <span id="age">{age ?? ">0"}</span> ms old
      <br />
      and monotonically increasing each clock cycle
    </p>
  )
}

export default Age
