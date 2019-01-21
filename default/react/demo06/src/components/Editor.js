import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Button,FormGroup,FormControl,} from "react-bootstrap";
class Editor extends React.Component {
    submit() {
        let value = this.myInput.value;
        console.log(value);
        this.props.submit(value);
    }
    render() {
        return (
            <div>
                <Form>
                    <FormGroup controlId="exampleForm.ControlTextarea1">

                      <FormControl as="textarea" rows="3" inputRef={ref => { this.myInput = ref; }}/>
                    </FormGroup>
                    <Button onClick={this.submit.bind(this)}>添加</Button>
                </Form>
            </div>
            // <div>
            //     allowTransparency
            // </div>
        )
    }
}
export default Editor;
