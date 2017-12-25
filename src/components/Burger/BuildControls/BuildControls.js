/**
 * Created by jmccommas on 12/24/17 9:52 AM*/
import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const Controls =[
	{label:'Salad',type:'salad'},
	{label:'Bacon',type:'bacon'},
	{label:'Cheese',type:'cheese'},
	{label:'SMeat',type:'meat'},
]

const BuildControls = (props) => (
	<div className={classes.BuildControls}>
		{
			Controls.map(ctrl=>(
				<BuildControl key={ctrl.label} label={ctrl.label}/>
			))
		
		}
	
	</div>


);




export default BuildControls;
