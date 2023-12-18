import { createContext, ReactNode, useState } from 'react';

interface FilterContextInterface {
    filter: string[];
    addToFilter: (item: string) => void;
    clearFilter: () => void;
}

const initialState = {
    filter: [],
    addToFilter: () => {},
    clearFilter: () => {},
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

    const clearFilter = () => {
        setFilter([]);
    };

    return (
        <FilterContext.Provider value={{ filter, addToFilter, clearFilter }}>
            {children}
        </FilterContext.Provider>
    );
};
