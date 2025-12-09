class Language {
    constructor(languageId, name, lastUpdate = null) {
        this.languageId = languageId;
        this.name = name;
        this.lastUpdate = lastUpdate || new Date();
    }
}

module.exports = Language;