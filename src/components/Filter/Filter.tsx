import React from "react";

type FilterProps = {
    onInputChange: (searchTerm: string) => void;
};

function Filter({ onInputChange }: FilterProps) {
    return (
        <>
            <input
                className="rounded-md w-3/12 h-10"
                type="text"
                placeholder="  Search Here"
                aria-label="search-input"
                onChange={(e) => {
                    onInputChange(e.target.value);
                }}
            />
        </>
    );
}

export default Filter;
