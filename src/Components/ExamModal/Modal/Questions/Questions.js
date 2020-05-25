import React from 'react';
import classes from './Questions.module.css';

const questions =(props)=>{
    const stsDetails=[];
    for(let details in props.stsDetails){
        stsDetails.push({
            name:details,
            values:props.stsDetails[details]
        });
    }

    const detailsOutput = stsDetails.map(detail=>{
        return <span key={detail.name}
            style={{
                display:'block',
                margin:'5px 0px',
                padding:'5px 2px'
            }}>{detail.name}: {detail.values}</span>
    })

    return(
        <div className={classes.Questions}>
            <h1>Your login Details</h1>
            <p>{detailsOutput}</p>
        </div>
    )
}

export default questions;