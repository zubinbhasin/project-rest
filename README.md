# Project Rest

Get API to fetch filtered records from mongo

# Cloning
git clone https://github.com/zubinbhasin/project-rest.git

# Dependencies 
npm i

## Quick Start

To start on production env: yarn start  <br>
To start on use dev env: yarn dev <br>
For testing using jest: yarn test <br>

##

# Get Route 
/v1/records?startDate=2016-01-01&endDate=2018-02-02&minCount=2700&maxCount=3000

# query
startDate - “YYYY-MM-DD” format <br>
endDate - “YYYY-MM-DD” format <br>
minCount - minimum sum of elemets of count array for records <br>
maxCount - maximum sum of elemets of count array for records <br>
