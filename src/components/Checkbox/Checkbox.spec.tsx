import { render } from '@testing-library/react';
import { expect } from 'vitest';
import Checkbox from './Checkbox';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Checkbox />);
    expect(baseElement).toBeTruthy();
  });

  it('should support indeterminate', async () => {
    const { getByTestId } = render(
      <Checkbox checked="indeterminate" data-testid="test-checkbox" />
    );

    expect(getByTestId('test-checkbox')).toHaveProperty('indeterminate', true);
    expect(getByTestId('test-checkbox')).toHaveProperty('checked', false);
  });

  it('should support checked', async () => {
    const { getByTestId } = render(
      <Checkbox checked={true} data-testid="test-checkbox" />
    );

    expect(getByTestId('test-checkbox')).toHaveProperty('indeterminate', false);
    expect(getByTestId('test-checkbox')).toHaveProperty('checked', true);
  });

  it('should support indeterminate', async () => {
    const { getByTestId } = render(
      <Checkbox checked={false} data-testid="test-checkbox" />
    );

    expect(getByTestId('test-checkbox')).toHaveProperty('indeterminate', false);
    expect(getByTestId('test-checkbox')).toHaveProperty('checked', false);
  });
});
