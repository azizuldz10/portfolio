import { Metadata } from 'next';
import PublicationsList from '@/components/PublicationsList';
import BackButton from '@/components/BackButton';

export const metadata: Metadata = {
  title: 'Publications | DzDev',
  description: 'Research papers, articles, and publications by DzDev',
};

export default function PublicationsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <BackButton />
        <h1 className="text-4xl font-bold text-center mb-12">Publications</h1>
        <PublicationsList />
      </div>
    </div>
  );
} 