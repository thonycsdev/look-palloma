import React from "react";

type FilterProps = {
    onInputChange: (searchTerm: string) => void;
};

function Filter({ onInputChange }: FilterProps) {
    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Search Here"
                    aria-label="search-input"
                    onChange={(e) => {
                        onInputChange(e.target.value);
                    }}
                />
            </div>
        </>
    );
}

export default Filter;
