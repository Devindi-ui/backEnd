const db = require("../db");

const course = {
    create: (course) => {
        const {course_name, course_code, description, course_fee} = course;
        const sql = "INSERT INTO courses(course_name, course_code, `description`, course_fee) VALUES(?,?,?,?)";
        return db.execute(sql,[course_name, course_code, description, course_fee]);
    },

    
}

module.exports = course;