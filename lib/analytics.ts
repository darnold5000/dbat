type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(event: string, payload: AnalyticsPayload = {}) {
  try {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...payload });
    if (typeof window.gtag === "function") {
      window.gtag("event", event, payload);
    }
  } catch {
    // Analytics must fail silently.
  }
}

export const analyticsEvents = {
  bookLesson: "book_lesson_click",
  bookInstructor: "book_instructor_click",
  bookCage: "book_cage_click",
  campRegistration: "camp_registration_click",
  membershipSignup: "membership_signup_click",
  membershipManage: "membership_manage_click",
  phone: "phone_click",
  directions: "directions_click",
  contactStart: "contact_form_start",
  contactSubmit: "contact_form_submit",
  birthdaySubmit: "birthday_form_submit",
  social: "social_click",
} as const;
