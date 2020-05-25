const mdc = require('./index');
const data= [
    [1,"La Paz"],
    [2,"Leticia"],
    [3,"Marcos"],
    [4,"Arkeno"],
]

const list = ["Camilo","Patrico","Data"]


var root = mdc.Container({},[
    mdc.Title({},"La casualidad de la vida"),
    mdc.TableHeader({},["nombre","data"]),
    data.map(i=>mdc.TableData({},[
            mdc.B(i[0]),
            mdc.L(i[1]),
            ])
        ),
    mdc.P({tabs:2},[
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
    ),
    mdc.C("a code line")
]).render();


console.log(root)
