import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'A frontend JS framework.'
    },
    {
        title: 'X2?',
        content: 'Y2.'
    },
    {
        title: 'X3?',
        content: 'Y3.'
    }
]

const options = [
    {
        label: 'Fire Red',
        value: 'red'
    },
    {
        label: 'Leaf Green',
        value: 'green'
    },
    {
        label: 'Sky Blue',
        value: 'blue'
    },
]

// <Accordion items={items} />
// <Search />
const AppColors = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div className="component">
            <Translate />
            <button onClick={() => setShowDropdown(!showDropdown)}>
                Toggle color dropdown
            </button>
            {showDropdown ? 
                <Dropdown 
                    options={options} 
                    label="Color Selection" 
                    selected={selected}
                    onSelectedChange={setSelected}
                >
                    <label className="label" style={{color: selected.value}}>
                        This text is {selected.value}!
                    </label>
                </Dropdown>
                : null
            }
        </div>
    );
}

export default AppColors;
