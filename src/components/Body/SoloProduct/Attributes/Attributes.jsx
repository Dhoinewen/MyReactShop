import React from 'react';
import s from './Attributes.module.css'

const Attributes = ({attributes}) => {

    console.log(attributes)
    return (
        <div>
            {attributes.map(attrib => (
                <div key={attrib.id}>
                    {attrib.name}
                </div>,
                    attrib.items.map(item =>
                            <span>
                    {item.displayValue}
                </span>
                    )
            ))}
        </div>
    );
};

export default Attributes;