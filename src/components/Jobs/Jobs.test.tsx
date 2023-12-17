import { render } from '@testing-library/react';
import { Jobs } from '.';

describe('<Jobs />', () => {
    it('should render list items', () => {
        const { getAllByRole } = render(<Jobs />);

        const listItems = getAllByRole('listitem');

        listItems.forEach(item => {
            expect(item).toBeInTheDocument();
        });
    });
});
