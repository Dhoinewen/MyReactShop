import React, {useState} from 'react';
import s from './Attributes.module.css'

const Attributes = ({attributes}) => {

    const [selectedAttributes, setSelectedAttributes] = useState([])

    console.log(selectedAttributes)

    const addToSelectedAttrib = (attribSet, attrib) => {
        if (selectedAttributes.find(item => item.AttribSetID === attribSet.id) === undefined) {
            setSelectedAttributes([...selectedAttributes, {AttribSetID: attribSet.id, AttribId: attrib}])
        } else {
            setSelectedAttributes(prevState =>
                prevState.map(item =>
                    item.AttribSetID === attribSet.id
                        ? {...item, AttribId: attrib}
                        : item
                ))
        }
    }

    return (
        <div>
            {attributes.map(attrib => (
                    <div key={attrib.id}>
                        <div className={s.attribName}>
                            {attrib.name}:
                        </div>
                        <div className={s.attribItems}>
                            {attrib.items.map(item =>
                                <span onClick={() => addToSelectedAttrib(attrib, item)}
                                      style={{background: item.value}} className={s.attribItem}
                                      key={item.id}>{item.displayValue}
                            </span>)}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Attributes;