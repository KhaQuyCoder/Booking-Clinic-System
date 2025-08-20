import React from 'react';
import CardInfo from './CardInfo';
import Chart from './Chart';

const ContentDashboard = () => {
  return (
    <div style={{
      display: 'flex',
      gap: 20,
      padding: 20,
      flexWrap: 'wrap',
      flexGrow: 1,
      backgroundColor: '#f9fbff',
      minHeight: 'calc(100vh - 60px)',
      boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, flexBasis: 300 }}>
        <h2>Tiêu đề</h2>
        <CardInfo title="Bác sĩ" value={45} change="Tăng 2 bác sĩ" icon="👨‍⚕️" isIncrease={true} />
        <CardInfo title="Thu chi" value="45.903.000" change="Tăng 23.456.000" isIncrease={false} />
        <CardInfo title="Chuyên khoa" value={20} change="Giảm 2 khoa" isIncrease={false} icon="👐" />
        <CardInfo title="Lượt khám" value={323} change="Tăng 23 lượt" isIncrease={true} icon="👥" />
      </div>
      <div style={{ flexGrow: 1 }}>
        <h2>Tiêu đề</h2>
        <Chart />
      </div>
    </div>
  );
};

export default ContentDashboard;
