Meteor.methods({
    assignRole: function (userId, role) {
        if (Roles.userIsInRole(this.userId, 'admin')) {
            Roles.addUsersToRoles(userId, role);
        }
    },
});
