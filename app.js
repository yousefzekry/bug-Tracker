 
const express = require ('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
// middleware
const notFound = require('./middleware/notfound')
const errorHandlerMiddleWare = require('./middleware/error-handler')
app.use(express.static('./public'))
//we used the line below so we have access to data when we use req.body
app.use(express.json())

//routes


app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleWare)
const port = process.env.PORT || 3000;
// app.get('/api/v1/tasks') here we are getting all tasks in our home page
// app.post('/api/v1/tasks') here we are adding on our total tasks
// app.get('/api/v1/tasks/:id') hena we are getting task by id ON CLICK
// app.patch('/api/v1/tasks/:id') here we are updating specific task
// app.delete('/api/v1/tasks/:id') here we are deleting a specific task
// we used v1 in routes just in case we wanted to update the app later we can mark all the V1 at once and redirect everyone to the new V

//the code below is for deployment environment


const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>
        console.log(`server is listening on port ${port}...`)
        );
    
    } catch (error) {
        console.log(error)
    }
}

start()
