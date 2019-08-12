const Mongoose = require('mongoose');


const todoSchema = new Mongoose.Schema({
    title : {
        type : String,
        required : true
    }
})

class Todo {


    static getById(id){

        return this.find({
            _id : Mongoose.mongo.ObjectID(id)
        }).exec();
    }

    static getTodos() {

        return this.find().exec();
    }

    static insertTodo(title){

        const todo = this({
            title
        })

        return todo.save();
    }

}

todoSchema.loadClass(Todo);

module.exports = Mongoose.model('Todo',todoSchema)