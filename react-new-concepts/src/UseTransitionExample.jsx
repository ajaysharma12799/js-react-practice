import React, { useState, useTransition } from 'react'

const UseTransitionExample = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPending, startTransition] = useTransition();

    // Submit handler for the form
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        startTransition(async () => {
            // Simulate a slow network request
            await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        })
    }

    console.log('isPending: ', isPending);

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex items-center justify-between gap-5 flex-col'>
                <div>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <button type="submit" disabled={isPending}>
                    {
                        isPending ? "Submitting..." : "Submit"
                    }
                </button>
            </form>
        </div>
    )
}

export default UseTransitionExample

/**
 * useTransition ek React hook hai jo aapko non-urgent state updates handle karne deta hai.
 * Simple words mein, har update urgent nahi hota. Kuch updates delay ho sakte hain bina UX kharab kiye.
 * useTransition un updates ko defer karta hai aur browser ko pehle important kaam karne deta hai.
 *
 * Isse application ki performance improve hoti hai aur UI smooth feel hota hai.
 *
 * Example mein ek form hai jisme email aur password ke input fields hain.
 * Jab form submit hota hai, hum startTransition function use karke slow network request simulate karte hain.
 *
 * isPending variable track karta hai ki transition abhi progress mein hai ya nahi.
 * Agar transition pending hai:
 * - Submit button disable ho jata hai
 * - Loading state show hoti hai
 *
 * Iska main fayda:
 * - UI responsive rehta hai
 * - Main thread block nahi hota
 * - Heavy ya non-urgent updates background mein process hote hain
 * - User ko smooth experience milta hai
 *
 * Real-world example:
 * Search bar mein:
 * - User typing → urgent update
 * - Search results filter/render → non-urgent update
 *
 * useTransition ki help se typing instant rehti hai aur results background mein update hote hain,
 * jisse app laggy feel nahi hoti.
 */