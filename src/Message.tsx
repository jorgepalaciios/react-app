function Message() {
    const name= 'George'
    // this is an example to show how to dinamically use js components
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello Dude</h1>
}

export default Message;