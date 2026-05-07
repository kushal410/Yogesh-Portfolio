import React from "react";
import { BarChart3, Megaphone, Target, TrendingUp, Users } from "lucide-react";

const expertise = [
  {
    title: "Google Ads",
    icon: TrendingUp,
    description: "Search, Performance Max (PMax), Display, Shopping — with structured asset groups and keyword strategy.",
    highlights: ["Keyword research & match types", "Budget planning & management", "ROAS / CPA optimization"],
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    icon: Users,
    description: "Awareness, traffic, lead generation, and conversion campaigns with precise audience segmentation.",
    highlights: ["Audience targeting & segmentation", "Creative testing & iteration", "Full-funnel optimization"],
  },
  {
    title: "TikTok Ads",
    icon: Megaphone,
    description: "In-Feed Ads and Spark Ads focused on brand reach, engagement, and conversion intent.",
    highlights: ["Creative hooks & ad scripting", "Spark Ads setup", "Performance monitoring"],
  },
  {
    title: "Reporting & Analysis",
    icon: BarChart3,
    description: "Weekly/monthly reporting with CTR, CPC, ROAS, conversions, and budget utilization insights.",
    highlights: ["Insight-driven reporting", "Troubleshooting delivery/billing issues", "Scaling winners, retiring losers"],
  },
  {
    title: "Copy & Creative Strategy",
    icon: Target,
    description: "High-converting ad copy tailored to platform formats and audience psychology.",
    highlights: ["Headlines, descriptions, hooks", "Creative briefs & alignment", "A/B testing mindset"],
  },
];

const ExpertiseCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-[#6366f1]/10"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-[#6366f1] to-[#a855f7]" />

      <div className="relative flex items-start gap-4">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
          <Icon className="w-6 h-6 text-[#a855f7]" />
        </div>

        <div className="min-w-0">
          <h4 className="text-lg font-bold text-white">{item.title}</h4>
          <p className="mt-1 text-sm text-gray-300 leading-relaxed">{item.description}</p>

          <ul className="mt-4 space-y-2">
            {item.highlights.map((h) => (
              <li key={h} className="text-sm text-gray-400">
                • {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Portofolio = () => {
  return (
    <section id="Portofolio" className="portofolio">
      <div className="heading text-center pt-5">
        <small>What I Do</small>
        <h3>Paid Media Expertise</h3>
      </div>

      <div className="portofolio-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {expertise.map((item) => (
            <ExpertiseCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portofolio;

