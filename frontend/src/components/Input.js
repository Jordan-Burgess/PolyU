import { useState, useEffect } from 'react'

export default function Input() {
    const [message, setMessage] = useState('')
    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage('')
        
    }

    return (
        <div>Input
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={message}
                  name="message"
                  placeholer="Enter Message"
                  onChange={handleChange}
                  required
                />
                <input type='submit' value='Enter'/>
            </form>
        </div>
    )
}
