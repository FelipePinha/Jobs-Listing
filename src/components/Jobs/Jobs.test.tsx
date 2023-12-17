import { render, screen } from '@testing-library/react';
import { Jobs } from '.';

describe('<Jobs />', () => {
    it('should render jobs list', () => {
        render(<Jobs />);

        const list = screen.getByRole('list');

        expect(list).toBeInTheDocument();
    });

    it('should render list items', () => {
        const { getAllByRole } = render(<Jobs />);

        const listItems = getAllByRole('listitem');

        listItems.forEach(item => {
            expect(item).toBeInTheDocument();
        });
    });
});
