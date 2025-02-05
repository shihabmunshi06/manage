import { useState } from "react"

export default function Form() {
  const [input, setInput] = useState("")
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} action="/">
      <input type="text" onChange={handleChange} value={input} placeholder="Updates in your inbox..."/>
      <button type="submit">Go</button>
    </form>
  )
}
