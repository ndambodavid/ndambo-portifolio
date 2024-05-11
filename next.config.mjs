/** @type {import('next').NextConfig} */
const nextConfig = {
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'styles')],
    //   },
        // images: {
        //     domains: ['media.dev.to', 'avatars.githubusercontent.com', 'github-readme-stats.vercel.app', 'github-readme-streak-stats.herokuapp.com', 'stardev.io', 'github-profile-summary-cards.vercel.app', 'github-profile-trophy.vercel.app'],
        //     dangerouslyAllowSVG: true,
        //   }
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
            },
            {
                protocol: 'https',
                hostname: 'media.dev.to'
            },
            {
                protocol: 'https',
                hostname: 'github-profile-summary-cards.vercel.app',
                pathname: "/api/cards/**"
            },
            {
                protocol: 'https',
                hostname: 'github-readme-stats.vercel.app'
            },
            {
                protocol: 'https',
                hostname: 'github-readme-streak-stats.herokuapp.com'
            },
            {
                protocol: 'https',
                hostname: 'stardev.io'
            },
            {
                protocol: 'https',
                hostname: 'github-profile-trophy.vercel.app'
            }
        ]
    }
};

export default nextConfig;
