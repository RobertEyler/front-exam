/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/rebate.json`.
 */
export type Rebate = {
  "address": "HaNiaDJqbfsFyf6XLG8yz7Kq6D67S9ioEVSakfqmzES3",
  "metadata": {
    "name": "rebate",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addRebatePerson",
      "discriminator": [
        10,
        5,
        199,
        180,
        100,
        253,
        209,
        7
      ],
      "accounts": [
        {
          "name": "personTop"
        },
        {
          "name": "person",
          "writable": true
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "state",
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
      "args": []
    },
    {
      "name": "addWithdrawAuthority",
      "discriminator": [
        193,
        76,
        99,
        35,
        103,
        44,
        212,
        103
      ],
      "accounts": [
        {
          "name": "person",
          "writable": true
        },
        {
          "name": "authority",
          "signer": true
        },
        {
          "name": "state",
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
          "name": "withdrayAuthority",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "createOneTimeRebate",
      "discriminator": [
        41,
        175,
        221,
        62,
        47,
        163,
        193,
        186
      ],
      "accounts": [
        {
          "name": "person",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "params.tg_id"
              }
            ]
          }
        },
        {
          "name": "oneTimeRebatePda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  110,
                  101,
                  45,
                  116,
                  105,
                  109,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "person"
              },
              {
                "kind": "account",
                "path": "person.one_time_nonce",
                "account": "rebatePerson"
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "createOneTimeRebateParams"
            }
          }
        }
      ]
    },
    {
      "name": "personInitialize",
      "discriminator": [
        110,
        243,
        119,
        85,
        171,
        21,
        48,
        67
      ],
      "accounts": [
        {
          "name": "state",
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
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "person",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "tg_data.tgid",
                "account": "tgData"
              }
            ]
          }
        },
        {
          "name": "tgData",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "tgDataInit",
      "discriminator": [
        129,
        102,
        205,
        74,
        143,
        229,
        51,
        53
      ],
      "accounts": [
        {
          "name": "state",
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
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "tgData",
          "writable": true,
          "signer": true
        },
        {
          "name": "tgPda",
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "tgid",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "discriminator": [
        183,
        18,
        70,
        156,
        148,
        109,
        161,
        34
      ],
      "accounts": [
        {
          "name": "person"
        },
        {
          "name": "withdrawAuthority",
          "signer": true
        },
        {
          "name": "storeMoney",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  111,
                  114,
                  101,
                  95,
                  109,
                  111,
                  110,
                  101,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "person"
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
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawToken",
      "discriminator": [
        136,
        235,
        181,
        5,
        101,
        109,
        57,
        81
      ],
      "accounts": [
        {
          "name": "person"
        },
        {
          "name": "withdrawAuthority",
          "signer": true
        },
        {
          "name": "storeToken",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  111,
                  114,
                  101,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "person"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "fromTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "storeToken"
              },
              {
                "kind": "account",
                "path": "selfProgram"
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
          "name": "toTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "withdrawAuthority"
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
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "selfProgram",
          "address": "HaNiaDJqbfsFyf6XLG8yz7Kq6D67S9ioEVSakfqmzES3"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
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
    },
    {
      "name": "tgData",
      "discriminator": [
        184,
        170,
        205,
        229,
        91,
        53,
        220,
        197
      ]
    }
  ],
  "events": [
    {
      "name": "addTopEvent",
      "discriminator": [
        109,
        137,
        9,
        52,
        46,
        31,
        222,
        222
      ]
    },
    {
      "name": "addWithdrawEvent",
      "discriminator": [
        142,
        251,
        35,
        225,
        101,
        233,
        44,
        252
      ]
    },
    {
      "name": "createOneTimeRebateEvent",
      "discriminator": [
        154,
        103,
        36,
        228,
        48,
        3,
        194,
        13
      ]
    },
    {
      "name": "registerEvent",
      "discriminator": [
        11,
        129,
        9,
        89,
        78,
        136,
        194,
        135
      ]
    },
    {
      "name": "withdrawEvent",
      "discriminator": [
        22,
        9,
        133,
        26,
        160,
        44,
        71,
        192
      ]
    },
    {
      "name": "withdrawTokenEvent",
      "discriminator": [
        24,
        143,
        204,
        34,
        192,
        127,
        217,
        220
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "noTgidErr",
      "msg": "No such tgid"
    },
    {
      "code": 6001,
      "name": "tgidLengthErr",
      "msg": "Tgid length error"
    },
    {
      "code": 6002,
      "name": "unKnowErr",
      "msg": "Unknow error"
    },
    {
      "code": 6003,
      "name": "accountNotExistsErr",
      "msg": "Account not exist"
    },
    {
      "code": 6004,
      "name": "insufficientBalanceErr",
      "msg": "Insufficient balance"
    }
  ],
  "types": [
    {
      "name": "addTopEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": {
              "defined": {
                "name": "eventType"
              }
            }
          },
          {
            "name": "tgId",
            "type": "u64"
          },
          {
            "name": "topId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "addWithdrawEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": {
              "defined": {
                "name": "eventType"
              }
            }
          },
          {
            "name": "tgId",
            "type": "u64"
          },
          {
            "name": "withdrawAddress",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "createOneTimeRebateEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": {
              "defined": {
                "name": "eventType"
              }
            }
          },
          {
            "name": "tgId",
            "type": "u64"
          },
          {
            "name": "oneTimeNonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "createOneTimeRebateParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tgId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "eventType",
      "repr": {
        "kind": "rust"
      },
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "register"
          },
          {
            "name": "addTop"
          },
          {
            "name": "addWithdraw"
          },
          {
            "name": "withdraw"
          },
          {
            "name": "withdrawToken"
          },
          {
            "name": "createOneTimeRebate"
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
    },
    {
      "name": "registerEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": {
              "defined": {
                "name": "eventType"
              }
            }
          },
          {
            "name": "tgId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "tgData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tgid",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "withdrawEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": {
              "defined": {
                "name": "eventType"
              }
            }
          },
          {
            "name": "tgId",
            "type": "u64"
          },
          {
            "name": "withdrawAddress",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "withdrawTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": {
              "defined": {
                "name": "eventType"
              }
            }
          },
          {
            "name": "tgId",
            "type": "u64"
          },
          {
            "name": "withdrawAddress",
            "type": "pubkey"
          },
          {
            "name": "mintAddress",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
