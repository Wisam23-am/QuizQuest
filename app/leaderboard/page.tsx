'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  totalGames: number;
  correctAnswers: number;
  avgScore: number;
  badge?: string;
}

// Dummy data - nanti akan diganti dengan data dari database
const dummyLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    name: 'Ahmad Wijaya',
    score: 950,
    totalGames: 15,
    correctAnswers: 95,
    avgScore: 850,
    badge: '🥇',
  },
  {
    rank: 2,
    name: 'Siti Nurhaliza',
    score: 920,
    totalGames: 12,
    correctAnswers: 92,
    avgScore: 820,
    badge: '🥈',
  },
  {
    rank: 3,
    name: 'Budi Santoso',
    score: 890,
    totalGames: 14,
    correctAnswers: 89,
    avgScore: 800,
    badge: '🥉',
  },
  {
    rank: 4,
    name: 'Dewi Lestari',
    score: 870,
    totalGames: 11,
    correctAnswers: 87,
    avgScore: 790,
  },
  {
    rank: 5,
    name: 'Andi Firmansyah',
    score: 850,
    totalGames: 13,
    correctAnswers: 85,
    avgScore: 780,
  },
  {
    rank: 6,
    name: 'Rina Kusuma',
    score: 830,
    totalGames: 10,
    correctAnswers: 83,
    avgScore: 770,
  },
  {
    rank: 7,
    name: 'Fajar Ramadhan',
    score: 810,
    totalGames: 12,
    correctAnswers: 81,
    avgScore: 760,
  },
  {
    rank: 8,
    name: 'Maya Anggraini',
    score: 790,
    totalGames: 9,
    correctAnswers: 79,
    avgScore: 750,
  },
  {
    rank: 9,
    name: 'Riko Pratama',
    score: 770,
    totalGames: 11,
    correctAnswers: 77,
    avgScore: 740,
  },
  {
    rank: 10,
    name: 'Lina Maharani',
    score: 750,
    totalGames: 8,
    correctAnswers: 75,
    avgScore: 730,
  },
];

