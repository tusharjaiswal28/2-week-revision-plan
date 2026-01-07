const Task = require("../models/Task");

exports.getAllTasks = async (req, res) => {
    const { status, priority, sortBy } = req.query;

    let query = {};
    if (status)
        query.status = status;

    if (priority)
        query.status = priority;

    let tasks = Task.find(query);

    // if(sortBy)
    //     tasks = tasks.sort()

    const result = await tasks;

    res.json({
        success: true,
        count:result.length,
        data: result
    });
};

exports.getTask = async(req,res)=>{
    const task = await Task.findById(req.params.id);

    if(!task)
    {
        return res.status(404).json({
            success:false,
            message:"Task not found"
        });
    }
};

