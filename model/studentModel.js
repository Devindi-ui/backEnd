const db = require('../db');

const student = {
    save: (student) => {
        const {first_name, last_name, email, dob} = student;
        const sql = "INSERT INTO student(first_name, last_name, email, dob) VALUES(?,?,?,?)";
        return db.execute (sql, [first_name, last_name, email, dob]);
    }
};

module.exports = student;