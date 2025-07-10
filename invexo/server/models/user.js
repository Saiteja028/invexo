
import mongoose from "mongoose"
import bcrypt from "bcryptjs"
const userSchema = mongoose.Schema({
    userName:{
        type: String,
        maxLength:20,
        minLength:3,
    },
    firstName:{
        type: String,
        maxLength:20,
        minLength:3,
        required:true
    },
    lastName:{
        type: String,
        maxLength:20,
        minLength:3,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
}, { timestamps: true });
userSchema.pre('save', function (next) {
  this.userName = `${this.firstName} ${this.lastName}`;
  next();
});
userSchema.pre('save', async function (next){
    if(!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next();
} );

userSchema.methods.comparePassword = async function (candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
}


const User = mongoose.model('User', userSchema)
export default User;
