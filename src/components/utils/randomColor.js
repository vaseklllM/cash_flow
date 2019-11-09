const randomColor = () => {
    const rndNum = () => parseInt(Math.random() * 255)
    return `rgb(${rndNum()}, ${rndNum()}, ${rndNum()})`
}

export default randomColor
