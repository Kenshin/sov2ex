console.log( "==== sov2ex module: Search ====" )

import TextField from 'textfield';

export default class Search extends React.Component{
    
    render() {
        return (
            <div className="searchpage">
                <div className="top">
                    <div className="logo">
                        <img src="./assets/images/logo@1x.png"></img>
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
                
                </div>
        </div>
        )
    }
}