const product = [
  {
    nameProduct: 'milo',
    pricePoduct: 10000,
  },
  {
    nameProduct: 'dancow',
    pricePoduct: 2000,
  },
  {
    nameProduct: 'frisian flag',
    pricePoduct: 5000,
  },
];
// filter
const cheapProduct = product.filter((milk) => milk.pricePoduct < 7000);
// conditional
const printProduct = cheapProduct < 7000 || 'murah';
// map
const expensiveProduct = product.map((brand) => brand.nameProduct);
console.log(cheapProduct, expensiveProduct, printProduct);
