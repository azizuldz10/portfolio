import { Metadata } from 'next';
import ConnectSection from '@/components/ConnectSection';
import BackButton from '@/components/BackButton';

export const metadata: Metadata = {
  title: 'Connect | DzDev',
  description: 'Get in touch with DzDev for collaborations or just a friendly chat',
};

export default function ConnectPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <BackButton />
        <ConnectSection />
      </div>
    </div>
  );
} 