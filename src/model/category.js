class Category {
    constructor(
        categoryId,
        name,
        lastUpdate = null
    ) {
        this.categoryId = categoryId;
        this.name = name;
        this.lastUpdate = lastUpdate || new Date();
    }
}

module.exports = Category;