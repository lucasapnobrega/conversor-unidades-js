export default (copyButton, cleanButton) => {
    console.log('função geral')
    
    if(copyButton.classList.contains('displayNone') || cleanButton.classList.contains('displayNone')) {
        copyButton.classList.remove('displayNone')
        cleanButton.classList.remove('displayNone')

        copyButton.classList.add('displayBlock')
        cleanButton.classList.add('displayBlock')
    }
    
    if(copyButton.classList.contains('copied')) {
        console.log('if two')
        copyButton.classList.remove('copied')
        copyButton.innerText = 'Copiar'
    }
}

