// 定义几个策略类
var PaymentMethodStrategy = {
    BankAccount: function(money) {
        return money > 50 ? money * 0.7 : money;
    },
    CreditCard: function(money) {
        return money * 0.8;
    },
    Alipay: function(money) {
        return money;
    },
};
/*环境类*/
var userPay = function(selectedStrategy, money) {
    return PaymentMethodStrategy[selectedStrategy](money);
};
console.log('银行卡支付价格为：' + userPay('BankAccount', 100)); //70
console.log('支付宝支付价格为：' + userPay('Alipay', 100)); //100
console.log('信用卡支付价格为：' + userPay('CreditCard', 100)); //80