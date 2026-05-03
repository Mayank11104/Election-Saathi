declare function gtag(...args: unknown[]): void;

export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, params ?? {});
  }
};

export const trackPageView = (path: string) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'G-XXXXXXXXXX', { page_path: path });
  }
};
