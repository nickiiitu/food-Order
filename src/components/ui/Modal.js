import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./modal.module.css";
import React from "react";
 const Backdrop=(props)=>{
return <div className={classes.backdrop}  onClick={props.onClick}/>;

 }
 const Overlays=(props)=>{
return <div className={classes.modal}>
<div className={classes.content}>{props.children}</div>
     
</div>;
 }

 const Modal=(props)=>{
return <Fragment>
{ReactDom.createPortal(<Backdrop  onClick={props.onClick} />, document.getElementById("overlays"))}
{ReactDom.createPortal(<Overlays>{props.children}</Overlays>,document.getElementById("overlays"))}

</Fragment>
 }

 export default Modal;