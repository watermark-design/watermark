import{a1 as r,v as i,a2 as u,a3 as c,a4 as l,a5 as d,a6 as f,a7 as m,a8 as h,a9 as _,aa as A,ab as v,d as P,u as g,j as E,z as y,ac as R,ad as w,ae as C,af as D}from"./chunks/framework.oym_DJrd.js";import{t as T}from"./chunks/theme.UMga-vkf.js";const b={...T,enhanceApp:async({app:e,router:t,siteData:a,isServer:n})=>{r(()=>import("./chunks/index.hZriFBty.js"),__vite__mapDeps([0,1])).then(o=>{e.use(o)}),r(()=>import("./chunks/index.n36y_ucX.js"),__vite__mapDeps([2,1])).then(o=>{e.use(o.default)})}};function p(e){if(e.extends){const t=p(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=p(b),L=P({name:"VitePressApp",setup(){const{site:e}=g();return E(()=>{y(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&R(),w(),C(),s.setup&&s.setup(),()=>D(s.Layout)}});async function O(){const e=V(),t=S();t.provide(c,e);const a=l(e.route);return t.provide(d,a),t.component("Content",f),t.component("ClientOnly",m),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:h}),{app:t,router:e,data:a}}function S(){return _(L)}function V(){let e=i,t;return A(a=>{let n=v(a),o=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),o=r(()=>import(n),__vite__mapDeps([]))),i&&(e=!1),o},s.NotFound)}i&&O().then(({app:e,router:t,data:a})=>{t.go().then(()=>{u(t.route,a.site),e.mount("#app")})});export{O as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/index.hZriFBty.js","assets/chunks/framework.oym_DJrd.js","assets/chunks/index.n36y_ucX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}