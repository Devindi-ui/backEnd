const db = require('../db');
const student = require('../model/studentModel');

const students = {
    createStudent: async(req,res) => {
        try {
            const {first_name, last_name, email, dob} = req.body;
            const [result] = await student.save({first_name, last_name, email, dob});
            res.status(201).json({msg: 'Student saved successful', data: result})

        } catch (error) {
            res.status(500).json({message: 'Server Error'});
        }
    }
}

module.exports = students;