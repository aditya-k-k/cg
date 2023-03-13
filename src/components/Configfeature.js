import React from "react";
import Button from "../ui/Button";
import classes from "./Configfeature.module.css";
export default function Configfeature() {
  return (
    <div className={classes.container}>
      <div className={classes.minicontainer}>
        <input type="checkbox" />
        <div className={classes.name}>Snapshot</div>
        <Button>Edit</Button>
      </div>
      <div className={classes.minicontainer}>
        <input type="checkbox" />
        <div className={classes.name}>Snapshot</div>
        <Button>Edit</Button>
      </div>
      <div className={classes.minicontainer}>
        <input type="checkbox" />
        <div className={classes.name}>Snapshot</div>
        <Button>Edit</Button>
      </div>
    </div>
  );
}
