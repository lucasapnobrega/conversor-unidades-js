export default (ev) => {
    ev.preventDefault()

    const outputElement = document.querySelector('#output')

    const buttonCopy = ev.currentTarget
    const result = outputElement.value
    console.log(result)

    if(buttonCopy.innerText === 'Copiar') {
        buttonCopy.innerText = 'Copiado!'
        buttonCopy.classList.add('copied')

        navigator.clipboard.writeText(result)
    } else {
        buttonCopy.innerText = 'Copiar'
        buttonCopy.classList.remove('copied')
    }
}