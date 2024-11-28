# 面试说明
1. 面试分成预代码题和面对面面试
2. 预代码为本文中的题目
3. 面对面面试包含问答和现场代码题，现场代码题以solna为主，有钱包相关的题目，和telegram小程序题目。

# 预测试题
## 将数据补全
有以下接口
### login
1. 方法: POST
2. URL: `https://dev-telegram.theschema.ai/api/user/login`
3. 入参:在body中
```json
   {
       "init_data": "tg_init_data",
       
    }
```
4. 出参:
```json
{
    "ok": true,
    "message": "success"|null,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjMwODEzMTc1OCwiaWF0IjoxNzMxMzczNTMwLCJleHAiOjE3MzE1NDYzMzB9.oe_PCH0-6sfcmvK5-JnRmlR5XbXwxfuJEWuikySyfRs"
    }
}
```
5. 正确数据示例
```json
{
    "init_data":"user=%7B%22id%22%3A308131758%2C%22first_name%22%3A%22ALEX%22%2C%22last_name%22%3A%22IVANNIKOV.PRO%22%2C%22username%22%3A%22ivannikovPro%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-1857114464680496286&chat_type=private&auth_date=1716232213&hash=cec1997f626a15aae970a2da7deb83cb7e45136af1551a8a885dac60424361dc"
    
}
```
6. tg_init_data为下列数据，其中少了个字段，请将其补全。
```
user=%7B%22id%22%3A308131758%2C%22first_name%22%3A%22ALEX%22%2C%22last_name%22%3A%22IVANNIKOV.PRO%22%2C%22username%22%3A%22ivannikovPro%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-1857114464680496286&chat_type=private&auth_date=1716232245
```
7. secret_key = HMAC_SHA256(<bot_token>, "WebAppData"), toHex(secret_key)为以下的值
```
23f3ec0513be85259be200f933b7305593080e18cc5ea1eda5b76b0ed671b6d7
```
8. 可参照资料telegram mini app

## 以下为一个solana链上应用接口，
文件的idl里定义了这些方法。
###  逻辑
1. 先调用链上的tgDataInit（在idl文件中有定义）
2. 然后调用personInitialize方法（在idl文件中有定义），即可生成一个用户。
3. idl文件在附件里。
4. 程序authority的私钥base58: ```3i2NGg5UFA1EF1nBZqaL4NqDsibcGJPCGkZsnuwzUHhFw6msFBgGCRiZqnL7jE2WPeN8Fsyq3cnUKLvsctCdK2uT```
5. 链上rpc地址：```https://dev-telegram.theschema.ai/chain/solana```
6. tgId为u64位数字。
7. 涉及到的pda地址的seed为[tgid]

## 以下为一个solana的rpc链上接口
1. 成功能接swapBaseIn接口，执行一条购买
2. 为Option的可全填为null
3. 后台链的地址也是和上面一样
### 逻辑
1. swapBaseIn 用的币是固定的,最少能换到多少其它币
2. swapBaseOut 能换到的币是固定的,最多用多去币去换
### 推荐使用依赖
1. @coral-xyz/anchor 0.30.1
### 参数
1. pairId (对应idl里的amm)
2. ammAuthority
3. ammOpenOrders
4. pcMint (币1) 
5. coinMint (币2)
6. pcTokenAccount (池子里存币1的tokenAccount)(对应idl里的ammPcVault)
7. coinTokenAccount (池子里存币2的tokenAccount)(对应idl里的ammCoinVault)
8. marketProgram (固定或传pairId)
```
//固定
srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX
```
9. market,marketBids,marketAsks,marketEventQueue,marketCoinVault,marketVaultSigner,marketPcVault
可全部传入pairId

