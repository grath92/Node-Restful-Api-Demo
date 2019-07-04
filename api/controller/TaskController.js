const taskModal = require('../model/TaskModel');


class TaskController {
  constructor() {}

  async saveTask(req, res, next){
      try{
        console.log(req.body);
          const task = await taskModal.saveTask(req.body);
          console.log(task);

          return res.status(200).json({
              status: "SUCCESS",
              task: task
          });
      }catch(error){

          return res.status(500).json({
              status: "FAILED",
              message: 'Something went wrong.'
          });
      }
  }

  async getTasks(req, res, next){
      try{

          const tasks = await taskModal.getAllTasks();
          console.log(tasks);

          return res.status(200).json({
              status: "SUCCESS",
              tasks: tasks
          });
      }catch(error){

          return res.status(500).json({
              status: "FAILED",
              message: 'Something went wrong.'
          });
      }
  }

  async getTaskDetail(req, res, next){
      try{

          let taskDetail = await taskModal.getTaskDetails(req.params);
          console.log(taskDetail);

          return res.status(200).json({
              status: "SUCCESS",
              task_details: taskDetail
          });
      }catch(error){

          return res.status(500).json({
              status: "FAILED",
              message: 'Something went wrong.'
          });
      }
  }

  async getTaskDetail(req, res, next){
      try{

          let taskDetail = await taskModal.getTaskDetails(req.params);
          console.log(taskDetail);

          return res.status(200).json({
              status: "SUCCESS",
              task_details: taskDetail
          });
      }catch(error){

          return res.status(500).json({
              status: "FAILED",
              message: 'Something went wrong.'
          });
      }
  }

}


module.exports = new TaskController();
