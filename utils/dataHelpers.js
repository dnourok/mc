//Date method is 1 behind. Add explanation here for why it is
const monthLookUp = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
    7: 6,
    8: 7,
    9: 8,
    10: 9,
    11: 10,
    12: 11

}

// TODO: add jsdocs
//possible better name
export default function aggregateDataKeys(data, key, type) {
    const aggregatedData = {};
    //todo: explanation of shape for amchart
    //amCharts takes an array with objects...
    const chartDataShape = [];

    data.forEach((item) => {
        const searchKey = item[key];
        const doesKeyExists = aggregatedData[searchKey];
        doesKeyExists ? ++aggregatedData[searchKey] : aggregatedData[searchKey] = 1;
    });

    //generic keys for all data
    for (const [key, value] of Object.entries(aggregatedData)) {
        if (type === 'Month') {
            const date = new Date(2010, monthLookUp[key], 1); //fix this month look up to not need a year
            chartDataShape.push({'xAxis': date, 'yAxis': value})
        } else {
            chartDataShape.push({'xAxis': key, 'yAxis': value})
        }
    }

    return chartDataShape;
}
