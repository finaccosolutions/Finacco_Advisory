import React, { useEffect } from 'react';
import AdvisoryHero from '../components/advisory/AdvisoryHero';
import AdvisoryServices from '../components/advisory/AdvisoryServices';

export default function FinaccoAdvisory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdvisoryHero />
      <AdvisoryServices />
    </div>
  );
}