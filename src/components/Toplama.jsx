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
        let {sayi1,sayi2,toplam}=this.state;
        let {islem}=this.props;
       
       // toplam=eval(this.state.sayi1+ this.props.islem+ this.state.sayi2);
       toplam=eval(sayi1+ islem+ sayi2);
        // if(this.props.islem=="+")
        // {
        //     toplam=this.state.sayi1+this.state.sayi2;
        // }
        // else if(this.props.islem=="-")
        // {
        //     toplam=this.state.sayi1-this.state.sayi2;
        // }
        // else if(this.props.islem=="*")
        // {
        //     toplam=this.state.sayi1*this.state.sayi2;
        // }
        // else if(this.props.islem=="/")
        // {
        //     toplam=this.state.sayi1/this.state.sayi2;
        // }
        
      //  this.setState({toplam:toplam});
      this.setState({toplam});
    }
   
    render() {
        let {toplam}=this.state;
        let {islem}=this.props;
        console.log(this.props.islem);
        return (
            <div>
                <input onChange={this.setSayi1} type='text'/>{islem}
                <input onChange={this.setSayi2} type='text'/>=
                <button onClick={this.topla}>topla</button>
                <span>{toplam}</span>
            </div>
        );
    }
}

export default Toplama;