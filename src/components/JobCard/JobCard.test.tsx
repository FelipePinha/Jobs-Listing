import { render, screen } from '@testing-library/react';
import { JobCard } from '.';
import { FilterContext } from '../../contexts/FilterContext';

describe('<JobCard />', () => {
    const mockItem = {
        id: 1,
        company: 'Photosnap',
        logo: '../images/photosnap.svg',
        new: true,
        featured: true,
        position: 'Senior Frontend Developer',
        role: 'Frontend',
        level: 'Senior',
        postedAt: '1d ago',
        contract: 'Full Time',
        location: 'USA Only',
        languages: ['HTML', 'CSS', 'JavaScript'],
        tools: [],
    };

    it('should show job card when filter match', () => {
        const contextValues = {
            filter: ['HTML'],
            addToFilter: () => {},
            clearFilter: () => {},
            removeItemFromFilter: () => {},
        };
        render(
            <>
                <FilterContext.Provider value={contextValues}>
                    <JobCard item={mockItem} filterResults={['HTML']} />
                </FilterContext.Provider>
            </>
        );

        const jobCard = screen.getByTestId('job-card');

        expect(jobCard.classList).toContain('block');
    });

    it("should hidden job card when filter don't match", () => {
        const contextValues = {
            filter: ['Vue'],
            addToFilter: () => {},
            clearFilter: () => {},
            removeItemFromFilter: () => {},
        };
        render(
            <>
                <FilterContext.Provider value={contextValues}>
                    <JobCard item={mockItem} filterResults={[]} />
                </FilterContext.Provider>
            </>
        );

        const jobCard = screen.getByTestId('job-card');

        expect(jobCard.classList).toContain('hidden');
    });
});
