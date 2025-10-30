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
    },

    getAllCourses: async(req,res) => {
        try {
            const [result] = await course.findAll();
            if(result.length === 0){
                res.status(404).json({msg:"Courses not found"});
                return;
            }
            res.status(200).json({data:result});
        } catch (error) {
            res.status(500).json({msg: `Internal Server error: ${error.message}` });
        }
    },

    getCourseByCode: async (req,res) => {
        try {
            const code = req.params.code;
            const [result] = await course.findByCourseCode(code);
            console.log(result);
            res.status(200).json({data:result});
            
        } catch (error) {
            res.status(500).json({msg: `Internal Server Error: ${error.message}`});
        }
    }
}

module.exports = courseController;