/**
* This function aggregated all data values matching the key sent in
* @param {array} data description
* @param {string} key string of key in data
* @param {string} type The type will be month of undefined. The Line Chart expects dates
* in date form
* @return {array} an array of objects
*/

// TODO: pull out helper function to share between these two functions

export function aggregateDataKeys(data, key, type) {
    const aggregatedData = {};

    const chartDataShape = [];

    data.forEach((item) => {
        const searchKey = item[key];
        const doesKeyExists = aggregatedData[searchKey];
        doesKeyExists ? ++aggregatedData[searchKey] : aggregatedData[searchKey] = 1;
    });

    //generic keys for all data
    for (const [key, value] of Object.entries(aggregatedData)) {
        if (type === 'Month') {
            //The month is zero-based so need to subtract 1
            const currentMonth = key - 1;
            // TODO: Look into all options for dates accepted by amchart. Need to use
            // one without a specific year as it's aggregated over the past 8 years
            const date = new Date(2010, currentMonth, 1);
            chartDataShape.push({'xAxis': date, 'yAxis': value})
        } else {
            chartDataShape.push({'xAxis': key, 'yAxis': value})
        }
    }

    return chartDataShape;
}


export function aggregateProvinces(data, country) {
    const chartDataShape = [];
    const aggregatedData = {};

    data.forEach((item) => {
        if (item['Country'] === country) {

            const searchKey = item['Location'];
            const doesKeyExists = aggregatedData[searchKey];
            doesKeyExists ? ++aggregatedData[searchKey] : aggregatedData[searchKey] = 1;
        }
    });

    //generic keys for all data
    for (const [key, value] of Object.entries(aggregatedData)) {
        chartDataShape.push({'country': key, 'litres': value})

    }

    return chartDataShape;
}
