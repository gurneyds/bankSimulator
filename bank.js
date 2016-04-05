function makeBankAccount() {
    var accountBalance = 0.0;

    var deposit = function(amount) {
        accountBalance += parseFloat(amount);
    };

    var withdraw = function (amount) {
        if(balance - amount > 0) {
            accountBalance -= parseFloat(amount);
            return true;
        } else {
            return false;
        }
    };

    var balance = function () {
        return accountBalance;
    };

    return{
        deposit:deposit,
        withdraw:withdraw,
        balance:balance
    };
}

$(function() {
    var bankAccount = makeBankAccount();

    function showBalance() {
        $('#container').after('<p>Balance is:' + bankAccount.balance() + '</p>');
    }

    function showInsufficientFunds() {
        $('#container').after('<p>Insufficient funds. Balance is:' + bankAccount.balance() + '</p>');
    }

    $('#increment').click(function() {
        var amount = $('input').val();
        bankAccount.deposit(amount);

        showBalance();
    });

    $('#decrement').click(function() {
        var amount = $('input').val();
        if(bankAccount.withdraw(amount)) {
            showBalance();
        } else {
            showInsufficientFunds();
        }
    });
});
