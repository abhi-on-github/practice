var amount = 25.12; 
var fedTax = 10; 
var stateTax = 2; 
var localTax = 0.5;
var amountAfterTaxes = (amount, ...taxes) => 
    taxes.map(tax => amount*tax/100).reduce((total, tax) => total + tax, amount).toFix(2);
    
    
console.log(amountAfterTaxes(amount)); //25.12



