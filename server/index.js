const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())
let students = [
    {id:'1',fullname: 'Weera',email: 'ballweera@gmail.com',university:'ABAC'},
    {id:'2',fullname: 'kuy',email: 'kuy@gmail.com',university:'BUU'},
    {id:'3',fullname: 'gun',email: 'gun@gmail.com',university:'BUU' }
]

//const getStudent = (req,res) => {
//   res.json(students)
//}

//app.get('/students',getStudent) ไม่นิยมเขียน

app.get('/students', (req,res) => { // นิยม
    res.json(students)
})

app.get('/students/:id', (req,res) => {// paramiter ต้อง เขียน :id
    res.json(students[req.params.id-1])
}) 

app.post('/students', (req,res) => {
    let student = req.body
    student.id = student.length +1
    res.json(student)
})

module.exports = app
