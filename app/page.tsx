"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import CoursesSection from "@/components/CoursesSection";
import WhyUsSection from "@/components/WhyUsSection";
import SuccessStories from "@/components/SuccessStories";
import BatchesFees from "@/components/BatchesFees";
import FreeDemoSection from "@/components/FreeDemoSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import ConversionHelpers from "@/components/ConversionHelpers";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string | undefined>();

  const handleOpenDemoModal = (courseTitle?: string) => {
    setSelectedCourseForModal(courseTitle);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* 1. Sticky Navigation Header */}
      <Header onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenDemoModal={() => handleOpenDemoModal()} />

        {/* 3. Quick Stats Strip */}
        <StatsStrip />

        {/* 4. Courses Offered */}
        <CoursesSection onOpenDemoModal={handleOpenDemoModal} />

        {/* 5. Why Choose Us & 4-Step Learning Timeline */}
        <WhyUsSection onOpenDemoModal={() => handleOpenDemoModal()} />

        {/* 6. Success Stories / Testimonials */}
        <SuccessStories />

        {/* 7. Batches & Fee Structure */}
        <BatchesFees onOpenDemoModal={handleOpenDemoModal} />

        {/* 8. Free Demo Class / Callback Form (Inline Section) */}
        <FreeDemoSection />

        {/* 9. FAQs with FAQPage Schema */}
        <FaqSection />

        {/* 10. Contact & Campus Location (Embedded Map, NAP) */}
        <ContactSection />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Conversion Helpers: Mobile Sticky Bottom Bar, Floating WhatsApp, Exit Intent Banner */}
      <ConversionHelpers onOpenDemoModal={() => handleOpenDemoModal()} />

      {/* 13. Reusable Free Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
        preselectedCourse={selectedCourseForModal}
      />
    </div>
  );
}
