const coins = [500, 200, 100, 50, 20, 10];
function vendingMachine(products, money, productNumber) {
	const product = products.find(product => product.number === productNumber);
	if(!product)	return "Enter a valid product number";
	const productName = product.name;
	const productPrice = product.price;
	const change = [];
	money = money - productPrice;
	if(money<0)	return "Not enough money for this product";
	let i = 0;	
	while(money>10){
		const res = money - coins[i];
		if(res >= 0){
			change.push(coins[i]);
			money = res;
		} else {
			i++;
		}
	}
	return {
		product: productName,
		change
	};
}

const products = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Condoms' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80,  name: 'Small snack' },
];

vendingMachine(products, 500, 8);