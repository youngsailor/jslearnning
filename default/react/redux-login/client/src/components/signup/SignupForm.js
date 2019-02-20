import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withRouter} from 'react-router-dom';

class SignupForm extends React.Component {
    state = {
        username:'',
        email:'',
        password:'',
        passwordConfirmation:'',
        errors:{},
        isLoading:false
    }
    static propTypes = {
        userSignupRequest: PropTypes.func.isRequired,
        addFlashMessage:PropTypes.func.isRequired
    };
    onChange = (e) =>{
        console.log(e.target)
        this.setState({
            // username:e.target.value
            //中括号表示内部为属性名的计算表达式，可实现动态属性名
            [e.target.name]:e.target.value
        })
    };
    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        // axios.post('/api/users',{user:this.state})
        // 如果存在react-thunk中间件，那么在connect之前会执行一次action函数，并赋值给同名的action函数（相当于执行了一次action函数，又返回给了自己），connect之后还会附加一个同名的
        // dispatch函数，所以this.props.userSignupRequest这里直接调用，就可以直接触发action了。
        this.setState({errors:{},isLoading:true})
        this.props.userSignupRequest(this.state).then(
            ()=>{
                this.props.addFlashMessage({
                    type:"success",
                    text:"You signed up successfully.Welcome"
                })
                {/*跳转到首页*/}
                this.props.history.push("/");
            },
            ({response}) =>{
                console.log(response)
                this.setState({errors:response.data,isLoading:false})
                console.log(this.state)
            }
        )
        // console.log(this.props.userSignupRequest);
    }
    render () {
        const {errors} = this.state;
        return(
            <form onSubmit={(e)=>this.onSubmit(e)}>
                <h1>Join our community</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input value={this.state.username} onChange={(e)=>this.onChange(e)} type="text" name="username" className={classnames("form-control",{'is-invalid':errors.username})}/>
                    {errors.username && <span className='form-text text-muted'>{errors.username}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input value={this.state.email} onChange={(e)=>this.onChange(e)} type="email" name="email" className={classnames("form-control",{'is-invalid':errors.email})}/>
                    {errors.email && <span className='form-text text-muted'>{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input value={this.state.password} onChange={(e)=>this.onChange(e)} type="password" name="password" className={classnames("form-control",{'is-invalid':errors.password})}/>
                    {errors.password && <span className='form-text text-muted'>{errors.password}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">PasswordConfirmation</label>
                    <input value={this.state.passwordConfirmation} onChange={(e)=>this.onChange(e)} type="password" name="passwordConfirmation" className={classnames("form-control",{'is-invalid':errors.passwordConfirmation})}/>
                    {errors.passwordConfirmation && <span className='form-text text-muted'>{errors.passwordConfirmation}</span>}
                </div>
                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                    Sign up
                    </button>
                </div>
            </form>
        )
    }
}

export default withRouter(SignupForm);
