import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    {/* Not the important part of project, so just using a simple pre-built error boundary */}
    <ErrorBoundary fallback={<div>Something went wrong - oh no :(</div>}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
