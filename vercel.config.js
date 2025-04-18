module.exports = {
  debug: true,
  redirects: [
    { source: '/admin', destination: '/admin/' },
    { source: '/api', destination: '/api/' },
  ],
  headers: [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
      ],
    },
  ],
};
