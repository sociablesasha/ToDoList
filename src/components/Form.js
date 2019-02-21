import React from 'react';
import './Form.css';

const Form = ({ value, select, onChange, onCreate, onKeyPress, onSelect }) => {
    return (
        <div className="form">
            <select onChange={onSelect} value={select}>
                <option value=""></option>
                <option value="!">!</option>
                <option value="!!">!!</option>
                <option value="!!!">!!!</option>
            </select>
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onCreate}>추가</button>
        </div>
    );
};

export default Form;