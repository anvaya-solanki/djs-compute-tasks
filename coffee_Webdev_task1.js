function calculateTotalCost(quantity) {
    const costPerBag = 10;
    let finalAmt = quantity * costPerBag;

    if (quantity >= 5 && quantity <= 10) {
        finalAmt *= 0.9;
    } else if (quantity > 10) {
        finalAmt *= 0.8;
    }

    return finalAmt;
}


const quantity = 25;
const finalAmt = calculateTotalCost(quantity);
console.log(`Total cost for ${quantity} bags of coffee: $${finalAmt.toFixed(2)}`);
