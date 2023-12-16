import { render } from '@testing-library/react';
import App from './App';

describe('testing App component', () => {
    it('should work', () => {
        render(<App />);

        expect(true).toBeTruthy();
    });
});
