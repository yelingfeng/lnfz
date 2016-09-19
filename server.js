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
       "result": {"provOut":"246","totalData":"248","provIn":"2","todayData":"0"}
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
