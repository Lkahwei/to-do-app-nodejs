const Task = require('./../models/taskModel');

exports.getAllTasks = async (request, response, next) => {
    const tasks = await Task.find();

    response.status(200).json({
        status: 'success',
        data: {
            tasks
        }
    })
}
exports.createTask = async (request, response, next) => {
    const newTask = await Task.create(request.body);

    response.status(201).json({status: 'success', data:{task: newTask}})
}

exports.updateTask = async (request, response, next) => {
    const updatedTask = await Task.findByIdAndUpdate(request.params.id, request.body, {new: true});
    console.log(updatedTask);
    response.status(200).json({status: 'success', data: {task: updatedTask}})
}

exports.deleteTask = async (request, response, next) => {
    const deletedTask = await Task.findByIdAndDelete(request.params.id);

    response.status(200).json({status: 'success', data: {task: deletedTask}})
}