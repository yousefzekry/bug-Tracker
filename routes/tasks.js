const express = require('express')
//we created router instance from express Router so we can use it and chain all the http requests
const router = express.Router();

const { getAllTasks,createTask,getTask,updateTask,deleteTask} = require('../controllers/tasks')

// so when the app grows these requests would be a lot so this file will be messy
// the better solution is to create a controller folder to control
// to declare all the requests there and import them here to use them

// router.route('/').get((req,res)=>{
//     res.send('All items')
// })

router.route('/')
.get(getAllTasks)
.post(createTask)
router.route('/:id')
.get(getTask)
.patch(updateTask)
.delete(deleteTask)
//exported so we can import it and use it in the app.js file
module.exports = router
