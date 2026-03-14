import React, { useState } from 'react'
interface ContactProps {
    onSubmit: (date: {username: string, email: string}) => void
}

export const ContactForm = ({onSubmit} : ContactProps) => {
    const [username, setUserName] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
            onSubmit({username, email})
    }
     return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} />
            <input type="text" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <button type='submit'>send Contact</button>
        </form>
    </div>
  )
}
