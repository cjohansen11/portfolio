import mixpanel from 'mixpanel-browser';
import { PUBLIC_MIXPANEL_PROJECT_TOKEN } from '$env/static/public';

mixpanel.init(PUBLIC_MIXPANEL_PROJECT_TOKEN);

export const trackPageView = () => {
	mixpanel.track('page_view');
};
