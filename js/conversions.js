const quantityElement = document.querySelector('#quantity')

function convertFromInMeters(fromValue) {
    let meters
    switch(fromValue) {
        case "m":
            meters = quantityElement.value
            break
        case "km":
            meters = quantityElement.value * 1000
            break
        case "hm":
            meters = quantityElement.value * 100
            break
        case "dam":
            meters = quantityElement.value * 10
            break
        case "dm":
            meters = quantityElement.value / 10
            break
        case "cm":
            meters = quantityElement.value / 100
            break
        case "mm":
            meters = quantityElement.value / 1000
            break
    }

    return meters
}

function convertMetersInTo(toValue, meters) {
    let result
    switch(toValue) {
        case "m":
            result = meters
            break
        case "km":
            result = meters / 1000
            break
        case "hm":
            result = meters / 100
            break
        case "dam":
            result = meters / 10
            break
        case "dm":
            result = meters * 10
            break
        case "cm":
            result = meters * 100
            break
        case "mm":
            result = meters * 1000
            break
    }

    return result
}

export { convertFromInMeters, convertMetersInTo }