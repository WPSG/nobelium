const BLOG = {
  title: process.env.TITLE,
  author: process.env.AUTHOR,
  email: process.env.EMAIL,
  link: process.env.LINK,
  description: process.env.DESCRIPTION,
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#18181B', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2020, // If leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: true,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: true, // The automatically collapsed navigation bar
  ogImageGenerateURL: process.env.OG_URL, // The link to generate OG image, don't end with a slash
  socialLink: process.env.SOCIALLINK,
  seo: {
    keywords: ['ROC', 'Pensieve', 'Blog', 'Notion-Blog', 'Website', 'Notion', 'Nobelium'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: process.env.ANALYTICS_PROVIDER, // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: process.env.ACKEE_TRACKER, // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: process.env.DATA_ACKEE_SERVER, // e.g https://ackee.craigary.net , don't end with a slash
      domainId: process.env.ACKEE_DOMAIN_ID // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: process.env.COMMENT_PROVIDER, // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    },
    utterancesConfig: {
      repo: ''
    },
    cusdisConfig: {
      appId: process.env.CUSDIS_APPID, // data-app-id
      host: process.env.CUSDIS_HOST, // data-host, change this if you're using self-hosted version
      scriptSrc: process.env.CUSDIS_SCRIPTSRC // change this if you're using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
