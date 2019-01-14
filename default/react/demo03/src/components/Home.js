import React ,{Component} from 'react';
import PropTypes from 'prop-types';
class Home extends Component {
    constructor(props) {
        super(props);
        console.log({...this.props})
        this.state = {  };
    }
    static get defaultProps(){
        return {
            name:'王菲',
            tel:'19901990'
        }
    }
    static propTypes = {
        name:PropTypes.string,
        tel:PropTypes.string,
    }
    // printProps(){
    //   console.log(this.props);
    // }
    render() {
        const {name,tel} = this.props;
        return (
            <div>
                <h1>name:{name}</h1>
                <h1>tel:{tel}</h1>
                <input type={'button'} ></input>
            </div>
        );
    }
}

export default Home;
