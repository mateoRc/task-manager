const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

// examples:
// const myTask = new Task({
//     description: 'Wash dishes',
//     completed: false
// })

// myTask.save().then(() =>  {
//     console.log(myTask)
// }).catch((error) => {
//     console.log(error)
// })

// const me = new User({
//     name: '   Jurica3  ',
//     email: 'YURICAAA@gmail.com',
//     password: 'passWoRd',
//     age: 34
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error:', error)
// })

