import React, { useState } from 'react'
interface emailProps {
    onSubmit: (value: string) => void
}
export const EmailFoarm = ({ onSubmit }: emailProps) => {
    const [emailForm, setEmailForm] = useState<string>("")
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(emailForm)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={emailForm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailForm(e.target.value)} />
                <button type='submit'>Send Email</button>
            </form>
        </div>
    )
}
