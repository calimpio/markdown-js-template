const Component = require('./src/Component');

class Base extends Component{
    base(child){
        return new Container({},child); 
    }
}


class Container extends Base{
    render(){
        if( this.parent instanceof NumList||
            this.parent instanceof List )
                this.props.tabs+=1;        
        return super.render();
    }
    /**
     * 
     * @param {[]} child 
     */
    
}

class P extends Base{
    toString(){
        return this.newElement()+super.toString();
    }

    renderEnd(){
        return this.endElement()
    }
}



class Title extends Base{        
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

class TableData extends Base{
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

class B extends Base{
    toString(){
        return `**${super.toString()}**`;
    }
}

class L extends Base{
    toString(){
        return `*${super.toString()}*`
    }
}

class Link extends Base{    
    toString(){
        return `[${super.toString()}]("${this.props.href}")`
    }
}

class NumList extends Base{
    renderPerChildren(child,k,item){
        
        return this.endElement()+this.newElement()+`${k+1}. ${child}`;
    }

    renderEnd(){
        return (this.props.tabs==0)?this.endElement():"";
    }
    
}

class List extends Base{
    renderPerChildren(child,k,item){
        return this.endElement()+this.newElement()+`- ${child}`;
    }
    
    renderEnd(){
        return (this.props.tabs==0)?this.endElement():"";
    }
}

class Br extends Base{
    renderEnd(){
        return this.endElement()+this.newElement();
    }
}

class Code extends Base{
    toString(){
        return this.newElement()+"```"+this.props.lang+this.endElement()+
            this.children.split('\n').map(i=>this.newElement()+i).join(this.endElement())+this.endElement()
            +this.newElement()+"```";
    }
    
}

class C extends Base{
    toString(){
        return "`"+super.toString()+"`"
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
     * @param {string} children
     * @returns {B}
     */
    B: (children)=> new B({},children),

    /**     
     * @param {string} children
     * @returns {L}
     */
    L: (children)=> new L({},children),

    /**     
     * @param {string} children
     * @returns {C}
     */
    C: (children)=> new C({},children),

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