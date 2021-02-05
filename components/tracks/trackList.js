// const TrackList = []
const TrackList = [
    <div>
        <h2>Bill.com Challenge</h2>
        <h3>Description</h3>
        <p>Understanding business networks via financial transactions. </p>
        <h3>Objective</h3>
        <p>We want to address one of the 2 goals (or both!) <br></br>
            1. Spend forecasting for the business (agencies in our dataset) AND receivables forecasting for the vendors. Quantify how to spot business that are successful vs those that might have signs of problems. <br></br>
            2. Understand connectedness of the network by identifying similar businesses (or agencies) and similar vendors. Define a clear metric for similarity. Apply that understanding to recommend vendors to business.</p>
        <h3>Dataset Description</h3>
        <a href="https://opendata.dc.gov/datasets/purchase-card-transactions/data?page=11">https://opendata.dc.gov/datasets/purchase-card-transactions/data?page=11</a>
        <p>Students can use this free dataset that have ~430K purchase card transactions. Students can also use any other transactions dataset publicly available or available to Rice students via Rice network.
        </p>
    </div>,
    <div>
        <h2>Chevron Challenge</h2>
        <p>
            <h3>Background</h3>
            Every year thousands of hot dogs are toss into the garbage by Fuel Station Managers due to sanitary restrictions on how much time they are kept warm.
            Having a robust cook plan for every day would grant the stores a sales forecast and a money saving tool.
            During this challenge, the participants are requested to create a cook plan for certain buckets of time.
            Stores are open from 8 am to 8 pm every day, including weekends.
            The 3-hour time buckets provided are:
            1 = 8am to 10 am,
            2 = 11am to 1 pm,
            3 = 2pm to 4 pm,
            4 = 5pm to 8 pm.
            <h3>Objective</h3>
            When planning the logistics of the store, the store managers need to know with time in advance how many hot dogs are they going to sell during that month. In this Data Science Challenge, you are tasked with developing a model to predict:
            The Gross Sold quantity of hot dogs for different days and buckets for some stores. Please keep in mind that your model must predict an integer number of hotdogs to be sold, there is no such thing as 7.5 hot dogs.
        </p>
        <h4>Download the rest of the information and the data here:</h4>
        <a href="../../static/tracks/Chevron 2021 Datathon Challenge.zip">Chevron Challenge Zip File</a>
        {/*<p></p>*/}
        {/*<a href="../../static/scoring.csv">Scoring.csv File</a>*/}
    </div>,
    <div>
        <h2>Quantlab Challenge</h2>
        <h3>Background</h3>
        <p>In the last 3 months of 2020, Bitcoin (BTC) saw significant volatility as the price climbed from about$10,000 to nearly $30,000. A simple buy and hold strategy in this period would yield phenomenal USD returns but would see no growth in total BTC held.</p>
        <h3>Objective</h3>
        <p>The goal of this challenge is to develop a trading strategy to exploit market volatility to maximize the amount of BTC held in a given period.To be explicit – the success of a strategy will not be evaluated based on the USD value of the holdings but by the total BTC held at the end of the period.</p>
        <h3>Dataset Description</h3>
        <a href="https://rice.box.com/s/kyte1zcv83tbb5vad8d6rxz0d4orlotm">Quantlab x Rice Datathon 2021 Box Folder</a>
        <p>More details can be found in the box folder. The ql_datathon folder contains a notebook that can be used by the students to obtain the data they need for this exercise.</p>
    </div>,
    <div>
        <h2>2nd.MD Challenge</h2>
        <h3>Background</h3>
        <p>As a consequence of the COVID-19 pandemic, there has been a global shift towards remote business operations. The medical field is no different, as the shift towards telemedicine was heavily accelerated by the pandemic. Data from the CDC shows that there was a 154% YoY increase in telemedicine visits during March 2020 compared to the same period in 2019.
            By summer 2020, however, there was a sharp decline in telemedicine appointments as patients opted to return to in-office appointments. This distinct change in behavior brings into question what the future of telemedicine will look like.</p>
        <h3>Objective</h3>
        <p>Using the corpus of publications provided and any supplemental datasets of interest, identify key areas of concern or opportunity for the telemedicine industry. A successful project will be able to synthesize the results of analysis on the provided dataset in the context of the conditions of the COVID-19 pandemic.</p>
        <h3>Dataset Description</h3>
        <a href="https://zenodo.org/record/4031923#.YBsadehKg2w">https://zenodo.org/record/4031923#.YBsadehKg2w</a>
        <p>This dataset contains metadata from 143 Scopus-indexed publications, each of which features the subject “telemedicine” and was published in a “trade journal”. Among the information contained in the metadata are the publication title, authors, journal, abstract text, and article URL.</p>
    </div>,
    <div>
        <h2>Houston/Texas Trends Track</h2>
        <h3>Background</h3>
        <p>This track is designed for students who are specifically interested in working with a Houston or Texas related dataset.  These projects should draft a narrative about a trend observed from a local dataset.</p>
        <h3>Objective</h3>
        <p>The outcome of this track is a presentation that paints a coherent story with supporting figures from Houston / Texas related datasets.  Great projects might extend this presentation to include a simple policy suggestion to the Houston City Government or Texas State Government.</p>
        <h3>Kinder UDP</h3>
        <p>The Kinder Urban Data Platform has a wealth of data collected and maintained by the Kinder Institute.  Find datasets here: <a href="https://kinderudp.org">https://kinderudp.org</a>.</p>
        <p>Sample Datasets:</p>
        <ul>
            <li><a href="https://www.kinderudp.org/#/datasetCatalog/7mao80j3akg7">Neighborhood Gentrification across Harris County: 1990 to 2016</a></li>
            <li><a href="https://www.kinderudp.org/#/datasetCatalog/035bqkx1dwov">Public Crash Data Extract from TxDOT (2010-2016)</a></li>
        </ul>
        <h3>Open Data Houston</h3>
        <p>Houston’s open data portal! Collected resource of publicly accessible data on Houston Local Govt. activities.</p>
        <ul>
            <li><a href="http://data.houstontx.gov/dataset/city-of-houston-campaign-finance-reporting">City of Houston Campaign Finance Reporting</a></li>
            <li><a href="http://data.houstontx.gov/dataset/public-schools-in-the-houston-region">Public Schools in the Houston Region</a></li>
        </ul>
        <h3>Texas Open Data Portal</h3>
        <p>Texas’ open data portal! Collected resource of publicly available data on Texas Govt. activities.</p>
        <ul>
            <li><a href="https://data.texas.gov/Government-and-Taxes/Active-Cigarette-Tobacco-Retailers/u5nd-4vpg">Active Cigarette/Tobacco Retailers</a></li>
            <li><a href="https://data.texas.gov/Transportation/CapMetro-APC-RAW-January-2016/sfrh-ucri">CapMetro APC (RAW) - January 2016</a></li>
        </ul>
    </div>,
    <div>
        <h2>Other Interesting Datasets To Consider</h2>
        <h3>Data.gov Education Data Search Tool</h3>
        <a href="https://nces.ed.gov/ipeds/datacenter/DataFiles.aspx">Get the Dataset Here</a>

        <h3>Various Institutional Characteristics of US Colleges and Universities</h3>
        <li><a href="https://github.com/fivethirtyeight/data/tree/master/world-cup-2018">Get the Dataset Here</a></li>
        <li><a href="https://nces.ed.gov/ipeds/datacenter/data/HD2018_Dict.zip">Guide to names of columns</a></li>

        <h3>Graduation Rates and Outcomes US Colleges and Universities</h3>
        <li><a href="https://nces.ed.gov/ipeds/datacenter/data/OM2018.zip">Get the Dataset Here</a></li>
        <li><a href="https://nces.ed.gov/ipeds/datacenter/data/OM2018_Dict.zip">Guide to names of columns</a></li>

        <h3>Wide Collection Of Different Type of Datasets</h3>
        <a href="https://medium.com/towards-artificial-intelligence/best-datasets-for-machine-learning-data-science-computer-vision-nlp-ai-c9541058cf4f ">Get the Dataset Here</a>

        <h3>Machine Learning Geared Data Sets</h3>
        <a href="https://medium.com/@ODSC/25-excellent-machine-learning-open-datasets-940ca2124dfc ">Get the Dataset Here</a>

    </div>
]

export default TrackList;