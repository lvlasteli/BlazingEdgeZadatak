import React from "react";

export class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            color: "",
            black: "black",
            randomCol: "",
        };

    }
    getRandomColor() {
        const items=this.props.listofrandomcolors;
        let item = items[Math.floor(Math.random()*items.length)];
        this.setState({
            randomCol: item
        })
    }
    componentWillMount() {
        this.getRandomColor();
    }
    changeColor() {
        if(this.props.userInput) {
            this.setState({
                color: this.props.userInput
            });
        }
        else {
            //if we want to toggle between black and 1 random color
            this.getRandomColor();
            if(this.state.color===""){
                this.setState({
                    color: this.state.black
                });
            }
            else if(this.state.color==="black"){
                this.setState({
                    color: this.state.randomCol
                });
            } else {
                this.setState({
                    color: this.state.black
                });
            }
        }
        
    }
    render() {
        let comp;
        //console.log(this.props.black);
        comp = (<h2> Text Of New Component </h2>)
        return (
            <div style={{background: this.state.color}}>
                {comp}
                <button onClick={()=>this.changeColor(this.props.listofrandomcolor,'black')}>Button of New Component</button>
            </div>
            
        );
    }
};