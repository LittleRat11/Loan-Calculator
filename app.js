function calculateLoan() {
    let loanAmount = document.querySelector("#loan-amount").value;
    let interestRate = document.querySelector("#interest-rate").value;
    let monthsPay = document.querySelector("#months-to-pay").value;
    interest = (loanAmount * (interestRate * 0.01)) / monthsPay;
    monthlyPayment = (loanAmount / monthsPay + interest).toFixed(2);
    let payment = document.querySelector("#payment");
    payment.innerHTML = `Monthly Payment : ${monthlyPayment}`;
}