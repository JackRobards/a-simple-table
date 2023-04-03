import 'vitest-axe/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { expect } from 'vitest';
import { axe } from 'vitest-axe';
import * as matchers from 'vitest-axe/matchers';
import App from './app';

expect.extend(matchers);

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App skipLoading />);
    expect(baseElement).toBeTruthy();
  });

  it('should be accessible', async () => {
    const { baseElement } = render(<App skipLoading />);

    // Setup issue with toHaveNoViolations, where it needs to be extended in each test file
    expect(await axe(baseElement)).toHaveNoViolations();
  });

  it('should render data in the table', async () => {
    const { getByText } = render(<App skipLoading />);

    expect(getByText('smss.exe').tagName.toLowerCase()).toBe('td');
  });

  it('should render data in the table', async () => {
    const { getByText } = render(<App skipLoading />);

    expect(getByText('smss.exe').tagName.toLowerCase()).toBe('td');
  });

  it('should display None Selected when no rows are selected', async () => {
    const { getByText } = render(<App skipLoading />);

    expect(getByText('None Selected')).toBeDefined();
  });

  it('should display the selected count when a row is selected', async () => {
    const { getByText, queryByText } = render(<App skipLoading />);

    expect(getByText('None Selected')).toBeDefined();
    expect(queryByText('Selected 1')).toBeNull();

    fireEvent.click(getByText('netsh.exe'));

    expect(queryByText('None Selected')).toBeNull();
    expect(getByText('Selected 1')).toBeDefined();
  });

  it('should not support clicking scheduled status items', async () => {
    const { getByText, queryByText } = render(<App skipLoading />);

    expect(getByText('None Selected')).toBeDefined();
    expect(queryByText('Selected 1')).toBeNull();

    fireEvent.click(getByText('smss.exe'));

    expect(getByText('None Selected')).toBeDefined();
    expect(queryByText('Selected 1')).toBeNull();
  });

  it('should allow you to select all available items at once', async () => {
    const { getByText, queryByText, getByLabelText } = render(
      <App skipLoading />
    );

    expect(getByText('None Selected')).toBeDefined();
    expect(queryByText('Selected 2')).toBeNull();

    fireEvent.click(getByLabelText('Select all'));

    expect(queryByText('None Selected')).toBeNull();
    expect(getByText('Selected 2')).toBeDefined();
  });
});
