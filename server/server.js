const express = require('express');

const mongoose = require('mongoose');
const http = require('http');

const app = express()

// const server = http.createServer(app);

const server = app.listen(4123);

const io = require('socket.io').listen(server);

const TodoModel = require('./TodoModel');

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

mongoose.connect(`mongodb://localhost:27017/sockettodo`,{ useNewUrlParser : true })
    .then((err,res) => {

        console.log('mongodb connected successfully');

        io.sockets.on('connection',async (socket) => {

            console.log("Socket Connected");

            const todoCollection = await TodoModel.getTodos();

            io.sockets.emit('get-todos',{ todos : todoCollection });


            socket.on('insert-todo',async (data) => {

                await TodoModel.insertTodo(data);

                const todoCollection = await TodoModel.getTodos();
                console.log("todoCollection",todoCollection);
                io.sockets.emit('get-todos',{ todos : todoCollection  })
            })
        })

        

    })
    .catch(err => console.log(err))


    // app.listen(4123,() => {
    //     console.log("Server is running in port 4123");
    // })