import { createContext, ReactNode, useState } from 'react';

interface FilterContextInterface {
    filter: string[];
    handleAddToFilter: (item: string) => void;
}

const initialState = {
    filter: [],
    handleAddToFilter: () => {},
};

export const FilterContext = createContext<FilterContextInterface>(initialState);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [filter, setFilter] = useState<string[]>([]);

    const handleAddToFilter = (item: string) => {
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

    return (
        <FilterContext.Provider value={{ filter, handleAddToFilter }}>
            {children}
        </FilterContext.Provider>
    );
};
