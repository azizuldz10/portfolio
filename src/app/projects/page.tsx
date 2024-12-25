import { Metadata } from 'next';
import ProjectGrid from '@/components/ProjectGrid';
import BackButton from '@/components/BackButton';

export const metadata: Metadata = {
  title: 'Projects | DzDev',
  description: 'Collection of web development projects by DzDev',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <BackButton />
        <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
        <ProjectGrid />
      </div>
    </div>
  );
} 