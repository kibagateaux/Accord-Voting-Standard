# accord_voting

standardization framework for blockchain voting systems

MVP is `asset Vote` and `asset Decision`
Events + Transactions are a good side note

So Votes and Decision models are essentially done!!!
Make PoC voting transaction with Accord Persons

Make transactions and events
#Up and Running
create bna  - `composer archive create -t dir -n .`

deploy network - `composer network install --card PeerAdmin@hlfv1 --archiveFile accord_voting@0.0.1.bna`

start network - `composer network start --networkName accord_voting --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card`


start server - `composer-rest-server` and select admin card `admin@accord_voting` and no namespace


clean start -  ```bash
~/hyperledger-fabric/stopFabric.sh
~/hyperledger-fabric/teardownFabric.sh
~/hyperledger-fabric/createPeerAdminCard.sh
~/hyperledger-fabric/startFabric.sh
```