export default function LeaderboardPage() {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [currentUserRank, setCurrentUserRank] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'weekly' | 'monthly'>('all');

  useEffect(() => {
    // Load leaderboard data
    setLeaderboardData(dummyLeaderboard);

    // Check if user is in leaderboard
    const userName = localStorage.getItem('userName');
    if (userName) {
      const userEntry = dummyLeaderboard.find(entry => entry.name === userName);
      if (userEntry) {
        setCurrentUserRank(userEntry.rank);
      }
    }
  }, []);

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'from-yellow-400 to-yellow-600';
    if (rank === 2) return 'from-gray-300 to-gray-500';
    if (rank === 3) return 'from-orange-400 to-orange-600';
    return 'from-blue-400 to-blue-600';
  };

  const getRankBgColor = (rank: number) => {
    if (rank === 1) return 'bg-yellow-50 border-yellow-200';
    if (rank === 2) return 'bg-gray-50 border-gray-200';
    if (rank === 3) return 'bg-orange-50 border-orange-200';
    return 'bg-white border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DBE2EF] via-[#F9F7F7] to-[#DBE2EF]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-slide-up">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#112D4E] mb-3 sm:mb-4">
            🏆 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F72AF] to-[#112D4E]">Leaderboard</span>
          </h1>
          <p className="text-base sm:text-lg text-[#3F72AF]">Lihat peringkat dan tantang diri Anda!</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8 animate-scale-in">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white shadow-lg scale-105'
                : 'bg-white text-[#3F72AF] border-2 border-[#3F72AF] hover:bg-[#DBE2EF]'
            }`}
          >
            🌟 Semua Waktu
          </button>
          <button
            onClick={() => setFilter('weekly')}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
              filter === 'weekly'
                ? 'bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white shadow-lg scale-105'
                : 'bg-white text-[#3F72AF] border-2 border-[#3F72AF] hover:bg-[#DBE2EF]'
            }`}
          >
            📅 Mingguan
          </button>
          <button
            onClick={() => setFilter('monthly')}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
              filter === 'monthly'
                ? 'bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white shadow-lg scale-105'
                : 'bg-white text-[#3F72AF] border-2 border-[#3F72AF] hover:bg-[#DBE2EF]'
            }`}
          >
            📆 Bulanan
          </button>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Rank 2 */}
          {leaderboardData[1] && (
            <div className="order-2 sm:order-1 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl p-4 sm:p-6 border-2 border-gray-300 shadow-lg hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl mb-2">🥈</div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-r from-gray-300 to-gray-500 flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg mb-3">
                    {leaderboardData[1].name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#112D4E] mb-1">{leaderboardData[1].name}</h3>
                  <div className="text-2xl sm:text-3xl font-extrabold text-gray-600 mb-2">{leaderboardData[1].score}</div>
                  <div className="text-xs sm:text-sm text-gray-500">{leaderboardData[1].totalGames} game dimainkan</div>
                </div>
              </div>
            </div>
          )}

          {/* Rank 1 */}
          {leaderboardData[0] && (
            <div className="order-1 sm:order-2 animate-slide-up">
              <div className="bg-gradient-to-br from-yellow-100 to-white rounded-2xl p-4 sm:p-6 border-2 border-yellow-400 shadow-2xl hover:scale-105 transition-all duration-300 sm:-mt-4">
                <div className="text-center">
                  <div className="text-5xl sm:text-7xl mb-2 animate-bounce">🥇</div>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-xl mb-3">
                    {leaderboardData[0].name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-[#112D4E] mb-1">{leaderboardData[0].name}</h3>
                  <div className="text-3xl sm:text-4xl font-extrabold text-yellow-600 mb-2">{leaderboardData[0].score}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{leaderboardData[0].totalGames} game dimainkan</div>
                </div>
              </div>
            </div>
          )}

          {/* Rank 3 */}
          {leaderboardData[2] && (
            <div className="order-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-orange-100 to-white rounded-2xl p-4 sm:p-6 border-2 border-orange-300 shadow-lg hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl mb-2">🥉</div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg mb-3">
                    {leaderboardData[2].name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#112D4E] mb-1">{leaderboardData[2].name}</h3>
                  <div className="text-2xl sm:text-3xl font-extrabold text-orange-600 mb-2">{leaderboardData[2].score}</div>
                  <div className="text-xs sm:text-sm text-gray-500">{leaderboardData[2].totalGames} game dimainkan</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Full Leaderboard Table */}
        <div className="bg-white rounded-3xl shadow-2xl border border-[#3F72AF]/30 overflow-hidden animate-scale-in">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-[#3F72AF] to-[#112D4E] p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white text-center">📊 Peringkat Lengkap</h2>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#DBE2EF]/50">
                <tr>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-[#112D4E]">Peringkat</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-[#112D4E]">Nama</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-[#112D4E]">Skor Tertinggi</th>
                  <th className="hidden sm:table-cell px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-[#112D4E]">Game</th>
                  <th className="hidden md:table-cell px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-[#112D4E]">Rata-rata</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leaderboardData.map((entry, index) => (
                  <tr
                    key={entry.rank}
                    className={`hover:bg-[#DBE2EF]/30 transition-all duration-200 ${
                      currentUserRank === entry.rank ? 'bg-blue-50 border-l-4 border-[#3F72AF]' : ''
                    }`}
                  >
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center gap-2">
                        {entry.badge ? (
                          <span className="text-2xl sm:text-3xl">{entry.badge}</span>
                        ) : (
                          <span className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r ${getRankColor(entry.rank)} text-white font-bold text-sm sm:text-base`}>
                            {entry.rank}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r ${getRankColor(entry.rank)} flex items-center justify-center text-white font-bold text-xs sm:text-sm`}>
                          {entry.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                        </div>
                        <span className="font-semibold text-[#112D4E] text-xs sm:text-base">{entry.name}</span>
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                      <span className="font-bold text-[#3F72AF] text-base sm:text-xl">{entry.score}</span>
                    </td>
                    <td className="hidden sm:table-cell px-3 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base text-gray-600">
                      {entry.totalGames}
                    </td>
                    <td className="hidden md:table-cell px-3 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base text-gray-600">
                      {entry.avgScore}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Current User Stats (if logged in) */}
        {currentUserRank && (
          <div className="mt-8 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-2xl p-4 sm:p-6 text-white shadow-xl animate-scale-in">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm sm:text-base opacity-90">Peringkat Anda</p>
                <p className="text-2xl sm:text-3xl font-bold">#{currentUserRank}</p>
              </div>
              <Link href="/game">
                <button className="px-6 py-3 bg-white text-[#3F72AF] rounded-xl font-semibold hover:bg-[#DBE2EF] transition-all duration-300 shadow-md hover:scale-105 active:scale-95">
                  🎮 Tingkatkan Skor!
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
          <Link href="/game" className="flex-1">
            <button className="w-full px-6 py-3 sm:py-4 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white rounded-xl text-sm sm:text-base font-semibold hover:from-[#112D4E] hover:to-[#3F72AF] transition-all duration-300 shadow-lg hover:scale-105 active:scale-95">
              🎯 Mulai Latihan
            </button>
          </Link>
          <Link href="/" className="flex-1">
            <button className="w-full px-6 py-3 sm:py-4 bg-white border-2 border-[#3F72AF] text-[#3F72AF] rounded-xl text-sm sm:text-base font-semibold hover:bg-[#DBE2EF] transition-all duration-300 shadow-md hover:scale-105 active:scale-95">
              🏠 Kembali ke Beranda
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
