import { render, screen } from '@testing-library/react';
import { Header } from '.';
import { FilterContext } from '../../contexts/FilterContext';

describe('<Header />', () => {
    it('should hidden filter field when filter is empty', () => {
        const contextValues = {
            filter: [],
            addToFilter: () => {},
            clearFilter: () => {},
            removeItemFromFilter: () => {},
        };

        render(
            <>
                <FilterContext.Provider value={contextValues}>
                    <Header />
                </FilterContext.Provider>
            </>
        );

        const filterField = screen.getByTestId('filter-field');

        expect(filterField.classList).toContain('hidden');
    });

    it('should show filter field', () => {
        const contextValues = {
            filter: ['HTML'],
            addToFilter: () => {},
            clearFilter: () => {},
            removeItemFromFilter: () => {},
        };

        render(
            <>
                <FilterContext.Provider value={contextValues}>
                    <Header />
                </FilterContext.Provider>
            </>
        );

        const filterField = screen.getByTestId('filter-field');

        expect(filterField.classList).toContain('block');
    });
});
