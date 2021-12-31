import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

const colors = [
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

const App = () => {
    const [selected, setSelected] = useState(colors[0]);

    return (
        <div className="component">
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    options={colors}
                    label="Select a color"
                    selected={selected}
                    onSelectedChange={setSelected}
                >
                    <label className="label" style={{color: selected.value}}>
                        This text is {selected.value}!
                    </label>
                </Dropdown>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}

export default App;
