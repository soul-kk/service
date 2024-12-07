import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ position: 'relative', minHeight: '100vh' }}>
    <h1>Welcome to Our Site</h1>
    <Link to="/customer-service">
      <button
        style={{
          position: 'absolute',
          bottom: '20px',  // 固定在底部
          right: '20px',   // 固定在右侧
          width: '60px',    // 设置按钮宽度
          height: '60px',   // 设置按钮高度
          borderRadius: '50%', // 圆形按钮
          backgroundColor: '#007BFF',  // 按钮颜色
          color: 'white',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',  // 添加平滑的过渡效果
        }}
        onMouseEnter={(e) => {
          // 类型断言
          const target = e.target as HTMLButtonElement;
          target.style.transform = 'scale(1.1)';  // 鼠标悬停时按钮放大
        }}
        onMouseLeave={(e) => {
          // 类型断言
          const target = e.target as HTMLButtonElement;
          target.style.transform = 'scale(1)';  // 鼠标离开时恢复原状
        }}
      >
        🛎️
      </button>
    </Link>
  </div>
);

export default Home;
