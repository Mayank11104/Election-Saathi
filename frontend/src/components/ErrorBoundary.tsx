import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { trackEvent } from '../utils/analytics';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    trackEvent('error_occurred', { error_message: error.message });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 text-center px-4">
          <div>
            <h1 className="text-2xl font-bold text-red-600 mb-2">Something went wrong.</h1>
            <p className="text-gray-600 mb-4">We've encountered an unexpected error and logged the issue.</p>
            <button
              className="px-4 py-2 bg-saffron text-white rounded-md hover:bg-orange-600 transition"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
