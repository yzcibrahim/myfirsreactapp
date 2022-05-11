import React, { Component } from 'react';

class Kisi extends Component {
    
    render() {
        return (
            <div key={this.props.kisi.id}>
            <span>{this.props.kisi.ad}</span> | <span>{this.props.kisi.soyad}</span>
          </div>
        );
    }
}

export default Kisi;