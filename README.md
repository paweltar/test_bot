# test_bot

to test locally you need slack api token

1. clone this repo
2. `cd` into project folder
3. run `npm install`
4. change `var token = process.env.API_TOKEN;` to `var token = "someTokenStringFromSlack";`
5. never publish your api token directly on github 

use command `npm run build` to start this bot

now you should see this bot on your slack team
