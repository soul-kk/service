// src/CustomerService.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerService = () => {
  const [content, setContent] = useState<string>('');
  const navigate = useNavigate();

  const handleButtonClick = (text: string) => {
    setContent(text);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <button 
        onClick={() => navigate('/')} 
        style={{ position: 'absolute', top: '10px', left: '10px' }}
      >
        Back to Home
      </button>
      <h1>Customer Service</h1>
      <div>{content && <p>{content}</p>}</div>

      {/* 底部按钮区域 */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',  // 居中按钮
          gap: '20px',               // 设置按钮间距
          position: 'fixed',         // 固定在页面底部
          bottom: '0',               // 底部距离为0，确保固定到底部
          left: '0',                 // 确保居中
          right: '0',                // 确保居中
          padding: '10px',
          background: 'transparent', // 背景改为透明
        }}
      >
        <button onClick={() => handleButtonClick('Content 1')}>主页</button>
        <button onClick={() => handleButtonClick('Content 2')}>信息</button>
        <button onClick={() => handleButtonClick('Content 3')}>Button 3</button>
      </div>
    </div>
  );
};

export default CustomerService;
