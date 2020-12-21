(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{IbG5:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return h}));var n=t("q1tI"),i=t.n(n),l=t("Bl7J"),s=t("qhky"),o=t("9eSz"),r=t.n(o);a.default=function(e){var a=e.data;return i.a.createElement(l.a,null,i.a.createElement(s.a,null,i.a.createElement("body",{className:"covid-project"})),i.a.createElement("div",{className:"project-header"},i.a.createElement(r.a,{fluid:a.covidPostHeader.childImageSharp.fluid,alt:"covid project home page",className:"header"})),i.a.createElement("div",{className:"wrap-small title"},i.a.createElement("h1",null,"COVID-19 in the United States"),i.a.createElement("h2",null,"Tracking the spread of COVID-19 in the United States")),i.a.createElement("div",{className:"project-info"},i.a.createElement("div",null,i.a.createElement("h2",null,"Context"),i.a.createElement("p",null,"Personal project")),i.a.createElement("div",null,i.a.createElement("h2",null,"Timeline"),i.a.createElement("p",null,"One week")),i.a.createElement("div",null,i.a.createElement("h2",null,"My roles"),i.a.createElement("p",null,"Data visualization, web design and development")),i.a.createElement("div",null,i.a.createElement("h2",null,"Tools"),i.a.createElement("p",null,"HTML, CSS, JavaScript, D3.js, Vega-Lite"))),i.a.createElement("section",null,i.a.createElement("div",{className:"wrap-small"},i.a.createElement("h3",null,"Overview and objective"),i.a.createElement("p",null,"With the Coronavirus outbreak, many informative graphs and dashboards were created on the web. Having interacted with a number of them, I found them to be slow, unresponsive, and at times overwhelming. Frustrated with the slowness of news sites and dashboards, I decided to re-create some of the useful visualizations that I have seen around the web, with an emphasis on performance. I aimed to have the site load in less than 4 seconds, which is around the ",i.a.createElement("a",{href:"https://www.hobo-web.co.uk/your-website-design-should-load-in-4-seconds/"},"ideal load time")," for webpages. This would result in less frustrations for me and other users who are possibly going to be visiting the website every day to find the latest numbers."))),i.a.createElement("section",{className:"section-pink"},i.a.createElement("div",{className:"wrap-small"},i.a.createElement("h3",null,"The components"),i.a.createElement("p",null,"The webpage has two sections:"),i.a.createElement("p",null,i.a.createElement("b",null,"1.")," Critical information about the coronavirus that every person needs to know"),i.a.createElement("p",null,i.a.createElement("b",null,"2.")," Visualizations which inform viewers on the latest numbers around the country"),i.a.createElement("p",null,"While designing the layout, I was mindful of the implicit hierarchy of the data. I followed a top-down approach in representing information, starting with the overall number of cases and deaths in United States and breaking up the data based on U.S. states."))),i.a.createElement("section",null,i.a.createElement("div",{className:"wrap-small"},i.a.createElement(r.a,{fluid:a.sketch1.childImageSharp.fluid,alt:"Website layout sketches where I identified the sections for visualizations and their order"}),i.a.createElement("figcaption",null,"Website layout sketches where I identified the sections for visualizations and their order"),i.a.createElement(r.a,{fluid:a.sketch2.childImageSharp.fluid,alt:"Early sketches for some of the visualiations I implemented"}),i.a.createElement("figcaption",null,"Early sketches for some of the visualiations I implemented"),i.a.createElement("h3",null,"Total COVID-19 cases and deaths in the United States"),i.a.createElement("p",null,"In order to compare the difference in cases and deaths, I decided to merge two scales in one visualization instead of using a unified scale or two separate visualizations. In the first case, since the number of cases are much larger than deaths, the line that represents deaths would have been flattened, making any form of comparison meaningless."),i.a.createElement(r.a,{fluid:a.viz1.childImageSharp.fluid,alt:"line chart of covid cases and deaths"}),i.a.createElement("figcaption",null,'First visualization: Line chart. Using two scales prevents flattening of "deaths" and still be able to compare the relative increase of each category'),i.a.createElement("h3",null,"Challenges in showing multiple information"),i.a.createElement("p",null," In the early version of this visualization, I used only one scale for showing both cases and deaths to simply the graph for the viewer. However, I found that a unified scale would have limited the red line (deaths) in the first sixth of the scale, looking almost flat. This wouldn't have been useful for demonstration purposes. Using separate axes, however, allowed me to observe the increase in deaths more accurately. In addition, the two metrics are comparable now. One can see the rate of change for each category, noticing that there has been a major increase in the number of deaths from mid-April."),i.a.createElement("h3",null,"COVID-19 Map of cases in the U.S."),i.a.createElement("p",null,"After the audience has looked at the historical data for the aforementioned metrics, they will be able to look at the overall number of cases in each state and easily compare the difference through the choropleth. Each state is coloured based on a logarithmic scale that goes from light pink (less than 100 cases) to dark pink (500K cases and above)."),i.a.createElement(r.a,{fluid:a.viz2.childImageSharp.fluid,alt:"map of covid cases in the united states"}),i.a.createElement("figcaption",null,"The user can interact with this map by hovering over each state to see the specific number for each state. In the example below, Montana is hovered over, where it’s highlighted in black"),i.a.createElement("h3",null,"Problem: Diverging colours or single hue?"),i.a.createElement("p",null,"A few visualizations which I had seen around the web had used diverging colours. However, such scheme usually indicates a phenomena that go in two opposite directions. The number of cases, however, is only going to increase—there is no positive side to this data. Using a single hue properly represents the sequential nature of the data."),i.a.createElement("h3",null,"COVID-19 deaths by state: How to compare differences in one area"),i.a.createElement("p",null,"While choropleths are sufficient for showing the relative different between states across a geographic area, I decided to use another form of visualization to show the difference in the number of deaths between each state. Here I used small multiples through a group of area charts that share a scale, allowing an easy comparison between the entirety of the data. Based on this visualization, it instantly becomes clear that New York and New Jersey are doing worse than other states in comparison. If that isn’t clear enough, their latest numbers which are placed at the end of their x-axis clearly illustrated that."),i.a.createElement(r.a,{fluid:a.viz3.childImageSharp.fluid,alt:"multiple line chart of covid cases in the us, divided by state"}),i.a.createElement("figcaption",null,"Using a single scale allows us to directly compare each state to one another"),i.a.createElement("h3",null,"Final thoughts"),i.a.createElement("p",null,"This project had quite a learning curve for me. I had primarily made visualizations on ",i.a.createElement("a",{href:"https://observablehq.com/"},"Observable")," in my notebooks using Vega-Lite and D3, but I had never implemented them on a website. However, wrapping up the project made me feel more confident in my ability to learn on my own and debug using Chrome’s developer tools."))))};var h="1818856793"}}]);
//# sourceMappingURL=component---src-pages-covid-in-us-js-8a81a832c3398c762c0e.js.map