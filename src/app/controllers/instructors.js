const { age } = require('../../lib/utils')
const db = require('../../config/db')
const Instructor = require ('../models/Instructor')

module.exports = {
    index(req, res){
        
        Instructor.all(function(instructors) {
            return res.render("instructors/index", {instructors})
    
        })

    },
    create(req, res){
        return res.render('instructors/create')
    },
    post(req, res){
        const keys = Object.keys(req.body)

        for(key of keys) {
            if (req.body[key] == ""){
                return res.send('Please, fill all fields!')
            }
        }
        
        Instructor.create(req.body, function(instructor) {
            return res.redirect(`/instructors/${instructor.id}`)
        })

        
    },
    show(req, res){
        Instructor.find(req.params.id, function (instructor){
            if (!instructor) return res.send("Instructor no found!")

            instructor.age = age(instrutor.birth)
            instructor.services = instructor.services.split(",")

            instructor.create_at = date(instructor.created_at).format

            return res.render("instructors/show", { instrutor })
        })
    },                
    edit(req, res){
        Instructor.find(req.params.id, function (instructor){
            if (!instructor) return res.send("Instructor no found!")

            instructor.birth = date(instrutor.birth).iso

            return res.render("instructors/edit", { instrutor })
        })
    },   
    put(req, res){
        const keys = Object.keys(req.body)

        for(key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!")
            }
        }

        Instructor.update(req.body, function() {
            return res.redirect(`/instructors/${req.body.id}`)
        })        
    },   
    delete(req, res){
        Instructor.delete(req.body, function(){
            return res.redirect(`/instructors`)
        })
    }   
}

                    


