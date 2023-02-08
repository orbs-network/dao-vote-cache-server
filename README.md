# Cache Server for TON Community DAO Vote

This is a simple cache server for the [TON Community DAO Vote](https://ton.vote/).
The app is deployed to [heroku](https://dao-vote-cache-server.herokuapp.com/info) and exposes several APIs: 
* `/state` - returns a json with the vote state which includes all votes, summary of proposal results, voting power of each member and maxLt which is the logical time of the last fetched transaction of the server
* `/info` - returns the proposal info (start time, end time, snapshot time)
* `/contract` - returns the contract address
* `/results` - returns the proposal results
* `/frozen` - returns the list of frozen address  

The server is synced with the contract every 60 seconds.

## This server is only used for caching

For proper decentralization, the real vote results are normally calculated and verified client-side by every app frontend.

This server is used to cache results for use cases like embedding live vote results in third-party websites that don't want to make dozens of RPC calls and actually verify the results client-side. Please note that if you're relying on this server, you're depending on a centralized entity to verify the vote results for you.

## Endpoint examples

https://dao-vote-cache-server.herokuapp.com/info

```json
{
  "startTime": 1675339000,
  "endTime": 1775728000,
  "snapshot": {
    "snapshotTime": 1675338000,
    "mcSnapshotBlock": 27037278
  }
}
```

https://dao-vote-cache-server.herokuapp.com/results

```json
{
  "yes": 98,
  "no": 2,
  "abstain": 0,
  "totalWeight": "3127894843815"
}
```

https://dao-vote-cache-server.herokuapp.com/state

```json
{
  "votes": {
    "EQCIrsReMlgndpxq5S_xNPEuxvMWfTjo1B9VEFGaK8HwEmRx": {
      "timestamp": 1675863641,
      "vote": "Yes"
    },
    "EQCM2ReRAEkCGaAM33ZUx-_vAj0qPgI5TeBQtIp1tjjFe1aa": {
      "timestamp": 1675797792,
      "vote": "No"
    },
    "EQCHG-_Pb5a51VVPdE_TUIdFbUX2XJZASg2-D_eAH6WExdu1": {
      "timestamp": 1675798276,
      "vote": "Yes"
    },
    "EQDZ1c8qnq4npE_ZvOYHa-MB9E0wBMEKdTobZTtRc4-d_L5Y": {
      "timestamp": 1675845689,
      "vote": "No"
    },
    "EQCNDHBNzwKUXRiwri7sD2lwT7uLD_sfsXICrAhBjoB-ICYo": {
      "timestamp": 1675848730,
      "vote": "Yes"
    }
  },
  "proposalResults": {
    "yes": 98,
    "no": 2,
    "abstain": 0,
    "totalWeight": "3127894843815"
  },
  "votingPower": {
    "EQCIrsReMlgndpxq5S_xNPEuxvMWfTjo1B9VEFGaK8HwEmRx": "6304795283",
    "EQCM2ReRAEkCGaAM33ZUx-_vAj0qPgI5TeBQtIp1tjjFe1aa": "55794057742",
    "EQCHG-_Pb5a51VVPdE_TUIdFbUX2XJZASg2-D_eAH6WExdu1": "3065795990790",
    "EQDZ1c8qnq4npE_ZvOYHa-MB9E0wBMEKdTobZTtRc4-d_L5Y": "0",
    "EQCNDHBNzwKUXRiwri7sD2lwT7uLD_sfsXICrAhBjoB-ICYo": "0"
  },
  "maxLt": "35133983000003"
}
```
