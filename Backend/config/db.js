import mongoose from "mongoose";


const connectDb = async()=>{

try {

    const conn = await mongoose.connect(process.env.MONGO_URI)
   console.log(`Conneceted  DB succfully ${conn.connection.name}`);
    
} catch (error) {

    console.log('error',error);
    
    
}

   
   


}

export default connectDb