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
5. 其中tg_init_data为下列数据，其中少了个字段，请将其补全。
```
user=%7B%22id%22%3A308131758%2C%22first_name%22%3A%22ALEX%22%2C%22last_name%22%3A%22IVANNIKOV.PRO%22%2C%22username%22%3A%22ivannikovPro%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-1857114464680496286&chat_type=private&auth_date=1716232213
```
2. secret_key = HMAC_SHA256(<bot_token>, "WebAppData"), toHex(secret_key)为以下的值
```
23f3ec0513be85259be200f933b7305593080e18cc5ea1eda5b76b0ed671b6d7
```
3. 可参照资料telegram mini app

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
[对接文档地址](https://sequoia-lawyer-8c7.notion.site/Telegram-Trade-Solana-149c9380ae9c804d851ce78dd7dce717)
1. 成功能接pumpfun购买接口，执行一条购买
2. 为Option的可全填为null
3. 后台链的地址也是和上面一样

