function usePrice(price, quantity) {
  let result;
  if (quantity) {
    let prices = Number(price) * quantity;
    result = prices.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  } else {
    let prices = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    result = prices;
  }
  return result;
}

export default usePrice;
