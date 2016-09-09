/**
 * Created by yelingfeng on 2016/9/9.
 */
var path = require('path');
var express = require('express');

var app = new express();
var port = process.env.PORT || 8400;
app.use(express.static(path.join(__dirname, 'static')));

app.get("/", function(req, res) {
    return res.sendFile(__dirname + '/static/index.html')
})

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8100");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


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
