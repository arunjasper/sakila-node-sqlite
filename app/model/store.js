class Store {
    constructor(store) {
        this.storeId = store.store_id;
        this.managerStaffId = store.manager_staff_id;
        this.addressIid = store.address_id;
        this.lastUpdate = store.last_update;
    }
}

module.exports = Store;