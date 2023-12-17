import { render } from '@testing-library/react';
import { JobCard } from '.';

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

    it('should show job position', () => {
        const { getByText } = render(<JobCard item={mockItem} />);

        const jobRole = getByText('Senior Frontend Developer').textContent;

        expect(jobRole).toEqual(mockItem.position);
    });
});
