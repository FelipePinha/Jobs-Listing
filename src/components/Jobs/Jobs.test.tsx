import { render, screen } from '@testing-library/react';
import { Jobs } from '.';

describe('<Jobs />', () => {
    it('should render jobs list', () => {
        render(<Jobs />);

        const list = screen.getByRole('list');

        expect(list).toBeInTheDocument();
    });
});
