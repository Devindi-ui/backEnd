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
    },

    getAllEnrollments: async(req,res) => {
        try {
            const [result] = await enrollment.findAll();
            if(result.length === 0){
                res.status(404).json({msg: `Enrollments not found`});
                return;
            }
            res.status(200).json({data: result});
        } catch (error) {
            res.status(500).json({msg: `Internal Server Error: ${error}`});
        }
    }
}

module.exports = enrollmentController;