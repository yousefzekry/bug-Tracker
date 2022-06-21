const mongoose = require('mongoose');

//the code down below shows the representation of the data inside the database
const TaskSchema = new mongoose.Schema({
    name:{type:String,
    required: [true, 'Name Must Be Provided'],
    trim: true,
    minLength: [2, 'Name can not be less than two characters'],
    maxLength: [30, 'Name cannot excceed 30 characters'],
    },
    completed:{type:Boolean,
    // trim: true,
    // minLength: [2, 'Please Enter Task Status'],
    default: false,
    }
    
})

module.exports = mongoose.model('task', TaskSchema)