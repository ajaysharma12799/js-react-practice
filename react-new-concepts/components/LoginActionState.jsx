import { useActionState } from 'react'

const initialState = {
    success: false,
    message: "",
    result: null,
}

async function loginReducer(previousState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
        return {
            ...previousState,
            success: false,
            message: "Email and password are required",
            result: null,
        }
    }

    if (email === "test@example.com" && password === "password") {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    ...previousState,
                    success: true,
                    message: "Login successful",
                    result: { email }
                });
            }, 5000);
        });
    }

    return {
        ...previousState,
        success: false,
        message: "Invalid email or password",
        result: null
    }
}

const LoginActionState = () => {
    const [state, loginAction, isPending] = useActionState(loginReducer, initialState);
    return (
        <div>
            <form action={loginAction} className='flex flex-col gap-5 items-center justify-center'>
                <input type="text" name='email' placeholder='Email' />
                <input type="password" name='password' placeholder='Password' />
                <button type='submit' disabled={isPending}>{isPending ? "Logging in..." : "Login"}</button>
            </form>
            <p>{state.message}</p>
            {
                state.success && (
                    <div>
                        <h3>Welcome, {state.result.email}!</h3>
                    </div>
                )
            }
        </div>

    )
}

export default LoginActionState

/**
 * useActionState ek React hook hai jo aapko complex state management handle karne deta hai, especially jab state updates asynchronous ho.
 * Iska use karne ke liye, aap ek reducer function define karte hain jo previous state aur payload (form data) leta hai, aur new state return karta hai.
 * Jab form submit hota hai, useActionState reducer function ko call karta hai aur uske return value ke basis par component re-render hota hai.
 *
 * Is example mein, loginReducer function form data ko validate karta hai aur asynchronous login simulation karta hai.
 * Agar email aur password valid hain, toh state update hoti hai jisme success message aur user email hota hai. Agar invalid hain, toh error message show hota hai.
 *
 * useActionState se aap easily complex state logic ko manage kar sakte hain without manually handling loading states or side effects.
 */