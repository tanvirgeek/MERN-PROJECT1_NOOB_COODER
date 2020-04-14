const mongoose = require('mongoose');
const S = mongoose.Schema;

const EmployeeSchema = new S({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model("Employee", EmployeeSchema);

