import React from "react"

type buttonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, id:number)=>void
    children:string
}

export const Button =(parms:buttonProps) => {
    return(
        <button onClick={(event) => parms.handleClick(event,1) }></button>
    )
}


/*
import React, { Component, MouseEvent } from 'react';

export class Button extends Component {
  handleClick(event: MouseEvent) {
    event.preventDefault();
    alert(event.currentTarget.tagName); // alerts BUTTON
  }
  
  render() {
    return <button onClick={this.handleClick}>
      {}
    </button>
  }
}
*/