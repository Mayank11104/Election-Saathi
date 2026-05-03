import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import App from '../../App';
import { vi } from 'vitest';

// We just need to render the components to trigger code coverage
describe('HomePage and App coverage', () => {
  beforeAll(() => {
    // Mock intersection observer for framer-motion in landing page components
    class MockIntersectionObserver {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    }
    window.IntersectionObserver = MockIntersectionObserver as any;
  });

  it('renders HomePage without crashing', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });

  it('renders App without crashing', () => {
    render(<App />);
  });
});
