import { render } from '@testing-library/react';

import Data from './data';

describe('Data', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Data />);
    expect(baseElement).toBeTruthy();
  });
});
