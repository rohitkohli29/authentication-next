import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface UserModel extends Document {
    // Define your user model fields here
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}
const userSchema = new mongoose.Schema<UserModel>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword : {
        type: String,
        required: true
    }
}, { timestamps: true });

// Hash the password 
userSchema.pre('save', async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
    }

    return next();
});

// compare the hash password
userSchema.methods.verifyPassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
}

let UserModel: mongoose.Model<UserModel>;

try {
    UserModel = mongoose.model('User') as mongoose.Model<UserModel>;
} catch (error) {
    UserModel = mongoose.model('User', userSchema) as mongoose.Model<UserModel>;
}

export default UserModel;
