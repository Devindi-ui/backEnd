const db = require('../db');
const student = require('../module/student');

const students = {
    createStudent: async(req,res) => {
        try {
            const {first_name, last_name, email, dob} = req.body;
            const [result] = await student.save({first_name, last_name, email, dob});
            res.status(201).json({msg: 'Student saved successful', data: result})

        } catch (error) {
            res.status(500).json({message: 'Server Error', error: error.message});
        }
    },

    getAllStudents: async(req, res) => {
        try {
            const [rows] = await student.findAll();
            if(rows.length === 0){
                return res.status(200).json({msg:"No data found"});
            }
            res.status(200).json({data:rows});
            
        } catch (error) {
            res.status(500).json({message: 'Server Error', error: error.message});
        }
    },

    getStudentById: async(req, res) => {
        try {
            const [result] = await student.findById(req.params.id);
            if(result.length === 0){
                return res.status(200).json({msg: "Student not found"});
            }
            res.status(200).json({data:result});
        } catch (error) {
            res.status(500).json({message: 'Server Error', error: error.message});
        }
    },

    updateStudent: async(req, res) => {
        try {
            const {first_name, last_name, email, dob} = req.body;
            const id = req.params.id;
            const [result] = await student.update({first_name, last_name, email, dob, id});
            if(result.affectedRows === 0){
                return res.status(404).json({msg:"Student not found"});
            }
            res.status(200).json({msg: "Student update successfully"});
        } catch (error) {
            res.status(500).json({message: 'Server Error', error: error.message});
        }
    },

    deleteStudent: async(req, res) => {
        try {
            const [result] = await student.delete(req.params.id);
            if(result.affectedRows === 0){
                return res.status(404).json({msg: "Student not found"});
            }
            res.status(200).json({msg: "Student deleted successfully"});
        } catch (error) {
            res.status(500).json({message: 'Server Error', error: error.message});
        }
    }
}

module.exports = students;