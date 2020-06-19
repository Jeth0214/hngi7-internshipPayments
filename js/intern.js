let balanceDisplay = document.querySelector('#balanceAmount');
let amountToSend = document.querySelector('#amountToSend');
let sendBtn = document.querySelector('#sendBtn');
let internsWallet = document.querySelectorAll('.internsWallet');


sendBtn.addEventListener('click', ()=> {
    let amount =+ amountToSend.value;
    let balance =+ balanceDisplay.textContent;
    updateBalance(amount, balance);
    internsMoney(amount);
    }
);

//update remaining balance
const updateBalance= (amount, balance) => {
    let internsLength = internsWallet.length;
    let totalSendmoney = amount * internsLength
    let remainingbalance = balance - totalSendmoney;
    balanceDisplay.textContent = remainingbalance;
};

// 
const internsMoney = (amount)=> {
    let internsBalanceMoney = internsWallet.forEach( intern => {
        let test = Number(intern.textContent); 
       intern.textContent = test + amount
    });
    return internsBalanceMoney;
}


