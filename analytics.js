'use strict';
(() => {
  const endpoint = '';
  const allowedCampaignFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const params = new URLSearchParams(location.search);
  const campaign = Object.fromEntries(allowedCampaignFields.map(key => [key, params.get(key)]).filter(([, value]) => value));
  try {
    if (Object.keys(campaign).length) sessionStorage.setItem('raunaqCampaign', JSON.stringify(campaign));
  } catch (error) {
    console.warn('Campaign attribution could not be stored', error);
  }

  function track(name, properties = {}) {
    const event = {
      name,
      properties: { ...campaign, ...properties },
      path: location.pathname,
      timestamp: new Date().toISOString()
    };
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...event.properties });
    window.dispatchEvent(new CustomEvent('raunaq:analytics', { detail: event }));
    if (endpoint) navigator.sendBeacon(endpoint, JSON.stringify(event));
  }

  document.addEventListener('DOMContentLoaded', () => {
    track('page_view', { page: document.body.classList.contains('mobile-page') ? 'mobile' : 'desktop' });
    document.getElementById('langSelect')?.addEventListener('change', event => track('language_change', { language: event.target.value }));
    document.getElementById('orderButton')?.addEventListener('click', () => track('begin_checkout'));
    document.getElementById('orderForm')?.addEventListener('submit', () => track('order_request_submit'));
    document.getElementById('chatToggle')?.addEventListener('click', () => track('chat_toggle'));
    document.querySelectorAll('.social-link').forEach(link => link.addEventListener('click', () => track('social_click', { channel: link.classList[1] || 'unknown' })));
  });
})();