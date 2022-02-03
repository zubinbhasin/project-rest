# Project Rest

Get API to fetch filtered records from mongo

# Cloning
git clone https://github.com/zubinbhasin/project-rest.git

# Dependencies 
npm i

## Quick Start

To start on production env: yarn start 
To start on use dev env: yarn dev 
For testing using jest: yarn test 

##

# Get Route 
/v1/records?startDate=2016-01-01&endDate=2018-02-02&minCount=2700&maxCount=3000

# query
startDate - “YYYY-MM-DD” format
endDate - “YYYY-MM-DD” format
minCount - minimum sum of elemets of count array for records
maxCount - maximum sum of elemets of count array for records
