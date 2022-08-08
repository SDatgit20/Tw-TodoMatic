import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
  render(<App/>);
  expect(linkElement).toBeInTheDocument();
});