class Rental {
    constructor(rentalId, rentalDate, inventoryId, customerId, returnDate, staffId, lastUpdate) {
        this.rentalId = rentalId;
        this.rentalDate = rentalDate;
        this.inventoryId = inventoryId;
        this.customerId = customerId;
        this.customerFirstName = customer_first_name;
        this.customerLastName = last_name;
        this.returnDate = returnDate;
        this.staffId = staffId;
        this.staffFirstName = staff_first_name;
        this.staffLastName = staff_last_name;
    }
}

module.exports = Rental;