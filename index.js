const db = require("./db.js");

// db.search({
//     id: 5,
//     callback: (result) => {
//         console.log(result);
//     }
// });

// db.list({
//     callback: (result) => {
//         console.log(result);
//     }
// })
// db.add({
//     data: {
//         name: "小马",
//         skill: "跑",
//         icon: "qwe"
//     },
//     callback: (result) => {
//         console.log(result);
//     }
// })
// db.varySql({
//     sql: 'insert into hero_list set ?',
//     data: {
//         name: "小马",
//         skill: "跑",
//         icon: "qwe"
//     },
//     callback: (result) => {
//         console.log(result);
//         debugger;
//     }
// })
// db.deldata({
//     id: 8,
//     callback: (result) => {
//         console.log(result);
//         debugger
//     }
// })
db.update({
    data: {
        id: 4,
        name: "美女",
        skill: "野兽",
        icon: "qqqq"
    },
    callback: (result) => {
        console.log(result);
        debugger
    }
})