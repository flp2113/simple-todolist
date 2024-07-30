class MemDB{
    #db = {}

    createTask(newTask){
        this.#db[newTask.id] = newTask;
    }

    getAllTasks(){
        return this.#db;
    }

    getTask(id){
        return this.#db[id];
    }

    update(taskContent){
        this.#db[taskContent.id] = taskContent;
    }

    delete(id){
        delete this.#db[id];
    }
}

export default MemDB;