class Role {
    constructor(role) {
        this.roleId = role.role_id;
        this.level = role.level;
        this.description = role.description;
        this.admin = role.admin;
        this.lastUpdate = role.last_update;
    }
}

module.exports = Role;