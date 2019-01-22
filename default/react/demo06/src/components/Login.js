import React from 'react';
import {FormGroup,ControlLabel,FormControl,Button} from 'react-bootstrap';
class Login extends React.Component{
    login(){
        const loginname = this.loginname.value;
        const password = this.password.value;
        this.props.login({loginname:loginname,password:password});
        this.loginname.value = '';
        this.password.value = '';
    }
    render(){
        return(
            <div>
                <form>
                    <FormGroup controlId="exampleForm.ControlTextarea1">
                        登陆名称
                      <FormControl as="textarea" type='text' rows="6" inputRef={ref => { this.loginname = ref; }}/>
                    </FormGroup>
                    <FormGroup controlId="exampleForm.ControlTextarea1">
                        登陆密码
                      <FormControl as="textarea" type='password' rows="6" inputRef={ref => { this.password = ref; }}/>
                    </FormGroup>
                    <Button onClick={this.login.bind(this)}>添加</Button>
                </form>
            </div>
        )
    }
}
export default Login;
