export const config = {
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'jeffemuodafe124@gmail.com',
    phonePrimary: import.meta.env.VITE_CONTACT_PHONE_PRIMARY || '+234 805 258 7419',
    phoneSecondary: import.meta.env.VITE_CONTACT_PHONE_SECONDARY || '+234 901 704 8791',
    location: import.meta.env.VITE_CONTACT_LOCATION || 'Lagos, Nigeria',
  },
  social: {
    linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/jefferyonome',
    github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/jefferyonome',
    twitter: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/jefferyonome',
  },
  site: {
    url: import.meta.env.VITE_SITE_URL || 'https://jefferyonome.dev',
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || '/api/v1',
  },
} as const;
