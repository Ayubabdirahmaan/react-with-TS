import React, { useState } from "react";
interface ageProps {
    onSubmit: (age: number) => void
}
export const AgeForm = ({ onSubmit }: ageProps) => {
    const [age, setAge] = useState<number>(0)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(age)
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value))} />
            <button type="submit">Enter You're Age</button>
        </form>
    </div>;
};
