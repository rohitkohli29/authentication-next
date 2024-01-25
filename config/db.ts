import mongoose from "mongoose";
const URI = "mongodb://127.0.0.1:27017/auth-app";

export const connectMongodb = async () => {
    try {
        await mongoose.connect(URI).then(
            () => {
                console.log("Connected to MongoDB");
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )
    } catch (error) {
        console.log(error);
    }
}
