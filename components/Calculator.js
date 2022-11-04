import React, { useState } from 'react';
import calculate from '../logic/calculate';

function handleClick(event, state, setter) {
    const buttonName = event.target.innerText;
    const result = calculate(state, buttonName);
    setter(result);
}

const Calculator = () => {
    const [state, setter] = useState({ total: 0, operation: null, next: null });
    const { total, next, operation } = state;
}

