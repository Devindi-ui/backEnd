const db = require("../db");
const { findAll } = require("./student");

const course = {
    create: (course) => {
        const {course_name, course_code, description, course_fee, status} = course;
        const sql = "INSERT INTO courses(course_name, course_code, `description`, course_fee, `status`) VALUES(?,?,?,?,?)";
        return db.execute(sql,[course_name, course_code, description, course_fee, status
        ]);
    },

    findAll: () => {
        const sql = "SELECT * FROM courses WHERE `status`=1 ORDER BY course_id DESC";
        return db.execute(sql);
    },

    findByCourseCode: (code) => {
        const sql = "SELECT * FROM courses WHERE course_code=?";
        return db.execute(sql,[code]);
    },

    update: async(course) => {
        const {course_id, course_name, course_code, description, course_fee} = course;
        const sql = `UPDATE courses SET course_name=?, course_code=?, description=?,
                    course_fee=? WHERE course_id=? `;
        return db.execute(sql,[course_name, course_code, description, course_fee, course_id])
    },

    delete: async(id) => {
        const sql = `UPDATE courses SET status=0 WHERE course_id=?`;
        return db.execute(sql,[id]);
    }
}

module.exports = course;