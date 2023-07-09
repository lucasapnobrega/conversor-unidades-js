export default (ev) => {
    ev.preventDefault()

    const form = document.querySelector('.form')
    const selects = form.querySelectorAll('select')
    const inputs = form.querySelectorAll('input')
    const buttons = form.querySelectorAll('.button-group button')

    const messageElement = document.querySelector('.message')

    inputs.forEach(input => {
        input.value = ''
    })

    selects.forEach(select => {
        let options = select.querySelectorAll('option')
        select.value = options[0].value
    })

    buttons.forEach(button => {
        button.classList.remove('displayBlock')
        button.classList.add('displayNone')
    })

    messageElement.innerHTML = ''
}