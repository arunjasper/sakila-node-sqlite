class Staff {
   constructor(staff) {
      this.staffId = staff.staff_id;
      this.firstName = staff.first_name;
      this.lastName = staff.last_name;
      this.addressId = staff.address_id;
      //this.picture = staff.picture;
      this.email = staff.email;
      this.storeId = staff.store_id;
      this.active = staff.active;
      this.username = staff.username;
      //this.password = staff.password;
      this.roleId = staff.role_id;
      // this.login_attempt = staff.login_attempt;
      // this.password_set = staff.password_set;
      // this.last_update = staff.last_update;
   }
}

module.exports = Staff;