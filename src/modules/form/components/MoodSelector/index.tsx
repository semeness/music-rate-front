import React, { useState } from 'react';
import cn from 'classnames';
import { moodList } from "modules/mood/helpers";
import './style.scss';
import { TMood } from "modules/mood/types";

type TMoodSelectorProps = {
    className?: string,
    initialValue?: number | null,
    onChange: (value: number) => void,
};

export default function MoodSelector({
 className, onChange, initialValue = null,
}: TMoodSelectorProps) {
    const [value, setValue] = useState(initialValue);

    const handleClick = (currentValue: number) => () => {
        setValue(currentValue);
        onChange && onChange(currentValue);
    }

    const renderMood = (mood: TMood) => (
      <div
        role="presentation"
        className={cn('mood-selector__item', { 'mood-selector__item_active': mood.value === value })}
        onClick={handleClick(mood.value)}
        key={mood.value}
      >
        <div className="mood-selector__item-visual">{mood.visual}</div>
        <div className="mood-selector__item-name">{mood.name}</div>
      </div>
    )

    return (
      <div className={cn('mood-selector', className)}>
        {moodList.map(renderMood)}
      </div>
    );
}
