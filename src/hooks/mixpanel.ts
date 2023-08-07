import mixpanel from 'mixpanel-browser';
import { PUBLIC_MIXPANEL_PROJECT_TOKEN } from '$env/static/public';

mixpanel.init(PUBLIC_MIXPANEL_PROJECT_TOKEN);

export const trackPageView = () => {
	mixpanel.track('page_view');
};

export const trackIconClick = (link: 'github' | 'linkedin' | 'email' | 'resume') => {
	mixpanel.track('icon_click', { link });
};

export const trackPortfolioView = () => {
	mixpanel.track('portfolio_view');
};
