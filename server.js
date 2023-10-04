import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

// Defining the roles
Meteor.startup(() => {
    if (!Roles.getAllRoles().fetch().length) {
        Roles.createRole('admin');
        Roles.createRole('borrower');
        Roles.createRole('lender');
    }
});
