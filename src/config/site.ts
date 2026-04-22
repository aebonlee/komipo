/**
 * KOMIPO AI Learning Platform - 사이트 설정
 * 한국중부발전 AI 도장깨기 학습 사이트
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'komipo',
  name: 'KOMIPO AI Academy',
  nameKo: '한국중부발전 AI 아카데미',
  description: '한국중부발전 전 직원을 위한 AI 리터러시 교육 플랫폼 - AI 도장깨기',
  url: 'https://komipo.dreamitbiz.com',
  dbPrefix: 'komipo_',
  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },
  brand: {
    parts: [
      { text: 'KOMIPO', className: 'brand-dream' },
      { text: ' AI', className: 'brand-it' },
      { text: ' Academy', className: 'brand-biz' }
    ]
  },
  themeColor: '#0A1628',
  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },
  features: {
    shop: false,
    community: false,
    search: false,
    auth: true,
    license: false,
  },
  colors: [
    { name: 'blue', color: '#0A1628' },
    { name: 'red', color: '#0D7377' },
    { name: 'green', color: '#3F51B5' },
    { name: 'purple', color: '#1A237E' },
    { name: 'orange', color: '#455A64' },
  ],
  menuItems: [
    { path: '/', labelKey: 'nav.home' },
    {
      labelKey: 'nav.learn',
      path: '/learn',
      activePath: '/learn',
      dropdown: [
        { path: '/learn/ai-basics', labelKey: 'nav.aiBasics' },
        { path: '/learn/ai-tools', labelKey: 'nav.aiTools' },
        { path: '/learn/prompt', labelKey: 'nav.prompt' },
        { path: '/learn/ai-agents', labelKey: 'nav.aiAgents' },
        { path: '/learn/business', labelKey: 'nav.business' },
        { path: '/learn/ethics', labelKey: 'nav.ethics' },
        { path: '/learn/advanced', labelKey: 'nav.advanced' },
      ]
    },
    {
      labelKey: 'nav.challenge',
      path: '/challenge',
      activePath: '/challenge',
    },
    { path: '/progress', labelKey: 'nav.progress' },
    { path: '/leaderboard', labelKey: 'nav.leaderboard' },
  ],
  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/learn', labelKey: 'nav.learn' },
    { path: '/challenge', labelKey: 'nav.challenge' },
    { path: '/leaderboard', labelKey: 'nav.leaderboard' },
  ],
  familySites: [
    { name: 'AI Hub', url: 'https://ai-hub.dreamitbiz.com' },
    { name: 'AI 프롬프트', url: 'https://ai-prompt.dreamitbiz.com' },
    { name: 'ChatGPT 활용', url: 'https://chatgpt.dreamitbiz.com' },
  ]
};

export default site;
