'use client';

import React, { useState } from 'react';
import './leaderboard.css';

type User = {
  id: string;
  name: string;
  points: number;
  avatar: string;
};

const podium = {
  first: {
    name: 'Mobarak',
    points: 453,
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  second: {
    name: 'Moni',
    points: 442,
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  third: {
    name: 'Keya',
    points: 373,
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
};

const leaderboard: User[] = [
  { id: '4', name: 'Kaosar', points: 224, avatar: 'https://i.pravatar.cc/150?img=11' },
  { id: '5', name: 'Shakib', points: 163, avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: '6', name: 'Muhib', points: 131, avatar: 'https://i.pravatar.cc/150?img=13' },
  { id: '7', name: 'Shams', points: 129, avatar: 'https://i.pravatar.cc/150?img=14' },
  { id: '18', name: 'You', points: 124, avatar: 'https://i.pravatar.cc/150?img=15' },
];

const LeaderboardScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('today');

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <button className="back-btn">←</button>
        <img
          src="https://i.pravatar.cc/100?img=1"
          alt="profile"
          className="profile"
        />
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'today' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('today')}
        >
          Today
        </button>
        <button
          className={`tab ${activeTab === 'month' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('month')}
        >
          Month
        </button>
        <button
          className={`tab ${activeTab === 'alltime' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('alltime')}
        >
          All Times
        </button>
      </div>

      {/* Podium */}
      <div className="podium">
        {/* Second */}
        <div className="side-podium">
          <img src={podium.second.avatar} alt={podium.second.name} className="avatar" />
          <p className="name">{podium.second.name}</p>
          <div className="block" style={{ height: '90px' }}>
            <span className="rank">2</span>
            <span className="points">{podium.second.points}pt</span>
          </div>
        </div>

        {/* First */}
        <div className="center-podium">
          <img src={podium.first.avatar} alt={podium.first.name} className="avatar-large" />
          <span className="crown">👑</span>
          <p className="name">{podium.first.name}</p>
          <div className="block" style={{ height: '120px' }}>
            <span className="rank">1</span>
            <span className="points">{podium.first.points}pt</span>
          </div>
        </div>

        {/* Third */}
        <div className="side-podium">
          <img src={podium.third.avatar} alt={podium.third.name} className="avatar" />
          <p className="name">{podium.third.name}</p>
          <div className="block" style={{ height: '70px' }}>
            <span className="rank">3</span>
            <span className="points">{podium.third.points}pt</span>
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="list-container">
        {leaderboard.map((item) => (
          <div key={item.id} className="list-item">
            <div className="user-info">
              <span className="list-rank">{item.id}</span>
              <img src={item.avatar} alt={item.name} className="list-avatar" />
              <span className="list-name">{item.name}</span>
            </div>
            <div className="point-badge">
              <span className="badge-text">{item.points}pt</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardScreen;
