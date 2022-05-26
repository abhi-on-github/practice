const solution = (transactions, taxRate) => {
  let numCalls = 0;

  const calculateCostAfterTax = (cost, taxRate) => {
    numCalls = numCalls + 1;
    return cost * taxRate;
  };

  const computeTotal = taxRate => {
      const cache = {};
    return cost => {
        if(cache[cost]){
            return cache[cost];
        }
        const result = calculateCostAfterTax(cost, taxRate);
        cache[cost] = result;
      return result;
    };
  };

  transactions.map(computeTotal(taxRate));
  return numCalls;
};
