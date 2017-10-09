console.log( "==== sov2ex module: Search ====" )

import TextField from 'textfield';
import Button    from 'button';

const tempresult = `{"took": 37, "timed_out": false, "total": 5, "hits": [{"_index": "topic_v1", "_type": "topic", "_id": "367982", "_score": 139.83258, "_source": {"node": 17, "replies": 154, "created": "2017-06-12T23:19:55", "member": "kenshin", "id": 367982, "title": "为了达到完美的阅读模式这个小目标 ，我适配了 120+ 个网站，因此诞生了简悦 - 让你瞬间进入沉浸式阅读的 Chrome 扩展", "content": "好吧，这应该是我写过最长的标题了，但不是标题党... 同样，也是我业余项目中单个版本开发周期最长的一个项目。***在「信息过载」的当下，如果你有与我一样的 「阅读障碍」，本篇文章会对你所有帮助。 ***![logo]( http://ojec5ddd5.bkt.clouddn.com/logo%20bigger.png)<h1 align='center'>简悦 - SimpRead</h1>**让你瞬间进入沉浸式阅读的 Chrome 扩展，还原阅读的本质，提升你的阅读体验。**<p align='center'>   <a href='https://github.com/kenshin/simpread/releases'><img src='https://img.shields.io/badge/lastest_version-1.0.0-blue.svg'></a>   <a target='_blank' href='http://ksria.com/simpread'><img src='https://img.shields.io/badge/website-_simpread.ksria.com-1DBA90.svg'></a>   <a target='_blank' href='https://chrome.google.com/webstore/detail/%E7%AE%80%E6%82%A6-simpread/ijllcpnolfcooahcekpamkbidhejabll'><img src='https://img.shields.io/badge/download-_chrome_webstore-brightgreen.svg'></a>   <a href='http://ksria.com/simpread/crx/1.0.0/simpread.crx'><img src='https://img.shields.io/badge/download-_crx-brightgreen.svg'></a></p>***#### 简悦是什么：简悦是 沉浸式阅读的 Chrome 扩展，取自：「**简**单阅读，心情愉**悦**」 之意。#### 简悦解决的问题：为了避免文章开头所说的信息过载，我经常会使用「类似 Safari 中的阅读模式」，无奈 Chrome 下并没有太好的扩展，陆续使用了很多类似扩展，但这些扩展大多存在如下的一些问题：- 加载过慢，因为使用了 iframe 方案；- 某些图片无法显示，因为这些图片增加了 防盗链 功能；- 个别页面图文排版混乱，因为这些页面并没有按照常规方式生成，尤其是含有代码类的网页；所以，初衷是为了有更好的阅读体验，结果事实却往往 “打脸” 打的厉害...本着前端开发工程师的一贯 “特质”：既然没有好用的扩展，撸袖子，自己动手丰衣足食。为了避免犯同样的 “错误”，所以这个 Chrome 扩展 不能走老路，即：- 不使用 iframe 的方式，避免了 加载过慢 / 防盗链 的问题；- 生成适合 中文阅读 习惯的页面；前者很容易实现，使用 Chrome extension API: content_scripts 即可达到注入页面，并能控制页面元素的目的。后者不能按照常规的办法，因为没办法要求每个页面都按照良好的风格生成。但是，毕竟一个人经常阅读的网站就那些多，而且这些网站并不会经常更改其页面结构，所以如果能逐一适配这些网站，并且按照符合中文阅读的习惯生成页面即可。最终通过分析一些常用的阅读咨询类 网站 / App 的数据，再加上精准适配，最终诞生了标题说的内容！#### 主要功能一览：- 阅读模式； 逐一适配了 120+ 个网站，并提取 标题  描述 正文 媒体资源（ 图片 / 视频 ） 等，生成 符合中文阅读 的页面- 聚焦模式； 只高亮需要阅读，并隐藏掉其余部分，不分散用户的注意力，适合 非适配阅读模式 的网站，或者 临时阅读- 站点编辑器； 可编程，定制化，详细请看 [站点编辑器]( https://github.com/Kenshin/simpread/wiki/%E7%AB%99%E7%82%B9%E7%BC%96%E8%BE%91%E5%99%A8)- 多种主题； 白练、白磁、卯之花色、丁子色、娟鼠、月白、百合、紺鼠、黒鸢 等- 同步、上传 /下载 配置、同步适配列表等；- 稍后读；#### 截图：（视觉效果）![简单阅读，愉悦心情！]( http://ojec5ddd5.bkt.clouddn.com/visual%20effect.jpg)（阅读模式）![简悦 - 阅读模式]( http://ojec5ddd5.bkt.clouddn.com/read%20mode.png)  （阅读模式 · 控制栏界面）![简悦 - 阅读模式 · 控制栏界面]( http://ojec5ddd5.bkt.clouddn.com/read%20mode%20controlbar.png)  #### 照片集：* <http://ksria.com/simpread/gallery/>#### 详细功能：![功能一览](  )#### 如何使用（阅读模式）：简悦会自动检测当前页面是否已经适配，如适配则在浏览器右上角显示 ![Imgur](  ) ，使用以下三种方式启动：- 点击浏览器右上角 红色 icon；- 右键选择 简悦 - SimpRead → 阅读模式；- 快捷键；（默认为 双击 A )#### 如何使用（聚焦模式）：聚焦模式 会自动获取当前鼠标所在的段落并高亮，适合任意页面。- 在需要高亮的区域，右键选择 简悦 - SimpRead → 聚焦模式；- 快捷键；（默认为 A S )#### 投票：简悦是一个免费并开源的项目。如果觉得不错，请给我 [投票]( https://chrome.google.com/webstore/detail/%E7%AE%80%E6%82%A6-simpread/ijllcpnolfcooahcekpamkbidhejabll) 。这样让更多人了解并受用与 简悦 带来的便利，你的认可是对我最大的鼓励。#### 下一步：新版本的功能，大家说的算，目前包含了以下几点：- 稍后读可以直接发送到 Pocket；  - 增强型 聚焦模式；  - 自行添加新的站点到 阅读模式；  - 自定义主题；  #### 相关链接：* [更新日志]( http://ksria.com/simpread/changelog.html)* [Wiki]( https://github.com/kenshin/simpread/wiki)* [常见问题]( https://github.com/Kenshin/simpread/wiki/常见问题)* [反馈]( https://github.com/kenshin/simpread/issues)* [联系]( http://kenshin.wang) | [邮件](kenshin@ksria.com) | [微博]( http://weibo.com/23784148)#### 已知的一些问题：说了一大堆 简悦 的优点，必须要自黑一下，列举几个发现的缺陷：* 如果正文中包含了一些比较特殊的 Html + CSS 结构，在阅读模式解析下会出现样式错误，如： https://sspai.com/post/38334 无法显示下载链接。* 很多微信公众号的文章由于结构的不确定性导致很多 “垃圾图片” 无法屏蔽，如： https://mp.weixin.qq.com/s/VH7LfPyEiqAGjf8HhPlGfA#### 简悦需要你的帮助才能变得更好：如果遇到了一篇需要使用 阅读模式 的网址却没有适配怎么办？- 请提交网址 [到这里]( https://github.com/Kenshin/simpread/labels/new%20site)；当我适配完成后关闭此 issues，之后通过 简悦 → 选项 → 手动同步适配列表 更新；- 同样，你也可以直接提交已完成适配的代码，关于如何适配请看 [站点编辑器]( https://github.com/Kenshin/simpread/wiki/%E7%AB%99%E7%82%B9%E7%BC%96%E8%BE%91%E5%99%A8)；最后，如果你对 简悦 并不满意，提供给你其它一些同类产品：- Mercury Reader, Just Read, Dyslexia, 阅读模式 等等，总有一款适合你。 :)"}, "highlight": {"reply_list.content": ["@Anybfans #11给我地址，我看看，可以再远程同步增加新站，详细 https://github.com/Kenshin/<em>simpread</em>/wiki"], "postscript_list.content": ["为了方便大家沟通，我在 Telegram 上建立了群，地址 https://t.me/<em>simpread</em>"], "content": ["/logo%20bigger.png)<h1 align='center'>简悦 - <em>SimpRead</em></h1>**让你瞬间进入沉浸式阅读的"]}}, {"_index": "topic_v1", "_type": "topic", "_id": "372576", "_score": 130.95529, "_source": {"node": 17, "replies": 28, "created": "2017-07-03T00:12:45", "member": "kenshin", "id": 372576, "title": "简悦 - SimpRead 进化到了 1.0.1，带来了很多大家需要的细节定制化", "content": "1.0.1 版已经在 6 月 30 日 发布了，如果 v2 小伙伴周末也用 Chrome 的话，应该陆续收到了更新推送。***#### 简悦是什么？简悦是 沉浸式阅读的 Chrome 扩展，类似 Safari 的阅读模式；取自：「 **简**单阅读，心情愉**悦** 」 之意。  前文回顾，[猛戳这里]( https://www.v2ex.com/t/367982)#### 马上使用：[Chrome 应用商店]( https://chrome.google.com/webstore/detail/%E7%AE%80%E6%82%A6-simpread/ijllcpnolfcooahcekpamkbidhejabll) 或者 [离线下载]( http://ksria.com/simpread/crx/1.0.1/simpread.crx) ，官网 [在这里]( http://ksria.com/simpread) 以及代码托管 [在这里]( https://github.com/Kenshin/simpread)*****距离 1.0.0 发布 139 commits 之后**  ![Imgur](  )简悦进化到了 1.0.1，虽然仅仅只是 0.0.1 的变化，但带来了很多大家之前反馈的功能：- **选项页-高级设定**，点击这里 [看大图]( http://ojec5ddd5.bkt.clouddn.com/option%20labs%20full.png)  ![Option Labs](  )  * 增加 ESC 退出方式；  * 右键菜单可隐藏；  * 控制栏可隐藏 包括：聚焦模式 与 阅读模式；  * 阅读进度可隐藏；  * 当适配阅读模式时，增加 **自动进入** 以及 **排除列表**， 详细 [请看这里]( https://github.com/Kenshin/simpread/wiki/%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97%EF%BC%88-%E6%93%8D%E4%BD%9C%E6%8C%87%E5%BC%95-%EF%BC%89#%E6%8E%92%E9%99%A4%E5%88%97%E8%A1%A8)；- 适配列表增至 165 个，并且终于有了一个简陋的列表，详细请看 [这里]( https://github.com/Kenshin/simpread/wiki/%E9%80%82%E9%85%8D%E7%AB%99%E7%82%B9%E5%88%97%E8%A1%A8)；- [站点适配器]( https://github.com/Kenshin/simpread/wiki/%E7%AB%99%E7%82%B9%E7%BC%96%E8%BE%91%E5%99%A8) 增加 [minimatch]( https://github.com/Kenshin/simpread/wiki/%E7%AB%99%E7%82%B9%E7%BC%96%E8%BE%91%E5%99%A8) 方案，由 [@ksky]( https://www.v2ex.com/member/ksky) 提供；- 下载为 Markdown 格式 仅限阅读模式，由 [@ksky]( https://github.com/ksky521) 提供；- 修复了 [这些 issues]( https://github.com/Kenshin/simpread/issues?q=is%3Aissue+is%3Aclosed)更多内容请看 [更新日志]( http://ksria.com/simpread/changelog.html#1.0.1) 或 [全部功能一览]( http://ojec5ddd5.bkt.clouddn.com/feature%201.0.1.png)。以下是简悦的全部功能，左下角为 1.0.1 新增加功能。![All feature]( http://ojec5ddd5.bkt.clouddn.com/feature%201.0.1.png)***由于 7 月上旬有 15 天的假期，所以本次发布并没有给大家带来 **自行添加阅读模式** 的功能，此功能将包含在 1.1.0。最后，希望简悦一如既往地提升你的阅读体验，还原阅读本质！"}, "highlight": {"title": ["简悦 - <em>SimpRead</em> 进化到了 1.0.1，带来了很多大家需要的细节定制化"], "content": ["://chrome.google.com/webstore/detail/%E7%AE%80%E6%82%A6-<em>simpread</em>"]}}, {"_index": "topic_v1", "_type": "topic", "_id": "388202", "_score": 108.84138, "_source": {"node": 17, "replies": 41, "created": "2017-09-04T23:49:42", "member": "kenshin", "id": 388202, "title": "简悦 1.0.3，让你离知识再近一步", "content": "![Imgur](  )好吧，在标题党的路上越走越远了... 但 **简悦** 仍然一如既往的提供良好的阅读体验服务。***简悦能做什么？以及它的特点，猛击 [前文回顾]( https://www.v2ex.com/t/367982) ；想了解 1.0.3 版的故事，请 [移步这里]( https://sspai.com/post/40754)*****457 commits** 之后，简悦发布了 1.0.3 版，适配站点已经 [增至 188 个]( https://github.com/Kenshin/simpread/wiki/%E9%80%82%E9%85%8D%E7%AB%99%E7%82%B9%E5%88%97%E8%A1%A8)，同时还来了全新的功能：导出到 **Pocket · Linnk · Dropbox · Onenote · Google Drive · 印象笔记 / Evernote** 以及 **发送到 Kindle**；**自定义样式**；**论坛类页面**；**分页** 等，详细可以看 [更新日志]( http://ksria.com/simpread/changelog.html#1.0.3)***#### 简悦是什么：简悦是 沉浸式阅读的 Chrome 扩展，取自： **简** 单阅读，心情愉 **悦** 之意。#### 马上使用：简悦的官网 [在这里]( http://ksria.com/simpread)，代码开源并托管在 [Github]( https://github.com/kenshin/simpread) 上，通过 [Chrome Webstore]( https://chrome.google.com/webstore/detail/%E7%AE%80%E6%82%A6-simpread/ijllcpnolfcooahcekpamkbidhejabll) 下载 或者 [离线下载]( http://ksria.com/simpread/crx/1.0.3/simpread.crx)，现在就加入 [Telegram 群]( https://t.me/simpread) 方便沟通。#### 新增的功能：- 支持 论坛类页面 与 分页功能 如：知乎 · 百度贴吧等- 更符合 中文阅读 习惯的设置，包括：字间距 行间距 等 以及 自定义 CSS ，详细请看 [自定义样式]( https://github.com/Kenshin/simpread/wiki/自定义样式)- 丰富的导出功能，包括：  - 导出 Markdown · PNG · PDF  - 发送阅读模式优化后的页面到 Kindle，详细配置 [请看这里]( https://github.com/Kenshin/simpread/wiki/发送到-Kindle)  - 导出到 Pocket Linnk 的功能，包括：当前页面的链接 稍后读  - 导出到生产力工具，包括：Dropbox Onenote Google Drive 印象笔记 / Evernote，详细请看 [授权服务]( https://github.com/Kenshin/simpread/wiki/授权服务)以下是已存在的功能： - 阅读模式：    简悦 原创 功能，逐一适配了 [180+]( https://github.com/kenshin/simpread/wiki/适配站点列表) 个网站，自动提取 标题 描述 正文 媒体资源（ 图片 / 视频 ） 等，生成 符合中文阅读 的页面- 聚焦模式：    不改变当前页面的结构，仅仅高亮需要阅读的部分，不分散用户的注意力；适合 临时阅读 或者 未适配阅读模式 的网站- 站点编辑器：    页面任意元素，均可隐藏，可编程，定制化，详细请看 [站点编辑器]( https://github.com/kenshin/simpread/wiki/站点编辑器)- 多种主题：    白练、白磁、卯之花色、丁子色、娟鼠、月白、百合、紺鼠、黒鸢 等- 同步 · 上传 /下载 配置 · 同步适配列表 · [快捷键]( https://github.com/kenshin/simpread/wiki/faq#快捷键) 等；- 高级定制，包括：右键菜单 控制栏可隐藏 阅读进度可隐藏 自动进入阅读模式 以及 [排除列表]( https://github.com/kenshin/simpread/wiki/faq#排除列表)- 稍后读#### 全部功能：![Imgur](  )#### 照片集：包含了 **稍后读**  **阅读模式 · 设置界面**  **导出到生产力工具**  **发送到 Kindle**  **自定义样式**  **同步配置**  **论坛类页面 · 分页** 等功能的截图（动图）<http://ksria.com/simpread/gallery/>#### 节选了部分功能的截图：授权服务  ![Imgur](  )论坛类页面（下图是知乎）  ![Imgur](  )发送到 Kindle  ![Imgur](  )导出  ![Imgur](  )***#### 1.0.3 版本的遗憾：- 由于产品形态的不同，导出到 印象笔记 / Evernote / Onenote 暂时不支持自定义位置；- 由于一直没有找到很好的 Html → PDF 方案，所以 导出到 PDF 暂时使用了比较简陋的 window.print() 方式，希望大家能提供一些靠谱的建议；- 发送到 Kindle，使用了第三方服务 fivefilters.org ，希望以后可以有原生方案；***#### 接下来：- 更智能的聚焦模式；- 适配站点的订阅功能；（这是由很多热心的 v2exer 提出的解决方案，细节可以看 [前文回顾]( https://www.v2ex.com/t/367982)）这两个功能可能需要迭代几个小版本；完成后即可开始 Firefox 与 Edge 的开发。***最后，如果简悦可以解决你在阅读上痛点，提升 Web 端的阅读体验，可以请我 [喝杯咖啡]( https://github.com/Kenshin/simpread#请杯咖啡)，想必也是非常愉悦的事情。😄 真实的情况：由于 1.0.3 发布版导致我的七牛已经超过配额了... 😂 😭"}, "highlight": {"reply_list.content": ["简悦的适配列表增加到 201 个，同步适配列表方式 https://github.com/Kenshin/<em>simpread</em>/wiki/站点编辑器#如何新增"], "content": [" 188 个]( https://github.com/Kenshin/<em>simpread</em>/wiki/%E9%80%82%E9%85%8D%E7%AB%99%E7"]}}, {"_index": "topic_v1", "_type": "topic", "_id": "389932", "_score": 83.440544, "_source": {"node": 56, "replies": 8, "created": "2017-09-11T17:40:32", "member": "secaas", "id": 389932, "title": "新发现的神器级 chrome 阅读模式插件", "content": "如题，体验地址在下面，之前一直想要一个类似于 safari 的阅读模式的插件，但是 chrome 上面试了四五款都有各种的毛病和体验上的不方便，最近用了 iReader 一段时间，知道我发现“简阅”这个插件，不得不说功能十分强大啊！直接导出 markdown 瞬间戳中了我，可以说是非常方便了，所以就顺便分享给 v2er 们啦~http://ksria.com/simpread/"}, "highlight": {"content": [" iReader 一段时间，知道我发现“简阅”这个插件，不得不说功能十分强大啊！直接导出 markdown 瞬间戳中了我，可以说是非常方便了，所以就顺便分享给 v2er 们啦~http://ksria.com/<em>simpread</em>/"]}}, {"_index": "topic_v1", "_type": "topic", "_id": "389662", "_score": 79.55327, "_source": {"node": 12, "replies": 10, "created": "2017-09-11T01:34:57", "member": "grey5659", "id": 389662, "title": "有什么比较好的方法可以让浏览的网页极简吗？", "content": "上班的时候需要低调一点~~1.Stylish 定制 css2.隐藏所有图片，或者去除样式浏览大家有在用的方案吗？"}, "highlight": {"reply_list.content": ["刚想推荐 Just Read 就发现 4 楼推荐了。。这个非常好用再补一个本论坛大仙的作品：简悦 - 让你瞬间进入沉浸式阅读的 Chrome 扩展http://ksria.com/<em>simpread</em>/"]}}]}`;

