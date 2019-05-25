mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    student: {
        email: String,
        name: String,
        address: {
            gata: {
                type: String,
            },
            postnummer: {
                type: String,
            },
            ort: {
                type: String,
            }    
        }
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
