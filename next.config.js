/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
    env: {
      customKey: 'my-value',
      AUTH_SECRET:'m7IH8VF/zAOWrYMOr5tc2izDZhZ1J/O0KnXADcWVGFQ='
    },
    
  }
