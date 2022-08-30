import React, {useEffect, useState} from 'react';
import s from './CartAttributes.module.css'

const CartAttributes = ({product, changeAttrib}) => {

    const [selectedAttributes, setSelectedAttributes] = useState(product.selectedAttributes)
    const [changedProduct, setChangedProduct] = useState(product)

    useEffect(() => {
        let newObject = {
            ...changedProduct,
            selectedAttributes: selectedAttributes
        }
        setChangedProduct(newObject)
    }, [selectedAttributes])


    useEffect(() => {
        changeAttrib(changedProduct)
    }, [changedProduct])


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
        const test = product.selectedAttributes.find(item => item.AttribSetID === attribSet.id)
        if (test !== undefined) {
            if (test.AttribId.id === attrib.id) {
                return s.selectedAtribItem
            } else {
                return s.attribItem
            }
        } else {
            return s.attribItem
        }

    }


    return (
        <div>
            {product.attributes.map(attrib => (
                    <div key={attrib.id}>
                        <div className={s.attribName}>
                            {attrib.name}:
                        </div>
                        <div>
                            {attrib.items.map(item =>
                                <span
                                    onClick={() => addToSelectedAttrib(attrib, item)}
                                    style={{background: item.value, color: item.value}}
                                    key={item.id}
                                    className={isSelectedAttrib(attrib, item)}
                                >
                                    {item.value}
                                </span>
                            )}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default CartAttributes;