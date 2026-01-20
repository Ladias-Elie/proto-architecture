import ReactGA from "react-ga4"

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
