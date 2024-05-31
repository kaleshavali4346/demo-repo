import React,{Component} from "react";          

class ClassComp extends Component{
    // a class comp has to must an should inherit inbuilt class called Component
    constructor(){
        super();
        this.state={
            name:"Jet-airways",
            date:"2 oct",
            price:"5000",
        };
    }

    render(){
        //a class component will have one render function whiich will return one html element
        return(

            <div>
            <h1>I am Class component</h1>
            <p>{this.state.name}</p>
            </div>
        )
    }
}

export default ClassComp;
