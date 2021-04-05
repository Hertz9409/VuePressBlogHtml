(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{497:function(t,s,a){"use strict";a.r(s);var r=a(27),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"web-workers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-workers"}},[t._v("#")]),t._v(" Web Workers")]),t._v(" "),a("p",[t._v("JavaScript 是单线程的,因为这一特点,我们有了异步方法,任务队列,宏任务,微任务这些概念.")]),t._v(" "),a("p",[t._v("但是随着计算机硬件的发展,家用电脑都已经 8 核 16 线程了,而 JS 依然只能单线程运行,这是对资源的极大浪费:).")]),t._v(" "),a("p",[t._v("于是,HTML5 标准中,定义了 Web Worker 这一规范来让 JS 程序实现多线程,占用更多的资源.")]),t._v(" "),a("p",[t._v("那么,我们在什么情况下使用 Web Worker 呢?")]),t._v(" "),a("h2",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),a("ol",[a("li",[t._v("当我们需要进行复杂运算,需要花费大量时间时")])]),t._v(" "),a("p",[t._v("目前来说,当我们遇到这种问题时都会使用一个最简单粗暴的办法,直接整个页面加一个 loding 蒙板,禁止用户操作,等待计算完成.这种方式在用户体验上是很糟糕的,如果计算时间久了,用户会选择右上角关闭网页的.")]),t._v(" "),a("p",[t._v("而如果我们使用 Web Worker 技术,就可以将计算放到其他线程(后台),用户依然可以操作界面,等到计算成功,通过消息提醒用户查看计算结果.目前实施监督系统基线的审查成果包上传就是这么实现的,上传成果包时不影响用户进行其他操作.")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("服务的心跳检测,精确的计时工具等")])]),t._v(" "),a("p",[t._v("就像 windows 系统一样,将很多后台任务作为独立线程隐藏运行.我们也可以将很多和主线程没有太大关系的功能独立为一个个单独的子线程去运行,这样主线程的操作不会影响这些功能,这些功能的运行也不会阻塞主线程.")]),t._v(" "),a("p",[t._v("那么,Web Worker 又是怎么使用的呢?")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h3",{attrs:{id:"主线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主线程"}},[t._v("#")]),t._v(" 主线程")]),t._v(" "),a("h4",{attrs:{id:"创建-worker-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-worker-对象"}},[t._v("#")]),t._v(" 创建 Worker 对象")]),t._v(" "),a("p",[t._v("主线程调用"),a("code",[t._v("new Worker(aURL, options)")]),t._v("构造函数,创建一个 worker 线程,Worker 构造函数参数为一个 js 文件的 url 地址.\nurl 地址可以直接是一个"),a("code",[t._v("网络地址")]),t._v(",也可以是"),a("code",[t._v("由 Blob 转换来的 url 地址")]),t._v(".\n当 url 地址为"),a("code",[t._v("网络地址")]),t._v("时,"),a("code",[t._v("脚本地址必须与主线程脚本文件同源")]),t._v(".")]),t._v(" "),a("p",[a("code",[t._v("options")]),t._v("可选参数包括"),a("code",[t._v("type")]),t._v(","),a("code",[t._v("credentials")]),t._v(","),a("code",[t._v("name")]),t._v("三个参数,大多数情况下,我们不需要设置.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://...js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'worker线程 todo ...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" blob "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createObjectURL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" worker "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Worker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"主线程与-worker-线程通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主线程与-worker-线程通信"}},[t._v("#")]),t._v(" 主线程与 Worker 线程通信")]),t._v(" "),a("p",[t._v("主线程和 worker 线程之间通过"),a("code",[t._v("postMessage()")]),t._v("方法来发送消息,并通过"),a("code",[t._v("onmessage")]),t._v("方法来接收消息(传递的信息包含在 Message 事件的 data 属性内),传输的是数据的副本(经过序列化),不直接共享数据.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("worker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nworker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmessage")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'主线程接收到的数据'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"主线程关闭-worker-线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主线程关闭-worker-线程"}},[t._v("#")]),t._v(" 主线程关闭 worker 线程")]),t._v(" "),a("p",[t._v("worker 线程创建后,会一直运行,所以我们在完成计算后,需要关闭 worker 线程.")]),t._v(" "),a("p",[t._v("一旦调用此方法,worker 线程会立即停止,哪怕代码还没执行完.")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("worker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("terminate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"监听-worker-线程错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监听-worker-线程错误"}},[t._v("#")]),t._v(" 监听 worker 线程错误")]),t._v(" "),a("p",[t._v("Worker 有两个监听错误的方法,一个是"),a("code",[t._v("onerror")]),t._v(",这个方法监听的是 worker 线程内部执行发生的错误,还有一个是"),a("code",[t._v("onmessageerror")]),t._v(",这个方法监听的是 worker 线程消息发送的错误,例如参数序列化失败等.")]),t._v(" "),a("h3",{attrs:{id:"worker-线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#worker-线程"}},[t._v("#")]),t._v(" Worker 线程")]),t._v(" "),a("p",[t._v("我们可以在 worker 线程中运行任意代码,但是需要注意,我们不能直接在 worker 线程中操作 DOM 元素或者使用 window 对象中的某些方法和属性(通过 WorkerGlobalScope 暴露了部分 window 对象的属性和方法,像 URL 方法就不可用).")]),t._v(" "),a("p",[t._v("worker 线程也是可以使用 ajax 来进行网络请求的,只是"),a("code",[t._v("XMLHttpRequest")]),t._v(" 的 "),a("code",[t._v("responseXML")]),t._v("(XML 格式的响应) 和 "),a("code",[t._v("channel")]),t._v(" 这两个属性的值将总是 "),a("code",[t._v("null")])]),t._v(" "),a("p",[t._v("worker 线程也是可以另外创建新的 worker 线程的,这些新创建的 worker 线程与 worker 线程的宿主线程相同.")]),t._v(" "),a("p",[t._v("在 worker 线程内部,标准定义了一个关键字"),a("code",[t._v("self")]),t._v(",这个对象返回 Worker 的全局作用域,一些 Worker 内部特有的方法,可以通过此对象来调用.包括上面提到的和主线程通信会使用到的"),a("code",[t._v("postMessage")]),t._v(","),a("code",[t._v("onmessage")]),t._v(","),a("code",[t._v("onmessageerror")]),t._v("等方法.")]),t._v(" "),a("h4",{attrs:{id:"关闭线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭线程"}},[t._v("#")]),t._v(" 关闭线程")]),t._v(" "),a("p",[t._v("不同于主线程使用的方法,在 worker 线程内部关闭线程调用的是"),a("code",[t._v("close")]),t._v("方法.")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"在-worker-中加载-js-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-worker-中加载-js-脚本"}},[t._v("#")]),t._v(" 在 worker 中加载 js 脚本")]),t._v(" "),a("p",[a("code",[t._v("importScripts")]),t._v("方法可以将一个或者多个脚本同时导入到 worker 线程的作用域中.脚本的下载顺序不固定,但是执行顺序是按照导入顺序来的.")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("importScripts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"transferable-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transferable-objects"}},[t._v("#")]),t._v(" Transferable objects")]),t._v(" "),a("p",[t._v("上面讲到,主线程与 web worker 线程之间是通过 postMessage 进行通信的,并且遵循"),a("code",[t._v("传值不传址")]),t._v("的原则,那么如果遇到主线程需要将一个 1G 的数据交给 worker 线程计算的情况,那么这种通信逻辑势必会造成极大的性能消耗和资源浪费,甚至会存在序列化失败的情况.针对这个问题,有一个新的 api 被提出.")]),t._v(" "),a("p",[t._v("这个 api 只是一个标签,用来指示对象在特定场合下,对数据所有权的传递转变,比如通过"),a("code",[t._v("Worker.postMessage()")]),t._v("方法传递到 Worker 时就可使用.\n"),a("code",[t._v("ArrayBuffer")]),t._v(","),a("code",[t._v("MessagePort")]),t._v("和"),a("code",[t._v("ImageBitmap")]),t._v("实现了此接口.也就是说,面对上面那个 1G 的数据,我们可以使用此特性.此时 postMessage 的语法有所不同"),a("code",[t._v("myWorker.postMessage(aMessage, transferList)")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-Javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ab "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("byteLength"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 100")]),t._v("\nworker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("byteLength"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n")])])]),a("p",[t._v("注意,上述方法不是数据的复制,而是数据所有权的传递,一旦主线程执行此方法,那么主线程不再可以读取和修改此数据,此数据所有权在 worker 线程.")]),t._v(" "),a("h2",{attrs:{id:"sharedworker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sharedworker"}},[t._v("#")]),t._v(" SharedWorker")]),t._v(" "),a("p",[t._v("一种 WebWorker 的特殊情况.一般情况下,浏览器一个页面就有一个 js 线程,那么这个 js 线程创建的 worker 线程应该只和该线程有关.")]),t._v(" "),a("p",[t._v("SharedWorker 线程是一种可以在多个浏览器页面之间共享的线程.")]),t._v(" "),a("p",[t._v("在使用方式上是类似的.依然是主线程实例化,获取 SharedWorker 实例.\n但是这时,我们得通过 SharedWorker 实例的 "),a("code",[t._v("port")]),t._v(" 属性获取一个 "),a("code",[t._v("MessagePort")]),t._v(" 对象,使用此对象来对共享 worker 进行控制")]),t._v(" "),a("p",[t._v("而共享线程内部,必须使用 "),a("code",[t._v("onconnect")]),t._v(" 方法监听主线程和工作线程的连接,只有连接上以后,我们才能通过 "),a("code",[t._v("onconnect")]),t._v(" 事件的 "),a("code",[t._v("ports")]),t._v(" 属性获取到与该 worker 相关联的端口,才能传递消息.")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myWorker "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShareWorker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://...js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyWorker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyWorker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmessage")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// shared worker")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onconnect")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmessage")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("MessagePort")]),t._v("除了 "),a("code",[t._v("postMessage")]),t._v(" 方法,还有"),a("code",[t._v("start")]),t._v("(开启主线程与共享线程的连接,当使用 "),a("code",[t._v("addEventListener")]),t._v(" 方法监听 message 消息时,需要显式调用此方法),"),a("code",[t._v("close")]),t._v("(关闭主线程与共享线程的连接)方法")]),t._v(" "),a("h2",{attrs:{id:"web-worker-message-消息队列管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-worker-message-消息队列管理"}},[t._v("#")]),t._v(" Web Worker message 消息队列管理")]),t._v(" "),a("p",[t._v("由于 WebWorker 执行的主要是耗时计算,所以我们要控制 message 的请求频次,最好在上次执行完成后,WebWorker 返回计算结果回执消息了,再进行下一次请求,并且在计算过程中接收到请求时进行 drop 处理.")]),t._v(" "),a("h2",{attrs:{id:"样例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样例"}},[t._v("#")]),t._v(" 样例")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://mdn.github.io/simple-web-worker/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Worker"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://mdn.github.io/simple-shared-worker/",target:"_blank",rel:"noopener noreferrer"}},[t._v("shared Worker"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://codepen.io/hertz9409/pen/VwjPYYq?editors=1111",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);