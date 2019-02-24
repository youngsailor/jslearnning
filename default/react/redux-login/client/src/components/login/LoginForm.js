import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import validateInput from '../../utils/validations/login'
import {connect} from 'react-redux';
import {login} from '../../actions/authActions';
import {withRouter} from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            identifier:'',
            password:'',
            errors:{},
            isLoading:false
        }
    }
    static propTypes = {
        login:PropTypes.func.isRequired
    }
    onChange = (e) =>{
        console.log(e.target)
        this.setState({
            // username:e.target.value
            //中括号表示内部为属性名的计算表达式，可实现动态属性名
            [e.target.name]:e.target.value
        })
    };
    isValid = () =>{
        const {errors,isValid} = validateInput(this.state);
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }
    onSubmit=(e) =>{
        console.log('nihao')
        e.preventDefault();
        if(this.isValid()){
            this.setState({errors:{},isLoading:true})
            this.props.login(this.state).then(
                (res)=>{
                    console.log('succes....',res);
                    this.props.history.push('/')
                },
                (err)=>{
                    console.log(err.response);
                    this.setState(
                        {errors:err.response.data.errors,isLoading:false}
                    )
                }
            )
        }
    }
    render () {
        const {errors,identifier,password,isLoading} = this.state;
        return(
            <form onSubmit={(e)=>this.onSubmit(e)}>
                <h1>Login</h1>
                {errors.form && <div className="alert alert-danger">{errors.form}</div>}
                <div className="form-group">
                    <label className="control-label">Username / Email</label>
                    <input value={identifier} onChange={(e)=>this.onChange(e)} type="text" name="identifier" className={classnames("form-control",{'is-invalid':errors.identifier})}/>
                    {errors.identifier && <span className='form-text text-muted'>{errors.identifier}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input value={password} onChange={(e)=>this.onChange(e)} type="password" name="password" className={classnames("form-control",{'is-invalid':errors.password})}/>
                    {errors.password && <span className='form-text text-muted'>{errors.password}</span>}
                </div>
                <div className="form-group">
                    <button disabled={isLoading} className="btn btn-primary btn-lg">
                    Login
                    </button>
                </div>
            </form>
        )
    }
}

export default connect(null,{login})(withRouter(LoginForm));
