import React, { useState } from "react";

function useLoading() {
    const [isLoading, setIsLoading] = useState(false);

    function changeLoadingState() {
        setIsLoading((old) => !old);
    }
    return { isLoading, changeLoadingState };
}

export default useLoading;
