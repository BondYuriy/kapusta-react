function getTotalMoney(money, day, bet, isValidPromo, betPromo) {
  if (isValidPromo) {
    const percent = betPromo * day;
    const interestLoan = (money / 100) * percent;
    const total = Number(money) + interestLoan;
    return total.toFixed(2);
  }

  const percent = bet * day;
  const interestLoan = (money / 100) * percent;
  const total = Number(money) + interestLoan;
  return total.toFixed(2);
}

export default getTotalMoney;
