import React from 'react';
import Text from '../components/Text';
import DraggableItemConstroctor from '../components/MainInfoItem';
//主要信息块，块级组件，比如“教育经历”、“实践经历”等，所有数据均放在由props.data中
var Education = DraggableItemConstroctor('education-item');
var Practice = DraggableItemConstroctor('practice-item');
export default class MainInfoBlock extends React.Component{
    constructor(props) {
        super(props);
        this.addItemInMainInfo = this.addItemInMainInfo.bind(this);
    }

    addItemInMainInfo(){
        this.props.actions.addItemInMainInfo(this.props.indexInMainInfo, this.props.data.type);
    }

    render() {
        const { actions, data, indexInMainInfo } = this.props;
        var renderResult;
        var itemsInBlock = [];
        data.items.forEach((item,index) => {
            switch(data.type){
                case 'education':
                    itemsInBlock.push(
                        <Education item={item} id={item.id} location={['mainInfo',indexInMainInfo,'items']} type={data.type} index={index} indexInMainInfo={indexInMainInfo} actions={actions}/>
                    );
                    break;
                case 'practice':
                    itemsInBlock.push(
                        <Practice item={item} id={item.id} location={['mainInfo',indexInMainInfo,'items']} type={data.type} index={index} indexInMainInfo={indexInMainInfo} actions={actions} beginDrag={actions.beginDrag} endDrag={actions.endDrag} itemSort={actions.itemSort}/>
                    );
                    break;
            }
            
        });

        switch(data.type){
            case 'education':
                return(
                    <div className={data.type + " isDraggable"} type={data.type}>
                        <i className="iconfont">&#xe603;</i>
                        <Text className="title" text={data.title.text} isEditting={data.title.isEditting} location={['mainInfo',indexInMainInfo,'title']} textEdit={actions.textEdit} enterEdit={actions.enterEdit} />
                        <button onClick={this.addItemInMainInfo}>+</button>
                        {itemsInBlock}
                    </div>
                );
            case 'practice':
                return(
                    <div className={data.type + " isDraggable"}>
                        <i className="iconfont">&#xe603;</i>
                        <Text className="title" text={data.title.text} isEditting={data.title.isEditting} location={['mainInfo',indexInMainInfo,'title']} textEdit={actions.textEdit} enterEdit={actions.enterEdit} />
                        <button onClick={this.addItemInMainInfo}>+</button>
                        {itemsInBlock}
                    </div>
                );
            default:
                return(
                    <div className={data.type} type={data.type}>
                        <i className="iconfont">&#xe603;</i>
                        <Text className="title" text={data.title.text} isEditting={data.title.isEditting} location={['mainInfo',indexInMainInfo,'title']} textEdit={actions.textEdit} enterEdit={actions.enterEdit} />
                        <button onClick={this.addItemInMainInfo}>+</button>
                        {itemsInBlock}
                    </div>     
                );
        }
        
    }
}