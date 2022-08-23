import React from 'react';
import s from './Attributes.module.css'

const Attributes = ({attributes}) => {


    return (
        <div>
            {attributes.map(attrib => (
                    <div key={attrib.id}>
                        <div className={s.attribName}>
                            {attrib.name}
                        </div>
                        <div className={s.attribItems}>
                            {attrib.items.map(item => <span style={{background: item.value}} className={s.attribItem}
                                                            key={item.id}>{item.displayValue}</span>)}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Attributes;