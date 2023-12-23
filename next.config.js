/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
    // trim off `<owner>/`
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

    assetPrefix = `/${repo}/`
    basePath = `/${repo}`
}


const nextConfig = {
    output: 'export',

    /**
     * Set base path. This is usually the slug of your repository.
     *
     * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
     */
    basePath,
    assetPrefix: assetPrefix,


    /**
     * Disable server-based image optimization. Next.js does not support
     * dynamic features with static exports.
     *
     * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
     */
    images: {
        unoptimized: true,
        // loader: '',
        // path: '',

    },
}

module.exports = nextConfig