/**
 * Result Card
 * 
    <div className="resultcard">
        <div className="title">
            <a href="http://www.v2ex.com/t/367982" target="_blank">
                为了达到完美的阅读模式这个小目标 ，我适配了 120+ 个网站，因此诞生了简悦 - 让你瞬间进入沉浸式阅读的 Chrome 扩展
            </a>
        </div>
        <div className="desc">
            简悦- SimpRead 让你瞬间进入沉浸式阅读的 Chrome 扩展,还原阅读的本质,提升你的阅读体验。 简悦是什么: 简悦是 沉浸式阅读的 Chrome 扩展,取自:「简单阅读,心情...
        </div>
        <div className="details">
            <a href="https://www.v2ex.com/member/kenshin" target="_blank">kenshin</a>
            &nbsp;于&nbsp;
            <span className="date">2017-07-03</span>
            &nbsp;发表，共计&nbsp;
            <span className="replies">154 个回复</span>
        </div>
    </div>
 *
 * @param {object} props 
 */
const ResultCard = props => {
    return (
        <div className="resultcard">
            <div className="title">
                <a href={ `http://www.v2ex.com/t/${props.id}` } target="_blank">
                    { props.title }
                </a>
            </div>
            <div className="desc">
                { props.content }
            </div>
            <div className="details">
                <a href={`https://www.v2ex.com/member/${props.member}`} target="_blank">{props.member}</a>
                &nbsp;于&nbsp;
                <span className="date">{props.created.replace( "T", " " )}</span>
                &nbsp;发表，共计&nbsp;
                <span className="replies">{props.replies} 个回复</span>
            </div>
        </div>
    );
}

