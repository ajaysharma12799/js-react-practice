import React, { useActionState } from 'react'

const CounterActionState = () => {
    function counterReducer(previousState, payload) {
        const type = payload.get("type");
        switch (type) {
            case 'increment':
                return {
                    ...previousState,
                    counter: previousState.counter + 1
                }
            case 'decrement':
                return {
                    ...previousState,
                    counter: previousState.counter - 1
                }
            default:
                return previousState;
        }
    }

    const [state, counterAction] = useActionState(counterReducer, {
        counter: 0
    });
    return (
        <div>
            <form action={counterAction}>
                <button name='type' value={'increment'}>Increment</button>
                <p>{state.counter}</p>
                <button name='type' value={'decrement'}>Decrement</button>
            </form>
        </div>
    )
}

export default CounterActionState