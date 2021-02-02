const TrackList = []
// const TrackList = [
//     <div>
//         <h2>Chevron Challenge</h2>
//         <p>
//             Every year thousands of hot dogs are toss into the garbage by Fuel Station Managers due to sanitary restrictions on how much time they are kept warm.
//             Having a robust cook plan for every day would grant the stores a sales forecast and a money saving tool.
//             During this challenge, the participants are requested to create a cook plan for certain buckets of time.
//             Stores are open from 8 am to 8 pm every day, including weekends.
//             The 3-hour time buckets provided are:
//             1 = 8am to 10 am,
//             2 = 11am to 1 pm,
//             3 = 2pm to 4 pm,
//             4 = 5pm to 8 pm.
//             <br></br>
//             When planning the logistics of the store, the store managers need to know with time in advance how many hot dogs are they going to sell during that month. In this Data Science Challenge, you are tasked with developing a model to predict:
//             The Gross Sold quantity of hot dogs for different days and buckets for some stores. Please keep in mind that your model must predict an integer number of hotdogs to be sold, there is no such thing as 7.5 hot dogs.
//         </p>
//         <h4>Download the rest of the information and the data here:</h4>
//         <a href="../../static/tracks/Chevron 2021 Datathon Challenge.zip">Chevron Challenge Zip File</a>
//         {/*<p></p>*/}
//         {/*<a href="../../static/scoring.csv">Scoring.csv File</a>*/}
//     </div>,
//     <div>
//         <h2>Predicting the Severity of Forest Fires Applied Machine Learning for Social Good Sponsored by Accenture</h2>
//         <h3>Background</h3>
//         <p>Forest fires are a serious natural disaster experienced by countries around the world. Recently, forest fires in Australia and California have engulfed huge swaths of habitat causing untold loss to local communities, wildlife, and ecosystems. Forest fires across the globe are responsible for killing thousands per year and costing billions of dollars. <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1215.pdf">Read More</a></p>
//         <h3>Objective</h3>
//         <p>Your goal is to develop a model that predicts the severity of a wildfire based on the expected area it will engulf using the fire’s initial conditions. You then need to create a plan for how your model should be used by firefighters or other governmental entities to combat this issue more intelligently and effectively. Included in your plan, you should take a step back from the numbers and discuss realistic data accessibility, whether the key factors found in your model make sense, and whether you would trust your model in this high-stakes situation. </p>
//         <h3>Dataset Description</h3>
//         <p>You are free to use any dataset you find online that assists you in answering the overall question. We have provided an initial data set to help you get started. </p>
//         <h3>Kaggle Forest Fire Dataset</h3>
//         <a href="https://www.kaggle.com/rtatman/188-million-us-wildfires">https://www.kaggle.com/rtatman/188-million-us-wildfires</a>
//         <p>This data publication contains a spatial database of wildfires that occurred in the United States from 1992 to 2015. It is the third update of a publication originally generated to support the national Fire Program Analysis (FPA) system. The wildfire records were acquired from the reporting systems of federal, state, and local fire organizations. The following core data elements were required for records to be included in this data publication: discovery date, final fire size, and a point location at least as precise as Public Land Survey System (PLSS) section (1-square mile grid). The data were transformed to conform, when possible, to the data standards of the National Wildfire Coordinating Group (NWCG). Basic error-checking was performed and redundant records were identified and removed, to the degree possible. The resulting product, referred to as the Fire Program Analysis Fire-occurrence Database (FPA FOD), includes 1.88 million geo-referenced wildfire records, representing a total of 140 million acres burned during the 24-year period.</p>
//         <h3>Source</h3>
//         <p>https://www.kaggle.com/rtatman/188-million-us-wildfires/kernels</p>
//     </div>,
//     <div>
//         <h2>Machine Learning Systems Track</h2>
//         <h3>Background</h3>
//         <p>This track is designed for students who may not have an extensive background in modeling but are experienced programmers who are looking to get involved with data science.  In practice, especially in large industry projects, the modeling portion is generally only a small portion of the overall effort in serving a production-grade machine learning system.  To reflect that, we’re dedicating this track specifically for building tools for machine learning, fusing datasets, or interesting applications related to data science but not modeling per se.</p>
//         <h3>Objective</h3>
//         <p>The outcome of this track is highly dependent on what part of the data science pipeline you’re wishing to contribute.  Here are some project suggestions to give you an idea of what might fall under this track!</p>
//         <ul>
//             <li>Data Engineering/Scraping Project Suggestions
//                 <ul>
//                     <li>Combining related datasets in an interesting/useful way</li>
//                     <li>Ex: Collecting data tied to different US States to develop an API for easily accessing and comparing information</li>
//                 </ul>
//             </li>
//             <li>ML Tools
//                 <ul>
//                     <li>WYSIWIG Neural Network Application</li>
//                     <li>Web application that lets you create drag n drop neural networks</li>
//                 </ul>
//             </li>
//             <li>Data Visualization Tools
//                 <ul>
//                     <li>Automatic Data Summarization - Auto-generate summaries and visualizations of arbitrary CSV files</li>
//                     <li>Cloropleth Plotting Toolkit - Matplotlib / Altair / Geopandas have great utilities for this, but I always have to refer to documentation because I forget! It would be great if I could pass a dataframe with “state, numeric feature” to a function to get a quick plot.</li>
//                     <li>Complex Data Visualization to React Component - Can you make it easier to turn a complex & potentially live visualization into a component for a web frontend to consume?</li>
//                 </ul>
//             </li>
//         </ul>
//     </div>,
//     <div>
//         <h2>Houston/Texas Trends Track</h2>
//         <h3>Background</h3>
//         <p>This track is designed for students who are specifically interested in working with a Houston or Texas related dataset.  These projects should draft a narrative about a trend observed from a local dataset.</p>
//         <h3>Objective</h3>
//         <p>The outcome of this track is a presentation that paints a coherent story with supporting figures from Houston / Texas related datasets.  Great projects might extend this presentation to include a simple policy suggestion to the Houston City Government or Texas State Government.</p>
//         <h3>Kinder UDP</h3>
//         <p>The Kinder Urban Data Platform has a wealth of data collected and maintained by the Kinder Institute.  Find datasets here: <a href="https://kinderudp.org">https://kinderudp.org</a>.</p>
//         <p>Sample Datasets:</p>
//         <ul>
//             <li><a href="https://www.kinderudp.org/#/datasetCatalog/7mao80j3akg7">Neighborhood Gentrification across Harris County: 1990 to 2016</a></li>
//             <li><a href="https://www.kinderudp.org/#/datasetCatalog/035bqkx1dwov">Public Crash Data Extract from TxDOT (2010-2016)</a></li>
//         </ul>
//         <h3>Open Data Houston</h3>
//         <p>Houston’s open data portal! Collected resource of publicly accessible data on Houston Local Govt. activities.</p>
//         <ul>
//             <li><a href="http://data.houstontx.gov/dataset/city-of-houston-campaign-finance-reporting">City of Houston Campaign Finance Reporting</a></li>
//             <li><a href="http://data.houstontx.gov/dataset/public-schools-in-the-houston-region">Public Schools in the Houston Region</a></li>
//         </ul>
//         <h3>Texas Open Data Portal</h3>
//         <p>Texas’ open data portal! Collected resource of publicly available data on Texas Govt. activities.</p>
//         <ul>
//             <li><a href="https://data.texas.gov/Government-and-Taxes/Active-Cigarette-Tobacco-Retailers/u5nd-4vpg">Active Cigarette/Tobacco Retailers</a></li>
//             <li><a href="https://data.texas.gov/Transportation/CapMetro-APC-RAW-January-2016/sfrh-ucri">CapMetro APC (RAW) - January 2016</a></li>
//         </ul>
//     </div>,
//     <div>
//         <h2>Other Interesting Datasets To Consider</h2>
//         <h3>College/University Survey Data</h3>
//         <a href="https://nces.ed.gov/ipeds/datacenter/DataFiles.aspx">Get the Dataset Here</a>
//         <p>
//             The datasets available from this search tool offer a wide variety of data ranging from institutional characteristics of colleges, to their test scores and graduation rates. Choose the year and type of data you are looking for and press 'continue'. The column labeled data file has a download link for the dataset. The rightmost column labeled dictionary lets you download a spreadsheet containing a breakdown of what the features/labels in the dataset represent.
//         </p>
//         <h3>2018 World Cup Match Data</h3>
//         <a href="https://github.com/fivethirtyeight/data/tree/master/world-cup-2018">Get the Dataset Here</a>
//         <p>
//             The leftmost link contains match data from the 2018 world cup courtesy of fivethirtyeight. The right link contains their tournament predictions do not copy this as your own result, find a new way to analyze the data.
//         </p>
//         <h3>Divorce Prediction Dataset</h3>
//         <a href="https://archive.ics.uci.edu/ml/datasets/Divorce+Predictors+data+set">Get the Dataset Here</a>
//         <p>
//             Each row in this dataset represents an individuals responses to a survey containing 54 questions about various aspects of their marriage. The vectors are labeled based on whether or not the relationship ended in divorce. Have fun!
//         </p>
//         <h3>UK Online Retail Invoices</h3>
//         <a href="https://archive.ics.uci.edu/ml/datasets/Online+Retail+II">Get the Dataset Here</a>
//         <p>
//             This dataset contains the data from about 1,000,000 invoices from a UK online retail store between 2009 and 2011. The link 'data folder' at the top contains a download link for the dataset.
//         </p>
//     </div>
// ]

export default TrackList;