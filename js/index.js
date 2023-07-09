import clean from "./clean.js"
import copy from "./copy.js"
import showMessage from "./showMessage.js"
import validations from "./validations.js"
import { convertFromInMeters, convertMetersInTo } from "./conversions.js"

const quantityElement = document.querySelector('#quantity')
const fromElement = document.querySelector('#from')
const toElement = document.querySelector('#to')
const outputElement = document.querySelector('#output')
const convertButton = document.querySelector('.btn')
const messageElement = document.querySelector('.message')
const copyButton = document.querySelector('.copy')
const cleanButton = document.querySelector('.clean')

convertButton.addEventListener('click', main)

function main(ev) {
    ev.preventDefault()

    if(quantityElement.value === '') {
        messageElement.innerText = 'Informe algum valor!'
        messageElement.classList.add('error')
        return
    }

    const fromValue = fromElement.value
    const toValue = toElement.value

    let meters = convertFromInMeters(fromValue)
    
    let result = convertMetersInTo(toValue, meters)
    
    outputElement.value = result

    // captar o conteúdo(ex: Metros(s) ) da option
    const fromLabel = fromElement.options[fromElement.selectedIndex].text
    const toLabel = fromElement.options[toElement.selectedIndex].text

    showMessage(fromLabel, result, toLabel)

    validations(copyButton, cleanButton)

    return
}

copyButton.addEventListener('click',copy)

cleanButton.addEventListener('click', clean)
