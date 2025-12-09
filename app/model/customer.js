const Address = require('../model/address');

class Customer {
    constructor(customer) {
        this.customerId = customer.customer_id;
        this.firstName = customer.first_name;
        this.lastName = customer.last_name;
        this.email = customer.email;
        this.active = customer.active;
    }
}

module.exports = Customer;