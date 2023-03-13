import React from "react";
import classes from "./Environment.module.css";
export default function Environment() {
  return (
    <div className={classes.container}>
      <div className={classes.inputcontainer}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div className={classes.inputcontainer}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
      </div>
      <div className={classes.inputcontainer}>
        <label htmlFor="comp">Favorite CSS Compiler</label>
        <select id="comp">
          <option value="sass">Sass</option>
          <option value="less">Less</option>
          <option value="stylus">Stylus</option>
          <option value="postcss">PostCSS</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className={classes.inputcontainer}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div className={classes.inputcontainer}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
      </div>
      <div className={classes.inputcontainer}>
        <label htmlFor="comp">Favorite CSS Compiler</label>
        <select id="comp">
          <option value="sass">Sass</option>
          <option value="less">Less</option>
          <option value="stylus">Stylus</option>
          <option value="postcss">PostCSS</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
}
