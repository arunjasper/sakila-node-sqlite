class Inventory {
    constructor(inventory) {
        this.inventoryId = inventory.inventory_id;
        this.filmId = inventory.film_id;
        this.storeId = inventory.store_id;
        this.lastUpdate = inventory.last_update;
    }
}

module.exports = Inventory;