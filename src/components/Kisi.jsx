import React, { Component } from 'react';

class Kisi extends Component {
    
    render() {
        return (
            
            <span key={this.props.kisi.id}>
                 <button onClick={this.props.deleteKisi}>sil</button>
                <span>{this.props.kisi.ad}</span> 
                |<span>{this.props.kisi.soyad}</span>
            </span>
        );
    }
}

export default Kisi;