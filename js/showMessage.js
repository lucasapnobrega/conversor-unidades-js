export default (fromLabel, result, toLabel) => {

    const quantityElement = document.querySelector('#quantity')
    const messageElement = document.querySelector('.message')

    const message = `${quantityElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`

    if(messageElement.classList.contains('error')) {
        messageElement.classList.remove('error')
    }

    messageElement.innerText = message
}