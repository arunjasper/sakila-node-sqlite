const Customer = require("./customer");

class CustomerDetails extends Customer {
    constructor(customer) {
        super(customer);
        this.address = {
            address: customer.address,
            address2: customer.address2,
            district: customer.district,
            city: customer.city,
            postalCode: customer.postal_code,
            phone: customer.phone
        };
    }
}

module.exports = CustomerDetails;