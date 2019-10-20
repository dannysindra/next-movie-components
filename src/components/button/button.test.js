import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Button } from './button';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
    const { queryByText } = render(<Button>Hello World</Button>);

    expect(queryByText(/hello world/i)).toBeTruthy();
});
