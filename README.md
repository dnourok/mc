# Volcano Data Visualization

# Description
App to create data visualizations from data tracking volcano eruptions from 2010-2018. The goal is for the user to quickly understand a story of the data through a series of charts. The source of the data is https://www.kaggle.com/texasdave/volcano-eruptions.

Screenshots of app visualizations can be found in the description of this PR: https://github.com/dnourok/mc/pull/1

# Steps to run locally
1. Clone repo
2. Install necessary packages by running ```npm i```
3. Once install has finished run ```npm run build-start```
4. Once the build is complete it should open ```http://localhost:8000/``` automatically

# Tech Stack
This is a very simple implementation of an app displaying data tracking volcano erruption. For the data visualization I went with creating re usable components that wrap the amCharts library.
Docs for the amCharts can be found here https://www.amcharts.com/

Specifically this app uses Bar, Line Chart and Donut Charts from the libary.
Bar chart docs: https://www.amcharts.com/demos/simple-column-chart/
Line graph docs: https://www.amcharts.com/demos/line-graph/
Donut chart graph docs: https://www.amcharts.com/demos/donut-chart/

The app uses webpack for it's build and React for displaying the components. I chose to use webpack as I needed a tool to compile the Javascript to run the app. I find webpack easy to use especially when introducing new types of files such as CSV. Docs for webpack: https://webpack.js.org/concepts/

#Data Granualarity
The app focuses on the granualarity of the data. Presenting different views from the aggregated data.
1. Which month has had the most volcano eruptions over the past 8 years.
2. Which country has had the most volcano eruptions over the past 8 years.
3. Which year has had the most eruptions over the past 8 years.
4. Province breakdown of Country over the past 8 years.

#Improvements to the Data/Production Ready
Due to limited time to build the app it is using static data that can be found in the data folder. If this app's goal was to go to production I would prefer to use an API to injest the data. Ideally the API would be maintained with up to date data. I would introduce a server specifically node.

There also isn't much design currently to this app besides what comes out of the box with amCharts. An improvement would be to add more to the UX. I also need to adjust components to be fully responsive.

Additionally there are no data checks or loading/error states because there is static data. The charts could also become more dynamic off of the data as well for example with the min and max of the data endpoints.

#List of Todos to improve app
- Add eslint
- Add tests
- Add data type checks
- Add error/loading state
- Address any performance issues
- Make components fully responsive
- Add to UX
- Address source-map error
- Add build process
- Address warning size limit on build startup
- Address any performance issues

# Evolve Data
This is a very limited pool of data but there is a lot to present. I think there is more of a story to tell with the data. It could driver users to know what time of year is most dangerous to go to a specific country and even further what month they are at highest risk for a volcano erupting.
