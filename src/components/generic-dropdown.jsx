import React from 'react';

import './generic-dropdown.scss';

export const AdminDD = ({ ddItems, selectedItem, isError, handleItemclick, showDDItems, handleDDClick, handleDDBlur, arrowAnimation, className, itemsContainerClassName }) => {
    return (
        <div tabIndex="0" onBlur={handleDDBlur} className={`${className} order-dropdown ${isError ? "order-dropdown-error" : ""} ${showDDItems === null ? "" : (showDDItems ? "dd-open" : "dd-close")}`} onClick={handleDDClick}>
            <div className="arrow-down-container">
                <div className="placeholder" >{selectedItem && selectedItem.name ? selectedItem.name : ""}</div>
                <img className={`arrow-down ${arrowAnimation ? "arrow-down-animation" : "arrow-down-no-animation"}`} src="/images/admin-dd-arrow-down.svg" />
            </div>

            <div className={`dropdown-items ${itemsContainerClassName}`} >
                {ddItems.map(item =>
                    <div key={item.key} className={selectedItem && item.value === selectedItem.value ? "selected-item" : undefined} onClick={() => { handleItemclick(item) }}>{item.name}</div>
                )}
            </div>
        </div>

    );
}