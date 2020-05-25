const Component = require('./src/Component');



class Container extends Component{
    render(){
        if( this.parent instanceof NumList||
            this.parent instanceof List )
                this.props.tabs+=1;
        
        return super.render();
    }
}

class P extends Component{
    toString(){
        return this.newElement()+super.toString();
    }

    renderEnd(){
        return this.endElement()
    }
}



class Title extends Component{        
    toString(){
        let t="#"
        for(let i=1;i<this.props.h;i++){
            t+="#";
        }
        return t +" "+ super.toString();
    }

    renderEnd(){
        return "\n";
    }
}

class TableData extends Component{
    toString(){        
        return this.newElement()+"|";
    }    
    renderPerChildren(child,k){
        return `${child}|`;
    }
    renderEnd(){
        return this.endElement();
    }
}

class TableHeader extends TableData{    
    
    renderEnd(){
        return  "\n"+this.newElement()+"|"+this.children.map(i=>`----`).join('|')+"|"+this.endElement();
    }
}

class B extends Component{
    toString(){
        return `**${super.toString()}**`;
    }
}

class L extends Component{
    toString(){
        return `*${super.toString()}*`
    }
}

class Link extends Component{    
    toString(){
        return `[${super.toString()}]("${this.props.href}")`
    }
}

class NumList extends Component{
    renderPerChildren(child,k,item){
        return this.newElement()+`${k+1}. ${child}`+(typeof item==='string'?this.endElement():"");
    }
    
}

class List extends Component{
    renderPerChildren(child,k,item){
        return this.newElement()+`- ${child}`+(typeof item==='string'?this.endElement():"");
    }    
}

class Br extends Component{
    renderEnd(){
        return this.endElement()+this.newElement();
    }
}

class Code extends Component{
    toString(){
        return this.newElement()+"```"+this.props.lang+this.endElement()+
            this.children.split('\n').map(i=>this.newElement()+i).join(this.endElement())+this.endElement()
            +this.newElement()+"```";
    }
    
}

module.exports = {

    /**
     * @param {Component.propsDef} props
     * @param {Component[]} children
     * @returns {Container}
     */
    Container: (props,children)=> new Container(props,children),

    /**
     * @param {Component.propsDef} props
     * @param {Component[]} children
     * @returns {Title}
     */
    Title: (props,children)=> new Title(props,children),

    /**
     * @param {Component.propsDef} props
     * @param {Component[]} children
     * @returns {TableData}
     */
    TableData: (props,children)=> new TableData(props,children),

    /**
     * @param {Component.propsDef} props
     * @param {Component[]} children
     * @returns {TableHeader}
     */
    TableHeader: (props,children)=> new TableHeader(props,children),


    /** 
     * @param {Component[]} children
     * @returns {B}
     */
    B: (children)=> new B({},children),

    /**     
     * @param {Component[]} children
     * @returns {L}
     */
    L: (children)=> new L({},children),

    /**
     * @param {Component.propsDef} props
     * @param {Component[]} children
     * @returns {Link}
     */
    Link: (props,children)=> new Link(props,children),

    /**
     * @param {Component.propsDef} props
     * @param {Component[]} children
     * @returns {NumList}
     */
    NumList: (props,children)=> new NumList(props,children),

    /**
     * @param {Component.propsDef} props
     * @param {Component[]} children
     * @returns {P}
     */
    P: (props,children)=> new P(props,children),

    /**     
     * @returns {Br}
     */
    Br: new Br({},""),

    /**
     * @param {Component.propsDef} props
     * @param {Component[]} children
     * @returns {LiList}
     */
    List: (props,children)=> new List(props,children),

    /**
     * @param {Component.propsDef} props
     * @param {string} code
     * @returns {Code}
     */
    Code: (props,code)=> new Code(props,code),
     
}