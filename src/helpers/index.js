export const format = amount => {
    return amount.toLocaleString("en-US", {
        style : "currency",
        currency: "USD",
    })
} 