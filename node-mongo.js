const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'

MongoClient.connect(url).then((client) => {
    console.log('connected to the server\n')
    const db = client.db('mydb')

    db.collection('tb1').insertOne({"_id":3,"name":"Nk"}).then((res)=>{
        console.log('\n')
        console.log(res)
        console.log('\n')
        return db.collection('tb1').find({}).sort({_id:-1}).toArray()
    })
    .then((res)=>{
        console.log(res)
        console.log('\n')
        return db.collection('tb1').find({}).sort({_id:1}).toArray()
    })
    .then((res)=> {
        console.log(res)
        console.log('\n')
        client.close()
    })
})
.catch((err) => console.log(err))
