/** @type {import('next').NextConfig} */
const nextConfig = {  
  images:{
    formats:['image/avif','image/webp'],
    remotePatterns:[
      {
        protocol:'https',
        hostname:"images.tokopedia.net",
      },
      {
        protocol:'https',
        hostname:"gtjqsdralcuqyzubtgsb.supabase.co",
      },
    ]
  }
}

module.exports = nextConfig
