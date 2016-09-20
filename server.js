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
        "result": [{"name":"大连","value":"1","targetName":"合肥","lineType":"3"},{"name":"大连","value":"2","targetName":"大连","lineType":"1"},{"name":"大连","value":"144","targetName":"未知","lineType":"3"},{"name":"大连","value":"9","targetName":"杭州","lineType":"1"},{"name":"沈阳","value":"1","targetName":"大连","lineType":"1"},{"name":"沈阳","value":"108","targetName":"未知","lineType":"3"},{"name":"沈阳","value":"15","targetName":"杭州","lineType":"1"},{"name":"沈阳","value":"1","targetName":"湛江","lineType":"1"}]
    })
})

app.get("/getCircleData",(req,res)=>{
    res.send({
        "result":[{"name":"公检法","value":"45"},{"name":"补贴","value":"34"},{"name":"军人","value":"10"},{"name":"熟人领导","value":"8"},{"name":"仿冒客服/中奖诈骗","value":"8"}]
    })
})

app.get("/getLineData",(req,res)=>{
    res.send({
        "result": [
            {
                "name": "2016-09-19",
                "value": "29",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-19",
                "value": "10",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-19",
                "value": "3",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-19",
                "value": "77",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-19",
                "value": "84",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-19",
                "value": "18",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-19",
                "value": "35",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-19",
                "value": "1",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-18",
                "value": "54",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-18",
                "value": "5",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-18",
                "value": "90",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-18",
                "value": "12",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-18",
                "value": "31",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-18",
                "value": "5",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-18",
                "value": "59",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-18",
                "value": "22",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-17",
                "value": "9",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-17",
                "value": "30",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-17",
                "value": "45",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-17",
                "value": "10",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-17",
                "value": "98",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-17",
                "value": "71",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-17",
                "value": "66",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-17",
                "value": "39",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-16",
                "value": "66",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-16",
                "value": "0",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-16",
                "value": "33",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-16",
                "value": "99",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-16",
                "value": "3",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-16",
                "value": "17",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-16",
                "value": "29",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-16",
                "value": "96",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-15",
                "value": "41",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-15",
                "value": "33",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-15",
                "value": "24",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-15",
                "value": "13",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-15",
                "value": "16",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-15",
                "value": "26",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-15",
                "value": "13",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-15",
                "value": "14",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-14",
                "value": "32",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-14",
                "value": "36",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-14",
                "value": "38",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-14",
                "value": "16",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-14",
                "value": "34",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-14",
                "value": "73",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-14",
                "value": "21",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-14",
                "value": "23",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-13",
                "value": "89",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-13",
                "value": "31",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-13",
                "value": "29",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-13",
                "value": "38",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-13",
                "value": "47",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-13",
                "value": "46",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-13",
                "value": "18",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-13",
                "value": "97",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-12",
                "value": "14",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-12",
                "value": "98",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-12",
                "value": "31",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-12",
                "value": "31",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-12",
                "value": "21",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-12",
                "value": "0",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-12",
                "value": "17",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-12",
                "value": "60",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-11",
                "value": "49",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-11",
                "value": "57",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-11",
                "value": "29",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-11",
                "value": "86",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-11",
                "value": "55",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-11",
                "value": "88",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-11",
                "value": "89",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-11",
                "value": "39",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-10",
                "value": "4",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-10",
                "value": "77",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-10",
                "value": "15",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-10",
                "value": "13",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-10",
                "value": "28",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-10",
                "value": "24",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-10",
                "value": "35",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-10",
                "value": "14",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-09",
                "value": "46",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-09",
                "value": "48",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-09",
                "value": "96",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-09",
                "value": "77",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-09",
                "value": "77",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-09",
                "value": "96",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-09",
                "value": "55",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-09",
                "value": "90",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-08",
                "value": "61",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-08",
                "value": "59",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-08",
                "value": "57",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-08",
                "value": "51",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-08",
                "value": "77",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-08",
                "value": "4",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-08",
                "value": "23",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-08",
                "value": "79",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-07",
                "value": "22",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-07",
                "value": "11",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-07",
                "value": "23",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-07",
                "value": "75",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-07",
                "value": "16",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-07",
                "value": "43",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-07",
                "value": "4",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-07",
                "value": "97",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-06",
                "value": "16",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-06",
                "value": "24",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-06",
                "value": "70",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-06",
                "value": "60",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-06",
                "value": "6",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-06",
                "value": "65",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-06",
                "value": "25",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-06",
                "value": "63",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-05",
                "value": "74",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-05",
                "value": "35",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-05",
                "value": "18",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-05",
                "value": "70",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-05",
                "value": "67",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-05",
                "value": "18",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-05",
                "value": "90",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-05",
                "value": "26",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-04",
                "value": "11",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-04",
                "value": "25",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-04",
                "value": "86",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-04",
                "value": "82",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-04",
                "value": "62",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-04",
                "value": "28",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-04",
                "value": "38",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-04",
                "value": "82",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-03",
                "value": "46",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-03",
                "value": "57",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-03",
                "value": "17",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-03",
                "value": "84",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-03",
                "value": "24",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-03",
                "value": "68",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-03",
                "value": "46",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-03",
                "value": "19",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-02",
                "value": "90",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-02",
                "value": "94",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-02",
                "value": "15",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-02",
                "value": "72",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-02",
                "value": "20",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-02",
                "value": "13",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-02",
                "value": "43",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-02",
                "value": "61",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-09-01",
                "value": "92",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-09-01",
                "value": "21",
                "category": "仿冒银行"
            },
            {
                "name": "2016-09-01",
                "value": "74",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-09-01",
                "value": "92",
                "category": "仿冒部队"
            },
            {
                "name": "2016-09-01",
                "value": "46",
                "category": "仿冒社保"
            },
            {
                "name": "2016-09-01",
                "value": "51",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-09-01",
                "value": "77",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-09-01",
                "value": "93",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-08-31",
                "value": "49",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-08-31",
                "value": "95",
                "category": "仿冒银行"
            },
            {
                "name": "2016-08-31",
                "value": "3",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-08-31",
                "value": "72",
                "category": "仿冒部队"
            },
            {
                "name": "2016-08-31",
                "value": "26",
                "category": "仿冒社保"
            },
            {
                "name": "2016-08-31",
                "value": "5",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-08-31",
                "value": "20",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-08-31",
                "value": "69",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-08-30",
                "value": "2",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-08-30",
                "value": "80",
                "category": "仿冒银行"
            },
            {
                "name": "2016-08-30",
                "value": "31",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-08-30",
                "value": "50",
                "category": "仿冒部队"
            },
            {
                "name": "2016-08-30",
                "value": "55",
                "category": "仿冒社保"
            },
            {
                "name": "2016-08-30",
                "value": "34",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-08-30",
                "value": "3",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-08-30",
                "value": "83",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-08-29",
                "value": "32",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-08-29",
                "value": "13",
                "category": "仿冒银行"
            },
            {
                "name": "2016-08-29",
                "value": "16",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-08-29",
                "value": "21",
                "category": "仿冒部队"
            },
            {
                "name": "2016-08-29",
                "value": "22",
                "category": "仿冒社保"
            },
            {
                "name": "2016-08-29",
                "value": "56",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-08-29",
                "value": "5",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-08-29",
                "value": "53",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-08-28",
                "value": "64",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-08-28",
                "value": "70",
                "category": "仿冒银行"
            },
            {
                "name": "2016-08-28",
                "value": "24",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-08-28",
                "value": "98",
                "category": "仿冒部队"
            },
            {
                "name": "2016-08-28",
                "value": "65",
                "category": "仿冒社保"
            },
            {
                "name": "2016-08-28",
                "value": "44",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-08-28",
                "value": "5",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-08-28",
                "value": "62",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-08-27",
                "value": "6",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-08-27",
                "value": "4",
                "category": "仿冒银行"
            },
            {
                "name": "2016-08-27",
                "value": "47",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-08-27",
                "value": "49",
                "category": "仿冒部队"
            },
            {
                "name": "2016-08-27",
                "value": "50",
                "category": "仿冒社保"
            },
            {
                "name": "2016-08-27",
                "value": "6",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-08-27",
                "value": "75",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-08-27",
                "value": "36",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-08-26",
                "value": "63",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-08-26",
                "value": "16",
                "category": "仿冒银行"
            },
            {
                "name": "2016-08-26",
                "value": "46",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-08-26",
                "value": "96",
                "category": "仿冒部队"
            },
            {
                "name": "2016-08-26",
                "value": "60",
                "category": "仿冒社保"
            },
            {
                "name": "2016-08-26",
                "value": "78",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-08-26",
                "value": "31",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-08-26",
                "value": "59",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-08-25",
                "value": "32",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-08-25",
                "value": "66",
                "category": "仿冒银行"
            },
            {
                "name": "2016-08-25",
                "value": "0",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-08-25",
                "value": "12",
                "category": "仿冒部队"
            },
            {
                "name": "2016-08-25",
                "value": "95",
                "category": "仿冒社保"
            },
            {
                "name": "2016-08-25",
                "value": "61",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-08-25",
                "value": "51",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-08-25",
                "value": "80",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-08-24",
                "value": "42",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-08-24",
                "value": "43",
                "category": "仿冒银行"
            },
            {
                "name": "2016-08-24",
                "value": "81",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-08-24",
                "value": "73",
                "category": "仿冒部队"
            },
            {
                "name": "2016-08-24",
                "value": "13",
                "category": "仿冒社保"
            },
            {
                "name": "2016-08-24",
                "value": "60",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-08-24",
                "value": "29",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-08-24",
                "value": "66",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-08-23",
                "value": "14",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-08-23",
                "value": "50",
                "category": "仿冒银行"
            },
            {
                "name": "2016-08-23",
                "value": "38",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-08-23",
                "value": "86",
                "category": "仿冒部队"
            },
            {
                "name": "2016-08-23",
                "value": "93",
                "category": "仿冒社保"
            },
            {
                "name": "2016-08-23",
                "value": "96",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-08-23",
                "value": "8",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-08-23",
                "value": "58",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-08-22",
                "value": "88",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-08-22",
                "value": "98",
                "category": "仿冒银行"
            },
            {
                "name": "2016-08-22",
                "value": "86",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-08-22",
                "value": "34",
                "category": "仿冒部队"
            },
            {
                "name": "2016-08-22",
                "value": "12",
                "category": "仿冒社保"
            },
            {
                "name": "2016-08-22",
                "value": "4",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-08-22",
                "value": "26",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-08-22",
                "value": "52",
                "category": "仿冒领导熟人"
            },
            {
                "name": "2016-08-21",
                "value": "1",
                "category": "未知诈骗类型"
            },
            {
                "name": "2016-08-21",
                "value": "21",
                "category": "仿冒银行"
            },
            {
                "name": "2016-08-21",
                "value": "48",
                "category": "仿冒电信运营商"
            },
            {
                "name": "2016-08-21",
                "value": "24",
                "category": "仿冒部队"
            },
            {
                "name": "2016-08-21",
                "value": "95",
                "category": "仿冒社保"
            },
            {
                "name": "2016-08-21",
                "value": "32",
                "category": "仿冒公检法"
            },
            {
                "name": "2016-08-21",
                "value": "21",
                "category": "仿冒客服/中奖诈骗"
            },
            {
                "name": "2016-08-21",
                "value": "55",
                "category": "仿冒领导熟人"
            }
        ]
    })
})

