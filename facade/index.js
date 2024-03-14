'use strict';

// * Facade pattern

// Checks whether a loan can be given or not:
class Bank {
  verify(amount) {
    return amount < 999;
  }
}

// Checks whether user has a good credit history:
class CreditHistory {
  check(name) {
    return true;
  }
}

// Checks whether user balance is positive or negative:
class Balance {
  check(name) {
    return true;
  }
}

// Facade class:
class Credit {
  constructor(name) {
    this.name = name;
  }

  applyFor(amount) {
    const isApproved = new Bank().verify(amount);
    const bankResult = isApproved ? 'approved' : 'denied';
    const isPositiveBalance = new Balance().check(this.name);
    const balance = isPositiveBalance ? 'positive balance' : 'negative balance';
    const isGoodCreditHistory = new CreditHistory().check(this.name);
    const creditHistory = isGoodCreditHistory ? 'good' : 'poor';

    return `${this.name} has been ${bankResult} for the ${amount} credit. With a ${creditHistory} credit standing and having a ${balance}.`;
  }
}

const credit = new Credit('John');
const creditSmall = credit.applyFor(99);
const creditMedium = credit.applyFor(199);
const creditLarge = credit.applyFor(99999);

// creditSmall: John has been approved for the 99 credit. With a good credit standing and having a positive balance.
console.log('creditSmall:', creditSmall);
// creditMedium: John has been approved for the 199 credit. With a good credit standing and having a positive balance.
console.log('creditMedium:', creditMedium);
// creditLarge: John has been denied for the 99999 credit. With a good credit standing and having a positive balance.
console.log('creditLarge:', creditLarge);
