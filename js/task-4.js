function getShippingCost(country) {
    let price = ``;
    let getText = `"Shipping to ${country} will cost ${price} credits"`;
    switch (country) {
        case "Australia": "Australia"
            price = 170;
            break;
        case "Chile": "Chile"
            price = 170;
            break;
        case "China": "China"
            price = 170;
            break;
        case "Jamaica": "Jamaica"
            price = 170;
            break;
        default: getText = `"Sorry, there is no delivery to your country"`;
    }
    return getText
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
