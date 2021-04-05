const express = require('express');
const googleTrends = require('google-trends-api');
const app = express();

app.get('/', (req, res) => {
    res.send('Express endpoint / is here!');
});

app.get("/InterestOverTimeAll/:word", async (req, res) => {
    var initresults = '';
    const wordToSend = req.params.word;
    await googleTrends.interestOverTime({keyword: wordToSend})
        .then(function(results){
            initresults = results
        });
    return res.status(200).send({
        success: 'true',
        body: initresults
    })
});

app.get("/InterestOverTime/:word/:period", async (req, res) => {
    var initresults = '';
    const wordToSend = req.params.word;
    var dateNow = new Date();
    var dateFrom = new Date();

    switch(req.params.period.toLowerCase()){
        case "week": dateFrom.setDate(dateFrom.getDate() -7);
            break;
        case "month" : dateFrom.setMonth(dateFrom.getMonth() -1);
            break;
        case "year" : dateFrom.setFullYear(dateFrom.getFullYear() -1 );
            break;
    }

    console.log("Getting results for word " + wordToSend + " from " + dateFrom + " to " + dateNow);

    await googleTrends.interestOverTime({
        keyword: wordToSend,
        startTime: dateFrom,
        endTime: dateNow})
        .then(function(results){
            initresults = results
        });
    return res.status(200).send({
        success: 'true',
        body: initresults
    })
});

app.listen(5001, () => {
    console.log('Express app listening on port 5001');
});