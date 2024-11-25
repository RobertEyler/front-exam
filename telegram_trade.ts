/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/telegram_trade.json`.
 */
export type TelegramTrade = {
  "address": "7xTZh6UsjVSBR15fb7DXLe3ZabyBRCGcpup6bwfqxwhe",
  "metadata": {
    "name": "telegramTrade",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "pumpfunBuy",
      "discriminator": [
        85,
        186,
        137,
        192,
        218,
        119,
        94,
        155
      ],
      "accounts": [
        {
          "name": "global",
          "writable": true
        },
        {
          "name": "feeRecipient",
          "writable": true
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "bondingCurve",
          "writable": true
        },
        {
          "name": "associatedBondingCurve",
          "writable": true
        },
        {
          "name": "associatedUser",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
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
          "name": "rent"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program",
          "writable": true
        },
        {
          "name": "rebateP1",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateP2",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateP3",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateP4",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateTokenAccount2",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateTokenAccount3",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateTokenAccount4",
          "writable": true,
          "optional": true
        },
        {
          "name": "oneTimePerson",
          "writable": true,
          "optional": true
        },
        {
          "name": "oneTimeRebatePda",
          "writable": true,
          "optional": true
        },
        {
          "name": "oneTimeRebateTokenAccount",
          "optional": true
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
            ],
            "program": {
              "kind": "const",
              "value": [
                127,
                32,
                235,
                252,
                7,
                202,
                253,
                37,
                53,
                217,
                243,
                21,
                252,
                233,
                198,
                230,
                93,
                223,
                189,
                106,
                190,
                223,
                172,
                168,
                30,
                228,
                97,
                102,
                33,
                197,
                241,
                240
              ]
            }
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
            ],
            "program": {
              "kind": "const",
              "value": [
                127,
                32,
                235,
                252,
                7,
                202,
                253,
                37,
                53,
                217,
                243,
                21,
                252,
                233,
                198,
                230,
                93,
                223,
                189,
                106,
                190,
                223,
                172,
                168,
                30,
                228,
                97,
                102,
                33,
                197,
                241,
                240
              ]
            }
          }
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "buyParams"
            }
          }
        }
      ]
    },
    {
      "name": "pumpfunSell",
      "discriminator": [
        1,
        11,
        73,
        123,
        73,
        10,
        251,
        90
      ],
      "accounts": [
        {
          "name": "global",
          "writable": true
        },
        {
          "name": "feeRecipient",
          "writable": true
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "bondingCurve",
          "writable": true
        },
        {
          "name": "associatedBondingCurve",
          "writable": true
        },
        {
          "name": "associatedUser",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "associatedTokenProgram",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "eventAuthority"
        },
        {
          "name": "program",
          "writable": true
        },
        {
          "name": "rebateP1",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateP2",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateP3",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateP4",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateTokenAccount2",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateTokenAccount3",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateTokenAccount4",
          "writable": true,
          "optional": true
        },
        {
          "name": "oneTimePerson",
          "writable": true,
          "optional": true
        },
        {
          "name": "oneTimeRebatePda",
          "writable": true,
          "optional": true
        },
        {
          "name": "oneTimeRebateTokenAccount",
          "writable": true,
          "optional": true
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
            ],
            "program": {
              "kind": "const",
              "value": [
                127,
                32,
                235,
                252,
                7,
                202,
                253,
                37,
                53,
                217,
                243,
                21,
                252,
                233,
                198,
                230,
                93,
                223,
                189,
                106,
                190,
                223,
                172,
                168,
                30,
                228,
                97,
                102,
                33,
                197,
                241,
                240
              ]
            }
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
            ],
            "program": {
              "kind": "const",
              "value": [
                127,
                32,
                235,
                252,
                7,
                202,
                253,
                37,
                53,
                217,
                243,
                21,
                252,
                233,
                198,
                230,
                93,
                223,
                189,
                106,
                190,
                223,
                172,
                168,
                30,
                228,
                97,
                102,
                33,
                197,
                241,
                240
              ]
            }
          }
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "sellParams"
            }
          }
        }
      ]
    },
    {
      "name": "raydiumBaseSwapOut",
      "discriminator": [
        130,
        153,
        130,
        168,
        194,
        223,
        189,
        247
      ],
      "accounts": [
        {
          "name": "ammProgram",
          "address": "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"
        },
        {
          "name": "amm",
          "writable": true
        },
        {
          "name": "ammAuthority",
          "writable": true
        },
        {
          "name": "ammOpenOrders",
          "writable": true
        },
        {
          "name": "ammTargetOrders",
          "writable": true
        },
        {
          "name": "ammCoinVault",
          "writable": true
        },
        {
          "name": "ammPcVault",
          "writable": true
        },
        {
          "name": "marketProgram"
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "marketBids",
          "writable": true
        },
        {
          "name": "marketAsks",
          "writable": true
        },
        {
          "name": "marketEventQueue",
          "writable": true
        },
        {
          "name": "marketCoinVault",
          "writable": true
        },
        {
          "name": "marketPcVault",
          "writable": true
        },
        {
          "name": "marketVaultSigner",
          "writable": true
        },
        {
          "name": "userTokenSource",
          "writable": true
        },
        {
          "name": "userTokenDestination",
          "writable": true
        },
        {
          "name": "userSourceOwner",
          "writable": true,
          "signer": true
        },
        {
          "name": "rebateP1",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateP2",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateP3",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateP4",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateOneTime",
          "optional": true
        },
        {
          "name": "rebateTokenAccount2",
          "optional": true
        },
        {
          "name": "rebateTokenAccount3",
          "optional": true
        },
        {
          "name": "rebateTokenAccount4",
          "optional": true
        },
        {
          "name": "rebateOneTimeTokenAccount",
          "optional": true
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
            ],
            "program": {
              "kind": "const",
              "value": [
                127,
                32,
                235,
                252,
                7,
                202,
                253,
                37,
                53,
                217,
                243,
                21,
                252,
                233,
                198,
                230,
                93,
                223,
                189,
                106,
                190,
                223,
                172,
                168,
                30,
                228,
                97,
                102,
                33,
                197,
                241,
                240
              ]
            }
          }
        },
        {
          "name": "platformTokenAccount",
          "writable": true
        },
        {
          "name": "oneTimeRebatePda",
          "optional": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "maxAmountIn",
          "type": "u64"
        },
        {
          "name": "amountOut",
          "type": "u64"
        }
      ]
    },
    {
      "name": "raydiumSwapBaseIn",
      "discriminator": [
        148,
        4,
        92,
        188,
        225,
        88,
        170,
        130
      ],
      "accounts": [
        {
          "name": "ammProgram",
          "address": "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"
        },
        {
          "name": "amm",
          "writable": true
        },
        {
          "name": "ammAuthority",
          "writable": true
        },
        {
          "name": "ammOpenOrders",
          "writable": true
        },
        {
          "name": "ammTargetOrders",
          "writable": true
        },
        {
          "name": "ammCoinVault",
          "writable": true
        },
        {
          "name": "ammPcVault",
          "writable": true
        },
        {
          "name": "marketProgram"
        },
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "marketBids",
          "writable": true
        },
        {
          "name": "marketAsks",
          "writable": true
        },
        {
          "name": "marketEventQueue",
          "writable": true
        },
        {
          "name": "marketCoinVault",
          "writable": true
        },
        {
          "name": "marketPcVault",
          "writable": true
        },
        {
          "name": "marketVaultSigner",
          "writable": true
        },
        {
          "name": "userTokenSource",
          "writable": true
        },
        {
          "name": "userTokenDestination",
          "writable": true
        },
        {
          "name": "userSourceOwner",
          "signer": true
        },
        {
          "name": "rebateP1",
          "optional": true
        },
        {
          "name": "rebateP2",
          "optional": true
        },
        {
          "name": "rebateP3",
          "optional": true
        },
        {
          "name": "rebateP4",
          "optional": true
        },
        {
          "name": "rebateOneTime",
          "optional": true
        },
        {
          "name": "rebateTokenAccount2",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateTokenAccount3",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateTokenAccount4",
          "writable": true,
          "optional": true
        },
        {
          "name": "rebateOneTimeTokenAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "feeState",
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
            ],
            "program": {
              "kind": "const",
              "value": [
                127,
                32,
                235,
                252,
                7,
                202,
                253,
                37,
                53,
                217,
                243,
                21,
                252,
                233,
                198,
                230,
                93,
                223,
                189,
                106,
                190,
                223,
                172,
                168,
                30,
                228,
                97,
                102,
                33,
                197,
                241,
                240
              ]
            }
          }
        },
        {
          "name": "platformTokenAccount",
          "writable": true
        },
        {
          "name": "oneTimeRebatePda",
          "writable": true,
          "optional": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "amountIn",
          "type": "u64"
        },
        {
          "name": "amountOut",
          "type": "u64"
        }
      ]
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
      "name": "oneTimeRebate",
      "discriminator": [
        103,
        215,
        168,
        173,
        73,
        76,
        181,
        56
      ]
    },
    {
      "name": "rebatePerson",
      "discriminator": [
        243,
        35,
        188,
        14,
        220,
        51,
        170,
        164
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidInput",
      "msg": "Invalid input"
    },
    {
      "code": 6001,
      "name": "loadAccountError",
      "msg": "Load account error"
    },
    {
      "code": 6002,
      "name": "priceNotFound",
      "msg": "Price not found"
    }
  ],
  "types": [
    {
      "name": "buyParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oneTimeRebateTgId",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "oneTimeNonce",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "maxSolCost",
            "type": "u64"
          }
        ]
      }
    },
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
      "name": "oneTimeRebate",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ownerRebatePerson",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "rebatePerson",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "top",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "tgid",
            "type": "u64"
          },
          {
            "name": "withdrawAuthority",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "oneTimeNonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "sellParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oneTimeRebateTgId",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "oneTimeNonce",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "minSolOutput",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
