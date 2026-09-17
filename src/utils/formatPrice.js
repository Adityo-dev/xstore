export function formatPrice(price, currency = "$") {
  if (typeof price !== "number") {
    const parsed = parseFloat(price);
    if (isNaN(parsed)) return `${currency}0.00`;
    price = parsed;
  }
  return `${currency}${price.toFixed(2)}`;
}
