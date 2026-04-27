import { useState, useActionState } from 'react'
import LoginActionState from '../components/LoginActionState';
import CounterActionState from '../components/CounterActionState';

const UseActionStateExample = () => {

    return (
        <div>
            <CounterActionState />
            <LoginActionState />
        </div>
    )
}

export default UseActionStateExample