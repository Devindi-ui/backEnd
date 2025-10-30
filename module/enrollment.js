const db = require('../db');

const enrollment = {
    create: async(enrollment) => {
        const{student_id, course_id, enrollment_date} = enrollment;
        const sql = "INSERT INTO enrollment(enrollment.student_id, enrollment.course_id, enrollment.enrollment_date) VALUES(?,?,?)";
        return db.execute(sql,[student_id, course_id, enrollment_date]);
    },

    findAll: async() => {
        const sql = `SELECT enrollment.enrollment_date , CONCAT(student.first_name,
                    " ",student.last_name) AS full_name , courses.course_code, 
                    courses.course_name,courses.course_fee FROM enrollment INNER JOIN 
                    student ON enrollment.student_id = student.student_id INNER JOIN
                    courses ON enrollment.course_id = courses.course_id ORDER BY 
                    enrollment.enrollment_date DESC`;
        return db.execute(sql);
    }
}

module.exports = enrollment;