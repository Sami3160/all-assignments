/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let newData=[{}]
  for(let i=0;i<transactions.length;i++){
    var sum=transactions.reduce((cost,element)=>{
      if(element.category==transactions[i].category){
        // console.log(typeof(element.price+cost))
        return cost+element.price
      }
      return cost;
    },0);
    if(newData.indexOf({catagory:transactions[i].category ,total: sum})==-1){
      newData[i]={catagory:transactions[i].category ,total: sum}
    }
  }
  return newData;
}
param=[
 { itemName:'Phutane', category:'Snack', price:20, timestamp:'30-11-2023 9:00AM'},
 {itemName:'Watane', category:'Snack', price:25, timestamp:'3-11-2023 9:00AM'},
 {itemName:'Happy Happy biscute', category:'Snack', price:5, timestamp:'6-11-2023 9:00AM'},
 {itemName:'Gajar', category:'Helthy food', price:30, timestamp:'17-11-2023 9:00AM'},
 {itemName:'Apple', category:'Helthy food', price:60, timestamp:'19-11-2023 9:00AM'},
 {itemName:'Coca-cola', category:'Beverage', price:37, timestamp:'29-11-2023 9:00AM'},
 {itemName:'Potato chips', category:'Snack', price:20, timestamp:'9-11-2023 9:00AM'},
 {itemName:'Gulkand Lassi', category:'Beverage', price:25, timestamp:'19-11-2023 9:00AM'},
 {itemName:'Pespsi', category:'Beverage', price:40, timestamp:'30-11-2023 9:00AM'},
 {itemName:'Gulab Jamun', category:'Dessert', price:22, timestamp:'17-11-2023 9:00AM'}
]
console.log(calculateTotalSpentByCategory(param))
module.exports = calculateTotalSpentByCategory;
