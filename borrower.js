Template.loanDashboard.helpers({
    loans: function () {
        return Loans.find({ borrowerId: Meteor.userId() });
    },
});
