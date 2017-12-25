/**
 * Created by jmccommas on 12/24/17 10:35 AM*/
import React from 'react';
import classes from './BuildControl.css'

const BuildControl = (props) => (
	<div>
		<div className={classes.BuildControl}>
			<div className="classes.label">{props.label}</div>
			<button className={classes.Less}>less</button>
			<button className={classes.More}>more</button>
		</div>
	</div>


);




export default BuildControl;
