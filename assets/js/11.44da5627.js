(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{462:function(t,e,o){t.exports=o.p+"assets/img/image-20210115105205553.6671addb.png"},463:function(t,e,o){t.exports=o.p+"assets/img/image-20210115105250792.ff9d3c22.png"},464:function(t,e,o){t.exports=o.p+"assets/img/image-20210115105422909.93c2abc7.png"},465:function(t,e,o){t.exports=o.p+"assets/img/image-20210115105524088.911be6bb.png"},534:function(t,e,o){"use strict";o.r(e);var s=o(27),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"实施监督系统对接基础信息平台统一登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实施监督系统对接基础信息平台统一登录"}},[t._v("#")]),t._v(" 实施监督系统对接基础信息平台统一登录")]),t._v(" "),s("p",[t._v("方案一: 整个实施监督系统前后台由平台网关代理,后台修改接口,前端无需修改")]),t._v(" "),s("p",[t._v("方案二: 前后台修改")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("后台调用平台提供的接口同步平台用户信息")])]),t._v(" "),s("li",[s("p",[t._v("后台修改或新增登录接口,通过平台提供的"),s("code",[t._v("connid")]),t._v("和"),s("code",[t._v("token")]),t._v("校验用户信息进行系统登录(具体校验规则询问陈艳平)")])]),t._v(" "),s("li",[s("p",[t._v("前端集成网关探针文件,使用"),s("code",[t._v("script")]),t._v("标签在 head 下引入登录 js 库文件")])]),t._v(" "),s("li",[s("p",[t._v("修改登录逻辑")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在系统初始化时调用 GreatWall.sso 接口,获取用户信息(此时若没有登录,可以跳转到平台登录页登录)")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:o(462),alt:"获取平台用户信息"}})]),t._v(" "),s("li",[s("p",[t._v("对比接口返回的用户信息和本地 cookie 保存的用户信息是否一致")]),t._v(" "),s("ul",[s("li",[t._v("如果一致,则表示本地保存用户信息有效")]),t._v(" "),s("li",[t._v("如果信息不一致,则需要清除本地保存的用户信息并将新的用户信息写入本地 cookie")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:o(463),alt:"判断cookie信息是否有效"}})]),t._v(" "),s("li",[s("p",[t._v("读取最新的用户信息,使用"),s("code",[t._v("connid")]),t._v("和"),s("code",[t._v("token")]),t._v("调用后台提供的接口,登录实施监督信息系统,若登录失败,则清理本地信息并重新跳转到基础信息平台登录页面")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:o(464),alt:"使用新接口登录"}})]),t._v(" "),s("li",[s("p",[t._v("用户登出时调用 GreatWall.logout 接口,清除用户信息并重新跳转到平台登录页面")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:o(465),alt:"用户登出"}})])])]),t._v(" "),s("li",[s("p",[t._v("接入平台代理服务时,需要提供平台用户 cookie 信息,在开始调用 sso 接口时,平台已经将 cookie 信息写入浏览器.")]),t._v(" "),s("ul",[s("li",[t._v("针对 ArcGIS API,我们需要将平台 IP 端口地址配置进可信服务列表(esriConfig.request.trustedServers)")]),t._v(" "),s("li",[t._v("真的一般的 ajax 请求,我们需要设置允许携带 cookie")]),t._v(" "),s("li",[t._v("针对新版本浏览器的 samesite 策略,平台将 token 写入本地 localStroage 并添加自定义请求头,所以系统在清理 localStroage 时注意过滤名为"),s("code",[t._v("greatwall-token")]),t._v("的值.")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);