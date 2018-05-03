/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.accordproject.SampleTransaction} sampleTransaction
 * @transaction
 */
async function sampleTransaction(tx) {
    // Save the old value of the asset.
    const oldValue = tx.asset.value;

    // Update the asset with the new value.
    tx.asset.value = tx.newValue;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.accordproject.SampleAsset');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.accordproject', 'SampleEvent');
    event.asset = tx.asset;
    event.oldValue = oldValue;
    event.newValue = tx.newValue;
    emit(event);
}

// const submitVote = async (data) =>  { // is data a tx or vote?

// };

/**
 * Sample transaction
 * @param {org.accord_voting.vote.TransferVoteTransaction} tx The sample transaction instance.
 * @transaction
 */
async function transferVoteTransaction(tx) {
    // sould be able to transfer PC -> voter and voter -> PC, should work for Votes or Decision
    const vote = await getAssetRegistry(`org.accord_voting.Vote`);
    console.log("transfer data", tx, vote);
    const event = getFactory().newEvent('org.accord_voting', `TransferVoteEvent`);
    event.voteIdentifier = "a";
    event.dispatchingEntityID = "0";
    event.receivingEntityID = "1";
    emit(event)
    return tx;
};

    
    


// need functions for:
// vote flow - 
    // disperse votes to voters
    // send vote to voting protocol
    // VPC automatically sends votes to DPC when all votes in or time is up
    // DPC decides winner based on logic (most votes)
    // DPC dispatches decision event



// nice features
    // transfer vote ownership