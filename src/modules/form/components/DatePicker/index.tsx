import DayPickerInput from "react-day-picker/DayPickerInput";
import React from "react";
import 'react-day-picker/lib/style.css';
import './style.scss';
import Input from "modules/form/components/Input";
import cn from 'classnames';
import { TRef } from "modules/common/types";

type TDatePickerProps = {
    className?: string,
};

export default function DayPicker({ className }: TDatePickerProps) {
    return (
      <DayPickerInput
        classNames={{ container: cn('date-picker', className), overlayWrapper: '', overlay: '' }}
        component={React.forwardRef((props, ref:TRef) => <Input {...props} ref={ref} />)}
        inputProps={{ className: 'date-picker__input' }}
      />
    )
}
