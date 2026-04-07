"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Search, LogOut, UserCircle2 } from "lucide-react";
import { PlayCircle } from "lucide-react";

/* ===== IMPORT DOCS ===== */
import { dashboardDocs } from "./docs/dashboard/dashboard";
import { inwardDocs } from "./docs/inward/inward";
import { outwardDocs } from "./docs/outward/outward";
import { inventoryDocs } from "./docs/inventory/inventory";
import { returnsDocs } from "./docs/returns/returns";
import { yardmapDocs } from "./docs/yard-map/yardmap";
import { scrapDocs } from "./docs/scrap/scrap";
import { qualityDocs } from "./docs/quality/quality";
import { auditDocs } from "./docs/audit/audit";
import { analyticsDocs } from "./docs/analytics/analytics";
import { mastersDocs } from "./docs/masters/masters";
import DocsSidebar from "./components/DocsSidebar";

/* ===== USER GUIDANCE VIDEOS ===== */

const videos = [
  {
    title: "Dashboard Overview",
    desc: "Learn dashboard navigation and key metrics.",
    file: "overview.mp4",
  },
  {
    title: "Inward Process",
    desc: "Understand inward workflow.",
    file: "inward.mp4",
  },
  {
    title: "Outward Process",
    desc: "Understand outward workflow.",
    file: "outward.mp4",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [activeKey, setActiveKey] = useState("Dashboard");
  const [activeDocTab, setActiveDocTab] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const doc = activeSection === "Dashboard" ? dashboardDocs[activeKey as keyof typeof dashboardDocs] : null;
  const inwardDoc = activeSection === "Inward" ? inwardDocs[activeKey as keyof typeof inwardDocs] : null;
  const outwardDoc = activeSection === "Outward" ? outwardDocs[activeKey as keyof typeof outwardDocs] : null;
  const inventoryDoc = activeSection === "Inventory" ? inventoryDocs[activeKey as keyof typeof inventoryDocs] : null;
  const returnsDoc = activeSection === "Returns" ? returnsDocs[activeKey as keyof typeof returnsDocs] : null;
const yardDoc = activeSection === "Yard Map" ? yardmapDocs[activeKey as keyof typeof yardmapDocs] : null;
const scrapDoc = activeSection === "Scrap" ? scrapDocs[activeKey as keyof typeof scrapDocs] : null;
const qualityDoc = activeSection === "Quality Checks" ? qualityDocs[activeKey as keyof typeof qualityDocs] : null;
const auditDoc = activeSection === "Audit & Risk Register" ? auditDocs[activeKey as keyof typeof auditDocs] : null;
const analyticsDoc = activeSection === "Analytics" ? analyticsDocs[activeKey as keyof typeof analyticsDocs] : null;
const mastersDoc = activeSection === "Masters & Settings" ? mastersDocs[activeKey as keyof typeof mastersDocs] : null;

useEffect(() => {
  if (doc?.tabs?.length) {
    setActiveDocTab((prev) => (doc.tabs.some((tab) => tab.tab === prev) ? prev : doc.tabs[0].tab));
  } else {
    setActiveDocTab(null);
  }
}, [doc?.tabs]);

const dashboardSections = doc?.tabs
  ? doc.tabs.find((tab) => tab.tab === activeDocTab)?.sections ?? []
  : doc?.sections ?? [];

  type DocSection = {
    heading: string;
    content: string;
    image?: string;
    video?: string;
  };

  const renderDocSections = (sections: DocSection[]) => (
    <div className="flex flex-col gap-6">
      {sections.map((sec, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-5 rounded-[28px] shadow-sm border border-slate-200"
        >
          {sec.video ? (
            <div className="grid gap-6 lg:grid-cols-[0.32fr_0.68fr] items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2">{sec.heading}</h2>
                <p className="text-gray-600 leading-relaxed">{sec.content}</p>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 shadow-sm">
                <video
                  src={sec.video}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-[280px] w-full object-cover md:h-[380px]"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">{sec.heading}</h2>
                <p className="text-gray-600 leading-relaxed">{sec.content}</p>
              </div>

              {sec.image && (
                <img
                  src={sec.image}
                  className="w-full rounded-[24px] border border-slate-200 shadow-sm object-cover"
                />
              )}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );

  const handleMenuClick = (data: { section: string; key: string | null }) => {
    // ✅ HANDLE TOGGLE HERE
    if (data.section === "TOGGLE_SIDEBAR") {
      setSidebarOpen((prev) => !prev);
      return;
    }

    // 👉 normal menu click
    setActiveSection(data.section);
    setActiveKey(data.key || "");
  };

  return (
    <div className="flex h-screen bg-slate-100">
      <aside className={`${sidebarOpen ? "w-72" : "w-20"} border-r border-slate-200 bg-white shadow-sm transition-all duration-200`}>
        <DocsSidebar
          activeSection={activeSection}
          activeKey={activeKey}
          collapsed={!sidebarOpen}
          onSelect={handleMenuClick}
        />
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between gap-4 bg-white px-6 py-4 border-b border-slate-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 text-white shadow-lg">
              DS
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">DEC Store</div>
              <div className="text-xs text-slate-500">Construction Inventory</div>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-2xl">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search docs, items, yard or channel"
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-purple-500 focus:bg-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 xl:flex">
              <UserCircle2 size={18} />
              Store Keeper
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700">
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-auto px-6 py-6 lg:px-8">

        {/* ===== DASHBOARD DOCS ===== */}
        {activeSection === "Dashboard" && doc && (
          <div className="max-w-6xl mx-auto">

            <h1 className="text-3xl font-bold mb-4">{doc.title}</h1>
            <p className="text-gray-600 mb-6">{doc.description}</p>

            {doc.tabs && doc.tabs.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2 border-b border-slate-200 pb-4">
                {doc.tabs.map((tab) => (
                  <button
                    type="button"
                    key={tab.tab}
                    onClick={() => setActiveDocTab(tab.tab)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      activeDocTab === tab.tab
                        ? "bg-purple-600 text-white shadow"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {tab.tab}
                  </button>
                ))}
              </div>
            )}

            {renderDocSections(dashboardSections)}

          </div>
        )}

        {/* ===== INWARD DOCS ===== */}
        {activeSection === "Inward" && inwardDoc && (
          <div className="max-w-6xl mx-auto">

            <h1 className="text-3xl font-bold mb-4">{inwardDoc.title}</h1>
            <p className="text-gray-600 mb-8">{inwardDoc.description}</p>

            {renderDocSections(inwardDoc.sections)}

          </div>
        )}
        {/* ===== OUTWARD DOCS ===== */}
{activeSection === "Outward" && outwardDoc && (
  <div className="max-w-6xl mx-auto">

    <h1 className="text-3xl font-bold mb-4">
      {outwardDoc.title}
    </h1>

    <p className="text-gray-600 mb-8">
      {outwardDoc.description}
    </p>

    {renderDocSections(outwardDoc.sections)}

  </div>
)}
{/* ===== INVENTORY DOCS ===== */}
{activeSection === "Inventory" && inventoryDoc && (
  <div className="max-w-6xl mx-auto">

    <h1 className="text-3xl font-bold mb-4">
      {inventoryDoc.title}
    </h1>

    <p className="text-gray-600 mb-8">
      {inventoryDoc.description}
    </p>

    {renderDocSections(inventoryDoc.sections)}

  </div>
)}
{/* ===== RETURNS DOCS ===== */}
{activeSection === "Returns" && returnsDoc && (
  <div className="max-w-6xl mx-auto">

    <h1 className="text-3xl font-bold mb-4">{returnsDoc.title}</h1>
    <p className="text-gray-600 mb-8">{returnsDoc.description}</p>

    {renderDocSections(returnsDoc.sections)}

  </div>
)}
{/* ===== YARD MAP DOCS ===== */}
{activeSection === "Yard Map" && yardDoc && (
  <div className="max-w-6xl mx-auto">

    <h1 className="text-3xl font-bold mb-4">{yardDoc.title}</h1>
    <p className="text-gray-600 mb-8">{yardDoc.description}</p>

    {renderDocSections(yardDoc.sections)}

  </div>
)}
{/* ===== SCRAP DOCS ===== */}
{activeSection === "Scrap" && scrapDoc && (
  <div className="max-w-6xl mx-auto">

    <h1 className="text-3xl font-bold mb-4">{scrapDoc.title}</h1>
    <p className="text-gray-600 mb-8">{scrapDoc.description}</p>

    {renderDocSections(scrapDoc.sections)}

  </div>
)}
{/* ===== QUALITY DOCS ===== */}
{activeSection === "Quality Checks" && qualityDoc && (
  <div className="max-w-6xl mx-auto">

    <h1 className="text-3xl font-bold mb-4">{qualityDoc.title}</h1>
    <p className="text-gray-600 mb-8">{qualityDoc.description}</p>

    {renderDocSections(qualityDoc.sections)}

  </div>
)}
{/* ===== AUDIT DOCS ===== */}
{activeSection === "Audit & Risk Register" && auditDoc && (
  <div className="max-w-6xl mx-auto">

    <h1 className="text-3xl font-bold mb-4">{auditDoc.title}</h1>
    <p className="text-gray-600 mb-8">{auditDoc.description}</p>

    {renderDocSections(auditDoc.sections)}

  </div>
)}
{/* ===== ANALYTICS DOCS ===== */}
{activeSection === "Analytics" && analyticsDoc && (
  <div className="max-w-6xl mx-auto">

    <h1 className="text-3xl font-bold mb-4">{analyticsDoc.title}</h1>
    <p className="text-gray-600 mb-8">{analyticsDoc.description}</p>

    {renderDocSections(analyticsDoc.sections)}

  </div>
)}
{/* ===== MASTERS DOCS ===== */}
{activeSection === "Masters & Settings" && mastersDoc && (
  <div className="max-w-6xl mx-auto">

    <h1 className="text-3xl font-bold mb-4">{mastersDoc.title}</h1>
    <p className="text-gray-600 mb-8">{mastersDoc.description}</p>

    {renderDocSections(mastersDoc.sections)}

  </div>
)}
        {/* ===== USER GUIDANCE ===== */}
        {activeSection === "User Guidance" && (
          <div className="max-w-6xl mx-auto">

            <h1 className="text-3xl font-bold text-center mb-6">
              User Guidance
            </h1>

            <div className="flex flex-col gap-16">
              {videos.map((v, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-10">

                  <div className="flex-1 relative group">
                    <video controls className="w-full rounded-xl shadow">
                      <source src={`/videos/${v.file}`} />
                    </video>

                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition">
                      <PlayCircle size={60} className="text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">{v.title}</h2>
                    <p className="text-gray-600">{v.desc}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== OTHER ===== */}
        {activeSection !== "Dashboard" &&
          activeSection !== "Inward" &&
          activeSection !== "Outward" &&
          activeSection !== "Inventory" &&
          activeSection !== "Returns" &&
          activeSection !== "Yard Map" &&
          activeSection !== "Scrap" &&
          activeSection !== "Quality Checks" &&
          activeSection !== "Audit & Risk Register" &&
          activeSection !== "Analytics" &&
          activeSection !== "Masters & Settings" &&
          activeSection !== "User Guidance" && (
            <div className="mt-40 text-center">
              <h1 className="text-xl font-semibold">{activeSection}</h1>
              <p className="text-gray-500">Documentation coming soon</p>
            </div>
          )}

      </main>
      </div>
    </div>
  );
}