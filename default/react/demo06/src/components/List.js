import React from 'react';
import {PanelGroup,Panel} from 'react-bootstrap';

class List extends React.Component {
    render() {
        let list = this.props.list.map((item,index)=>{
            return (
                    <Panel eventKey={index}>
                        <Panel.Heading>
                          <Panel.Title toggle>{item.title}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>{item.body}</Panel.Body>
                    </Panel>
        )})
        return (
        <PanelGroup accordion id="accordion-example">
            {list}
        </PanelGroup>)
    }
}
export default List;
