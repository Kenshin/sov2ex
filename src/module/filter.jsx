console.log( "==== sov2ex module: Filter ====" )

import TextField   from 'textfield';
import SelectField from 'selectfield';

const sort = [{
    value : "sumup",
    name  : "权重",
},{
    value : "created",
    name  : "发帖时间",
}],
order = [{
    value : "0",
    name  : "降序",
},{
    value : "1",
    name  : "升序",
}];

class Filter extends React.Component {

    state = {
        size_error : "",
    };

    onSizeChange() {
        const value = event.target.value.trim();
        if ( value == "" ) {
            this.setState({ size_error : "" });
            sessionStorage.setItem( "size", value );
        }
        else if ( !/^\d+$/.test( value ) || value < 1 || value > 50 ) {
            this.setState({
                size_error: "取值范围 1 ~ 50 的正整数"
            });
        } else {
            this.setState({ size_error : "" });
            sessionStorage.setItem( "size", value );
        }
    }

    onNodeChange() {
        console.log( event.target.value.trim())
        sessionStorage.setItem( "node", event.target.value.trim() );
    }

    onSortChange( value, name ) {
        console.log( value, name )
        sessionStorage.setItem( "sort", value );
    }

    onOrderChange( value, name ) {
        console.log( value, name )
        sessionStorage.setItem( "order", value );
    }

    render() {
        return (
            <div className="filter">
                <TextField 
                    floatingtext="每页查询数量" placeholder="默认每页显示 10 条数据，取值范围在 1 ~ 50"
                    errortext={ this.state.size_error }
                    onChange={ ()=>this.onSizeChange() }
                />
                <TextField 
                    floatingtext="查询节点" placeholder="为空时，查询全部节点；支持节点名称与 节点 id"
                    onChange={ ()=>this.onNodeChange() }
                />
                <div className="horiz">
                    <SelectField waves="md-waves-effect"
                        name={ "权重" } items={ sort }
                        floatingtext="查询结果排序"
                        onChange={ (v,n)=>this.onSortChange(v,n) }
                    />
                    <SelectField waves="md-waves-effect"
                        name={ "降序" } items={ order }
                        floatingtext="发帖时间"
                        onChange={ (v,n)=>this.onOrderChange(v,n) }
                    />
                </div>
            </div>
        )
    }
}

function Render( target ) {
    ReactDOM.render( <Filter />, target );
}

export {
    Render,
}