import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerService = () => {
  const [view, setView] = useState<'list' | 'detail' | 'phone' | 'help'>('list');
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [content, setContent] = useState<string>('');
  const navigate = useNavigate();

  // 问题列表
  const questions = [
    { id: 1, title: '如何重置密码？', details: '重置密码的步骤是……' },
    { id: 2, title: '如何联系客服？', details: '您可以通过……联系客服。' },
    { id: 3, title: '如何查看订单？', details: '通过“我的订单”页面查看……' },
    { id: 4, title: '如何修改个人信息？', details: '在设置页面修改您的个人信息。' }
  ];

  const handleButtonClick = (buttonType: string) => {
    if (buttonType === '主页') {
      setView('list');
      setSelectedQuestion(null); // 重置已选择的问题
    } else if (buttonType === '询问') {
      setView('phone');
      setContent('请联系客服电话：15934125523');
    } else if (buttonType === '获取更多帮助') {
      setView('help');
      setContent('请查看以下帮助内容：');
    }
  };

  const handleQuestionClick = (questionId: number) => {
    const question = questions.find(q => q.id === questionId);
    if (question) {
      setSelectedQuestion(questionId);
      setContent(question.details); // 更新问题详情
      setView('detail'); // 切换到问题详情视图
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingBottom: '50px' }}>
      <button
        onClick={() => navigate('/')}
        style={{
          margin: '20px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Back to Home
      </button>

      <h1>Customer Service</h1>

      {/* 问题列表视图 */}
      {view === 'list' && (
        <div>
          <h2>问题列表</h2>
          <ul>
            {questions.map((question) => (
              <li key={question.id}>
                <button
                  onClick={() => handleQuestionClick(question.id)}
                  style={{
                    padding: '10px',
                    margin: '5px 0',
                    background: '#f4f4f4',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  {question.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 问题详情视图 */}
      {view === 'detail' && selectedQuestion !== null && (
        <div>
          <h2>问题详情</h2>
          <p>{content}</p>
          <button
            onClick={() => {
              setSelectedQuestion(null);
              setView('list'); // 返回问题列表视图
            }}
            style={{ padding: '10px', marginTop: '20px' }}
          >
            返回问题列表
          </button>
        </div>
      )}

      {/* 客服电话视图 */}
      {view === 'phone' && (
        <div>
          <h2>客服电话</h2>
          <p>{content}</p>
        </div>
      )}

      {/* 更多帮助视图 */}
      {view === 'help' && (
        <div>
          <h2>{content}</h2>
          <img
            src="/image.png"
            alt="Help Image"
            style={{
              width: '60%',
              height: 'auto',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </div>
      )}

      {/* 底部按钮区域 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          position: 'fixed',
          bottom: '0',
          left: '0',
          right: '0',
          padding: '10px',
          background: 'transparent',
        }}
      >
        <button onClick={() => handleButtonClick('主页')}>主页</button>
        <button onClick={() => handleButtonClick('询问')}>询问</button>
        <button onClick={() => handleButtonClick('获取更多帮助')}>获取更多帮助</button>
      </div>
    </div>
  );
};

export default CustomerService;
