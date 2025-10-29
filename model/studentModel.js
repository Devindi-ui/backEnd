const db = require('../db');

const student = {
    save: (student) => {
        const {first_name, last_name, email, dob} = student;
        const sql = "INSERT INTO student(first_name, last_name, email, dob) VALUES(?,?,?,?)";
        return db.execute (sql, [first_name, last_name, email, dob]);
    },

    findAll: () => {
        sql = "SELECT * FROM student ORDER BY first_name";
        return db.execute(sql);
    }
};

module.exports = student;