### 示例
```
await program.methods.raydiumSwapBaseIn(
    new anchor.BN(1e9),
    new anchor.BN(1e9),
).accounts({
    amm: new PublicKey("6USpEBbN94DUYLUi4a2wo3AZDCyozon1PLGYu27jzPkX"),
    ammAuthority: new PublicKey("5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1"),
    ammOpenOrders: new PublicKey("GRv7YS45zPAnYUA1VpHGErmauWELJGqLM9xbKADYfw8k"),
    ammTargetOrders: new PublicKey("9bZHeLgGLZcwc4Cdbzt4cEPnJTvvV7BvvqQfmBnamSrx"),//可不传这个
    ammCoinVault: new PublicKey("4dSwMRxxaTWeTtPNafKY67XaBCUdkVd5J9PrUmUVVZBH"),
    ammPcVault: new PublicKey("4SRQ3FyFH2eU3F7VHk77aBuHpYW8sPvM7qc7Fx25Z6qv"),
    market: new PublicKey("6USpEBbN94DUYLUi4a2wo3AZDCyozon1PLGYu27jzPkX"),
    marketProgram: new PublicKey("6USpEBbN94DUYLUi4a2wo3AZDCyozon1PLGYu27jzPkX"),
    marketBids: new PublicKey("6USpEBbN94DUYLUi4a2wo3AZDCyozon1PLGYu27jzPkX"),
    marketAsks: new PublicKey("6USpEBbN94DUYLUi4a2wo3AZDCyozon1PLGYu27jzPkX"),
    marketEventQueue: new PublicKey("6USpEBbN94DUYLUi4a2wo3AZDCyozon1PLGYu27jzPkX"),
    marketCoinVault: new PublicKey("6USpEBbN94DUYLUi4a2wo3AZDCyozon1PLGYu27jzPkX"),
    marketVaultSigner: new PublicKey("6USpEBbN94DUYLUi4a2wo3AZDCyozon1PLGYu27jzPkX"),
    marketPcVault: new PublicKey("6USpEBbN94DUYLUi4a2wo3AZDCyozon1PLGYu27jzPkX"),
    userTokenSource: walletWsolToken,//wsl地址
    userTokenDestination: walletDesToken,//目标币地址
    userSourceOwner: wallet.publicKey,
    rebateP1: null,
    rebateP2: null,
    rebateP3: null,
    rebateP4: null,
    rebateOneTime: null,
    rebateTokenAccount2: null,
    rebateTokenAccount3: null,
    rebateTokenAccount4: null,
    rebateOneTimeTokenAccount: null,
    platformTokenAccount: platformWSolTokenAccount,
    oneTimeRebatePda: null,
}).rpc();

```

### 目前在本地链上能交易的数据amm(pairId)
可在[区块链浏览器](https://solscan.io)中搜索下面数据,根据别人交易信息,可作为接口参数(名字有少许偏差)
```
6USpEBbN94DUYLUi4a2wo3AZDCyozon1PLGYu27jzPkX
GQjKHxdXEicEpECmy7khbS62MEus4dwxMG2vUwg9mYgx
8KMaFfPnP5mYTwySmgc9C64bvSXQnr7ykRMqsaSN3xp2
```
### 交换前应检查
1. 传入的tokenAccount是否创建,否则solana会报错,
```
//创建token账号
			new anchor.web3.Transaction().add(createAssociatedTokenAccountInstruction(
				wallet.publicKey,
				platformWSolTokenAccount, //程序手续费token地址
				platformStoreTokenAccount,//程序手续费地址
				NATIVE_MINT // mint
			))

```
2. 应将所有打包成一个交易,使之具有事务特性
3. 邀请返佣,有三层,应当先根据当前用户的tgId算出对应在solana的地址, 具体算法可参考11.12的文档
4. 根据当前用户去获取用户的层级关系,并用rebate的idl文件查出上级.
```
let tg1RebatePerson = await program.account.rebatePerson.fetch(tg1Pda);
```
1. oneTimeRebatePda为一次返佣时的地址,具体算法可参考另一名程序员的文档
### token账号的计算
1. platformTokenAccount的算法
```
//先算出在程序里的pda地址
		const [platformStoreTokenAccount] = PublicKey.findProgramAddressSync(
			[Buffer.from("fee-store-token")],
			adminProgram.programId);
//算出其tokenAccount的地址
		const platformWSolTokenAccount = await getAssociatedTokenAddress(
			NATIVE_MINT, // mint,这里使用的是原生代币wsol
			platformStoreTokenAccount,
			true
		);
```
2. rebateTokenAccount2的计算(其它rebateTokenAccount亦如此)
```
// rebate.programId为rebate程序的地址,在idl文件里有.
const [rebateStore] = PublicKey.findProgramAddressSync(
    [Buffer.from("store-token")],
    rebate.programId);
const rebateStoreTokenAccount = await getAssociatedTokenAddress(
    NATIVE_MINT, // mint,这里使用的是原生代币wsol
    rebateStore,
    true
);

```
### 如何控制为买或卖
通过改变userTokenSource和userSourceOwner的币
* 如将userTokenSource改为币2的tokenAccount则为卖
* 反之则为买
### 账号需关闭
如用wsol去交换代币,交换后应当关闭用户的wsol账号,关闭后会将wsol退成sol返给用户
