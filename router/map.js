let express =  require("express");
let router = express.Router();
// 引入数据
let mapData = require("../mock/china.json")
router.get("/data",(req,res) => {
    res.send({msg:"我是地图的路由地址",chinaData:mapData})
})

module.exports=router;