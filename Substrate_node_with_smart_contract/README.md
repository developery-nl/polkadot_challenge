# [INTERMEDIATE CHALLENGE] Smart contracts - write an ERC-20 smart contract with ink!

* The Substrate node I created includes the contracts pallet repo, see my code used [here](https://github.com/developery-nl/polkadot_challenge_substrate_node_contract)
* I did use the ERC-20 contract from [ink example](https://github.com/paritytech/ink/tree/master/examples/erc20) , see my code used [here](https://github.com/developery-nl/polkadot_challenge_substrate_node_contract/erc20)
* I used the Canvas-UI to test the contract before the deployment in the substrate dev node 

My workflow:

1. Run the substrate node that includes the contracts pallet
2. Open the UI, connect with dev chain, I use the [polkadot app](https://polkadot.js.org/apps/#/contracts).
3. Upload WASM ( erc20.wasm ) and contract ABI ( metadata.json )
4. Deploy contract
5. Execute calls on the contract to show it is working with transfer calls and balance calls.

## Some proofs of my work done

![finish compile and start canvas to test contract](Schermafdruk%20van%202020-10-19%2015-46-26.png)

![Deploy contract in Polkadot UI](Schermafdruk%20van%202020-10-19%2022-00-43.png)

![Transfer](Schermafdruk%20van%202020-10-19%2022-04-31.png)

![Balance](Schermafdruk%20van%202020-10-19%2022-06-31.png)

