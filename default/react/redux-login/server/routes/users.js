import express from 'express';
import bodyParser from 'body-parser';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';
import User from '../models/user';
import bcrypt from 'bcrypt';
import Promise from 'bluebird';

let router = express.Router();
const commonValidateInput = (data) => {
    let errors = {};
    if(validator.isEmpty(data.username)){
        errors.username = "The field is required";
    }
    if(validator.isEmpty(data.email)){
        errors.email = "The field is required";
    }
    if(!validator.isEmail(data.email)){
        errors.email = "The email is invalid";
    }

    if(validator.isEmpty(data.password)){
        errors.password = "The field is required";
    }
    if(validator.isEmpty(data.passwordConfirmation)){
        errors.passwordConfirmation = "The field is required";
    }
    if(!validator.equals(data.password,data.passwordConfirmation)){
        errors.passwordConfirmation = 'Password must match';
    }
    return{
        errors,
        isValid:isEmpty(errors)
    }
}

const validateInput = (data,otherValidations) => {
    let {errors} = otherValidations(data);
    return Promise.all([
        User.where({email:data.email}).fetch().then(user=>{
            if(user){errors.email="There is user with such email";}
        }),
        User.where({username:data.username}).fetch().then(user=>{
            if(user){errors.username="There is user with such username";}
        })
    ]).then(()=>{
        return {
            errors,
            isValid:isEmpty(errors)
        }
    })
}

router.get('/:identifier',(req,res)=>{
    User.query({
        select:["username","email"],
        where:{email:req.params.identifier},
        orWhere:{username:req.params.identifier}
    }).fetch().then(user=>{
        res.json({user})
    })
})
router.post('/',(req,res)=>{
    console.log(req.body)
    validateInput(req.body,commonValidateInput).then(({errors,isValid})=>{
        if(isValid){
            const {username,password,email} = req.body;
            const passwd_digest = bcrypt.hashSync(password,10);
            User.forge({
                username,passwd_digest,email
            },{hasTimestamps:true}).save()
            .then(user=>res.json({success:true}))
            .catch(err=>res.status(500).json({errors:err}))
        }else{
            res.status(400).json(errors);
        }
    });
    // console.log(isValid)

    // console.log(req.body);
})
export default router;
