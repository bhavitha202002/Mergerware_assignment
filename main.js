Template.loanRequest.events({
    'submit form': function (event) {
        event.preventDefault();
        const amount = event.target.amount.value;
        const borrowerId = Meteor.userId();

        // Inserting the loan request into the Loans collection
        Loans.insert({
            amount: parseFloat(amount),
            borrowerId: borrowerId,
            status: 'pending', // Initial status
        });

        // Clearing the form
        event.target.amount.value = '';
    },
});
