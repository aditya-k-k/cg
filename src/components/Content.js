import React from 'react'
import Button from '../ui/Button'
import Configfeature from './Configfeature'
import classes from './Content.module.css'
import Environment from './Environment'
import { useState } from 'react'
export default function Content() {
  const [point,changepoint]=useState(1);

  const onTEClickHandler=()=>{
    changepoint(1);
  }
  const onFClickHandler=()=>{
    changepoint(0);
  }
  const onBackClickHandler=()=>{
    changepoint(1);
  }
  const onNextClickHandler=()=>{
    changepoint(0);
  }
  return (
    <div className={classes.testEnvironment}>
      <Button className={classes.button} onClick={onTEClickHandler}>Test Environment</Button>
      <Button className={classes.button} onClick={onFClickHandler}>Features</Button>
       <div className={classes.line}></div>
       {point ? <Environment/> : <Configfeature/>}
       <div className={classes.container}>
        <Button disabled={point? true:false} onClick={onBackClickHandler}>Back</Button>
        {point===1 ? <Button onClick={onNextClickHandler}>Next</Button> : <Button>Submit</Button>}
       </div>
       <div className={classes.line}></div>
    </div>
  )
}
