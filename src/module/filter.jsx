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

class Filter extends React.Component{

    render() {
        return (
            <div className="filter">
                <TextField 
                    floatingtext="每页查询数量" placeholder="默认每页显示 10 条数据。"
                />
                <TextField 
                    floatingtext="查询节点" placeholder="为空时，查询全部节点；支持节点名称与 节点 id"
                />
                <div className="horiz">
                    <SelectField waves="md-waves-effect"
                        name={ "权重" } items={ sort }
                        floatingtext="查询结果排序"
                    />
                    <SelectField waves="md-waves-effect"
                        name={ "降序" } items={ order }
                        floatingtext="排列顺序"
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