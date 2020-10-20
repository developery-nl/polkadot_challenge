
# [INTERMEDIATE CHALLENGE] FRAME Development

## Approach
Assume we have a grocery store and want to keep a balance of all kind of fruits. For illustration purpose, our supply is defined to be 'sufficent' if we have at least 48 pieces of a type of fruit in store. A struct is defined for this purpose:

```
    "MyStructDetails": {
      "Fruitname": "Vec<u8>",
      "AmountSubmitted": "u32",
      "OutOfSupply": "Option<u32>"
    }
```

* The substrate node template has been updated to include the new struct to maintain storage of fruit and number of pieces, the [code is here](https://github.com/developery-nl/polkadot_challenge_substrate_frame)

* The front end has been updated to edit these fruit and number of pieces, the [code is here](https://github.com/developery-nl/polkadot_challenge_frontend_frame) 


### Some screenshots from the interface
Below we used the interface to add 12 pieces of apples, which is below our desired supply of 48 so a message is given about low supply

![Example apples](Schermafdruk%20van%202020-10-20%2020-30-55.png)

Below we used the interface to add 66 pieces of apples, which is above our desired supply

![Example apples sufficient](Schermafdruk%20van%202020-10-20%2020-31-39.png)

Lets put some bananas also

![Example bananas](Schermafdruk%20van%202020-10-20%2020-32-19.png)

