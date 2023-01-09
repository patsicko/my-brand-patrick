import mongoose from "mongoose";
const dbConnect=async () => {

    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('database connected')

    }catch(error){
        console.log(error.message)
    }
}

export default dbConnect;





