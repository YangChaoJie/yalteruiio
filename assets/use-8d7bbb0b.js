import{_ as p}from"./ValaxyMain-17c99044.js";import{_ as h,c as d,w as s,o as y,a as e,b as l,d as o,r as a,e as m,p as D}from"./app-862f2d3d.js";import"./index-7850dc9a.js";const V=JSON.parse('{"title":"Use Theme","description":"","frontmatter":{"title":"Use Theme","title_zh-CN":"使用主题","categories":["Theme"],"top":100},"headers":[{"level":2,"title":"安装主题","slug":"安装主题","link":"#安装主题","children":[]},{"level":2,"title":"Install Theme","slug":"install-theme","link":"#install-theme","children":[]},{"level":2,"title":"启用主题","slug":"启用主题","link":"#启用主题","children":[]},{"level":2,"title":"Enable Theme","slug":"enable-theme","link":"#enable-theme","children":[]},{"level":2,"title":"主题配置","slug":"主题配置","link":"#主题配置","children":[]},{"level":2,"title":"Theme Config","slug":"theme-config","link":"#theme-config","children":[]}],"relativePath":"pages/themes/use.md","path":"/Users/yangchaojie/Downloads/study/iOS/YAlterUI/packages/valaxy-docs/pages/themes/use.md","lastUpdated":1681105209000}'),i=JSON.parse('{"title":"Use Theme","description":"","frontmatter":{"title":"Use Theme","title_zh-CN":"使用主题","categories":["Theme"],"top":100},"headers":[{"level":2,"title":"安装主题","slug":"安装主题","link":"#安装主题","children":[]},{"level":2,"title":"Install Theme","slug":"install-theme","link":"#install-theme","children":[]},{"level":2,"title":"启用主题","slug":"启用主题","link":"#启用主题","children":[]},{"level":2,"title":"Enable Theme","slug":"enable-theme","link":"#enable-theme","children":[]},{"level":2,"title":"主题配置","slug":"主题配置","link":"#主题配置","children":[]},{"level":2,"title":"Theme Config","slug":"theme-config","link":"#theme-config","children":[]}],"relativePath":"pages/themes/use.md","path":"/Users/yangchaojie/Downloads/study/iOS/YAlterUI/packages/valaxy-docs/pages/themes/use.md","lastUpdated":1681105209000}'),f={name:"pages/themes/use.md",data(){return{data:i,frontmatter:i.frontmatter}},setup(){D("pageData",i)}},C={lang:"zh-CN",id:"安装主题",tabindex:"-1"},F={lang:"en",id:"install-theme",tabindex:"-1"},u=e("div",{class:"language-bash"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"npm"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"i"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#C3E88D"}},"valaxy-theme-yun")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"# pnpm add valaxy-theme-yun")]),l(`
`),e("span",{class:"line"})])])],-1),g={lang:"zh-CN",id:"启用主题",tabindex:"-1"},A={lang:"en",id:"enable-theme",tabindex:"-1"},_=e("div",{lang:"zh-CN"},[e("p",null,[l("配置 "),e("code",null,"theme"),l(" 字段为主题名称，如 "),e("code",null,"yun"),l("。")])],-1),v=e("div",{lang:"en"},[e("p",null,[l("Configure the "),e("code",null,"theme"),l(" field as the theme name, such as "),e("code",null,"yun"),l(".")])],-1),b=e("div",{class:"language-ts"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"// valaxy.config.ts")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"defineConfig"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"valaxy"),e("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#82AAFF"}},"defineConfig"),e("span",{style:{color:"#A6ACCD"}},"("),e("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"theme"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"yun"),e("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#A6ACCD"}},")")]),l(`
`),e("span",{class:"line"})])])],-1),k={lang:"zh-CN",id:"主题配置",tabindex:"-1"},T={lang:"en",id:"theme-config",tabindex:"-1"},$=e("div",{lang:"zh-CN"},[e("p",null,[l("参见对应主题文档，配置 "),e("code",null,"themeConfig"),l("。")])],-1),x=e("div",{lang:"en"},[e("p",null,[l("Refer to the corresponding theme documentation, configure "),e("code",null,"themeConfig"),l(".")])],-1),E=e("div",{class:"language-ts"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#676E95","font-style":"italic"}},"// valaxy.config.ts")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#A6ACCD"}},"defineConfig"),e("span",{style:{color:"#F07178"}}," "),e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"valaxy"),e("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#82AAFF"}},"defineConfig"),e("span",{style:{color:"#A6ACCD"}},"("),e("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"theme"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#C3E88D"}},"yun"),e("span",{style:{color:"#89DDFF"}},"'"),e("span",{style:{color:"#89DDFF"}},",")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#F07178"}},"themeConfig"),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"    "),e("span",{style:{color:"#676E95","font-style":"italic"}},"// ...")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"}"),e("span",{style:{color:"#A6ACCD"}},")")]),l(`
`),e("span",{class:"line"})])])],-1);function N(n,U,z,B,c,I){const t=m,r=p;return y(),d(r,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":s(()=>[e("h2",C,[l("安装主题 "),o(t,{class:"header-anchor",href:"#安装主题","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),e("h2",F,[l("Install Theme "),o(t,{class:"header-anchor",href:"#install-theme","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),u,e("h2",g,[l("启用主题 "),o(t,{class:"header-anchor",href:"#启用主题","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),e("h2",A,[l("Enable Theme "),o(t,{class:"header-anchor",href:"#enable-theme","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),_,v,b,e("h2",k,[l("主题配置 "),o(t,{class:"header-anchor",href:"#主题配置","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),e("h2",T,[l("Theme Config "),o(t,{class:"header-anchor",href:"#theme-config","aria-hidden":"true"},{default:s(()=>[l("#")]),_:1})]),$,x,E]),"main-header":s(()=>[a(n.$slots,"main-header")]),"main-header-after":s(()=>[a(n.$slots,"main-header-after")]),"main-nav":s(()=>[a(n.$slots,"main-nav")]),"main-content":s(()=>[a(n.$slots,"main-content")]),"main-content-after":s(()=>[a(n.$slots,"main-content-after")]),"main-nav-before":s(()=>[a(n.$slots,"main-nav-before")]),"main-nav-after":s(()=>[a(n.$slots,"main-nav-after")]),comment:s(()=>[a(n.$slots,"comment")]),footer:s(()=>[a(n.$slots,"footer")]),aside:s(()=>[a(n.$slots,"aside")]),"aside-custom":s(()=>[a(n.$slots,"aside-custom")]),default:s(()=>[a(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const j=h(f,[["render",N]]);export{V as __pageData,j as default};
