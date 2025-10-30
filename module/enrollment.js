const db = require('../db');

const enrollment = {
    create: async(enrollment) => {
        console.log(enrollment);
        
        const{student_id, course_id, enrollment_date} = enrollment;
        const sql = "INSERT INTO enrollment(enrollment.student_id, enrollment.course_id, enrollment.enrollment_date) VALUES(?,?,?)";
        return db.execute(sql,[student_id, course_id, enrollment_date]);
    }
}

module.exports = enrollment;