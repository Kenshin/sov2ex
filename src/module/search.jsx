console.log( "==== sov2ex module: Search ====" )

import TextField from 'textfield';

export default class Search extends React.Component{
    
    render() {
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
                                placeholder="请输入查询的关键字" 
                            />
                            <span className="bar" onClick={ ()=> this.onClick() }></span>
                        </div>
                    </div>
                </div>
                <div className="searchresults">
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
                    <div className="resultcard">
                        <div className="title">
                            <a href="https://www.v2ex.com/t/389932" target="_blank">
                            新发现的神器级 chrome 阅读模式插件
                            </a>
                        </div>
                        <div className="desc">
                        iReader 一段时间，知道我发现“简阅”这个插件，不得不说功能十分强大啊！ 直接导出 markdown 瞬间戳中了我，可以说是非常方便了，所以就顺便分享给 v2er 们啦~
                        </div>
                        <div className="details">
                            <a href="https://www.v2ex.com/member/secaas" target="_blank">secaas</a>
                            &nbsp;于&nbsp;                            
                            <span className="date">2017-09-12</span>
                            &nbsp;发表，共计&nbsp;
                            <span className="replies">8 个回复</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}