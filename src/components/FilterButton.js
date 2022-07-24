import React from 'react';

const FilterButton = (props) => {
    const filterItems = props.items;

    const filterCategory = (e, val) => {
        e.preventDefault();
        props.filterItem(val);
    }

    const fetchInv = (e) => {
        e.preventDefault();
        props.fetchInv();
    }

    return (
        <div className = "d-flex justify-content-center mb-5">
            {filterItems.map((val, id) => {
                return(
                    <button className="btn btn-dark text-white p-1 px-2 mx-5 btn fw-bold" key={id} onClick={(e) => filterCategory(e, val)} >{val ? 'Available' : 'Not Available'}</button>
                );
            })}
            <button className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn" onClick={(e) => fetchInv(e)}>All</button>
        </div>
    );
}

export default FilterButton;