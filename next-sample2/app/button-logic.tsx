import { useState, useCallback } from 'react'
import { Button } from './button-style'

const usePopup = () => {
    const cb = useCallback((text: string) => {
        prompt(text)
    }, [])
    return cb
}

type CountButtonProps = {
    label: string
    maximum: number
}

export const CounterButton = (props: CountButtonProps) => {
    const { label, maximum } = props
    const displayPopup = usePopup()
    const [count, setCount] = useState(0)
    const onClick = useCallback(() => {
        const newCount = count + 1
        setCount(newCount)

        if (newCount >= maximum) {
            displayPopup(`You've clicked ${newCount} times`)
        }
    }, [count, maximum])

    const disabled = count >= maximum
    const text = disabled ? 'Can\'t click anymore' : `You've clicked ${count} times`

    return (
        <Button disabled={disabled} onClick={onClick} label={label} text={text} />
    )
}