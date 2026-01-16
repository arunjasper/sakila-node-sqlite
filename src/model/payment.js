class Payment {
    constructor(payment) {
        this.paymentId = payment.payment_id;
        this.customerId = payment.customer_id;
        this.staffId = payment.staff_id;
        this.rentalId = payment.rental_id;
        this.amount = payment.amount;
        this.paymentDate = payment.payment_date;
        this.lastUpdate = payment.last_update || new Date();
    }
}

module.exports = Payment;