import React from "react";
import cn from 'classnames';
import './style.scss';
import {TRef} from "modules/common/types";

type TInputProps = {
    className?: string,
    placeholder?: string,
    label?: string,
};

function Input({
 className, label, placeholder = '.', ...restProps
}: TInputProps, ref: TRef) {

    return (
      <div className={cn('input', className)}>
        <label className="input__label">
          <input className="input__input" placeholder={placeholder} ref={ref} {...restProps} />
          <span className="input__label-placeholder">{label || placeholder}</span>
        </label>
      </div>
    )
}

export default React.forwardRef(Input)
