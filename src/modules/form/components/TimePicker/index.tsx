import RTimePicker from 'rc-time-picker';
import cn from 'classnames';
import React from "react";
import './styles.scss';

type TTimePickerProps = {
    className?: string,
    placeholder?: string,
};

export default function TimePicker({ className, placeholder = 'Time' }: TTimePickerProps) {
    return (
      <RTimePicker
        className={cn('time-picker', className)}
        placeholder={placeholder}
        popupClassName="time-picker__popup"
        showSecond={false}
      />
)
}
