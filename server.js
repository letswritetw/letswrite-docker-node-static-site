const express = require("express");
const path = require("path");

const app = express();
const PORT = 3013;

// 提供靜態檔案
app.use(express.static(path.join(__dirname))); // 當前目錄

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
