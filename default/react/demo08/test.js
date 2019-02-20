class App extends Component{
    state = {
        val:1
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                val:1
            })
        },2000)
    }
    render(){
        ...
    }
}
