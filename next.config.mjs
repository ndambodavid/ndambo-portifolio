/** @type {import('next').NextConfig} */
const nextConfig = {
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'styles')],
    //   },
    //   images: {
    //     domains: ['res.cloudinary.com', 'media.dev.to']
    //   }
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
            },
            {
                protocol: 'https',
                hostname: 'media.dev.to'
            }
        ]
    }
};

export default nextConfig;
