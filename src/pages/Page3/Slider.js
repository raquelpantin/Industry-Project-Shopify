import * as React from 'react';
import { Slider} from 'react-compound-slider'


const marks = [
  {
    value: 0,
    label: '0$',
  },
  {
    value: 5000,
    label: '5000$',
  }
];

function valuetext(value) {
  return `${value}$`;
}

export default function DiscreteSliderLabel() {
  return (
      <Slider
        aria-label="Always visible"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={250}
        marks={marks}
        valueLabelDisplay="on"
      />
  );
}