/**
 * Empty Card
 */
const EmptyCard = () => {
    return (
        <div className="empty">
            <span className="bg"></span>
            Oops~ 并未搜索到任何内容，请重新确认搜索关键字!
        </div>
    )
}

export default class Search extends React.Component {

    static defaultProps = {
        url  : "https://www.sov2ex.com/api/search",
        q    : undefined,
        from : 0,
        size : 0,
        sort : "sumup",
        order: 0,
        gte  : 0,
        lte  : 0,
    }

    state = {
        cost   : {},
        result : [],
    }

    onClick() {
        this.search( this.refs.search.refs.target.value );
    }

    onKeyDown() {
        event.keyCode == 13 &&
            this.search( event.target.value );
    }

    search( value ) {
        if ( value.trim() != "" ) {
            window.location.href = window.location.origin + `?q=${value}`;
        } else {
            new Notify().Render( "不能为空，请输入正确的值。" );
        }
    }

    parse( result ) {
        this.setState({
            cost: {
                took : result.took,
                total: result.total
            },
            result: result.hits
        });
    }

    fetch() {
        console.log( this.props.q )
        $.ajax({
            url     : `${this.props.url}?q=${this.props.q}&sort=${this.props.sort}&order=${this.props.order}`,
            dataType: "json",
            crossDomain: true,
        })
        .done( result => {
            console.log( result )
            this.parse( JSON.parse( tempresult ) )
        })
        .fail( error => {
            console.error( error )
            //new Notify().Render( 2, "当前发生了一些错误，请稍候再使用此服务。" );
            //this.parse( JSON.parse( tempresult ) )
        });
    }

