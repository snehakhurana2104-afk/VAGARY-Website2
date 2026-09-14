import { CURRENCY_SYMBOL } from "../data/products";
 
export function formatPrice(price) {
  if (price == null) return null;
  return `${CURRENCY_SYMBOL}${Number(price).toLocaleString("en-IN")}`;
}