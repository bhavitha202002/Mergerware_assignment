Template.lenderDashboard.events({
    'click .confirm-loan': function (event) {
        const loanId = this._id;

        // Update the loan status to 'approved' (or 'confirmed')
        Loans.update({ _id: loanId }, { $set: { status: 'approved' } });
    },
});
