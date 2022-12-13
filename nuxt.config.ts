// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    buildModules: [
      'nuxt-vite',
      'nuxt-gsap-module'
    ],
    components: true,
    css: [
      'assets/index.scss'
    ], 
    app: {
      pageTransition: { name: 'page', mode: 'out-in' }
    },
  }

// module.exports = {
//   watchOptions: {
//     ignored: /node_modules/
//   }
// };