// server.js
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// 设置 OpenAI API 密钥
const openaiApiKey = 'sk-YF0BTEW1xTUoEVZQFlVluffKLD1rvu4ZCgiYobrFZt98pl7h';  // 在这里填入你的 OpenAI API 密钥

// 使用 body-parser 解析 JSON 请求体
app.use(bodyParser.json());

// 接收前端请求的问题
app.post('/get-answer', async (req, res) => {
  const { question } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: 'gpt-4',  // 使用 GPT-4 模型
      prompt: question,
      max_tokens: 150,
    }, {
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      }
    });

    // 发送返回的答案
    const answer = response.data.choices[0].text.trim();
    res.json({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ answer: '抱歉，发生了错误。' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
