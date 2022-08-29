import React, {useEffect, useState} from 'react';
import s from './Attributes.module.css'

const Attributes = ({attributes, setAttributes}) => {

    const [selectedAttributes, setSelectedAttributes] = useState([])


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
    const isSelectedAttrib = (attribSet, attrib) => {
        const test = selectedAttributes.find(item =>
            item.AttribSetID === attribSet.id)
        if (test === undefined) {
            return s.attribItem
        } else {
            if (test.AttribId.id === attrib.id) {
                return s.selectedAtribItem
            } else {
                return s.attribItem
            }
        }

    }

    useEffect(() => {
        setAttributes(selectedAttributes)
    }, [selectedAttributes])


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
                                      style={{background: item.value}} className={isSelectedAttrib(attrib, item)}
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