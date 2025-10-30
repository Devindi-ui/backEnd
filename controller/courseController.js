const course = require('../module/course');

const courseController = {
    createCourse: async(req,res) => {
        try {
            const {course_name, course_code, description, course_fee} = req.body;
            const [result] = await course.create({course_name, course_code, description, course_fee});
            res.status(201).json({msg: 'Course created successfully!'});
        } catch (error) {
            res.status(500).json({msg: `Internal Server Error: ${error.message}`});
            console.log(error);
        }
    }
}

module.exports = courseController;