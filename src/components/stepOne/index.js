import React from 'react'

export default props => {
  const { value, incrementValue } = props

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => incrementValue()} />
    </div>
  )
}
