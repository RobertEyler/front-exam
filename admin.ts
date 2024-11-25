/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/admin.json`.
 */
export type Admin = {
  "address": "9ZFtqrz4o49dvtYkd36a1y59fxN4jiLaNcxndNDbUrc7",
  "metadata": {
    "name": "admin",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "feeRateInitialize",
      "discriminator": [
        200,
        81,
        9,
        123,
        19,
        55,
        233,
        227
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "feeState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "platformSol",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  45,
                  115,
                  116,
                  111,
                  114,
                  101,
                  45,
                  109,
                  111,
                  110,
                  101,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "platformToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  45,
                  115,
                  116,
                  111,
                  114,
                  101,
                  45,
                  116,
                  111,
                  107,
                  101,
                  110
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "firstRate",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "secondRate",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "thirdRate",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "oneTimeRate",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "swapExchangeRate",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "rebateRate",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "rebateAuthorityInitialize",
      "discriminator": [
        179,
        5,
        89,
        186,
        86,
        26,
        200,
        135
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "opeaterAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  98,
                  97,
                  116,
                  101,
                  45,
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "authority",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "tokenAccountInitialize",
      "discriminator": [
        187,
        192,
        160,
        200,
        205,
        214,
        39,
        224
      ],
      "accounts": [
        {
          "name": "tokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "tokenStoreAccount"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenStoreAccount",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  45,
                  115,
                  116,
                  111,
                  114,
                  101,
                  45,
                  116,
                  111,
                  107,
                  101,
                  110
                ]
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "feeState",
      "discriminator": [
        63,
        224,
        16,
        85,
        193,
        36,
        235,
        220
      ]
    },
    {
      "name": "rebateState",
      "discriminator": [
        210,
        214,
        137,
        4,
        113,
        187,
        159,
        101
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidInput",
      "msg": "Invalid input"
    }
  ],
  "types": [
    {
      "name": "feeState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "firstRate",
            "type": "u64"
          },
          {
            "name": "secondRate",
            "type": "u64"
          },
          {
            "name": "thirdRate",
            "type": "u64"
          },
          {
            "name": "rebateRate",
            "type": "u64"
          },
          {
            "name": "oneTimeRate",
            "type": "u64"
          },
          {
            "name": "swapExchangeRate",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "rebateState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "opeaterAuthority",
            "type": "pubkey"
          }
        ]
      }
    }
  ]
};
