const mongoose = require('mongoose');

const url = 'mongodb+srv://hashBoy:b3HCsaCZprmZWGVi@cluster0.xz0ilri.mongodb.net/CsvUpload'

async function mongo() {
        await mongoose.connect(url);
  }
mongo().then(()=>{
    console.log('Connected to mongoDB')
}).catch((error)=>{
    console.log('Unable to connect to mongoDB', error)
})
