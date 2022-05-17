const change = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];

function calcChange(money, price) {
  if (money % change[9] !== 0 || price % change[9] !== 0 || money < price) {
    console.log("Tidak valid");
  } else {
    let userChange = money - price;
    var userCash = [];
    for (let i = 0; i < change.length; i++) {
      while (userChange >= change[i]) {
        userChange -= change[i];
        userCash.push(change[i]);
      }
    }
    console.log(userCash);
  }
}

console.log(calcChange(100000, 45500));
