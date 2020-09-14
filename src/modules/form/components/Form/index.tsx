import cn from 'classnames';
import React from "react";
import './style.scss';

type TFormProps = {
    className?: string,
    title?: string,
};

export default function Form({ className, title,...restProps }: TFormProps) {
    return (
      <div className={cn('form', className)}>
        <h3 className="form__title">{title}</h3>
        <form {...restProps} />
      </div>
)
}
