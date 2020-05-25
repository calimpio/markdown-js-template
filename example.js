const mdc = require('./index');
const data= [
    [1,"La Paz"],
    [2,"Leticia"],
    [3,"Marcos"],
    [4,"Arkeno"],
]

const list = ["item1","item2","item3"]


var root = mdc.Container({},[
    mdc.Title({},"markdown-js-template example"),
    mdc.Code({lang:"bash"},
        `node ./example.js`
    ),"\n",
    mdc.TableHeader({},["nombre","data"]),
    data.map(i=>mdc.TableData({},[
            mdc.B(i[0]),
            mdc.L(i[1]),
            ])
        ),"\n",
    mdc.P({},[
        "Cosas de la vida: ",mdc.Br,
        mdc.Link({href:"#La_casualidad_de_la_vida"},"Arriba"),
    ]),    
    mdc.NumList({},[
        [
            mdc.Title({h:3},"other item"),
            mdc.List({},list)
        ],
        [
            mdc.Title({h:3},"title 3"),
            mdc.NumList({},["item"])
        ]
    ]),    
    mdc.Code({lang:"js",tabs:1},
        `   const m= "wow!";`
    ),"\n",
    mdc.C("a code line")
]).render();


console.log(root)
