import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HiddenMessage from "modules/test/components/HiddenMessage";

test('show the children when checkbox is checked', () => {
    const testMessage = 'Test message';

    render(<HiddenMessage>{testMessage}</HiddenMessage>);
    expect(screen.queryByText(testMessage)).toBeNull();
    fireEvent.click(screen.getByLabelText(/show/i));
    expect(screen.getByText(testMessage)).toBeInTheDocument();
});
