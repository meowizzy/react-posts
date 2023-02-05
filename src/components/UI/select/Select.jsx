import React from 'react';
import './Select.module.scss';

export default function Select({ options, defaultValue, value, onChange }) {
  return (
    <select value={value} onChange={event => onChange(event.target.value)}>
        <option disabled={value === ''} value="">{defaultValue}</option>
        {
            options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )
        }
    </select>
  )
}
