import React, { Component } from 'react';

class Toplama extends Component {
    constructor(){
            super();
            this.state={sayi1:0,sayi2:0,toplam:0}
    }

    setSayi1=(event)=>
    {
        this.setState(
            {
                sayi1:parseInt(event.target.value)
            },()=>{
                this.topla()
            });
        
    }
    setSayi2=(event)=>
    {
        this.setState(
            {
                sayi2:parseInt(event.target.value)
            },()=>{
                this.topla()
            }
            );
       
        
       // this.topla();
    }
    topla=()=>{
        this.setState({toplam:this.state.sayi1+this.state.sayi2});
    }

    render() {
        return (
            <div>
                <input onChange={this.setSayi1} type='text'/>+
                <input onChange={this.setSayi2} type='text'/>=
                <button onClick={this.topla}>topla</button>
                <span>{this.state.toplam}</span>
            </div>
        );
    }
}

export default Toplama;