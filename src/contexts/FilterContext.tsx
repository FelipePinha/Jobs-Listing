import { createContext, ReactNode, useState } from 'react';

interface FilterContextInterface {
    filter: string[];
    addToFilter: (item: string) => void;
    clearFilter: () => void;
    removeItemFromFilter: (item: string) => void;
}

const initialState = {
    filter: [],
    addToFilter: () => {},
    clearFilter: () => {},
    removeItemFromFilter: () => {},
};

export const FilterContext = createContext<FilterContextInterface>(initialState);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [filter, setFilter] = useState<string[]>([]);

    const addToFilter = (item: string) => {
        const itemFound = filter.find(language => language === item);

        if (itemFound) {
            return;
        }

        setFilter(state => {
            const newArray = [...state];
            newArray.push(item);
            return newArray;
        });
    };

    const removeItemFromFilter = (item: string) => {
        const newFilter = filter.filter(lang => lang !== item);
        setFilter(newFilter);
    };

    const clearFilter = () => {
        setFilter([]);
    };

    return (
        <FilterContext.Provider value={{ filter, addToFilter, clearFilter, removeItemFromFilter }}>
            {children}
        </FilterContext.Provider>
    );
};
