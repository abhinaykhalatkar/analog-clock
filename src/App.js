import React, { Component } from 'react';
import style from './App.module.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
    hr:<div className={style.hr} ></div>,
    mn:<div className={style.mn} ></div>,
    sc:<div className={style.sc} ></div>
    }
  }
 moveHandler=()=>{
  setInterval(() => {let day=new Date();
    let night=(day.getHours()>=19||day.getHours()<7)?true:false;
    let mm=day.getMinutes() *6;
    let ss=day.getSeconds() *6;
    let ms=day.getMilliseconds();
    this.setState({hr:<div className={night?`${style.hr} ${style.hrn}`:`${style.hr}`} style={{transform:`rotateZ(${(day.getHours() * 30)+(mm/12)}deg)` }} ></div>}) ;
    this.setState({mn:<div className={night?`${style.mn} ${style.mnn}`:`${style.mn}`} style={{transform:`rotateZ(${mm}deg)`}} ></div>}) ;
    this.setState({sc:<div className={night?`${style.sc} ${style.scn}`:`${style.sc}`} style={{transform:`rotateZ(${(ss)+(ms/170)}deg)`}} ></div>}) }, 50);
}
themeHandler=()=>{
  //day
  let hour=new Date().getHours();
  let mainBodyColorAs="#68A3FF";
  let clockColorAs="#FFFDFF";
  let clockBorderAs="20px solid #FFFDFF";
if((hour>=19||hour<7)){
  //night
  mainBodyColorAs="#282c34";
  clockColorAs="#282c34";
  clockBorderAs="4px solid #282c34"
}
const Style={
             mainBodyColor:{backgroundColor: `${mainBodyColorAs}`}, 
             clockColor:{
                         backgroundColor: `${clockColorAs}`,
                         border: `${clockBorderAs}`
                         },
                         greetingContent:()=>{
                           if(hour>=5&&hour<12){
                          return "Morning" 
                         }else if(hour>=12&&hour<17){
                          return "Afternoon" 
                         }else if(hour>=17&&hour<20){
                          return "Evening" 
                         }else if(hour>=20||hour<5){
                          return "Night" 
                         }else {return "error";}
                        }
             }            
return Style
}
render(){
  return (
    <div className={style.mainScreen} style={this.themeHandler().mainBodyColor}>
      <h1 className={style.greeting}>Good {this.themeHandler().greetingContent()}</h1>
      <div className={style.App}>
      <div className={style.clock} style={this.themeHandler().clockColor}>
        <div className={style.hour} >
           {this.state.hr}
        </div>
        <div className={style.min} >
           {this.state.mn}
        </div>
        <div className={style.sec}> 
           {this.state.sc}
        </div> 
     </div>
      </div>
    </div> 
  )
}
componentDidMount() {
this.moveHandler();
}
}
export default App;
