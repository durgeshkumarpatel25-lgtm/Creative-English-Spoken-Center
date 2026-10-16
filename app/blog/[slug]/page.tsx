import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig, BlogPost } from "@/data/siteConfig";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  CalendarCheck,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import Footer from "@/components/Footer";
import { getWhatsAppUrl } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const post = siteConfig.blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = siteConfig.blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.urls.siteUrl}/favicon.svg`,
      },
    },
    datePublished: post.date,
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-bold text-brand-navy-900 hover:text-brand-amber-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Articles</span>
          </Link>
          <span className="text-xs font-semibold text-slate-500">
            {siteConfig.name}
          </span>
        </div>
      </header>

      {/* Main Post Container */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-card space-y-8">
          {/* Header Metadata */}
          <div className="space-y-4 pb-8 border-b border-slate-100">
            <span className="px-3 py-1 rounded-full bg-brand-amber-100 text-brand-amber-800 text-xs font-extrabold uppercase tracking-wider inline-block">
              {post.category}
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-brand-navy-900 leading-tight">
              {post.title}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed italic">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-brand-navy-800" />
                {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-amber-600" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Article Body Content */}
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base">
            {post.content.split("\n\n").map((block, idx) => {
              const trimmed = block.trim();
              if (trimmed.startsWith("## ")) {
                return (
                  <h2
                    key={idx}
                    className="text-2xl font-heading font-extrabold text-brand-navy-900 pt-4"
                  >
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }
              if (trimmed.startsWith("### ")) {
                return (
                  <h3
                    key={idx}
                    className="text-lg font-heading font-bold text-brand-navy-800 pt-2"
                  >
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }
              if (trimmed.startsWith("> ")) {
                return (
                  <blockquote
                    key={idx}
                    className="p-4 rounded-2xl bg-amber-50/60 border-l-4 border-brand-amber-500 text-sm text-slate-800 italic"
                  >
                    {trimmed.replace(/^>\s*/gm, "")}
                  </blockquote>
                );
              }
              if (trimmed.startsWith("- ")) {
                const items = trimmed.split("\n").map((line) => line.replace(/^[-\*]\s*/, ""));
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-2">
                    {items.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                );
              }
              if (trimmed === "---") {
                return <hr key={idx} className="border-slate-200 my-8" />;
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Callout: Book Free Demo Class */}
          <div className="mt-12 p-8 rounded-3xl bg-brand-navy-950 text-white space-y-4 text-center sm:text-left relative overflow-hidden shadow-xl">
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-brand-amber-400 uppercase tracking-widest flex items-center gap-1 justify-center sm:justify-start">
                  <Sparkles className="w-3.5 h-3.5" />
                  Live Classroom Training
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                  Learn Speaking in Ambikapur
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                  Join Creative English Spoken Center on Banaras Road. Practice daily on stage with small batches of 15 students.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                <Link
                  href="/#free-demo"
                  className="px-5 py-3 rounded-xl bg-brand-amber-500 hover:bg-brand-amber-600 text-brand-navy-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-amber min-h-[44px]"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book Free Demo</span>
                </Link>

                <a
                  href={getWhatsAppUrl(
                    siteConfig.contact.whatsappNumber,
                    `Hello! I read your article "${post.title}" and would like to ask about English classes.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
