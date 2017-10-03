console.log( "==== sov2ex module: Entry ====" )

import TextField from 'textfield';

export default class Entry extends React.Component{

    change() {
        
    }
    
    render() {
        return (
            <div className="entry">
                <div className="logo">
                    <img src="./assets/images/logo@2x.png"></img>
                </div>
                <div className="searchbar">
                    <div className="search">
                        <TextField 
                            placeholder="请输入查询的关键字" 
                            onChange={ ()=>this.change() }
                        />
                        <span className="bar"></span>
                    </div>
                </div>
                <div className="desc">
                    一个便捷的 v2ex 搜索引擎，<a href="https://github.com/Bynil/sov2ex" target="_blank">了解更多</a>  。
                </div>
            </div>
        )
    }
}