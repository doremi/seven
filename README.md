# seven
這是一個 Google Chrome extension, 用來處理 7-11 的交貨便服務單, 把不必要的地方刪掉, 以及修正條碼大小, 以求刷條碼時能夠成功被讀取！
一般用 Google Chrome 瀏覽器開交貨便服務單時, 只需要列印上面的部分, 下面的地方可以不需要印, 還有條碼大小必須要調整, 因為如果用預設的方式直接列印出來, 在 7-11 常常會讀不到條碼, 因此這四個條碼根據經驗分別縮小為 70%, 40%, 60%, 60%, 這四個數字可直接由程式調整。這是目前我試過最容易被掃到條碼的大小。

# 使用方式

首先要先 clone 下來
$ git clone https://github.com/doremi/seven.git

接著
1. 到 chrome://extensions
2. 把「開發人員模式」打勾選取
3. 按下「載入未封裝擴充功能」
4. 選擇剛剛 clone 下來的資料夾

成功之後, 就會在 Chrome 的工具列看到有一個剪刀的圖示：
