# Cache server for TON Community DAO Vote

This is a simple cache server for the [TON Community DAO Vote](https://github.com/orbs-network/dao-vote/info).
The app is deployed to [heroku](https://dao-vote-server.herokuapp.com) and exposes several APIs: 
* /state - returns a json with the vote state which includes all votes, summary of proposal results, voting power of each member and maxLt which is the logical time of the last fetched transaction of the server
* /info - returns the proposal info (start time, end time, snapshot time)
* /contract - returns the contract address
* /results - returns the proposal results
* /frozen - returns the list of frozen address  

The server is synced with the contract every 60 seconds.
