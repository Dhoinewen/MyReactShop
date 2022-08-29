import React from 'react';
import s from './HeaderCartAttributes.module.css'

const HeaderCartAttributes = ({product}) => {


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
                                    style={{background: item.value}}
                                    key={item.id}
                                    className={isSelectedAttrib(attrib, item)}
                                >
                                    {item.displayValue}
                                </span>
                            )}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default HeaderCartAttributes;