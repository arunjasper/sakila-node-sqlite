class Actor {
    constructor(actorId, firstName, lastName, lastUpdate = null) {
        this.actorId = actorId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.lastUpdate = lastUpdate || new Date();
    }
}

module.exports = Actor;