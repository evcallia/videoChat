console.log("Model Loaded");

// var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [
            true, 'First name is required'
        ],
        trim: true,
        minlength: 2
    },
    lastName: {
        type: String,
        required: [
            true, 'Last name is required'
        ],
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        trim: true,
        required: [
            true, 'Email is required'
        ],
        uinque: true,
        validate: {
            validator: function(val) {
                return /^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(val);
            },
            message: "Email is invalid"
        }
    },
    password: {
        type: String,
        required: [
            true, 'Password is required'
        ],
        minlength: 8,
        maxlength: 32,
        validate: {
            validator: function(val) {
                // return /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&]{8,32}/.test(val);
                return true; //TESTING PURPOSES
            },
            message: "Password must have at least 1 number, uppercase and special character"
        }
    },
    passwordConfirmation: {
        type: String,
        validate:{
            validator: function(val){
                return val == this.password;
            },
            message: "Password confirmation must match password"
        }
    }
    // birthday:{
    //     type: Date,
    //     required: [true, 'Birthday is required'],
    //     max: [Date(new Date()), 'Bithday must be in the past']
    // }
}, {timestamps: true})

// UserSchema.pre('save', function(done){
//   this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
//   this.passwordConfirmation = null;
//   done();
// });


mongoose.model('User', UserSchema);
var User = mongoose.model('User');

//************** RELATIONSHIPS ****************

// var Schema = mongoose.Schema;
// var MessageSchema = new mongoose.Schema({
//     name: {type: String,required: true,minlength:4},
//     message: {type: String, required: true},
//     comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
// }, {timestamps: true})
//
// var CommentSchema = mongoose.Schema({
//     name: {type: String, required: true, minlength:4},
//     comment: {type: String, required: true},
//     _message: {type: Schema.Types.ObjectId, ref: 'Message', required: true}
// }, {timestamps: true});
//
// mongoose.model('Message', MessageSchema);
// mongoose.model('Comment', CommentSchema);
