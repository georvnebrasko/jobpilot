import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Stats from '../components/Stats';
import PopularJobs from '../components/PopularJobs';
import HowItWorks from '../components/HowItWorks';
import PopularCategories from '../components/PopularCategories';
import JobList from '../components/JobList';
import BestCompanies from '../components/BestCompanies';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

function Home({ onOpenAuthModal, user, onLogout }) {
  return (
    <div className="home-page">
      {/* Передаём user и onLogout в Header */}
      <Header
        onOpenAuthModal={onOpenAuthModal}
        user={user}
        onLogout={onLogout}
      />
      <HeroSection />
      <Stats />
      <PopularJobs />
      <HowItWorks />
      <PopularCategories />
      <JobList />
      <BestCompanies />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;