import { useEffect, useState } from "react";

export function useIsArticleRead(slug) {
    const [hasPageHydrated, setHasPageHydrated] = useState(false);
    const [hasRead, setHasRead] = useState(true);

    useEffect(() => {
        setHasPageHydrated(true);
    }, [])

    useEffect(() => {
        if (typeof window !== "undefined") {
            const initialState = JSON.parse(localStorage.getItem(slug)) || null;
            setHasRead(initialState?.has_read ?? false);
            console.log(hasRead);
        }
    }, [hasPageHydrated])

    return [hasRead, setHasRead];
}