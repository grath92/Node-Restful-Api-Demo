const dbConn = require('../db').db_slave;
const task = require('../schemas/Task');


class TaskModel {
  constructor() {

  }

  /**
  *
  * Get All Tasks
  */
  async getAllTasks(){
    try {

      const qury = 'SELECT * FROM task';
      const result = await dbConn.query(qury,{type: dbConn.QueryTypes.SELECT});

      return result;

    } catch (e) {
      console.log("getAllTasks: ", e);
      throw new Error(e);
    }
  }

  /**
  *
  * Get Single Task Details
  */

  async getTaskDetails(data){
    try {

      const qury = 'SELECT * FROM task WHERE id = :task_id';
      const result = await dbConn.query(qury,
        {
          type: dbConn.QueryTypes.SELECT,
          replacements: {
            task_id: data.task_id
          }
        });

      return result;

    } catch (e) {
      console.log("getTaskDetails: ", e);
      throw new Error(e);
    }
  }

  /**
  *
  * Filter Tasks By Status
  */

  async filterTasksByStatus(data){
    try {

      const qury = 'SELECT * FROM task WHERE status = :task_status';
      const result = await dbConn.query(qury,
        {
          type: dbConn.QueryTypes.SELECT,
          replacements: {
            task_status: data.status
          }
        });

      return result;

    } catch (e) {
      console.log("filterTasksByStatus: ", e);
      throw new Error(e);
    }
  }

  /**
  *
  * Insert A Task.
  */
  async saveTask(data){
    try {

      const qury = 'INSERT INTO task (title, description, status) VALUES (:title, :description, :status)';
      const result = await dbConn.query(qury,
        {
          type: dbConn.QueryTypes.INSERT,
          replacements: {
            title: data.title,
            description: data.description,
            status: data.status
          }
        });

      return result;

    } catch (e) {
      console.log("saveTask: ", e);
      throw new Error(e);
    }
  }

  /**
  *
  * Delete A Task.
  */
  async deleteTask(data){
    try {

      const qury = "DELETE FROM task WHERE id = :task_id";
      const result = await dbConn.query(qury,
        {
          type: dbConn.QueryTypes.DELETE,
          replacements: {
            task_id: data.id
          }
        });

      return result;

    } catch (e) {
      console.log("deleteTask: ", e);
      throw new Error(e);
    }
  }

}

module.exports = new TaskModel();
