import mongoose from 'mongoose';
const { Schema, model } = mongoose;

interface IUser {
    username: string,
    password: string,
    email: string,
    role: string,
}

const userSchema  = new Schema<IUser>({
    username: String,
    password: String,
    email: String,
    role: String,
});

const User = model<IUser>('User', userSchema);

export {User};
