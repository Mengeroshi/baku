import React from 'react';
import { TextField, Slider, Chip, Button } from "@mui/material";
import styles from './Registration.module.scss';
export const Registration = () => {
    const [percentage, setPercentage] = React.useState(50);

    const handleSlider = (e) =>{
        setPercentage(e.target.value);
    }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Crowdloan Registration</h1>
      <div className={styles.form}>
        <h2 className="titleSection">Project</h2>
        <TextField id="name" label="Name" variant="outlined" />
        <TextField
          id="description"
          label="Description"
          placeholder="What yout project is about?"
          multiline
          minRows={3}
        />
        <div className={styles.sliderContainer}>
          <label className={styles.label}>Tokens to be distributed (%) </label>
          <Slider
            aria-label="Token percentage"
            classes={{root:styles.slider}}
            value={percentage}
            onChange={handleSlider}
          />
          <Chip label={`${percentage} %`} variant="outlined" />
        </div>
        <h2 className="titleSection">Stake</h2>
        <TextField id="amount" label="Amount" variant="outlined" helperText="minimun amount: 300 LEOS" />
        <Button
            classes={{contained: styles.button}}
         variant="contained">Stake LEOS</Button>
      </div>
    </div>
  );
};
