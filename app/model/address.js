class Address {
    constructor(address) {
        this.addressId = address.address_id;
        this.address = address.address;
        this.address2 = address.address2;
        this.district = address.district;
        this.cityId = address.city_id;
        this.postalCode = address.postal_code;
        this.phone = address.phone;
        this.location = address.location;
        this.lastUpdate = address.last_update;
    }
}

module.exports = Address;