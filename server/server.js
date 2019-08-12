const express = require('express');
const io = require('socket.io');
const mongoose = require('mongoose');
const http = require('http');

const app = express()

const server = http.Server(app);

const socketIO = io(server);

const TodoModel = require('./TodoModel');

mongoose.connect(`mongodb://localhost:27017`,{ useNewUrlParser : true })
    .then((err,res) => {

        console.log('mongodb connected successfully');

        socketIO.on('connection',async (socket) => {

            console.log("Socket Connected");

            const todoCollection = await TodoModel.getTodos();

            socket.emit('get-todos',{ todos : todoCollection });


            socket.on('insert-todo',async (data) => {

                await TodoModel.insertTodo(data);

                const todoCollection = await TodoModel.getTodos();

                socket.emit('get-todos',{ todos : todoCollection  })
            })
        })

        

    })
    .catch(err => console.log(err))


    app.listen(4123,() => {
        console.log("Server is running in port 4123");
    })