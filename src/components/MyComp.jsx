import React from 'react';
import { ReactDOM } from 'react';
import './mycomp.css';


class MyComp extends React.Component {
   
    constructor(){
        console.log("constructor çalıştı");
        super();
        this.state={
            degisken:"ben componentimmmmm",
            name:"ibrahim",
            toplam:0,
            val1:0,
            val2:0
        }
    }
    componentDidMount()
    {
        console.log("componentDidMount çalıştı");
    }
    sthfunctin=()=>{
        console.log("asd");
    }
    
    render() {
        const changedegisken=()=>{
            console.log("cnage deisken çalıştı");
            this.setState({degisken:"degisti"});
            ddd="asd";
    }
    const changeName=(event)=>{
        this.setState({name:event.target.value});
    }

    const changeVal1=(event)=>{
        this.setState(
            {
                val1:parseInt(event.target.value),
                toplam:this.state.val2+parseInt(event.target.value)
            }
            );
    }
    const changeVal2=(event)=>{
        this.setState(
            {
                val2:parseInt(event.target.value),
                toplam:this.state.val1+parseInt(event.target.value)
            }
            );
    }
    
        let ddd="ben componentim";
        console.log("render executed");
        return (
            <div>
                <button onClick={this.sthfunctin} >changeme</button>
                <input type='text' onChange={changeVal1}/>+
                <input type='text' onChange={changeVal2}/>=
                <span>{this.state.toplam}</span>
            </div>
        );
    }
}

export default MyComp;