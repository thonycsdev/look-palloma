import { useState } from "react";

export function useLoading() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSwitchLoading = () => {
        setIsLoading((old) => !old);
    };

    return { isLoading, handleSwitchLoading };
}
