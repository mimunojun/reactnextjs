function Hello(){
    function onClick(){
        alert('Hello')
        
    }
    const text = 'Hello React!'

    return( 
        <div onClick={onClick}>
            {text}
        </div>
    )
}

export default Hello