app.get("/getIspData",(req,res)=>{
    res.send({
       "result":{"provOut":"246","Telecom":"19","totalData":"248","provIn":"2","todayData":"0","Unicom":"24","Mobile":"6"}
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
                "number": null,
                "time": null,
                "fraudNum": "008802166133709",
                "hurtNum": "13309851653",
                "answerTime": "2016-08-14 11:36:04",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "2184"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "18651482042401",
                "hurtNum": "13354095655",
                "answerTime": "2016-08-11 19:55:32",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "62"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "008802166133709",
                "hurtNum": "13309851653",
                "answerTime": "2016-08-14 11:36:04",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "2184"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "00019081203",
                "hurtNum": "17741103137",
                "answerTime": "2016-08-14 12:47:18",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "7306"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "002159980197",
                "hurtNum": "13352439911",
                "answerTime": "2016-08-14 12:42:36",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "2232"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "000861082612060",
                "hurtNum": "13386828308",
                "answerTime": "2016-08-14 15:01:49",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "63"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "0021166133709",
                "hurtNum": "13309857573",
                "answerTime": "2016-08-14 12:21:28",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "2162"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "002159980197",
                "hurtNum": "13352439911",
                "answerTime": "2016-08-14 12:42:36",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "2232"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "18651482042401",
                "hurtNum": "13354095655",
                "answerTime": "2016-08-11 19:55:32",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "62"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "0021166133709",
                "hurtNum": "13309857573",
                "answerTime": "2016-08-14 12:21:28",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "2162"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "00019081203",
                "hurtNum": "17741103137",
                "answerTime": "2016-08-14 12:47:18",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "7306"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "000861082612060",
                "hurtNum": "13386828308",
                "answerTime": "2016-08-14 15:01:49",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "63"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01057471001",
                "hurtNum": "18941130052",
                "answerTime": "2016-08-13 17:15:21",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "270"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "008790216613370",
                "hurtNum": "13304286038",
                "answerTime": "2016-08-13 09:20:53",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "1818"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01053815380",
                "hurtNum": "13322275303",
                "answerTime": "2016-08-13 14:03:15",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "337"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "041139050216",
                "hurtNum": "17302458063",
                "answerTime": "2016-08-13 09:16:34",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "247"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "009902166133709",
                "hurtNum": "13309848925",
                "answerTime": "2016-08-13 10:16:15",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "2617"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "057128094416",
                "hurtNum": "18904287078",
                "answerTime": "2016-08-13 10:36:50",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "377"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "057128094416",
                "hurtNum": "18904287078",
                "answerTime": "2016-08-13 10:36:50",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "377"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01080444347",
                "hurtNum": "18042684712",
                "answerTime": "2016-08-13 22:05:26",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "658"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "057126893273",
                "hurtNum": "13386859296",
                "answerTime": "2016-08-13 17:09:37",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "130"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "02161126076",
                "hurtNum": "13387830568",
                "answerTime": "2016-08-13 11:41:20",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "134"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "008790216613370",
                "hurtNum": "13352256177",
                "answerTime": "2016-08-13 10:26:20",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "2307"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "008790216613370",
                "hurtNum": "18940822272",
                "answerTime": "2016-08-13 11:20:08",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "6001"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01056706369",
                "hurtNum": "13332486244",
                "answerTime": "2016-08-13 12:30:41",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "76"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "008872785874400",
                "hurtNum": "18940255109",
                "answerTime": "2016-08-13 15:48:02",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "24"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "041139050216",
                "hurtNum": "18018966681",
                "answerTime": "2016-08-13 20:47:55",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "291"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "0087182215917",
                "hurtNum": "18940826692",
                "answerTime": "2016-08-13 09:41:08",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "1471"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "004768821486",
                "hurtNum": "13390515829",
                "answerTime": "2016-08-13 10:59:58",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "6"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "18613324306402",
                "hurtNum": "13304058112",
                "answerTime": "2016-08-10 08:38:31",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "78"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "041139050216",
                "hurtNum": "18098851123",
                "answerTime": "2016-08-13 14:48:09",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "330"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "4009999025",
                "hurtNum": "18141184262",
                "answerTime": "2016-08-13 14:58:29",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "281"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "000864172655823",
                "hurtNum": "13324114291",
                "answerTime": "2016-08-13 13:30:27",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "47"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "000860467232281",
                "hurtNum": "13352222208",
                "answerTime": "2016-08-13 14:41:42",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "14"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "041139050216",
                "hurtNum": "17302458063",
                "answerTime": "2016-08-13 09:16:34",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "247"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "041139050216",
                "hurtNum": "18098851123",
                "answerTime": "2016-08-13 14:48:09",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "330"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "000868728802915",
                "hurtNum": "15309845419",
                "answerTime": "2016-08-13 08:14:21",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "82"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "4009999025",
                "hurtNum": "18141184262",
                "answerTime": "2016-08-13 14:58:29",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "281"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01080440025",
                "hurtNum": "13309811766",
                "answerTime": "2016-08-13 18:09:11",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "435"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "057126893273",
                "hurtNum": "13386859296",
                "answerTime": "2016-08-13 17:09:37",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "130"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "057189332063",
                "hurtNum": "18002445153",
                "answerTime": "2016-08-13 10:21:13",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "169"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "0087182215917",
                "hurtNum": "18940826692",
                "answerTime": "2016-08-13 09:41:08",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "1471"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "009902166133709",
                "hurtNum": "13309848925",
                "answerTime": "2016-08-13 10:16:15",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "2617"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "18613324306402",
                "hurtNum": "13304058112",
                "answerTime": "2016-08-10 08:38:31",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "78"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "02161126076",
                "hurtNum": "13387830568",
                "answerTime": "2016-08-13 11:41:20",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "134"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "0087133744944",
                "hurtNum": "18940820555",
                "answerTime": "2016-08-13 09:39:11",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "1115"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "009902166133709",
                "hurtNum": "13342229700",
                "answerTime": "2016-08-13 12:08:31",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "5578"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "008790216613370",
                "hurtNum": "13304286038",
                "answerTime": "2016-08-13 09:20:53",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "1818"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "02151397925",
                "hurtNum": "13324069633",
                "answerTime": "2016-08-13 15:04:32",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "32"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "18613998563300",
                "hurtNum": "13354095655",
                "answerTime": "2016-08-10 08:21:41",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "117"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "000868728802915",
                "hurtNum": "15309845419",
                "answerTime": "2016-08-13 08:14:21",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "82"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01053815380",
                "hurtNum": "13322275303",
                "answerTime": "2016-08-13 14:03:15",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "337"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "02151397925",
                "hurtNum": "13304039418",
                "answerTime": "2016-08-13 14:22:15",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "55"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "000862087626831",
                "hurtNum": "15382239887",
                "answerTime": "2016-08-13 08:02:27",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "39"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "000864172655823",
                "hurtNum": "13324114291",
                "answerTime": "2016-08-13 13:30:27",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "47"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "02151397925",
                "hurtNum": "13304039418",
                "answerTime": "2016-08-13 14:22:15",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "55"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "000862087626831",
                "hurtNum": "15382239887",
                "answerTime": "2016-08-13 08:02:27",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "39"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "000860467232281",
                "hurtNum": "13352222208",
                "answerTime": "2016-08-13 14:41:42",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "14"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "02151397925",
                "hurtNum": "13324069633",
                "answerTime": "2016-08-13 15:04:32",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "32"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "18613998563300",
                "hurtNum": "13354095655",
                "answerTime": "2016-08-10 08:21:41",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "117"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "006902116613370",
                "hurtNum": "13304286680",
                "answerTime": "2016-08-13 10:54:48",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "4294"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01057471001",
                "hurtNum": "18941130052",
                "answerTime": "2016-08-13 17:15:21",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "270"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01059474548",
                "hurtNum": "13387844527",
                "answerTime": "2016-08-13 18:28:31",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "242"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "000196852213",
                "hurtNum": "13304280426",
                "answerTime": "2016-08-13 08:43:30",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "2165"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "004768821486",
                "hurtNum": "13390515829",
                "answerTime": "2016-08-13 10:59:58",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "6"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "008790216613370",
                "hurtNum": "18940822272",
                "answerTime": "2016-08-13 11:20:08",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "6001"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01080444208",
                "hurtNum": "18941135987",
                "answerTime": "2016-08-13 20:06:52",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "388"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "041139050216",
                "hurtNum": "18018966681",
                "answerTime": "2016-08-13 20:47:55",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "291"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01080440025",
                "hurtNum": "13309811766",
                "answerTime": "2016-08-13 18:09:11",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "435"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "0087133744944",
                "hurtNum": "18940820555",
                "answerTime": "2016-08-13 09:39:11",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "1115"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "009902166133709",
                "hurtNum": "13342229700",
                "answerTime": "2016-08-13 12:08:31",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "5578"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01056706369",
                "hurtNum": "13332486244",
                "answerTime": "2016-08-13 12:30:41",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "76"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01080444347",
                "hurtNum": "18042684712",
                "answerTime": "2016-08-13 22:05:26",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "658"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01080444208",
                "hurtNum": "18941135987",
                "answerTime": "2016-08-13 20:06:52",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "388"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "006902116613370",
                "hurtNum": "13304286680",
                "answerTime": "2016-08-13 10:54:48",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "4294"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01059474548",
                "hurtNum": "13387844527",
                "answerTime": "2016-08-13 18:28:31",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "242"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "002166133709",
                "hurtNum": "13354010996",
                "answerTime": "2016-08-13 10:33:44",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "8062"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "000196852213",
                "hurtNum": "13304280426",
                "answerTime": "2016-08-13 08:43:30",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "2165"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "008790216613370",
                "hurtNum": "13352256177",
                "answerTime": "2016-08-13 10:26:20",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "2307"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "002166133709",
                "hurtNum": "13354010996",
                "answerTime": "2016-08-13 10:33:44",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "8062"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "008872785874400",
                "hurtNum": "18940255109",
                "answerTime": "2016-08-13 15:48:02",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "24"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "057189332063",
                "hurtNum": "18002445153",
                "answerTime": "2016-08-13 10:21:13",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "169"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "057128074826",
                "hurtNum": "18900941101",
                "answerTime": "2016-08-12 05:59:41",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "65"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "00086224893",
                "hurtNum": "13354207941",
                "answerTime": "2016-08-12 14:59:16",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "1"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "4001363988",
                "hurtNum": "18004093460",
                "answerTime": "2016-08-11 14:39:59",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "66"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "008702116613370",
                "hurtNum": "13354045975",
                "answerTime": "2016-08-12 14:53:02",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "7966"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "057126893598",
                "hurtNum": "18900944819",
                "answerTime": "2016-08-12 06:26:26",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "302"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "4008688788",
                "hurtNum": "17740016547",
                "answerTime": "2016-08-12 13:58:41",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "82"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "00994272907052",
                "hurtNum": "18004013331",
                "answerTime": "2016-08-12 13:01:32",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "67"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "0087264929382",
                "hurtNum": "13387847872",
                "answerTime": "2016-08-12 11:51:23",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "2622"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01080440025",
                "hurtNum": "18002401069",
                "answerTime": "2016-08-12 10:39:45",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "189"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "008702116613370",
                "hurtNum": "13354111711",
                "answerTime": "2016-08-12 14:05:11",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "3630"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "008702116613370",
                "hurtNum": "13354113191",
                "answerTime": "2016-08-12 14:14:20",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "1565"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "00872166133709",
                "hurtNum": "13352269236",
                "answerTime": "2016-08-12 09:25:40",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "3759"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "01057429088",
                "hurtNum": "13332200568",
                "answerTime": "2016-08-12 11:10:13",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "13"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "4000615000",
                "hurtNum": "18042663840",
                "answerTime": "2016-08-12 12:48:49",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "78"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "057128069399",
                "hurtNum": "13354201726",
                "answerTime": "2016-08-12 15:16:19",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "114"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "00872166133709",
                "hurtNum": "13390018379",
                "answerTime": "2016-08-12 10:22:26",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "4105"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "041139050216",
                "hurtNum": "18042656001",
                "answerTime": "2016-08-11 15:53:43",
                "fraudType": null,
                "userCity": "大连",
                "callTimes": "159"
            },
            {
                "number": null,
                "time": null,
                "fraudNum": "02151397925",
                "hurtNum": "13390572402",
                "answerTime": "2016-08-12 11:06:57",
                "fraudType": null,
                "userCity": "沈阳",
                "callTimes": "44"
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
