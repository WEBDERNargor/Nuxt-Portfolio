// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig:{
    public:{
      website_name:"Nargor"
    }
  },
css:['~/assets/css/input.css'],
  
  app:{
    head:{
      title:"Nargor",
      htmlAttrs: {
        lang: 'th'
      },
      link:[
        {href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',rel:'stylesheet'},
        {href:'/images/apple-touch-icon.png',size:'180x180',rel:'apple-touch-icon' },
        {href:'/images/favicon-32x32.png',size:'32x32',rel:'icon',type:"image/png"},
        {href:'/images/favicon-16x16.png',size:'16x16',rel:'icon',type:"image/png"},
        {href:'/images/favicon.ico',rel:'icon',type:"image/x-icon"},
        
      ],
      meta:[
       
        {name:"viewport",content:"width=device-width, initial-scale=1.0"},
        {charset:"UTF-8"},
        {"http-equiv":"Content-Type",content:"text/html; charset=utf-8"},
        {name:"description",content:"555"},
        {name:"publisher",content:"Nargor"},
        {name:"author",content:"Nargor"},
        {name:"keywords",content:"หัวขวด,จ้วด"},
        {property:"og:title",content:"Nargor"},
        {property:"og:description",content:"Website shop"},
        {property:"og:image",content:"/images/android-chrome-512x512.png"},
        {property:"og:type",content:"website"},
        {property:"og:url",content:"https://www.tomtamshop.com"},
        {property:"twitter:card",content:"summary_large_image"},
        {property:"twitter:url",content:"https://www.tomtamshop.com"},
        {property:"twitter:title",content:"Nargor"},
        {property:"twitter:description",content:"Website shop"},
        {property:"twitter:image",content:"/images/android-chrome-512x512.png"},
        
      ],
    },
    
  },
  modules: [
    '@nuxtjs/tailwindcss'
]
})