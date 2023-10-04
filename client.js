import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

Template.register.events({
    'submit form': function (event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const role = event.target.role.value;

        // Create the user and assign the role
        Accounts.createUser({
            email: email,
            password: password,
        }, function (error) {
            if (!error) {
                Meteor.call('assignRole', Meteor.userId(), role);
            }
        });
    },
});
