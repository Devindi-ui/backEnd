const enrollment = require('../module/enrollment');

const enrollmentController = {
    createEnrollement: async(req,res) => {
        try {
            const {student_id, course_id} = req.body;
            const enrollment_date = new Date();
            const [result] = await enrollment.create({student_id, course_id, enrollment_date});
            if(result.affectedRows === 1){
                res.status(201).json({msg: 'Enrollment successfull!'});       
            }else{
                res.status(400).json({msg: "Enrollment failed"})
            }
        } catch (error) {
            res.status(500).json({msg: `Internal Server Error: ${error}`});
            console.log(error);            
        }
    }
}

module.exports = enrollmentController;