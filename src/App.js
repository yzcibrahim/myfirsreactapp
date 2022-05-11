import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyComp from './components/MyComp';
import Toplama from './components/Toplama';
import Kisi from './components/Kisi';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      kisiler:
        [
          {
            id:1,
            ad: "ibrahim",
            soyad: "yazıcı"
          },
          {
            id:2,
            ad: "uğur",
            soyad: "köse"
          }
        ]
    };
  }
  render() {
    let ad="";
    let soyad="";
    const ekle=()=>{
        let kisiler=this.state.kisiler;
         let maxId=kisiler.length>0?kisiler[kisiler.length-1].id:0;
        //  if(kisiler.length>0)
        //  maxId=kisiler[kisiler.length-1].id;
        kisiler.push({ad:ad, soyad:soyad, id:++maxId});
       
        this.refs.ad.value="";
        this.refs.soyad.value="";
      //  this.setState({kisiler:kisiler});
        this.setState({kisiler})
    }
    const setAd=(event)=>{
      ad=event.target.value
    }
    const setSoyAd=(event)=>{
      soyad=event.target.value
    }
    const deleteKisi=(id)=>
    {
      let kisiler=this.state.kisiler.filter(c=>c.id!==id);
      this.setState({kisiler});
      alert(id);
    }
    return (<div className='App'>
     <input ref="ad" onChange={setAd} type='text'></input>
    <input  ref="soyad" onChange={setSoyAd} type='text'></input>
     <input onClick={ekle} type='button' value="kaydet"/>
     <div> {
        this.state.kisiler.map((kisiItem) => {
          return(
            <div key={kisiItem.id}>
           
            <Kisi deleteKisi={()=>{deleteKisi(kisiItem.id)}}  kisi={kisiItem} />
            </div>
          )
          // return (<div key={kisi.id}>
          //   <span>{kisi.ad}</span> | <span>{kisi.soyad}</span>
          // </div>)
        })
      }
    </div>
      {/* <MyComp /> */}
      {/* <Toplama islem="+"/>
     <Toplama islem="-"/>
     <Toplama islem="*"/>
     <Toplama islem="/"/> */}
    </div>)
  }
}

export default App;

