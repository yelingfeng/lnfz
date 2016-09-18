/**
 * Created by yelingfeng on 2016/9/9.
 */
var path = require('path');
var express = require('express');

var app = new express();
var port = process.env.PORT || 8400;

app.get("/", function(req, res) {
    return res.send("<html><head></head><body><h1>test ApiServer</h1></body></html>")
})

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8100");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.get("/getChinaData",(req,res)=>{
    res.send({
        "result": [
            {
                "name": "合肥",
                "value": "1",
                "targetName": "大连"
            },
            {
                "name": "大连",
                "value": "29",
                "targetName": "大连"
            },
            {
                "name": "未知",
                "value": "241",
                "targetName": "大连"
            },
            {
                "name": "杭州",
                "value": "10",
                "targetName": "大连"
            },
            {
                "name": "大连",
                "value": "15",
                "targetName": "沈阳"
            },
            {
                "name": "未知",
                "value": "163",
                "targetName": "沈阳"
            },
            {
                "name": "杭州",
                "value": "18",
                "targetName": "沈阳"
            },
            {
                "name": "湛江",
                "value": "1",
                "targetName": "沈阳"
            }
        ]
    })
})

app.get("/getCircleData",(req,res)=>{
    res.send({
        "result":[{"name":"公检法","value":"45"},{"name":"补贴","value":"34"},{"name":"军人","value":"10"},{"name":"熟人领导","value":"8"},{"name":"仿冒客服/中奖诈骗","value":"8"}]
    })
})
5

app.get("/getIspData",(req,res)=>{
    res.send({
        "result":{"totalData":"222222","Telecom":"2123","todayData":"666","Unicom":"2123","Mobile":"2123"}
    })
})



app.get("/getMapData" , function(req, res){
    res.send({
        success : true,
        result : [
            {
                "name": "大连市",
                "value": "157",
                "info": "",
                "category": "辽宁",
                "subArray": [
                    {
                        "id": "大连市",
                        "type": "1",
                        "num": "156"
                    },
                    {
                        "id": "大连市",
                        "type": "2",
                        "num": "1"
                    }
                ]
            },
            {
                "name": "沈阳市",
                "value": "125",
                "info": "",
                "category": "辽宁",
                "subArray": [
                    {
                        "id": "沈阳市",
                        "type": "1",
                        "num": "125"
                    }
                ]
            }
        ]
    });

})


app.get("/getStopPhone" , function(req, res){
    res.send({
        "result" :[{"number":"000860453622213","time":"2016-09-08 13:30:45"}]
    });
})

app.get("/findReturnVoList",function(req,res){
    res.send({
        "result" :{"total":562,"first":1,"pageSize":10,"orderBy":null,"autoCount":true,"hasNext":true,"totalPages":57,"nextPage":2,"hasPre":false,"prePage":1,"footer":[],"pageNo":1,"order":null,"rows":[{"cityName":null,"stopFlag":"已封停","evilNumber":"000860453622213","allTimes":"1","cheatedUser":"13332258007","offset":0,"endTime":"","startTime":"","page":1,"sort":"","ids":"","order":"desc","rows":100000000},{"cityName":null,"stopFlag":"已封停","evilNumber":"000860453622213","allTimes":"1","cheatedUser":"13372860566","offset":0,"endTime":"","startTime":"","page":1,"sort":"","ids":"","order":"desc","rows":100000000},{"cityName":null,"stopFlag":"已封停","evilNumber":"18651482042401","allTimes":"1","cheatedUser":"13354095655","offset":0,"endTime":"","startTime":"","page":1,"sort":"","ids":"","order":"desc","rows":100000000},{"cityName":null,"stopFlag":"未封停","evilNumber":"00019081203","allTimes":"4","cheatedUser":"17741103137","offset":0,"endTime":"","startTime":"","page":1,"sort":"","ids":"","order":"desc","rows":100000000},{"cityName":null,"stopFlag":"未封停","evilNumber":"008802166133709","allTimes":"5","cheatedUser":"13309851653","offset":0,"endTime":"","startTime":"","page":1,"sort":"","ids":"","order":"desc","rows":100000000},{"cityName":null,"stopFlag":"未封停","evilNumber":"0021166133709","allTimes":"3","cheatedUser":"13309857573","offset":0,"endTime":"","startTime":"","page":1,"sort":"","ids":"","order":"desc","rows":100000000},{"cityName":null,"stopFlag":"已封停","evilNumber":"000860453622213","allTimes":"1","cheatedUser":"13332258007","offset":0,"endTime":"","startTime":"","page":1,"sort":"","ids":"","order":"desc","rows":100000000},{"cityName":null,"stopFlag":"已封停","evilNumber":"000860453622213","allTimes":"1","cheatedUser":"13372860566","offset":0,"endTime":"","startTime":"","page":1,"sort":"","ids":"","order":"desc","rows":100000000},{"cityName":null,"stopFlag":"已封停","evilNumber":"18651482042401","allTimes":"1","cheatedUser":"13354095655","offset":0,"endTime":"","startTime":"","page":1,"sort":"","ids":"","order":"desc","rows":100000000},{"cityName":null,"stopFlag":"未封停","evilNumber":"00019081203","allTimes":"4","cheatedUser":"17741103137","offset":0,"endTime":"","startTime":"","page":1,"sort":"","ids":"","order":"desc","rows":100000000}],"orderBySetted":false}
    });
})


app.get("/getEnginePhone" , function(req, res){
    res.send({
        "result" :[
            {
                "number": "000860453622213",
                "time": "2016-08-20 17:13:59"
            },
            {
                "number": "18613336395828",
                "time": "2016-08-20 17:13:59"
            },
            {
                "number": "008802166133709",
                "time": "2016-08-20 17:13:59"
            },
            {
                "number": "00019081203",
                "time": "2016-08-20 17:13:59"
            },
            {
                "number": "002159980197",
                "time": "2016-08-20 17:13:59"
            },
            {
                "number": "000861082612060",
                "time": "2016-08-20 17:13:59"
            },
            {
                "number": "0021166133709",
                "time": "2016-08-20 17:13:59"
            },
            {
                "number": "18651482042401",
                "time": "2016-08-20 17:13:59"
            },
            {
                "number": "008790216613370",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "000864172655823",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "057189332063",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "041139050216",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "01080444347",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "18613998563300",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "009902166133709",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "01059474548",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "01080440025",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "000196852213",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "006902116613370",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "000868728802915",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "01057471001",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "0087133744944",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "000860467232281",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "4009999025",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "02161126076",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "002166133709",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "057126893273",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "004768821486",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "18613324306402",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "000862087626831",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "01080444208",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "0087182215917",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "02151397925",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "008872785874400",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "01056706369",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "057128094416",
                "time": "2016-08-20 17:13:56"
            },
            {
                "number": "01053815380",
                "time": "2016-08-20 17:13:56"
            }
        ]
    });
})


app.listen(port, function(err) {
    if (err) {
        console.error(err)
    } else {
        console.info("==> 馃寧  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})
