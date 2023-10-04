Template.adminDashboard.helpers({
    getBorrowerName: function (borrowerId) {
        const borrower = Meteor.users.findOne({ _id: borrowerId });
        return borrower ? borrower.emails[0].address : 'Unknown';
    },
});
