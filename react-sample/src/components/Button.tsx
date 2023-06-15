const Button = (props: {label: string, text: string}) => {
    const {label} = props
    const {text} = props

    const onClick = () => {
        alert(text)

    }

    return(
        <button type='button' onClick={onClick}>
            {label}
        </button>
    )
}

export default Button