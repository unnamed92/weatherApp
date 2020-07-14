import React from "react";

interface SliderI {
  value?: number;
  onChangeCallback: any;
}

const Slider: React.FC<SliderI> = (props): JSX.Element => {
  const { value, onChangeCallback } = props;
  return (
    <input
      type="range"
      min="-50"
      max="100"
      value={value}
      onChange={(event) => onChangeCallback(event.target.value)}
    />
  );
};

export default Slider;
