//using the schema we created in the model folder
//the task file in controller is communicating with task in the model folder 
const asyncWrapper = require('../middleware/async')
const Task = require('../models/Task')


const getAllTasks = asyncWrapper(async(req, res) => {    
        const tasks = await Task.find({})
        //if it is successful send status OK and json object of all tasks
        res.status(200).json({ tasks })
    }
)
//here we are waiting for the task body that passed by the user in form of a request and we adding it to the database
const createTask = asyncWrapper(async (req, res) => {
    //without try&catch block the user would not know 
    //if there is an error or the reason for the error 
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } 

)

// const createTask = (req,res) =>{
//     res.json(req.body)
// }
const getTask = asyncWrapper(async(req,res) =>{
        const {id:taskID} = req.params 
        //declared the task that we are waiting for it to respond with findOne
        const task = await Task.findOne({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`No Task found with ID : ${taskID}`})
        } 
        //here it responded back with status OK in Json 
        res.status(200).json({task})
        
    }
)

const deleteTask = asyncWrapper(async(req,res) =>{
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`No Task Found To Be Deleted`})
        }
        // res.status(200).json({task})<=this was only made to see what we have removed on postman
        res.status(200).json({task:null , status: 'Task Deleted Successfully'})
    
}
)
const updateTask = asyncWrapper(async (req,res) =>{
    const { id:taskID } = req.params
    //querying to find single id and assign it to taskID 
    //second argument is requesting the body from front end to put it in the update
    const task = await Task.findOneAndUpdate({_id:taskID},req.body, {
        new: true,
        runValidators: true, //here we used the validators on the update because it is not activated by default
    })

    if(!task){
        return res.status(404).json({msg:`No Task Found To Be Deleted`})
    }

     res.status(200).json({ task })
   
}
)
//here we exported all HTTP requests to use them in the tasks file inside model 
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
