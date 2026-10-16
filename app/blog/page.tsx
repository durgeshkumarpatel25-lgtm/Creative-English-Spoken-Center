import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowLeft, Clock, Calendar, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Spoken English & Communication Blog",
  description:
    "Practical tips, interview guides, and spoken English techniques for students and job seekers in Ambikapur and Surguja.",
};

export default function BlogListingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold text-brand-navy-900 hover:text-brand-amber-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <span className="text-xs font-semibold text-slate-500">
            {siteConfig.name} • Learning Hub
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-navy-50 text-brand-navy-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-amber-500" />
              Fluency &amp; Communication Guide
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-navy-900 tracking-tight">
              Spoken English &amp;{" "}
              <span className="text-brand-navy-800 underline decoration-brand-amber-500 decoration-wavy decoration-2">
                Career Articles
              </span>
            </h1>

            <p className="text-base text-brand-text-muted">
              Actionable guides written by experienced mentors at Creative English Spoken Center to help Ambikapur students speak with effortless confidence.
            </p>
          </div>

          {/* Article Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="px-2.5 py-1 rounded-full bg-brand-amber-50 text-brand-amber-800 font-bold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-heading font-extrabold text-brand-navy-900 line-clamp-2 hover:text-brand-navy-800 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-sm text-brand-text-muted line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy-800 hover:text-brand-amber-600 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
