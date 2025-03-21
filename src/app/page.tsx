import type { Metadata } from 'next';

import HomeComponent from '@/components/Home/home';
import About from '@/components/Home/about';
import Skill from '@/components/Home/skill';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 pt-36">
      <HomeComponent />
      <About />
      <Skill />
      <Certificate />
      <Project />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Portofolio',
  description:
    'Selamat datang di dunia kreatif saya! Saya Fadlan Syahid Ali, seorang mahasiswa yang memiliki minat programming.',
  authors: [{ name: 'Fadlan Syahid Ali', url: 'https://xydlanlux.biz.id' }],
  category: 'Personal',
  openGraph: {
    title: 'Portofolio',
    description:
      'Selamat datang di dunia kreatif saya! Saya Fadlan Syahid Ali, seorang mahasiswa yang memiliki minat programming.',
    url: 'https://xydlanlux.biz.id',
    type: 'website',
  },
};
