let balanceDisplay = document.querySelector('#balanceAmount');
let amountToSend = document.querySelector('#amountToSend');
let sendBtn = document.querySelector('#sendBtn');
let internsWallet = document.querySelectorAll('.internsWallet');
let successMsg = document.querySelector('#success');
let errorMsg = document.querySelector('#fail');

sendBtn.addEventListener('click', ()=> {
    let amount =+ amountToSend.value;
    let balance =+ balanceDisplay.textContent;
    updateBalance(amount, balance);
    internsMoney(amount);
    displayMessage(balance)
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

//error message
const displayMessage = (remainingbalance) => {
    if(remainingbalance < 0){
          successMsg.style.display = 'none'; 
          errorMsg.style.display = 'block'; 
    }else {
        successMsg.style.display = 'block'; 
        errorMsg.style.display = 'none'; 
    }
}