    componentWillMount() {
        if ( location.search.startsWith( "?q=" ) ) {
            const query = window.location.search.replace( "?", "" ).split( "&" );
            query && query.length > 0 && query.forEach( item => {
                const [ key, value ] = item.split( "=" );
                this.props[key]      = value;
            });
            this.props.q != "" && this.fetch();
        } else {
            new Notify().Render( "搜索发送了错误，请重新打开本页。" );
        }
    }

    render() {

        let hidden = false, list = this.state.result.map( item => {
            return <ResultCard { ...item._source } />
        });

        if ( list.length == 0 ) {
            hidden = true;
            list   = <EmptyCard />;
        }

        return (
            <div className="searchpage">
                <div className="top">
                    <div className="logo">
                        <img src="./assets/images/logo@1x.png" width="80"></img>
                    </div>
                    <div className="searchbar">
                        <div className="search">
                            <TextField 
                                ref="search" 
                                value={ decodeURI( this.props.q ) }
                                placeholder="请输入查询的关键字" 
                                onKeyDown={ ()=>this.onKeyDown() }
                            />
                            <span className="bar" onClick={ ()=> this.onClick() }></span>
                        </div>
                    </div>
                </div>
                <div className="cost" style={{ visibility: hidden ? "hidden" : "visible" }}>
                    <span>共计 {this.state.cost.total} 个结果，耗时 {this.state.cost.took} 毫秒</span>
                </div>
                <div className="searchresults">
                    { list }
                </div>
                <div className="loading" style={{ visibility: hidden ? "hidden" : "visible" }}>
                    <Button type="raised" text="加载更多" width="832px"
                    color="#fff" backgroundColor="rgba(3, 169, 244, 1)"
                    waves="md-waves-effect md-waves-button"
                    />
                </div>
            </div>
        )
    }
}