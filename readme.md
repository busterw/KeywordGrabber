# Google Trend Grabber

Google Trend Grabber is a simple javascript REST API built around the  [google-trends-api](https://breakdance.github.io/breakdance/) that is designed to run locally in order to provide google trends data for another application. 
## Endpoints

### /InterestOverTimeAll/{word}
| Parameter | Type |
| ------ | ------ |
| word | string |

>Returns a list of numbers that represent search interest relative to the highest point on the chart for the word. A value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular. Likewise a score of 0 means the term was less than 1% as popular as the peak.

### /InterestOverTime/{word}/{period}
| Parameter | Type |
| ------ | ------ |
| word | string |
|period|string - validset : (Week / Month / Year)|
>Return a list of numbers that represent search interest relative to the highest point on the chart for the given time period, relative to today. A value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular. Likewise a score of 0 means the term was less than 1% as popular as the peak. If you use multiple keywords for a comparison, the return data will also contain an average result for each keyword.

## Tech

Google Trend Grabber uses a number of open source projects to work properly:
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Google Trends Api] - provides a library for getting Google keyword data


## Installation

Google Trend Grabber requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd google-trend-grabber
npm start
```
## TODOS
- Make URI / port configurable so app is deployable

## License

MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [Google Trends API]: <https://breakdance.github.io/breakdance/>

