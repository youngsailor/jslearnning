import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Button,FormGroup,FormControl,} from "react-bootstrap";
class Editor extends React.Component {
    submit() {
        let titlevalue = this.title.value;
        let contextvalue = this.context.value;
        this.props.submit({title:titlevalue,body:contextvalue});
        this.title.value = '';
        this.context.value = '';
    }
    render() {
        return (
            <div>
                <form>
                    <FormGroup controlId="exampleForm.ControlTextarea1">
                        标题
                      <FormControl as="textarea" rows="6" inputRef={ref => { this.title = ref; }}/>
                    </FormGroup>
                    <FormGroup controlId="exampleForm.ControlTextarea1">
                        正文
                      <FormControl as="textarea" rows="6" inputRef={ref => { this.context = ref; }}/>
                    </FormGroup>
                    <Button onClick={this.submit.bind(this)}>添加</Button>
                </form>
            </div>
            // <div>
            //     allowTransparency
            // </div>
        )
    }
}
export default Editor;
