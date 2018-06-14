import React, { Component } from 'react';

class Landingpage extends Component {
  render() {
    return (
      <div className="slider fullscreen">
    <ul className="slides">
     <li>
       <img src={"https://images.unsplash.com/photo-1528338495407-98e71a80f2a6?ixlib=rb-0.3.5&s=13391c9d9c287d3691e5b81ca0833d5f&auto=format&fit=crop&w=1724&q=80"} alt="by-Steve-Roe"/>
       <div className="caption center-align">

         <h3>Welcome!</h3>
         <h5 className="light grey-text text-lighten-3">Photo by Steve Roe | Bucheon-si, South Korea</h5>
       </div>
     </li>
     <li>
       <img src={"https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-0.3.5&s=2e98e353e6da3a429f2b43f04d675285&auto=format&fit=crop&w=1650&q=80"}alt="by-Jase-Bloor"/>
       <div className="caption left-align">
         <h3>React JS</h3>
         <h5 className="light grey-text text-lighten-3">Photo by Jase Bloor | Kyoto, Japan</h5>
       </div>
     </li>
     <li>
       <img src={"https://images.unsplash.com/photo-1526942617995-8c629e716da7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjF9&s=7ef0ad01e790069565799cb502060572&auto=format&fit=crop&w=1500&q=80"}alt="by-Steve-Roe"/>
       <div className="caption right-align">
         <h3>Materialize CSS</h3>
         <h5 className="light grey-text text-lighten-3">Photo by Steve Roe | Seoul, South Korea</h5>
       </div>
     </li>
     <li>
       <img src={"https://images.unsplash.com/photo-1501560379-05951a742668?ixlib=rb-0.3.5&s=7b58ebf4978762578c7d287b86826e56&auto=format&fit=crop&w=1500&q=80"}alt="by-Alex-Knight" />
       <div className="caption center-align">
         <h3>Font Awesome 5!</h3>
         <h5 className="light grey-text text-lighten-3">Photo by Alex Knight | Shibuya, Japan</h5>
       </div>
     </li>
    </ul>
    </div>
    )
  }
}

export default Landingpage;
