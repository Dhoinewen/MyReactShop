import React, {useState} from 'react';
import s from './Attributes.module.css'

const Attributes = ({attributes}) => {

    const [selectedAttributes, setSelectedAttributes] = useState([])


    console.log(selectedAttributes)

    const addToSelectedAttrib = (attribSet, attrib) => {
        // console.log(attribSet, attrib)
        let selectedAttribSet = {AttribSetID: attribSet.id, AttribId: attrib}
        // console.log(selectedAttribSet)
        setSelectedAttributes([...selectedAttributes, selectedAttribSet])
    }

    const EditColName = () => {
        const testArray = selectedAttributes
        testArray[1] = 1
        setSelectedAttributes(testArray)

    }


    return (
        <div>
            {attributes.map(attrib => (
                    <div key={attrib.id}>
                        <div className={s.attribName}>
                            {attrib.name}:
                        </div>
                        <div className={s.attribItems}>
                            {attrib.items.map(item => <span onClick={() => addToSelectedAttrib(attrib, item)}
                                                            style={{background: item.value}} className={s.attribItem}
                                                            key={item.id}>{item.displayValue}</span>)}
                            <button onClick={() => EditColName()}>make some
                                aboba
                            </button>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Attributes;