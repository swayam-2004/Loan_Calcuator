document.getElementById('calculateBtn').addEventListener('click',calculateLoan);

function calculateLoan()
{
    const loanAmount = parseFloat(document.getElementById('loanAmountInput').value);
    const InterestRate = parseFloat(document.getElementById('InterestRateInput').value);
    const loanTerm = parseFloat(document.getElementById('loanTermInput').value);

    if(isNaN(loanAmount) ||isNaN(InterestRate) ||isNaN(loanTerm))
    {
      alert("Please enter valid numbers for all of the fields");
      return;
    }

    const monthlyInterest= InterestRate/100 /12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest)/(1-Math.pow(1+ monthlyInterest, -totalPayments));
    const totalInterest =(monthlyPayment * totalPayments) - loanAmount;
    displayResult(monthlyPayment,totalInterest);
}

function displayResult(monthlyPayment, totalInterest) {
    const resultDiv = document.querySelector('.result'); 
    resultDiv.innerHTML = `
        <p><strong>Monthly Payment: ₹${monthlyPayment.toFixed(2)}</strong></p>
        <p><strong>Total Interest: ₹${totalInterest.toFixed(2)}</strong></p>
    `;
}
