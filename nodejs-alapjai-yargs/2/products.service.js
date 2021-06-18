const ProductsService = (productsApi) => {

  let products = productsApi.get();

  const sum = () => {
    let sumProductsPrices = 0;
    products.map( product => {
      sumProductsPrices += (product.count * product.price)
    })
    return sumProductsPrices;
  };

  const avg = () => {
    let avgPriceCount = 0;
    products.map( product => {
      (avgPriceCount += product.price) / products.length
    })
    return avgPriceCount;

  };

  const lessthan = (count) => {
    return products.filter( product => product.count < count )
  };

  return {
    sum,
    avg,
    lessthan
  };
}

module.exports = ProductsService;