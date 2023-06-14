const Button = (props: {label: string, text: string}) => {
    const {label, text} = props

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