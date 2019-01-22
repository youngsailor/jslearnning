import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Button,FormGroup,FormControl,ControlLabel} from "react-bootstrap";
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
                      <ControlLabel>标题</ControlLabel>
                      <FormControl as="textarea" rows="6" inputRef={ref => { this.title = ref; }}/>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                      <ControlLabel>正文</ControlLabel>
                      <FormControl bsSize="small" componentClass="textarea" placeholder="textarea" inputRef={ref => {this.context=ref;}}/>
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
