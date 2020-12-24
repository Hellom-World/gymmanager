module.exports = {
    all(callback){

        db.query(`SELECT * FROM instructors`, function(err, results){
            if(err) return res.send("Database Error!")

            callback(results.rows)
        })

    },s

    /* create(){

    } */
}