import ReactGA from "react-ga4";

// Initialize GA4
export const initAnalytics = () => {
    // Use the ID from environment variables or fallback to the provided ID
    // In a real production app, you might want to only initialize in production
    // but for this request we'll initialize if the ID is present.
    const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-KPWGXDKRPB";

    if (MEASUREMENT_ID) {
        ReactGA.initialize(MEASUREMENT_ID);
        console.log("GA4 Initialized with ID:", MEASUREMENT_ID);
    } else {
        console.warn("GA4 Measurement ID not found");
    }
};

// Track Page View
export const trackPageView = (path: string) => {
    ReactGA.send({ hitType: "pageview", page: path });
};

// Track Custom Event
interface AnalyticsEvent {
    category: string;
    action: string;
    label?: string;
    value?: number;
}

export const trackEvent = ({ category, action, label, value }: AnalyticsEvent) => {
    ReactGA.event({
        category,
        action,
        label,
        value,
    });
};
