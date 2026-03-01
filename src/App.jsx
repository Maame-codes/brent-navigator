import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  AlertCircle,
  Building2,
  Globe,
  Phone,
  Info,
  Play,
  Copy,
  Briefcase,
  ChevronRight,
  Heart,
  Stethoscope,
  Activity,
  Search,
  Trash2,
  Users,
  GraduationCap,
  DollarSign,
  ShieldAlert,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const BRENT_PROBLEMS = {
  housing: {
    stat: "6,281",
    label: "Homelessness Apps",
    detail: "Brent saw a 10% monthly increase in B&B placements recently.",
  },
  poverty: {
    stat: "58.7%",
    label: "Child Deprivation",
    detail: "5th highest nationally for income-deprived children.",
  },
  isolation: {
    stat: "27%",
    label: "Social Isolation",
    detail: "Residents with contact less than twice a week.",
  },
};

function useCountUp(target, duration = 2000, startOnMount = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnMount) return;
    const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ""));
    const suffix = target.replace(/[0-9.,]/g, "");
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(
        (eased * numericTarget).toFixed(target.includes(".") ? 1 : 0) + suffix,
      );
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, []);

  return count;
}
const SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1591197172062-c718f82aba20?auto=format&fit=crop&w=1200&q=80",
    label: "Wembley, Brent",
  },
  {
    url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    label: "London Community",
  },
  {
    url: "https://images.unsplash.com/photo-1565813086292-604790c8a97b?auto=format&fit=crop&w=1200&q=80",
    label: "Brent Streets",
  },
  {
    url: "https://images.unsplash.com/photo-1514425263458-109317cc1321?auto=format&fit=crop&w=1200&q=80",
    label: "Local Market",
  },
];
// --- REAL BRENT EMPLOYMENT & HOUSING DATA ---
const JOBS = [
  {
    id: 1,
    title: "Community Support Worker",
    org: "Brent Council",
    type: "Full-time",
    link: "https://brent.gov.uk/jobs",
  },
  {
    id: 2,
    title: "Food Bank Volunteer",
    org: "Sufra NW London",
    type: "Volunteer",
    link: "https://www.sufra-nwlondon.org.uk/get-involved/",
  },
  {
    id: 3,
    title: "Retail Assistant",
    org: "London Designer Outlet",
    type: "Part-time",
    link: "https://www.londondesigneroutlet.com/jobs/",
  },
];

const HOUSING_LISTS = [
  {
    id: 1,
    title: "Shared Room - Wembley Park",
    price: "£850pcm",
    platform: "SpareRoom",
    link: "https://www.spareroom.co.uk/flatshare/brent",
  },
  {
    id: 2,
    title: "1 Bed Flat - Willesden Green",
    price: "£1,600pcm",
    platform: "Rightmove",
    link: "https://www.rightmove.co.uk/property-to-rent/Brent.html",
  },
  {
    id: 3,
    title: "Studio Apartment - Harlesden",
    price: "£1,200pcm",
    platform: "OpenRent",
    link: "https://www.openrent.co.uk/properties-to-rent/brent-london",
  },
];

const HEALTH_SERVICES = [
  {
    id: 1,
    name: "Find Your Nearest GP",
    focus: "Primary Care",
    action: "Search NHS Database",
    link: "https://www.nhs.uk/service-search/find-a-gp",
  },
  {
    id: 2,
    name: "Brent Health Matters",
    focus: "Diabetes & CVD Outreach",
    action: "Get a Health Check",
    info: "Targeting high diabetes rates (7%) and heart disease.",
  },
  {
    id: 3,
    name: "Brent Talking Therapies",
    focus: "Mental Health",
    action: "Self-Refer Now",
    info: "Free NHS support for anxiety and depression.",
  },
  {
    id: 4,
    name: "Change4Life Brent",
    focus: "Childhood Obesity",
    action: "Family Nutrition",
    info: "Addressing the 41.7% childhood obesity rate in Year 6.",
  },
];

const BUDGET_FACTS = {
  increase: "4.99%",
  gap: "£10 Million",
  investment: "£14 Million in Public Realm",
  support_link:
    "https://www.brent.gov.uk/benefits-and-money-advice/council-tax-support",
};

const TRASH_REPORTS = [
  { area: "Willesden", status: "Cleanup Pending", type: "Bulky Waste" },
  { area: "Harlesden", status: "Resolved", type: "Illegal Dumping" },
];

const FAQS = [
  {
    q: "How do I report a repair?",
    a: "Log in to 'MyAccount' on Brent.gov.uk or use the 'Dangerous Housing' report tool in our Crisis tab.",
  },
  {
    q: "When is my bin collection?",
    a: "Brent Council operates a rolling schedule. Check your specific street on the Brent waste portal.",
  },
  {
    q: "How do I apply for the Resident Support Fund?",
    a: "Use our 'Support Finder' on the Dashboard to check eligibility before calling 020 8937 1234.",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="brent-navigator">
      <nav className="sidebar">
        <div className="sidebar-brand">
          <div className="logo">BN</div>
          <span>Brent Navigator</span>
        </div>
        <div className="nav-group">
          <button
            className={`nav-item ${activeTab === "home" ? "active" : ""}`}
            onClick={() => setActiveTab("home")}
          >
            <Home size={20} /> <span>Dashboard</span>
          </button>
          <button
            className={`nav-item ${activeTab === "crisis" ? "active" : ""}`}
            onClick={() => setActiveTab("crisis")}
          >
            <AlertCircle size={20} /> <span>Crisis Support</span>
          </button>
          <button
            className={`nav-item ${activeTab === "health" ? "active" : ""}`}
            onClick={() => setActiveTab("health")}
          >
            <Heart size={20} /> <span>Health</span>
          </button>

          <button
            className={`nav-item ${activeTab === "environment" ? "active" : ""}`}
            onClick={() => setActiveTab("environment")}
          >
            <Trash2 size={20} /> <span>Cleaner Brent</span>
          </button>
          <button
            className={`nav-item ${activeTab === "hub" ? "active" : ""}`}
            onClick={() => setActiveTab("hub")}
          >
            <Building2 size={20} /> <span>The Hub</span>
          </button>
          <button
            className={`nav-item ${activeTab === "jobs" ? "active" : ""}`}
            onClick={() => setActiveTab("jobs")}
          >
            <Briefcase size={20} /> <span>Employment</span>
          </button>
          <button
            className={`nav-item ${activeTab === "housing" ? "active" : ""}`}
            onClick={() => setActiveTab("housing")}
          >
            <Home size={20} /> <span>Housing Ads</span>
          </button>
          <button
            className={`nav-item ${activeTab === "youth" ? "active" : ""}`}
            onClick={() => setActiveTab("youth")}
          >
            <Users size={20} /> <span>Youth & Rights</span>
          </button>
          <button
            className={`nav-item ${activeTab === "budget" ? "active" : ""}`}
            onClick={() => setActiveTab("budget")}
          >
            <DollarSign size={20} /> <span>Tax & Budget</span>
          </button>
          <button
            className={`nav-item ${activeTab === "faq" ? "active" : ""}`}
            onClick={() => setActiveTab("faq")}
          >
            <Info size={20} /> <span>Council FAQs</span>
          </button>
        </div>
      </nav>

      <main className="main-viewport">
        {/* PERSISTENT HEADER */}
        <header className="viewport-header">
          <div className="header-info">
            <div className="breadcrumb">
              Brent Borough / <span className="active-crumb">{activeTab}</span>
            </div>
            <h2 className="view-title">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
          </div>
          <div className="header-actions">
            <div className="emergency-pill">
              Facing an Emergency? <strong>Always Call 999</strong>
            </div>
          </div>
        </header>

        <section className="scroll-content">
          <div className="view-container">
            <AnimatePresence mode="wait">
              {activeTab === "home" && <HomeView key="home" />}
              {activeTab === "crisis" && <CrisisView key="crisis" />}
              {activeTab === "health" && <HealthView key="health" />}
              {activeTab === "environment" && <EnvironmentView key="env" />}
              {activeTab === "jobs" && <EmploymentView key="jobs" />}
              {activeTab === "housing" && <HousingView key="housing" />}
              {activeTab === "faq" && <FAQView key="faq" />}
              {activeTab === "hub" && <HubView key="hub" />}
              {activeTab === "youth" && <YouthView key="youth" />}
              {activeTab === "budget" && <BudgetView key="budget" />}
            </AnimatePresence>
          </div>

          {/* PERSISTENT FOOTER */}
          <Footer />
        </section>
      </main>
    </div>
  );
}

function AnimatedStatCard({ data }) {
  const [displayVal, setDisplayVal] = useState("0");
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    const raw = data.stat.replace(/[^0-9.]/g, "");
    const suffix = data.stat.replace(/[0-9.,]/g, "");
    const target = parseFloat(raw);
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setDisplayVal(
        (Number.isInteger(target)
          ? Math.round(current).toLocaleString()
          : current.toFixed(1)) + suffix,
      );
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [data.stat]);

  return (
    <div className="data-card">
      <span className="data-stat">{displayVal}</span>
      <h4>{data.label}</h4>
      <p>{data.detail}</p>
    </div>
  );
}

function HomeView() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((s) => (s + 1) % SLIDES.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="view-wrapper"
    >
      {/* 1. MISSION & PURPOSE */}
      <div className="hero-card">
        <h1>
          Brent <span className="accent-text">Navigator.</span>
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            fontWeight: "500",
            color: "#1e293b",
            marginTop: "10px",
          }}
        >
          Bridging the gap between 330,000 residents and essential services.
        </p>
        <div
          className="purpose-box"
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "#f8fafc",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h4 style={{ marginBottom: "10px", color: "var(--accent)" }}>
            Our Purpose
          </h4>
          <p
            style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: "1.6" }}
          >
            In a year facing a <strong>4.99% Council Tax hike</strong> and{" "}
            <strong>35,000 fly-tipping incidents</strong>, this platform
            empowers residents with direct legal rights and support pathways. We
            provide the transparency needed to navigate the borough's{" "}
            <strong>£10 million funding gap</strong>.
          </p>
        </div>
      </div>

      {/* 2. VERIFIED BRENT SLIDESHOW (No Labels) */}
      <div className="slideshow-container">
        {SLIDES.map((slide, index) => (
          <img
            key={index}
            src={slide.url}
            alt="Brent Community"
            className="slide-img"
            style={{
              position: index === 0 ? "relative" : "absolute",
              top: 0,
              left: 0,
              opacity: index === currentSlide ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ))}
      </div>

      {/* 3. CORE UTILITIES */}
      <SupportFinder />
      <DigitalAccess />

      {/* 4. REAL BRENT DATA COUNTERS */}
      <div className="problem-grid">
        {Object.entries(BRENT_PROBLEMS).map(([key, data]) => (
          <AnimatedStatCard key={key} data={data} />
        ))}
      </div>
      {/* 5. AUTOMATIC COMMUNITY VIDEOS */}
      <div className="video-section" style={{ marginTop: "40px" }}>
        <h3 style={{ marginBottom: "20px" }}>Community Updates & Evidence</h3>
        <div
          className="video-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {[
            {
              id: "kwZyqDQ7Zrc",
              title: "Brent Borough: Community in Focus",
            },
            {
              id: "WXf2zURoocs",
              title: "Brent: Community Voices & Projects",
            },
          ].map((vid) => (
            <div key={vid.id} className="video-card">
              <div
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  aspectRatio: "16/9",
                  background: "#0f172a",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube-nocookie.com/embed/${vid.id}`}
                  title={vid.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ display: "block" }}
                />
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                {vid.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CrisisView() {
  const [activeSection, setActiveSection] = useState("housing");

  const sections = [
    { id: "housing", label: "Housing Rights" },
    { id: "emergency", label: "Emergency Lines" },
    { id: "whatnow", label: "What To Do Now" },
    { id: "legalrights", label: "Legal Rights" },
    { id: "orgs", label: "Local Organisations" },
    { id: "dangeroushousing", label: "Dangerous Housing" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="view-wrapper"
    >
      <div className="hero-card">
        <h1>
          Crisis <span className="accent-text">Support.</span>
        </h1>
        <p>
          Real help, real numbers, real rights — for Brent residents in crisis.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              border: "1px solid var(--border)",
              background: activeSection === s.id ? "var(--accent)" : "white",
              color: activeSection === s.id ? "white" : "#64748b",
              fontSize: "0.8rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {activeSection === "housing" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Housing Rights & Rights Checker</h3>
            <p>Know what Brent Council is legally required to do for you.</p>
          </div>
          <RightsChecker />
          <div className="helpline-grid" style={{ marginTop: "16px" }}>
            <HelplineCard
              title="Homelessness Team"
              desc="Mon-Fri 9am-5pm. Duty to assess your case."
              num="020 8937 2000 (option 2)"
              urgent
            />
            <HelplineCard
              title="Out of Hours Homelessness"
              desc="Evenings, weekends and bank holidays."
              num="020 8937 1234"
            />
          </div>
          <div
            className="logic-box"
            style={{
              marginTop: "16px",
              background: "#f0f9ff",
              borderColor: "#bae6fd",
            }}
          >
            <strong>Brent Tenancy Relations Service (BTRS)</strong>
            <p style={{ fontSize: "0.85rem", marginTop: "6px" }}>
              If your landlord is harassing you, refusing repairs, or unlawfully
              evicting you — BTRS (provided by Hodge Jones and Allen Solicitors)
              can help for free.
            </p>
            <p style={{ fontSize: "0.85rem", marginTop: "6px" }}>
              Call Housing Options: <strong>020 8937 2000 (option 1)</strong>{" "}
              and mention BTRS.
            </p>
          </div>
          <div className="logic-box" style={{ marginTop: "12px" }}>
            <strong>Crisis Skylight Brent</strong>
            <p style={{ fontSize: "0.85rem", marginTop: "6px" }}>
              1-2 Bank Buildings, High Street, Harlesden, NW10 4LT
              <br />
              Mon-Fri 10am-4pm. Drop-in: 10am-1pm.
            </p>
            <p style={{ fontSize: "0.85rem", marginTop: "6px" }}>
              Helps with Universal Credit, housing applications and homelessness
              support.
            </p>
            <div className="num-row">
              <code>0208 965 2561</code>
            </div>
          </div>
        </div>
      )}

      {activeSection === "emergency" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Emergency Helplines</h3>
            <p>Real numbers for Brent residents — available now.</p>
          </div>
          <div className="helpline-grid">
            <HelplineCard
              title="Emergency Services"
              desc="Life-threatening emergency only."
              num="999"
              urgent
            />
            <HelplineCard
              title="NHS Urgent Help"
              desc="Urgent medical or mental health advice, 24/7."
              num="111"
              urgent
            />
          </div>
          <div className="helpline-grid" style={{ marginTop: "12px" }}>
            <HelplineCard
              title="Brent Mental Health Crisis"
              desc="Single Point of Access — 24hrs, 365 days."
              num="0800 0234 650"
              urgent
            />
            <HelplineCard
              title="Samaritans"
              desc="Free, confidential support anytime."
              num="116 123"
            />
          </div>
          <div className="helpline-grid" style={{ marginTop: "12px" }}>
            <HelplineCard
              title="National Domestic Abuse Helpline"
              desc="Free, 24-hour confidential support."
              num="0808 2000 247"
              urgent
            />
            <HelplineCard
              title="Brent Domestic Abuse Housing Team"
              desc="Mon-Fri office hours."
              num="020 8937 2000 (option 3)"
            />
          </div>
          <div className="helpline-grid" style={{ marginTop: "12px" }}>
            <HelplineCard
              title="Shelter Homelessness Helpline"
              desc="Free housing and homelessness advice."
              num="0808 800 4444"
            />
            <HelplineCard
              title="StreetLink — Rough Sleeping"
              desc="Report or get help for rough sleeping."
              num="0300 500 0914"
            />
          </div>
          <div className="helpline-grid" style={{ marginTop: "12px" }}>
            <HelplineCard
              title="CALM (Men's Crisis Line)"
              desc="Free helpline for men in crisis."
              num="0800 58 58 58"
            />
            <HelplineCard
              title="Papyrus (Under 35s)"
              desc="Suicide prevention for under 35s."
              num="0800 068 41 41"
            />
          </div>
          <div className="helpline-grid" style={{ marginTop: "12px" }}>
            <HelplineCard
              title="Brent Council General"
              desc="All council services."
              num="020 8937 1234"
            />
            <HelplineCard
              title="Resident Support Fund"
              desc="Emergency grants for Brent residents."
              num="020 8937 1234"
            />
          </div>
        </div>
      )}

      {activeSection === "whatnow" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>What To Do Right Now</h3>
            <p>Step-by-step guidance for the most urgent situations.</p>
          </div>
          {[
            {
              title: "If you are homeless tonight",
              color: "#fef2f2",
              border: "#ef4444",
              emoji: "🏠",
              steps: [
                "Call Brent Homelessness Team: 020 8937 2000 (option 2) — Mon-Fri 9am-5pm.",
                "Outside hours? Call 020 8937 1234 and explain your situation is urgent.",
                "Tell them you have nowhere to sleep tonight — they have a legal duty to assess you.",
                "If rough sleeping, call StreetLink: 0300 500 0914 or visit streetlink.org.uk.",
                "Crisis Skylight Brent in Harlesden (0208 965 2561) can also help with housing applications.",
              ],
            },
            {
              title: "If you are fleeing domestic abuse",
              color: "#fdf4ff",
              border: "#a855f7",
              emoji: "💜",
              steps: [
                "If in immediate danger, call 999.",
                "Call the National Domestic Abuse Helpline (free, 24/7): 0808 2000 247.",
                "Contact Brent's Domestic Abuse Housing Team: 020 8937 2000 (option 3).",
                "Under the Housing Act 1996 s.189(1)(e), domestic abuse victims have automatic priority need for housing.",
                "You do NOT have to return home. The council must arrange suitable accommodation while your case is assessed.",
                "Advance Charity runs a weekly drop-in for survivors: Tuesdays 9:30-12:30. Call 07398 454 898.",
              ],
            },
            {
              title: "If you are in a mental health crisis",
              color: "#f0f9ff",
              border: "#2563eb",
              emoji: "🧠",
              steps: [
                "Call Brent's Single Point of Access (24/7, free): 0800 0234 650. Face-to-face response within 4 hours in emergencies.",
                "Walk into Brent Cove (no appointment needed, aged 16+): Brent Hub, 6 Hillside, NW10 8BN. Open 2pm-10pm every day.",
                "Call Samaritans anytime: 116 123 (free, 24/7).",
                "For under-35s at risk of suicide, call Papyrus: 0800 068 41 41.",
                "For urgent but non-emergency help, call NHS 111.",
                "If life is at risk, call 999.",
              ],
            },
          ].map((scenario, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: scenario.color,
                borderLeft: `5px solid ${scenario.border}`,
                marginBottom: "16px",
              }}
            >
              <strong style={{ fontSize: "1rem" }}>
                {scenario.emoji} {scenario.title}
              </strong>
              <ol style={{ marginTop: "12px", paddingLeft: "20px" }}>
                {scenario.steps.map((step, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: "0.85rem",
                      marginBottom: "8px",
                      lineHeight: "1.6",
                    }}
                  >
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}

      {activeSection === "legalrights" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Know Your Legal Rights</h3>
            <p>Plain English — what the law says Brent Council must do.</p>
          </div>
          {[
            {
              title: "Right to be Assessed (Housing Act 1996, Part 7)",
              body: "If you are homeless or at risk of becoming homeless within 56 days, Brent Council has a legal duty to assess your case. They cannot turn you away without conducting a full assessment. If they try, ask for a written decision so you can appeal.",
            },
            {
              title: "Right to Interim Accommodation",
              body: "If the council has reason to believe you may be homeless, have a priority need, and are not intentionally homeless, they must provide interim accommodation while your full case is assessed. This applies from the moment you present yourself.",
            },
            {
              title: "Priority Need Categories",
              body: "You automatically have priority need if: you have dependent children, you are pregnant, you are vulnerable due to age, disability, or mental illness, you are fleeing domestic abuse (s.189(1)(e)), or you are homeless due to fire, flood, or disaster.",
            },
            {
              title: "Local Connection (6 Month Rule)",
              body: "To establish a local connection with Brent you need to have lived there for 6 of the last 12 months, or 3 of the last 5 years — or have employment or family connections. However, if you are fleeing domestic abuse, local connection rules cannot be used to refer you away if there is a risk to your safety.",
            },
            {
              title: "Right to Request a Review",
              body: "If Brent Council makes a decision you disagree with — such as saying you are not in priority need, or are intentionally homeless — you have 21 days to request a formal review of that decision. Always get decisions in writing.",
            },
            {
              title: "Landlord Harassment and Illegal Eviction",
              body: "It is illegal for a landlord to evict you without a court order. Changing locks, removing belongings, or cutting off utilities are all illegal. Contact the Brent Tenancy Relations Service (BTRS) via 020 8937 2000 (option 1) immediately.",
            },
          ].map((item, i) => (
            <div key={i} className="logic-box" style={{ marginBottom: "12px" }}>
              <strong style={{ color: "var(--accent)" }}>{item.title}</strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeSection === "orgs" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Local Crisis Organisations</h3>
            <p>Brent-based charities and services you can contact directly.</p>
          </div>
          {[
            {
              name: "Crisis Skylight Brent",
              focus:
                "Homelessness support, housing applications, Universal Credit",
              address: "1-2 Bank Buildings, High Street, Harlesden, NW10 4LT",
              hours: "Mon-Fri 10am-4pm. Drop-in: 10am-1pm.",
              num: "0208 965 2561",
              link: "https://www.crisis.org.uk/get-help/brent/",
              urgent: false,
            },
            {
              name: "Brent Cove (Mental Health Crisis Drop-in)",
              focus: "Mental health crisis, no appointment needed, aged 16+",
              address:
                "Brent Hub Community Enterprise Centre, 6 Hillside, NW10 8BN",
              hours: "Daily 2pm-10pm, 365 days a year.",
              num: "Walk-in only",
              link: "https://brentwellbeing.org.uk/wellbeing-services/",
              urgent: true,
            },
            {
              name: "Sufra NW London",
              focus: "Food bank, community kitchen, emergency food support",
              address: "Sufra NW London, Harlesden, NW10",
              hours: "Check website for current hours.",
              num: "020 8961 8566",
              link: "https://www.sufra-nwlondon.org.uk",
              urgent: false,
            },
            {
              name: "Ashford Place",
              focus:
                "Homelessness, mental health, befriending, housing assistance",
              address: "Brent, NW London",
              hours: "Mon-Fri office hours.",
              num: "020 8208 8590",
              link: "https://www.ashfordplace.org.uk",
              urgent: false,
            },
            {
              name: "Advance Charity (Domestic Abuse)",
              focus:
                "Legal, housing and benefits advice for domestic abuse survivors",
              address: "Drop-in every Tuesday 9:30-12:30",
              hours: "Tues 9:30am-12:30pm",
              num: "07398 454 898",
              link: "https://www.advancecharity.org.uk",
              urgent: true,
            },
            {
              name: "Asian Women's Resource Centre",
              focus:
                "Domestic abuse support including women with no recourse to public funds",
              address: "Brent, NW London",
              hours: "Mon-Fri office hours.",
              num: "020 8961 6549",
              link: "https://www.asianwomencentre.org.uk",
              urgent: true,
            },
          ].map((org, i) => (
            <div
              key={i}
              className={`help-card ${org.urgent ? "urgent" : ""}`}
              style={{ marginBottom: "12px" }}
            >
              <strong>{org.name}</strong>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--accent)",
                  marginTop: "4px",
                }}
              >
                {org.focus}
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#64748b",
                  marginTop: "4px",
                }}
              >
                📍 {org.address}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#64748b" }}>
                🕐 {org.hours}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div
                  className="num-row"
                  style={{ flex: 1, marginRight: "10px" }}
                >
                  <code>{org.num}</code>
                </div>
                <a
                  href={org.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--accent)",
                    fontWeight: "600",
                  }}
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeSection === "dangeroushousing" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Dangerous Housing Report</h3>
            <p>
              Your landlord has legal obligations. Here is how to enforce them.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              borderLeft: "5px solid #ef4444",
              background: "#fef2f2",
              marginBottom: "16px",
            }}
          >
            <strong>Report a Repair or Dangerous Condition</strong>
            <p style={{ fontSize: "0.85rem", marginTop: "8px" }}>
              Log in to MyAccount on brent.gov.uk or call{" "}
              <strong>020 8937 2000</strong> to report repairs. For dangerous
              conditions like severe damp, mould, no heating, or pest
              infestation — you can request a formal Housing Health and Safety
              Rating System (HHSRS) inspection.
            </p>

            <a
              href="https://www.brent.gov.uk/report-it"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                background: "#ef4444",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Report It on Brent.gov.uk
            </a>
          </div>

          {[
            {
              title: "Damp and Mould",
              body: "Your landlord must fix damp and mould under the Homes (Fitness for Human Habitation) Act 2018. Report it in writing first, then escalate to Brent Council's Private Sector Housing team if not resolved within a reasonable time.",
            },
            {
              title: "No Heating or Hot Water",
              body: "A landlord must provide a working heating system. If you have no heating in winter, this is an emergency repair. Contact your landlord in writing immediately, keep records, and report to Brent Council if not fixed within 24 hours.",
            },
            {
              title: "Pest Infestation",
              body: "Rats, mice, cockroaches or bedbugs are the landlord's responsibility to deal with. Report to Brent Council Environmental Health team via brent.gov.uk or call 020 8937 1234.",
            },
            {
              title: "Illegal Eviction or Lockout",
              body: "If your landlord has changed the locks, removed your belongings, or cut off utilities to force you out — this is a criminal offence. Call the Brent Tenancy Relations Service immediately on 020 8937 2000 (option 1) or call the police.",
            },
            {
              title: "Overcrowding",
              body: "If your home is statutorily overcrowded under the Housing Act 1985, you may be entitled to be rehoused as a priority. Contact Brent Housing Options on 020 8937 2000 and explain your situation.",
            },
          ].map((item, i) => (
            <div key={i} className="logic-box" style={{ marginBottom: "12px" }}>
              <strong style={{ color: "var(--accent)" }}>
                ⚠️ {item.title}
              </strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function BrentMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const locations = [
    // Libraries
    {
      name: "Willesden Green Library",
      lat: 51.5497,
      lng: -0.2254,
      category: "library",
      emoji: "📚",
      note: "Main borough library — digital skills, large community hall",
      address: "95 High Road, NW10 2SF",
    },
    {
      name: "Wembley Library",
      lat: 51.5928,
      lng: -0.2974,
      category: "library",
      emoji: "📚",
      note: "Inside the Civic Centre, co-located with council services",
      address: "Civic Centre, HA9 0FJ",
    },
    {
      name: "Harlesden Library",
      lat: 51.536,
      lng: -0.2568,
      category: "library",
      emoji: "📚",
      note: "ESOL classes and children's reading programmes",
      address: "Craven Park Road, NW10 8SE",
    },
    {
      name: "Kingsbury Library",
      lat: 51.5839,
      lng: -0.2791,
      category: "library",
      emoji: "📚",
      note: "Quiet study space and local heritage collections",
      address: "Kingsbury Road, NW9 8UF",
    },
    // Community Centres
    {
      name: "Stonebridge Community Hub",
      lat: 51.5443,
      lng: -0.2711,
      category: "community",
      emoji: "🏢",
      note: "Brent Cove walk-in mental health, Sufra food bank nearby",
      address: "Hillside, NW10 8TU",
    },
    {
      name: "Granville Centre",
      lat: 51.5467,
      lng: -0.2003,
      category: "community",
      emoji: "🏢",
      note: "South Kilburn hub with meeting rooms and advice services",
      address: "Granville Road, NW6 5JY",
    },
    {
      name: "Harlesden Community Centre",
      lat: 51.5358,
      lng: -0.258,
      category: "community",
      emoji: "🏢",
      note: "Youth programmes, adult education, and local group space",
      address: "Acton Lane, NW10 7AF",
    },
    {
      name: "Chalkhill Community Centre",
      lat: 51.5712,
      lng: -0.2995,
      category: "community",
      emoji: "🏢",
      note: "Wembley area hub with estate support services",
      address: "Chalkhill Road, HA9 9FX",
    },
    // Parks
    {
      name: "Fryent Country Park",
      lat: 51.5872,
      lng: -0.2742,
      category: "park",
      emoji: "🌳",
      note: "254 acres — ancient hay meadows, walking trails, free events",
      address: "Fryent Way, NW9",
    },
    {
      name: "Barham Park",
      lat: 51.5643,
      lng: -0.3021,
      category: "park",
      emoji: "🌳",
      note: "Historic mansion park — community library, cafe, events space",
      address: "Harrow Road, HA0 2HB",
    },
    {
      name: "Roundwood Park",
      lat: 51.5448,
      lng: -0.2468,
      category: "park",
      emoji: "🌳",
      note: "Harlesden's main park — bandstand, playground, summer events",
      address: "Roundwood Road, NW10 9UD",
    },
    {
      name: "Gladstone Park",
      lat: 51.5618,
      lng: -0.2358,
      category: "park",
      emoji: "🌳",
      note: "100 acres — walled garden, free summer concerts",
      address: "Dollis Hill Lane, NW2 6RH",
    },
    // Health
    {
      name: "Central Middlesex UTC",
      lat: 51.5323,
      lng: -0.2677,
      category: "health",
      emoji: "🏥",
      note: "Urgent Treatment Centre — 8am to midnight, no appointment",
      address: "Acton Lane, NW10 7NS",
    },
    {
      name: "Northwick Park UTC + A&E",
      lat: 51.5783,
      lng: -0.3349,
      category: "health",
      emoji: "🏥",
      note: "24hr — only full A&E serving Brent — 020 8864 3232",
      address: "Watford Road, Harrow HA1 3UJ",
    },
    {
      name: "Brent Cove Walk-In",
      lat: 51.5441,
      lng: -0.2714,
      category: "health",
      emoji: "🧠",
      note: "Mental health walk-in — 2pm-10pm daily, no appointment, 16+",
      address: "6 Hillside, NW10 8BN",
    },
    // Food
    {
      name: "Sufra NW London",
      lat: 51.5421,
      lng: -0.2732,
      category: "food",
      emoji: "🍛",
      note: "Food bank, community kitchen — no referral needed. Mon-Fri.",
      address: "160 Pitfield Way, NW10 0PW",
    },
    // Faith
    {
      name: "Neasden Temple",
      lat: 51.5528,
      lng: -0.2502,
      category: "faith",
      emoji: "🛕",
      note: "BAPS Swaminarayan Mandir — one of Europe's largest Hindu temples. Free entry.",
      address: "105 Brentfield Road, NW10 8LD",
    },
  ];

  const categoryColors = {
    library: "#a855f7",
    community: "#22c55e",
    park: "#84cc16",
    health: "#3b82f6",
    food: "#f97316",
    faith: "#eab308",
  };

  useEffect(() => {
    if (mapInstanceRef.current) return;
    if (!window.L) return;

    const L = window.L;
    const map = L.map(mapRef.current, {
      center: [51.557, -0.2795],
      zoom: 12,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    locations.forEach((loc) => {
      const color = categoryColors[loc.category] || "#64748b";
      const icon = L.divIcon({
        className: "",
        html: `<div style="
          background: ${color};
          width: 34px;
          height: 34px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        "><span style="transform: rotate(45deg); font-size: 15px; line-height: 1;">${loc.emoji}</span></div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 34],
        popupAnchor: [0, -38],
      });

      L.marker([loc.lat, loc.lng], { icon })
        .addTo(map)
        .bindPopup(
          `
          <div style="font-family: system-ui, sans-serif; min-width: 190px; padding: 2px;">
            <strong style="font-size: 0.88rem; display: block; margin-bottom: 4px;">${loc.emoji} ${loc.name}</strong>
            <p style="font-size: 0.76rem; color: #64748b; margin: 0 0 3px 0;">📍 ${loc.address}</p>
            <p style="font-size: 0.76rem; color: #475569; margin: 0; font-style: italic;">${loc.note}</p>
          </div>
        `,
          { maxWidth: 240 },
        );
    });

    mapInstanceRef.current = map;
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "12px",
        border: "1px solid var(--border)",
        overflow: "hidden",
        zIndex: 0,
      }}
    />
  );
}

function HubView() {
  const [activeSection, setActiveSection] = useState("whatson");

  const sections = [
    { id: "whatson", label: "What's On" },
    { id: "groups", label: "Community Groups" },
    { id: "faith", label: "Faith & Worship" },
    { id: "news", label: "Local News" },
    { id: "map", label: "The Map" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="view-wrapper"
    >
      <div className="hero-card">
        <h1>
          The <span className="accent-text">Hub.</span>
        </h1>
        <p>
          Brent's community in one place — 130+ languages, 428 organisations,
          one borough.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              border: "1px solid var(--border)",
              background: activeSection === s.id ? "var(--accent)" : "white",
              color: activeSection === s.id ? "white" : "#64748b",
              fontSize: "0.8rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {activeSection === "whatson" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>What's On in Brent</h3>
            <p>
              Free and low-cost events, activities, and council meetings across
              the borough.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#f0f9ff",
              borderLeft: "5px solid #3b82f6",
              marginBottom: "16px",
            }}
          >
            <strong>Did you know?</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "6px",
                lineHeight: "1.6",
              }}
            >
              Brent Council runs over 119 community health and wellbeing events
              per year, reaching 4,200+ residents. Most are free and open to
              all.
            </p>
          </div>

          {[
            {
              emoji: "🏛️",
              title: "Brent Council Public Meetings",
              type: "Democracy",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "Full Council, Cabinet, and scrutiny committee meetings are open to the public. You can attend in person, watch the live stream, or submit questions in advance. Agenda papers are published 5 days before each meeting.",
              link: {
                label: "View Meeting Calendar",
                url: "https://democracy.brent.gov.uk/ieDocHome.aspx",
              },
            },
            {
              emoji: "🌳",
              title: "Free Activities in Brent Parks",
              type: "Outdoors",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "Brent has 150+ parks and open spaces. Fryent Country Park, Barham Park, and Roundwood Park run free seasonal events including nature walks, outdoor fitness sessions, and children's activities.",
              link: {
                label: "Brent Parks Events",
                url: "https://www.brent.gov.uk/parks-and-open-spaces",
              },
            },
            {
              emoji: "📚",
              title: "Free Library Events",
              type: "Learning",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "All 8 Brent libraries run free events including Rhyme Time for under-5s, adult reading groups, digital skills sessions, and English conversation classes. No library card needed to attend events — though getting one is also free.",
              link: {
                label: "Library Events Calendar",
                url: "https://www.brent.gov.uk/libraries",
              },
            },
            {
              emoji: "🎭",
              title: "Kiln Theatre — Kilburn",
              type: "Arts & Culture",
              color: "#fffbeb",
              border: "#eab308",
              body: "The Kiln Theatre in Kilburn is one of London's leading civic theatres, with a strong commitment to Brent communities. Pay-what-you-can tickets, free community screenings, and youth theatre programmes.",
              link: {
                label: "Kiln Theatre Programme",
                url: "https://www.kilntheatre.com",
              },
            },
            {
              emoji: "🍽️",
              title: "Community Meals — Sufra NW London",
              type: "Food & Community",
              color: "#fff7ed",
              border: "#f97316",
              body: "Sufra runs a weekly community kitchen at their Stonebridge Hub offering free hot meals and food parcels to anyone in need. No referral required. They also run cooking classes, a community garden, and a food bank open 5 days a week.",
              link: {
                label: "Sufra NW London",
                url: "https://www.sufra-nwlondon.org.uk",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <strong style={{ fontSize: "0.95rem" }}>
                  {item.emoji} {item.title}
                </strong>
                <span
                  style={{
                    fontSize: "0.72rem",
                    background: item.border,
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    fontWeight: "600",
                    flexShrink: 0,
                    marginLeft: "8px",
                  }}
                >
                  {item.type}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "groups" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Community Groups</h3>
            <p>
              428 community organisations call Brent home. Here are the ones you
              should know.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#f0fdf4",
              borderLeft: "5px solid #22c55e",
              marginBottom: "16px",
            }}
          >
            <strong>Did you know?</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "6px",
                lineHeight: "1.6",
              }}
            >
              Brent has one of the highest densities of grassroots community
              organisations in London — over 428 groups serving a population of
              340,000. Many are unfunded and rely entirely on volunteers.
            </p>
          </div>

          {[
            {
              emoji: "👩‍👧",
              title: "Brent Women's Centre",
              area: "Harlesden",
              who: "Women & families",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "Support, training, and safe space for women across Brent. Runs ESOL classes, employability support, domestic abuse advocacy, and children's activities. Located in Harlesden with outreach across the borough.",
              link: {
                label: "Brent Women's Centre",
                url: "https://www.brentwomenscentre.org",
              },
            },
            {
              emoji: "🧓",
              title: "Age UK Brent",
              area: "Borough-wide",
              who: "Over 60s",
              color: "#fffbeb",
              border: "#eab308",
              body: "Free information, advice, and befriending services for older residents. Runs day centres, telephone befriending, benefit checks, and help navigating health services. No referral needed — anyone can call.",
              phone: "020 8904 1700",
              link: {
                label: "Age UK Brent",
                url: "https://www.ageuk.org.uk/brent",
              },
            },
            {
              emoji: "🌍",
              title: "Brent African Caribbean Association",
              area: "Stonebridge / Harlesden",
              who: "African & Caribbean communities",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "Cultural support, welfare advice, and community events serving Brent's African and Caribbean communities for over 30 years. Runs youth mentoring, elderly support, and advocacy services.",
              link: {
                label: "Contact via Brent Council",
                url: "https://www.brent.gov.uk/community",
              },
            },
            {
              emoji: "🧒",
              title: "Brent Play Association",
              area: "Borough-wide",
              who: "Children & young people",
              color: "#f0f9ff",
              border: "#3b82f6",
              body: "Runs adventure playgrounds, holiday play schemes, and after-school clubs across Brent. Most programmes are free or low-cost. Priority given to children in deprived areas. Open during school holidays.",
              link: {
                label: "Brent Play Association",
                url: "https://www.brentplay.org.uk",
              },
            },
            {
              emoji: "🤝",
              title: "Volunteer Brent",
              area: "Borough-wide",
              who: "Anyone wanting to volunteer",
              color: "#fff7ed",
              border: "#f97316",
              body: "Connects Brent residents with volunteering opportunities across the borough. From one-off events to regular commitments — mentoring, food banks, befriending, sports coaching. No experience needed for most roles.",
              link: {
                label: "Find Volunteering Opportunities",
                url: "https://www.brent.gov.uk/volunteering",
              },
            },
            {
              emoji: "🍛",
              title: "Sufra NW London",
              area: "Stonebridge",
              who: "Anyone facing food insecurity",
              color: "#fef2f2",
              border: "#ef4444",
              body: "Food bank, community kitchen, community garden, and employability support. Served over 5,000 people in 2023. No referral required for the food bank. Located at 160 Pitfield Way, NW10 0PW.",
              phone: "020 3441 1335",
              link: {
                label: "Sufra NW London",
                url: "https://www.sufra-nwlondon.org.uk",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "6px",
                }}
              >
                <strong style={{ fontSize: "0.95rem" }}>
                  {item.emoji} {item.title}
                </strong>
                <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      background: "#f1f5f9",
                      color: "#64748b",
                      padding: "2px 8px",
                      borderRadius: "10px",
                      fontWeight: "600",
                    }}
                  >
                    {item.area}
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      background: item.border,
                      color: "white",
                      padding: "2px 8px",
                      borderRadius: "10px",
                      fontWeight: "600",
                    }}
                  >
                    {item.who}
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.phone && (
                <p style={{ fontSize: "0.82rem", marginTop: "6px" }}>
                  <span style={{ color: "#64748b" }}>Phone: </span>
                  <code style={{ fontWeight: "600" }}>{item.phone}</code>
                </p>
              )}
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "faith" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Faith and Worship</h3>
            <p>
              Brent is one of the most religiously diverse boroughs in England —
              over 50 faiths represented.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fdf4ff",
              borderLeft: "5px solid #a855f7",
              marginBottom: "16px",
            }}
          >
            <strong>Did you know?</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "6px",
                lineHeight: "1.6",
              }}
            >
              Brent has more places of worship per square mile than almost any
              borough in London. Faith organisations provide not just spiritual
              community but some of the borough's most vital welfare, food, and
              social support services.
            </p>
          </div>

          {[
            {
              emoji: "🕌",
              faith: "Islam",
              title: "Brent Mosque (Harlesden)",
              address: "Craven Park Road, Harlesden NW10 8SE",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "One of the largest mosques in Brent, serving the borough's Muslim community with daily prayers, Friday Jumu'ah, Quran classes, and community welfare support including food distributions during Ramadan. Open to visitors.",
              link: {
                label: "Find Mosques in Brent",
                url: "https://www.mosquefinder.co.uk/boroughs/brent",
              },
            },
            {
              emoji: "⛪",
              faith: "Christianity",
              title: "Brent Council of Churches",
              address: "Borough-wide",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "Brent has over 100 Christian congregations spanning Anglican, Catholic, Pentecostal, Baptist, and many other traditions. Many run food banks, night shelters, mother and toddler groups, and debt advice.",
              link: {
                label: "Find Churches in Brent",
                url: "https://achurchnearyou.com",
              },
            },
            {
              emoji: "🛕",
              faith: "Hinduism",
              title: "Neasden Temple (BAPS Swaminarayan)",
              address: "105-119 Brentfield Road, NW10 8LD",
              color: "#fff7ed",
              border: "#f97316",
              body: "One of the largest Hindu temples outside India, just on the Brent boundary. Open to all visitors. Hosts major Hindu festivals, cultural events, and community welfare programmes. Free entry.",
              link: {
                label: "Neasden Temple",
                url: "https://londonmandir.baps.org",
              },
            },
            {
              emoji: "✡️",
              faith: "Judaism",
              title: "Brent Jewish Community",
              address: "Willesden, Wembley",
              color: "#f0f9ff",
              border: "#6366f1",
              body: "Brent has a well-established Jewish community particularly in Willesden and Wembley, with Orthodox, Reform, and Liberal synagogues. The Board of Deputies of British Jews can help connect residents with local organisations and welfare support.",
              link: {
                label: "Jewish Community Support",
                url: "https://www.bod.org.uk",
              },
            },
            {
              emoji: "🪯",
              faith: "Sikhism",
              title: "Gurdwara Sri Guru Singh Sabha",
              address: "Havelock Road, Southall UB2 4NP (serves Brent)",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "The largest Gurdwara in Europe, with a catchment covering much of Brent. Free langar (community meals) served 365 days a year to anyone regardless of faith or background.",
              link: {
                label: "Gurdwara Sri Guru Singh Sabha",
                url: "https://www.sgsss.org",
              },
            },
            {
              emoji: "🌙",
              faith: "Multi-faith",
              title: "Brent Multi-Faith Forum",
              address: "Borough-wide",
              color: "#fef2f2",
              border: "#ef4444",
              body: "Brings together faith leaders from all traditions for dialogue, community cohesion work, and joint action on social issues. Coordinates faith responses to community crises and runs interfaith events throughout the year.",
              link: {
                label: "Faith in Brent",
                url: "https://www.brent.gov.uk/community/faith-in-brent",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "6px",
                }}
              >
                <strong style={{ fontSize: "0.95rem" }}>
                  {item.emoji} {item.title}
                </strong>
                <span
                  style={{
                    fontSize: "0.72rem",
                    background: item.border,
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    fontWeight: "600",
                    flexShrink: 0,
                  }}
                >
                  {item.faith}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#64748b",
                  marginTop: "4px",
                }}
              >
                📍 {item.address}
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "6px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "news" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Local News</h3>
            <p>
              The most trusted sources for what is happening in Brent right now.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fffbeb",
              borderLeft: "5px solid #eab308",
              marginBottom: "16px",
            }}
          >
            <strong>Why local news matters</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "6px",
                lineHeight: "1.6",
              }}
            >
              Brent has lost several local papers over the past decade. The
              sources below are the ones that still cover Brent consistently —
              holding the council to account and reporting on community stories
              that national media ignores.
            </p>
          </div>

          {[
            {
              emoji: "📰",
              title: "Brent & Kilburn Times",
              type: "Local newspaper",
              color: "#fef2f2",
              border: "#ef4444",
              body: "The main local newspaper covering Brent, reporting on council decisions, crime, planning, education, and community news. Published online with a weekly print edition. Covers all wards across the borough.",
              link: {
                label: "Read Brent & Kilburn Times",
                url: "https://www.brentankilburntimes.co.uk",
              },
            },
            {
              emoji: "🏛️",
              title: "Brent Council Newsroom",
              type: "Official press releases",
              color: "#f0f9ff",
              border: "#3b82f6",
              body: "Official press releases, consultations, and announcements from Brent Council. The best place to find out about new policies, planning applications, budget decisions, and service changes before they appear in the press.",
              link: {
                label: "Brent Council Newsroom",
                url: "https://www.brent.gov.uk/your-community/media-newsroom",
              },
            },
            {
              emoji: "🗳️",
              title: "My London — Brent Coverage",
              type: "Regional news",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "My London provides strong Brent coverage alongside wider London news. Good for stories connecting Brent issues to the broader London context — housing, transport, and politics.",
              link: {
                label: "My London Brent News",
                url: "https://www.mylondon.news/all-about/brent",
              },
            },
            {
              emoji: "📻",
              title: "BBC London — Brent",
              type: "Broadcast news",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "BBC London covers significant Brent stories across TV, radio, and online. BBC Radio London (94.9 FM) covers borough-level issues in its morning programmes.",
              link: {
                label: "BBC London Local News",
                url: "https://www.bbc.co.uk/news/england/london",
              },
            },
            {
              emoji: "📧",
              title: "Brent Council E-Newsletter",
              type: "Direct from the council",
              color: "#fffbeb",
              border: "#eab308",
              body: "Free email newsletter sent directly by Brent Council with updates on services, consultations, events, and community news. You choose which topics you want to hear about.",
              link: {
                label: "Subscribe to Brent Updates",
                url: "https://public.govdelivery.com/accounts/UKBRENT/subscriber/new",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <strong style={{ fontSize: "0.95rem" }}>
                  {item.emoji} {item.title}
                </strong>
                <span
                  style={{
                    fontSize: "0.72rem",
                    background: item.border,
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    fontWeight: "600",
                    flexShrink: 0,
                    marginLeft: "8px",
                  }}
                >
                  {item.type}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "map" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>The Map</h3>
            <p>Tap any pin to see details. Colour-coded by type.</p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "14px",
            }}
          >
            {[
              { color: "#a855f7", label: "📚 Library" },
              { color: "#22c55e", label: "🏢 Community" },
              { color: "#84cc16", label: "🌳 Park" },
              { color: "#3b82f6", label: "🏥 Health" },
              { color: "#f97316", label: "🍛 Food" },
              { color: "#eab308", label: "🛕 Faith" },
            ].map((item, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.75rem",
                  background: item.color,
                  color: "white",
                  padding: "3px 10px",
                  borderRadius: "12px",
                  fontWeight: "600",
                }}
              >
                {item.label}
              </span>
            ))}
          </div>

          <BrentMap />

          <p
            style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: "8px" }}
          >
            Scroll to zoom. Tap any pin for name, address, and notes.
          </p>
        </div>
      )}
    </motion.div>
  );
}

function RightsChecker() {
  const [step, setStep] = useState(0);
  const [eligible, setEligible] = useState(null);
  const questions = [
    "Homeless within 56 days?",
    "Local connection (6mo+)?",
    "Priority need?",
  ];
  const handle = (yes) => {
    if (!yes && step === 0) setEligible(false);
    else if (step < 2) setStep(step + 1);
    else setEligible(true);
  };
  return (
    <div className="logic-box">
      {eligible === null ? (
        <div className="checker">
          <span>Step {step + 1}/3</span>
          <h4>{questions[step]}</h4>
          <div className="checker-actions">
            <button onClick={() => handle(true)}>Yes</button>
            <button onClick={() => handle(false)}>No</button>
          </div>
        </div>
      ) : (
        <div className="result">
          {eligible ? "Legal Duty Likely Found" : "Right to advice only."}{" "}
          <button
            onClick={() => {
              setStep(0);
              setEligible(null);
            }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

function SupportFinder() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);

  const getAnswer = (q) => {
    const input = q.toLowerCase();

    if (
      input.includes("homeless") ||
      input.includes("housing") ||
      input.includes("evict")
    ) {
      return "Contact Brent's Homelessness Team on 020 8937 2000. You have a legal right to be assessed. Visit brent.gov.uk/housing for emergency housing support and to check your eligibility.";
    }
    if (
      input.includes("council tax") ||
      input.includes("tax support") ||
      input.includes("tax reduction")
    ) {
      return "If you're struggling with Council Tax, you may qualify for the Council Tax Support scheme. Visit brent.gov.uk/council-tax or call 020 8937 1234 to check your eligibility.";
    }
    if (
      input.includes("benefit") ||
      input.includes("universal credit") ||
      input.includes("financial help") ||
      input.includes("money")
    ) {
      return "Brent offers several financial support options including the Resident Support Fund. Visit brent.gov.uk/benefits-and-money-advice or call 020 8937 1234 for guidance.";
    }
    if (
      input.includes("job") ||
      input.includes("employ") ||
      input.includes("work") ||
      input.includes("volunteer")
    ) {
      return "Brent has local job and volunteering opportunities. Visit brent.gov.uk/jobs-training-and-skills or check our Employment tab for roles at Brent Council, Sufra NW London and more.";
    }
    if (
      input.includes("gp") ||
      input.includes("doctor") ||
      input.includes("health") ||
      input.includes("nhs")
    ) {
      return "Everyone in Brent has the right to register with a GP regardless of immigration status. Find your nearest GP at nhs.uk/service-search/find-a-gp or call NHS 111 for urgent advice.";
    }
    if (
      input.includes("mental health") ||
      input.includes("anxiety") ||
      input.includes("depression") ||
      input.includes("therapy")
    ) {
      return "Brent Talking Therapies offers free NHS support for anxiety and depression. You can self-refer without a GP referral. Contact your GP or visit brent.gov.uk/health for more info.";
    }
    if (
      input.includes("fly tip") ||
      input.includes("rubbish") ||
      input.includes("litter") ||
      input.includes("dump") ||
      input.includes("waste") ||
      input.includes("bin")
    ) {
      return "Report fly-tipping or missed bin collections at brent.gov.uk/report-it or call 020 8937 1234. Brent's Don't Mess with Brent campaign actively tracks and prosecutes illegal dumping.";
    }
    if (
      input.includes("repair") ||
      input.includes("damp") ||
      input.includes("mould") ||
      input.includes("dangerous") ||
      input.includes("unsafe")
    ) {
      return "Report a housing repair via MyAccount at brent.gov.uk or call 020 8937 2000. For dangerous conditions, you can request a formal Housing Health & Safety Rating System inspection.";
    }
    if (
      input.includes("child") ||
      input.includes("school") ||
      input.includes("education") ||
      input.includes("send") ||
      input.includes("safeguard")
    ) {
      return "For children's services, SEND support or school queries contact Brent on 020 8937 1234 or visit brent.gov.uk/children-and-young-people for the full range of support available.";
    }
    if (
      input.includes("youth") ||
      input.includes("young people") ||
      input.includes("teen") ||
      input.includes("stop and search")
    ) {
      return "Young Brent Foundation supports young people across the borough. For stop and search rights, you must be told the officer's name and legal grounds. Visit our Youth & Rights tab for more.";
    }
    if (
      input.includes("library") ||
      input.includes("willesden") ||
      input.includes("internet") ||
      input.includes("device") ||
      input.includes("computer")
    ) {
      return "Willesden Green Library offers free internet access and device support. Visit brent.gov.uk/libraries to find your nearest library and opening hours.";
    }
    if (
      input.includes("food") ||
      input.includes("food bank") ||
      input.includes("hungry") ||
      input.includes("eat")
    ) {
      return "Sufra NW London in Harlesden provides a food bank and community kitchen. Visit sufra-nwlondon.org.uk or call them to access emergency food support in Brent.";
    }
    if (
      input.includes("isolation") ||
      input.includes("lonely") ||
      input.includes("alone") ||
      input.includes("community")
    ) {
      return "Brent has community hubs to tackle isolation. Visit Gladstone Park Hub or Sufra NW London at NW10. Check our Hub tab for locations and opening times across the borough.";
    }
    if (
      input.includes("domestic") ||
      input.includes("abuse") ||
      input.includes("violence") ||
      input.includes("safe")
    ) {
      return "If you are in immediate danger call 999. For domestic abuse support in Brent call the 24hr National Domestic Abuse Helpline on 0808 2000 247. Brent Council can also provide emergency housing.";
    }
    if (
      input.includes("disability") ||
      input.includes("disabled") ||
      input.includes("wheelchair") ||
      input.includes("access")
    ) {
      return "Brent offers a range of disability support services. Contact 020 8937 1234 or visit brent.gov.uk/contact for accessibility support, blue badge applications and care assessments.";
    }

    return "For general Brent Council enquiries call 020 8937 1234 or visit brent.gov.uk. You can also explore the tabs on this platform for housing, health, employment, youth support and more.";
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    setResponse(getAnswer(query));
  };

  return (
    <div className="logic-box financial" style={{ marginBottom: "20px" }}>
      <h4 style={{ marginBottom: "10px" }}> Support Finder</h4>
      <p
        style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "12px" }}
      >
        Ask anything about Brent services — housing, benefits, health, jobs and
        more.
      </p>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="e.g. How do I apply for council housing?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          style={{
            flex: 1,
            minWidth: "200px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid var(--border)",
            fontSize: "0.9rem",
          }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: "10px 18px", whiteSpace: "nowrap" }}
        >
          Ask
        </button>
      </div>
      {response && (
        <div
          style={{
            marginTop: "14px",
            padding: "14px",
            background: "#f0f9ff",
            borderRadius: "8px",
            border: "1px solid #bae6fd",
            fontSize: "0.88rem",
            lineHeight: "1.6",
            color: "#0f172a",
          }}
        >
          {response}
        </div>
      )}
    </div>
  );
}

function DigitalAccess() {
  return (
    <div className="logic-box digital">
      <h4 style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <Globe size={16} /> Digital Access
      </h4>
      <p style={{ margin: "8px 0" }}>
        Need internet or device help? Visit{" "}
        <a
          href="https://www.brent.gov.uk/libraries-arts-and-heritage/libraries"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--accent)", fontWeight: "600" }}
        >
          Brent Libraries →
        </a>
      </p>
    </div>
  );
}

function HelplineCard({ title, desc, num, urgent }) {
  return (
    <div className={`help-card ${urgent ? "urgent" : ""}`}>
      <strong>{title}</strong>
      <p style={{ fontSize: "0.8rem", color: "#64748b" }}>{desc}</p>
      <div className="num-row">
        <code>{num}</code>
      </div>
    </div>
  );
}

function EmploymentView() {
  const [activeSection, setActiveSection] = useState("findwork");

  const sections = [
    { id: "findwork", label: "Find Work" },
    { id: "training", label: "Free Training" },
    { id: "benefits", label: "Benefits & Support" },
    { id: "business", label: "Start a Business" },
    { id: "picture", label: "The Brent Picture" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="view-wrapper"
    >
      <div className="hero-card">
        <h1>
          Employment <span className="accent-text">Brent.</span>
        </h1>
        <p>
          Free training, job search tools, business support — everything Brent
          residents can access.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              border: "1px solid var(--border)",
              background: activeSection === s.id ? "var(--accent)" : "white",
              color: activeSection === s.id ? "white" : "#64748b",
              fontSize: "0.8rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {activeSection === "findwork" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Find Work in Brent</h3>
            <p>
              The best free job search tools for Brent residents — and how to
              use them.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#f0fdf4",
              borderLeft: "5px solid #22c55e",
              marginBottom: "16px",
            }}
          >
            <strong>Brent Works — Free Employment Support</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Brent Works is the council's free employment programme. A
              dedicated adviser will help you update your CV, prepare for
              interviews, and connect you directly with local employers. No
              referral needed — any Brent resident can self-refer.
            </p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://www.brent.gov.uk/brent-works"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#16a34a",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Register with Brent Works
              </a>
              <a
                href="tel:02089376739"
                style={{
                  background: "white",
                  color: "#16a34a",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  textDecoration: "none",
                  border: "1px solid #16a34a",
                }}
              >
                020 8937 6739
              </a>
            </div>
          </div>

          {[
            {
              emoji: "🏛️",
              title: "Brent Council Jobs",
              type: "Local government",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "Brent Council is one of the largest local employers in the borough. All vacancies — from administrative roles to social work, engineering, and senior management — are posted directly on their jobs portal. Many roles offer flexible working and the London Living Wage as a minimum.",
              link: {
                label: "View Brent Council Vacancies",
                url: "https://jobs.brent.gov.uk",
              },
            },
            {
              emoji: "🏥",
              title: "NHS Jobs — North West London",
              type: "Healthcare",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "The NHS is one of the biggest employers in Brent. Roles range from healthcare assistants and porters (no qualifications required) to nurses, doctors, and administrators. NHS jobs offer good pension schemes, training, and career progression. Filter by NW London postcode to find local roles.",
              link: {
                label: "NHS Jobs NW London",
                url: "https://www.jobs.nhs.uk",
              },
            },
            {
              emoji: "🏗️",
              title: "Wembley Park Construction & Regeneration",
              type: "Construction & trades",
              color: "#fff7ed",
              border: "#f97316",
              body: "Wembley Park is one of the largest regeneration projects in London, with construction ongoing through the late 2020s. Quintain and their contractors actively recruit local Brent residents — including apprentices and people without prior construction experience. The Brent Works team can connect you with these employers directly.",
              link: {
                label: "Wembley Park Development Jobs",
                url: "https://www.wembleypark.com/careers",
              },
            },
            {
              emoji: "🔍",
              title: "Indeed & Reed — Filter for Brent",
              type: "General job boards",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "For broader job searching, Indeed and Reed both allow you to filter by location and distance from your postcode. Set radius to 5 miles from your Brent postcode to see all local opportunities. Reed also has a free CV builder tool and will alert you to new matching jobs by email.",
              link: {
                label: "Search Jobs on Indeed",
                url: "https://www.indeed.co.uk",
              },
            },
            {
              emoji: "💼",
              title: "DWP Job Centre — Brent",
              type: "Government job support",
              color: "#fef2f2",
              border: "#ef4444",
              body: "If you are claiming Universal Credit, your work coach at the job centre can help you find work, fund training, and connect you with employers. You can also use job centre computers and printers for free. Brent's main job centre is in Harlesden. You do not need to be claiming benefits to use the self-service job search terminals.",
              note: "Harlesden Job Centre: 60 Manor Park Road, NW10 4JN",
              link: {
                label: "Find Your Nearest Job Centre",
                url: "https://www.gov.uk/contact-jobcentre-plus",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <strong style={{ fontSize: "0.95rem" }}>
                  {item.emoji} {item.title}
                </strong>
                <span
                  style={{
                    fontSize: "0.72rem",
                    background: item.border,
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    fontWeight: "600",
                    flexShrink: 0,
                    marginLeft: "8px",
                  }}
                >
                  {item.type}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.note && (
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#64748b",
                    marginTop: "6px",
                    fontStyle: "italic",
                  }}
                >
                  📍 {item.note}
                </p>
              )}
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "training" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Free Training in Brent</h3>
            <p>
              Most residents don't know these fully funded courses exist. Here
              is what you can access for free.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong>Who qualifies for free courses?</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Under the Adult Education Budget (AEB), courses are completely
              free if you are: on Universal Credit, JSA, ESA, or Income Support;
              earning under £25,000 per year; or have no qualifications at Level
              3 (A-level equivalent) or above. Part-funded places are available
              for others. You do not need to be unemployed.
            </p>
          </div>

          {[
            {
              emoji: "🎓",
              title: "Brent Adult Education Service",
              type: "Free / subsidised",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "Brent Council runs its own adult education service offering hundreds of courses — from maths and English (GCSE and functional skills), ESOL, IT, childcare, health and social care, to business and creative arts. Many courses run in the evenings and on weekends. Fully funded for eligible residents.",
              link: {
                label: "Brent Adult Education",
                url: "https://www.brent.gov.uk/adult-education",
              },
            },
            {
              emoji: "💻",
              title: "Free Digital Skills — Libraries",
              type: "Free",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "All 8 Brent libraries offer free digital skills sessions covering smartphones, email, online banking, job applications, and video calls. Willesden Green Library has dedicated digital champions who offer one-to-one support by appointment. No experience needed — these sessions are designed for complete beginners.",
              link: {
                label: "Brent Library Digital Skills",
                url: "https://www.brent.gov.uk/libraries/digital-skills",
              },
            },
            {
              emoji: "🔧",
              title: "Skills Bootcamps",
              type: "Free — 12-16 weeks",
              color: "#fff7ed",
              border: "#f97316",
              body: "Government-funded Skills Bootcamps offer intensive free training in high-demand sectors: digital and tech, construction, logistics and HGV driving, healthcare, and green skills. Courses run 12-16 weeks and include a guaranteed job interview with an employer at the end. Open to anyone over 19 not in full-time education.",
              link: {
                label: "Find a Skills Bootcamp",
                url: "https://www.gov.uk/find-a-skills-bootcamp",
              },
            },
            {
              emoji: "📋",
              title: "Free Level 3 Qualification",
              type: "Free — 1 year",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "If you are 19 or over and do not already have a Level 3 qualification (A-levels or equivalent), you are entitled to a fully funded Level 3 course under the Free Courses for Jobs scheme. This includes qualifications in accounting, IT, healthcare, childcare, construction, and more. Study part-time alongside work.",
              link: {
                label: "Free Courses for Jobs",
                url: "https://www.gov.uk/government/publications/free-courses-for-jobs",
              },
            },
            {
              emoji: "🗣️",
              title: "ESOL — English for Speakers of Other Languages",
              type: "Free for eligible residents",
              color: "#f0fdf4",
              border: "#16a34a",
              body: "ESOL classes are available across Brent at beginner through to advanced level — mornings, evenings, and online. Fully funded for residents on benefits or low income. Improving English significantly increases employment prospects and earning potential. Brent Adult Education, College of North West London, and community organisations all offer ESOL.",
              link: {
                label: "Find ESOL Classes in Brent",
                url: "https://www.brent.gov.uk/adult-education/esol",
              },
            },
            {
              emoji: "🏗️",
              title: "Construction Skills — CITB & Local Partners",
              type: "Funded training",
              color: "#fffbeb",
              border: "#eab308",
              body: "With major construction projects ongoing across Wembley and Harlesden, construction skills are in high demand locally. The Construction Industry Training Board (CITB) and Brent Works both offer funded pathways into site work, including CSCS card support, health and safety qualifications, and trades apprenticeships.",
              link: {
                label: "Construction Training via Brent Works",
                url: "https://www.brent.gov.uk/brent-works",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <strong style={{ fontSize: "0.95rem" }}>
                  {item.emoji} {item.title}
                </strong>
                <span
                  style={{
                    fontSize: "0.72rem",
                    background: item.border,
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    fontWeight: "600",
                    flexShrink: 0,
                    marginLeft: "8px",
                  }}
                >
                  {item.type}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "benefits" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Benefits and In-Work Support</h3>
            <p>
              Plain English — what you are entitled to, and what happens when
              you start work.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#f0fdf4",
              borderLeft: "5px solid #22c55e",
              marginBottom: "16px",
            }}
          >
            <strong>Starting work does not mean losing everything</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              One of the biggest barriers to employment is fear of losing
              benefits. Under Universal Credit, for every £1 you earn, your UC
              payment reduces by 55p — meaning you always keep 45p of every
              pound you earn. You do not fall off a cliff edge the day you start
              work.
            </p>
          </div>

          {[
            {
              title: "Universal Credit — the basics",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "Universal Credit replaces six older benefits (Job Seekers Allowance, Employment and Support Allowance, Income Support, Working Tax Credit, Child Tax Credit, and Housing Benefit) into one monthly payment. It covers people in and out of work. You can claim while working part-time. Payments are made monthly in arrears — your first payment arrives 5 weeks after you claim, so apply as soon as possible.",
              link: {
                label: "Claim Universal Credit",
                url: "https://www.gov.uk/universal-credit",
              },
            },
            {
              title: "The taper rate — what you keep when you work",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "Under UC's taper rate, your payment reduces by 55p for every £1 you earn above your work allowance. Your work allowance is the amount you can earn before any deductions — it is higher if you have children or a disability. This means working more hours will always leave you better off financially.",
              link: {
                label: "UC Work Allowances Explained",
                url: "https://www.gov.uk/guidance/universal-credit-how-payments-are-calculated",
              },
            },
            {
              title: "Free childcare — up to 30 hours per week",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "Working parents of children aged 9 months to 4 years can access up to 30 hours of free childcare per week. This is one of the most valuable and underused entitlements available. You must apply through the government childcare portal — your employer or HMRC account will confirm eligibility. Apply before your child's second birthday to avoid missing the next term intake.",
              link: {
                label: "Apply for Free Childcare",
                url: "https://www.gov.uk/get-childcare-offer",
              },
            },
            {
              title: "Two-child limit — and the exceptions",
              color: "#fef2f2",
              border: "#ef4444",
              body: "Since 2017, Universal Credit child element is only paid for a maximum of two children. However, there are important exceptions: twins or multiple births, children born as a result of rape or coercive control (the 'non-consensual conception' exception), and children in kinship care. If you think an exception may apply to you, contact Citizens Advice Brent for confidential help claiming this.",
              link: {
                label: "Citizens Advice Brent",
                url: "https://www.citizensadvicebrent.org.uk",
              },
            },
            {
              title: "Brent Resident Support Scheme",
              color: "#fffbeb",
              border: "#eab308",
              body: "If you face a financial crisis — unexpected bill, essential appliance breakdown, homelessness risk — Brent's Resident Support Scheme can provide emergency grants (not loans) for food, essential household items, and utility costs. Applications are means-tested. You cannot apply online — call the council or ask your social worker or GP to refer you.",
              link: {
                label: "Brent Resident Support Scheme",
                url: "https://www.brent.gov.uk/resident-support-scheme",
              },
            },
            {
              title: "Help with work expenses — Access to Work",
              color: "#f0fdf4",
              border: "#16a34a",
              body: "If you have a disability or health condition, Access to Work can pay for support that helps you do your job — from travel costs if you cannot use public transport, to specialist equipment, a job coach, or a BSL interpreter. This is a grant, not a loan, and does not affect your benefits. Apply before you start a new job if possible.",
              link: {
                label: "Access to Work",
                url: "https://www.gov.uk/access-to-work",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <strong
                style={{
                  color:
                    item.border === "#22c55e" || item.border === "#16a34a"
                      ? item.border
                      : "var(--accent)",
                }}
              >
                {item.title}
              </strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "business" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Start a Business in Brent</h3>
            <p>
              Brent has one of London's highest rates of self-employment. Here
              is the free support available.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#f0f9ff",
              borderLeft: "5px solid #3b82f6",
              marginBottom: "16px",
            }}
          >
            <strong>Did you know?</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "6px",
                lineHeight: "1.6",
              }}
            >
              Brent has a strong entrepreneurial culture — particularly among
              its South Asian, African, and Caribbean communities. The council,
              government, and local banks all offer free support for new
              businesses, but most residents do not know it exists.
            </p>
          </div>

          {[
            {
              emoji: "💰",
              title: "New Enterprise Allowance",
              type: "Government — up to £1,274",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "If you are on Universal Credit and want to start a business, you can claim the New Enterprise Allowance (NEA). You get a free business mentor, and once your business is approved, you receive a weekly allowance for 26 weeks (up to £1,274 total) plus access to a Start Up Loan. You keep your UC payments during the mentoring stage.",
              link: {
                label: "New Enterprise Allowance",
                url: "https://www.gov.uk/new-enterprise-allowance",
              },
            },
            {
              emoji: "🏦",
              title: "Start Up Loans — up to £25,000",
              type: "Government-backed loan",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "The government-backed Start Up Loan scheme offers loans of £500 to £25,000 at a fixed 6% interest rate — far lower than commercial loans. Every borrower also gets 12 months of free mentoring. The scheme is open to businesses less than 3 years old. Poor credit history does not automatically disqualify you.",
              link: {
                label: "Apply for a Start Up Loan",
                url: "https://www.startuploans.co.uk",
              },
            },
            {
              emoji: "🏢",
              title: "Brent Council Business Support",
              type: "Free advice",
              color: "#fff7ed",
              border: "#f97316",
              body: "Brent Council offers free one-to-one business advice sessions covering business planning, finance, marketing, and legal structures. They can also connect you to the Mayor of London's Business Growth Hub and London Growth Hub for larger-scale support. Sessions are available in multiple languages.",
              link: {
                label: "Brent Business Support",
                url: "https://www.brent.gov.uk/business",
              },
            },
            {
              emoji: "🖥️",
              title: "Cheap Desk Space — Wembley & Harlesden",
              type: "Affordable workspace",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "Several affordable co-working and hot-desking spaces have opened in Brent as part of the regeneration programme. Wembley Park has enterprise units aimed at local startups with below-market rents. The council can also connect small businesses with affordable commercial units in regeneration areas.",
              link: {
                label: "Commercial Property in Brent",
                url: "https://www.brent.gov.uk/business/commercial-property",
              },
            },
            {
              emoji: "📊",
              title: "Free Accountancy & Legal Advice",
              type: "Free clinics",
              color: "#fef2f2",
              border: "#ef4444",
              body: "Brent Libraries host free small business advice clinics run by volunteer accountants and solicitors. These cover sole trader registration, VAT, employment law, contracts, and intellectual property. Book in advance — spaces are limited. Ask at your nearest library for the current schedule.",
              link: {
                label: "Brent Libraries",
                url: "https://www.brent.gov.uk/libraries",
              },
            },
            {
              emoji: "🌍",
              title: "Community Development Finance — BCRS",
              type: "Loan for underserved businesses",
              color: "#fffbeb",
              border: "#eab308",
              body: "If you have been turned down by a high street bank, Community Development Finance Institutions (CDFIs) like BCRS Business Loans specialise in lending to viable businesses that cannot access mainstream finance. They are particularly used by Black and minority ethnic-owned businesses. Loans from £10,000 to £150,000.",
              link: {
                label: "BCRS Business Loans",
                url: "https://www.bcrs.org.uk",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <strong style={{ fontSize: "0.95rem" }}>
                  {item.emoji} {item.title}
                </strong>
                <span
                  style={{
                    fontSize: "0.72rem",
                    background: item.border,
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    fontWeight: "600",
                    flexShrink: 0,
                    marginLeft: "8px",
                  }}
                >
                  {item.type}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "picture" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>The Brent Picture</h3>
            <p>
              The real employment landscape in Brent — and where the
              opportunities are.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong style={{ fontSize: "1rem" }}>
              Child poverty and employment deprivation
            </strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              27% of children in Brent live in poverty — one of the highest
              rates in London. Employment deprivation is concentrated in
              Harlesden, Stonebridge, South Kilburn, and parts of Wembley. These
              are the same areas where free support is most available but least
              accessed.
            </p>
          </div>

          <div className="problem-grid" style={{ marginBottom: "16px" }}>
            {[
              {
                stat: "27%",
                label: "Child Poverty Rate",
                detail:
                  "One of the highest in London, concentrated in 5 wards.",
              },
              {
                stat: "340k",
                label: "Brent Population",
                detail: "One of London's most densely populated boroughs.",
              },
              {
                stat: "130+",
                label: "Languages Spoken",
                detail: "Creating both opportunity and employment barriers.",
              },
              {
                stat: "£38k",
                label: "Median Salary",
                detail: "Average Brent salary vs £44k London-wide median.",
              },
            ].map((item, i) => (
              <div key={i} className="data-card">
                <span className="data-stat" style={{ color: "var(--accent)" }}>
                  {item.stat}
                </span>
                <h4>{item.label}</h4>
                <p style={{ fontSize: "0.8rem", color: "#64748b" }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {[
            {
              title: "Where Brent residents work",
              body: "The largest employment sectors for Brent residents are health and social care, retail and hospitality, construction and trades, transport and logistics, and professional services. Healthcare is the single largest employer via the NHS — Central Middlesex and Northwick Park hospitals together employ thousands of Brent residents.",
            },
            {
              title: "The Wembley regeneration opportunity",
              body: "The ongoing regeneration of Wembley Park — one of London's largest development projects — is creating sustained demand for construction workers, security, hospitality, retail, and event management roles through the late 2020s. Quintain, the developer, has a local employment charter committing to recruiting Brent residents first. The Brent Works team can facilitate direct introductions.",
            },
            {
              title: "Language as a barrier — and a strength",
              body: "Speaking a language other than English at home is simultaneously one of the biggest employment barriers in Brent and one of the most valuable skills in a global city. Bilingual and multilingual workers are in high demand in healthcare, education, law, and financial services. ESOL classes address the barrier; the skill itself is genuinely marketable.",
            },
            {
              title: "What Brent Works has achieved",
              body: "Since its launch, Brent Works has supported over 3,000 residents into employment, training, or self-employment. The programme has a particular focus on residents who have been economically inactive — including people returning to work after caring responsibilities, long-term illness, or periods of homelessness. Success is measured not just by job placements but by job retention at 6 months.",
            },
          ].map((item, i) => (
            <div key={i} className="logic-box" style={{ marginBottom: "12px" }}>
              <strong style={{ color: "var(--accent)" }}>{item.title}</strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function HousingView() {
  const [activeSection, setActiveSection] = useState("findahome");

  const sections = [
    { id: "findahome", label: "Find a Home" },
    { id: "socialhousing", label: "Social Housing" },
    { id: "rights", label: "Tenant Rights" },
    { id: "eviction", label: "Facing Eviction" },
    { id: "emergency", label: "Emergency Housing" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="view-wrapper"
    >
      <div className="hero-card">
        <h1>
          Housing <span className="accent-text">Brent.</span>
        </h1>
        <p>
          Finding a home, knowing your rights, and getting help when it goes
          wrong.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              border: "1px solid var(--border)",
              background: activeSection === s.id ? "var(--accent)" : "white",
              color: activeSection === s.id ? "white" : "#64748b",
              fontSize: "0.8rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {activeSection === "findahome" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Find a Home in Brent</h3>
            <p>
              The best legitimate platforms — and what to expect on Brent's
              rental market.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong>Brent rental reality check</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Brent is one of London's most expensive boroughs relative to local
              incomes. Average private rents in 2024: one-bed
              £1,400-£1,700/month, two-bed £1,700-£2,200/month, three-bed
              £2,100-£2,600/month. Harlesden and Stonebridge are typically the
              most affordable areas. Wembley and Kilburn command a premium.
            </p>
          </div>

          {[
            {
              emoji: "🏠",
              title: "OpenRent — No Agent Fees",
              type: "Recommended",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "OpenRent lets landlords advertise directly to tenants with no letting agent involved — meaning no admin fees, no referencing fees, and no check-in fees. Listings are genuine and regularly updated. Strongly recommended as a first stop for Brent renters looking to avoid agency costs.",
              link: {
                label: "Search Brent on OpenRent",
                url: "https://www.openrent.co.uk/properties-to-rent/brent",
              },
            },
            {
              emoji: "🔍",
              title: "Rightmove & Zoopla",
              type: "Largest listings",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "The two largest property portals covering almost all Brent listings. Filter by area, bedroom number, and maximum rent. Set up email alerts for new listings — good properties in Brent go within 24-48 hours. Be aware these platforms include agent-managed properties which may charge additional fees.",
              link: {
                label: "Rightmove — Brent Rentals",
                url: "https://www.rightmove.co.uk/property-to-rent/Brent.html",
              },
            },
            {
              emoji: "🛏️",
              title: "SpareRoom — Rooms & House Shares",
              type: "Room rentals",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "For single people or those on tighter budgets, room rentals in shared houses are significantly cheaper than whole properties. SpareRoom is the leading platform for this. Rooms in Brent typically range from £700-£1,000/month including bills. Many landlords on SpareRoom advertise directly without agents.",
              link: {
                label: "Find Rooms in Brent",
                url: "https://www.spareroom.co.uk/flatshare/brent",
              },
            },
            {
              emoji: "🏛️",
              title: "Brent Council Private Lettings",
              type: "Council-assisted",
              color: "#fffbeb",
              border: "#eab308",
              body: "Brent Council maintains a list of private landlords who have agreed to let to council-assisted tenants, including people on Housing Benefit or Universal Credit housing element. If you are struggling to find a landlord who accepts benefits, contact Brent Housing Options — they can connect you with this network.",
              link: {
                label: "Brent Housing Options",
                url: "https://www.brent.gov.uk/housing",
              },
              phone: "020 8937 2727",
            },
            {
              emoji: "⚠️",
              title: "Avoid rental scams",
              type: "Safety",
              color: "#fef2f2",
              border: "#ef4444",
              body: "Brent has a high rate of rental fraud. Never pay a deposit or holding fee without viewing the property in person. Never pay via bank transfer to someone you have not met. Verify the landlord owns the property via the Land Registry (£3 search at gov.uk/search-property-information-land-registry). If a deal seems too cheap, it almost certainly is.",
              link: {
                label: "Check Land Registry",
                url: "https://www.gov.uk/search-property-information-land-registry",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <strong style={{ fontSize: "0.95rem" }}>
                  {item.emoji} {item.title}
                </strong>
                <span
                  style={{
                    fontSize: "0.72rem",
                    background: item.border,
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    fontWeight: "600",
                    flexShrink: 0,
                    marginLeft: "8px",
                  }}
                >
                  {item.type}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.phone && (
                <p style={{ fontSize: "0.82rem", marginTop: "6px" }}>
                  <span style={{ color: "#64748b" }}>Phone: </span>
                  <code style={{ fontWeight: "600" }}>{item.phone}</code>
                </p>
              )}
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "socialhousing" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Social Housing in Brent</h3>
            <p>
              How the waiting list actually works — most people don't understand
              the bidding system.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong>It is not a queue — it is a bidding system</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Brent uses the Locata Choice Based Lettings system. When a social
              housing property becomes available, it is advertised online and
              eligible residents bid for it. The person with the highest
              priority band who bids wins — not the person who has waited
              longest. If you are registered but never bid, you will never be
              housed.
            </p>
            <a
              href="https://www.locata.org.uk"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                background: "#ef4444",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Open Locata — Bid on Properties
            </a>
          </div>

          {[
            {
              title: "Step 1 — Check if you are eligible to register",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "To join Brent's housing register you must be 18 or over, have a local connection to Brent (lived or worked here for 2+ years, or have close family here), and not already own a property. Some immigration statuses are not eligible — check with the Housing Options team if you are unsure.",
              link: {
                label: "Housing Register Eligibility",
                url: "https://www.brent.gov.uk/housing/housing-register",
              },
            },
            {
              title: "Step 2 — Apply to the housing register",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "Apply online via the Brent Council website. You will need proof of identity, current address, income, and any medical or vulnerability information. A decision on your application is usually made within 28 days. Once approved you are placed into a priority band (A to D) based on your housing need.",
              link: {
                label: "Apply to Housing Register",
                url: "https://www.brent.gov.uk/housing/housing-register/apply",
              },
            },
            {
              title: "Understanding your priority band",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "Band A (highest): Urgent medical need, severe overcrowding, domestic abuse, or statutory homelessness. Band B: Significant medical need, significant overcrowding, or under-occupation by social tenants. Band C: Moderate housing need with local connection. Band D: General applicants. Most properties in Brent go to Band A and B applicants. Band C and D waits can exceed 10 years.",
            },
            {
              title: "How to bid — and bid strategically",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "New properties are advertised on Locata every week, usually on Wednesdays. You have until the following Tuesday to bid. You can bid on multiple properties simultaneously. Bid on every property you would genuinely accept — being selective significantly reduces your chances. Properties in less popular areas (Stonebridge, South Kilburn) receive fewer bids and move faster.",
              link: {
                label: "Locata Bidding System",
                url: "https://www.locata.org.uk",
              },
            },
            {
              title: "Realistic wait times in Brent",
              color: "#fffbeb",
              border: "#eab308",
              body: "One-bedroom property in Band A: 1-3 years. Two-bedroom in Band A: 2-5 years. Three-bedroom in Band A: 4-8 years. Any property in Band C or D: typically 10+ years, sometimes indefinitely. Brent has around 15,000 households on the waiting list and builds approximately 300-400 new social homes per year. Demand vastly exceeds supply.",
            },
            {
              title: "If your circumstances change — update your application",
              color: "#f0fdf4",
              border: "#16a34a",
              body: "If your situation changes — new medical condition, relationship breakdown, overcrowding worsens, domestic abuse — report it to Brent Housing immediately. Your band may be reassessed upwards. Failure to update can mean being removed from the register. Review your application every 12 months to keep it active.",
              link: {
                label: "Update Your Housing Application",
                url: "https://www.brent.gov.uk/housing/housing-register/update",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <strong style={{ color: "var(--accent)" }}>{item.title}</strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "rights" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Tenant Rights</h3>
            <p>
              Legal rights your landlord may not want you to know — in plain
              English.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#f0fdf4",
              borderLeft: "5px solid #22c55e",
              marginBottom: "16px",
            }}
          >
            <strong>
              Your rights exist whether or not they are in your tenancy
              agreement
            </strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Many of your rights as a tenant are set by law and cannot be
              contracted away. A clause in your tenancy agreement that removes a
              legal right is simply unenforceable — the right still applies.
              Knowing this is the foundation of everything below.
            </p>
          </div>

          {[
            {
              title: "🔧 Repairs — your landlord's legal duty",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "Under Section 11 of the Landlord and Tenant Act 1985, your landlord is legally required to maintain the structure and exterior of the property, keep heating and hot water working, and maintain pipes, drains, and sanitation. Under the Homes (Fitness for Human Habitation) Act 2018, properties must be free from hazards including damp, mould, cold, and pest infestation. Report repairs in writing (text or email) to create a paper trail. If unresolved after a reasonable time, report to Brent Council's Private Sector Housing team.",
              link: {
                label: "Report Unsafe Housing to Brent",
                url: "https://www.brent.gov.uk/housing/private-rented-sector/report-a-repair-issue",
              },
            },
            {
              title: "💰 Deposit protection — mandatory by law",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "Your landlord must protect your deposit in a government-approved scheme within 30 days of receiving it, and provide you with 'prescribed information' about the scheme. Failure to do so means you can claim 1-3x the deposit amount in court, and the landlord cannot serve a valid Section 21 eviction notice. Check your deposit is protected at gov.uk/tenancy-deposit-protection.",
              link: {
                label: "Check Your Deposit Is Protected",
                url: "https://www.gov.uk/tenancy-deposit-protection",
              },
            },
            {
              title: "🏠 Right to a safe and healthy home",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "Brent Council can inspect your property under the Housing Health and Safety Rating System (HHSRS) and issue improvement notices or prohibition orders against your landlord. You can request this inspection without telling your landlord first. This is one of the most powerful tools available to tenants in dangerous properties — and it is free.",
              link: {
                label: "Request a Property Inspection",
                url: "https://www.brent.gov.uk/housing/private-rented-sector",
              },
            },
            {
              title: "🚫 Illegal eviction and harassment",
              color: "#fef2f2",
              border: "#ef4444",
              body: "It is a criminal offence for a landlord to evict you without a court order, change your locks, remove your belongings, cut off utilities, or harass you into leaving. This applies even if you are in rent arrears. If this happens, call Brent Council's out-of-hours emergency line immediately, and contact Shelter or Citizens Advice. The council can take criminal action against the landlord.",
              phone: "020 8937 2727 (Brent Housing Options)",
              link: {
                label: "Illegal Eviction — Shelter Guide",
                url: "https://england.shelter.org.uk/housing_advice/eviction/illegal_eviction",
              },
            },
            {
              title: "📋 Getting your deposit back",
              color: "#fffbeb",
              border: "#eab308",
              body: "Your landlord must return your deposit within 10 days of agreeing deductions, or within 10 days of the end of the tenancy if there is no dispute. Deductions can only be made for unpaid rent or damage beyond normal wear and tear. If your landlord withholds unfairly, raise a dispute through the deposit protection scheme — it is free, binding, and you do not need a solicitor.",
              link: {
                label: "Deposit Dispute Guide",
                url: "https://www.gov.uk/tenancy-deposit-protection/disputes-and-problems",
              },
            },
            {
              title: "📞 Free legal advice for Brent tenants",
              color: "#f0fdf4",
              border: "#16a34a",
              body: "Citizens Advice Brent offers free confidential housing advice. Shelter's national helpline (0808 800 4444) is free and covers all housing issues. Brent Law Centre offers free legal representation for housing cases. For court proceedings, you may qualify for legal aid — check at gov.uk/check-legal-aid.",
              link: {
                label: "Citizens Advice Brent",
                url: "https://www.citizensadvicebrent.org.uk",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <strong style={{ color: "var(--accent)" }}>{item.title}</strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.phone && (
                <p style={{ fontSize: "0.82rem", marginTop: "6px" }}>
                  <span style={{ color: "#64748b" }}>Emergency: </span>
                  <code style={{ fontWeight: "600" }}>{item.phone}</code>
                </p>
              )}
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "eviction" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Facing Eviction</h3>
            <p>
              You do not have to leave just because you receive a letter. Know
              your rights first.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong style={{ fontSize: "1rem" }}>
              Critical: contact Brent Housing Options immediately
            </strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Brent Council has a legal duty to help prevent your homelessness
              if you are threatened with losing your home within 56 days. Do not
              wait until you have been evicted — contact them the moment you
              receive any eviction notice. Early contact dramatically increases
              the help available to you.
            </p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="tel:02089372727"
                style={{
                  background: "#ef4444",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                020 8937 2727
              </a>
              <a
                href="https://www.brent.gov.uk/housing/homelessness"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "white",
                  color: "#ef4444",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  textDecoration: "none",
                  border: "1px solid #ef4444",
                }}
              >
                Brent Housing Options
              </a>
            </div>
          </div>

          {[
            {
              title: "Section 21 — No-fault eviction",
              color: "#fef2f2",
              border: "#ef4444",
              body: "A Section 21 notice allows a landlord to evict you without giving a reason after a fixed-term ends, or during a periodic tenancy with 2 months notice. However, a Section 21 is invalid if: your deposit was not protected, the landlord did not provide prescribed information, you were not given an EPC or gas safety certificate, the property is unlicensed, or you made a formal complaint about repairs within the last 6 months. Always check validity before doing anything.",
              link: {
                label: "Check If Your S21 Is Valid — Shelter",
                url: "https://england.shelter.org.uk/housing_advice/eviction/section_21_eviction",
              },
            },
            {
              title: "Section 8 — Eviction for fault",
              color: "#fffbeb",
              border: "#eab308",
              body: "A Section 8 notice is used when a landlord claims you have breached the tenancy — most commonly rent arrears of 2+ months. The notice period is 14 days for serious arrears. However, receiving a Section 8 does not mean you must leave. The landlord must still get a court order and a bailiff warrant before you are legally required to go. You can defend the claim in court.",
              link: {
                label: "Section 8 Eviction Guide",
                url: "https://england.shelter.org.uk/housing_advice/eviction/section_8_eviction",
              },
            },
            {
              title: "The eviction process — step by step",
              color: "#f0f9ff",
              border: "#3b82f6",
              body: "Step 1: Landlord serves written notice (S21 or S8). Step 2: Notice period expires (2 months for S21, 14 days for S8 arrears). Step 3: Landlord applies to court for a possession order — this takes 6-12 weeks. Step 4: Court hearing — you have the right to attend and defend. Step 5: If order granted, landlord applies for bailiff warrant — another 4-8 weeks. You cannot be legally removed until the bailiffs arrive. At any point before Step 5, contact Brent Housing Options.",
            },
            {
              title: "Rent arrears — act immediately",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "If you are in arrears, contact your landlord in writing to agree a repayment plan before they serve notice. Check you are receiving all benefits you are entitled to — many arrears arise from underclaimed UC housing element. Brent Council's Resident Support Scheme can provide emergency grants for rent arrears in genuine crisis. Citizens Advice can negotiate with landlords on your behalf.",
              link: {
                label: "Rent Arrears Help — Citizens Advice",
                url: "https://www.citizensadvice.org.uk/housing/renting-a-home/if-you-dont-pay-your-rent",
              },
            },
            {
              title: "Domestic abuse and eviction",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "If you are being evicted or forced to leave home due to domestic abuse, you have additional legal protections and priority housing rights. Contact Brent's domestic abuse housing team directly — they can arrange safe emergency accommodation and fast-track social housing applications. You do not need to involve the police to access housing support.",
              link: {
                label: "Brent Domestic Abuse Housing",
                url: "https://www.brent.gov.uk/housing/homelessness/domestic-abuse",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <strong style={{ color: "var(--accent)" }}>{item.title}</strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "emergency" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Emergency Housing</h3>
            <p>
              If you are homeless or at risk tonight — here is exactly what to
              do.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong style={{ fontSize: "1rem" }}>
              If you have nowhere to sleep tonight
            </strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Present yourself in person at Brent Housing Options as early as
              possible — they open at 9am. Say the words: "I am homeless and I
              need emergency accommodation." The council has a legal duty to
              provide emergency housing to eligible applicants while your case
              is assessed. Do not leave without a written decision or a
              referral.
            </p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="tel:02089372727"
                style={{
                  background: "#ef4444",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                020 8937 2727
              </a>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "#64748b",
                  alignSelf: "center",
                }}
              >
                Brent Civic Centre, Engineers Way, HA9 0FJ
              </span>
            </div>
          </div>

          {[
            {
              emoji: "🏛️",
              title: "Brent Housing Options — Duty Team",
              urgent: true,
              color: "#fef2f2",
              border: "#ef4444",
              body: "The council's Housing Options team handles all homelessness assessments. Office hours: Monday-Friday 9am-5pm. Out of hours emergency line available for people who are literally street homeless or fleeing violence. When you attend, bring ID, proof of address, and any eviction notices. If you have children, say this immediately — families have additional priority.",
              phone: "020 8937 2727",
              link: {
                label: "Brent Homelessness Help",
                url: "https://www.brent.gov.uk/housing/homelessness",
              },
            },
            {
              emoji: "🌙",
              title: "Rough Sleeping — StreetLink",
              color: "#f0f9ff",
              border: "#3b82f6",
              body: "If you are sleeping rough or know someone who is, contact StreetLink. They connect rough sleepers with local outreach teams who can provide immediate support, shelter referrals, and help accessing housing services. Available 24 hours a day. You can report online, by phone, or via the app. Brent Council's rough sleeper outreach team operates nightly.",
              phone: "0300 500 0914",
              link: {
                label: "StreetLink — Report Rough Sleeping",
                url: "https://www.streetlink.org.uk",
              },
            },
            {
              emoji: "🆘",
              title: "Shelter National Emergency Line",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "Shelter's free national helpline provides immediate housing advice for anyone facing homelessness. Advisers can help you understand your rights, challenge council decisions, and navigate the system. Free to call from mobiles and landlines. If your homelessness application is refused, Shelter can help you request a review.",
              phone: "0808 800 4444",
              link: {
                label: "Shelter Housing Help",
                url: "https://england.shelter.org.uk/get_help",
              },
            },
            {
              emoji: "👨‍👩‍👧",
              title: "Families with children — additional rights",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "If you have dependent children and are homeless, the council's duty to house you is stronger. You must be provided with emergency accommodation while your case is assessed — you cannot be turned away to sleep on the street. If the council attempts to do this, say 'I have children and I am challenging this decision under the Children Act 1989' and ask to speak to a manager immediately.",
              link: {
                label: "Family Homelessness Rights",
                url: "https://england.shelter.org.uk/housing_advice/homelessness/families_and_homelessness",
              },
            },
            {
              emoji: "💜",
              title: "Domestic abuse — safe emergency housing",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "If you are fleeing domestic abuse, you do not need to have nowhere to go before the council will help you. Contact Brent's MARAC-linked housing team or the National Domestic Abuse Helpline. Safe houses and refuge accommodation can be arranged without your abuser knowing your location. You will not be placed in the same temporary accommodation as your abuser.",
              phone: "0808 2000 247 (National DA Helpline — free, 24hr)",
              link: {
                label: "Refuge — Emergency Accommodation",
                url: "https://www.nationaldahelpline.org.uk",
              },
            },
            {
              emoji: "🧳",
              title: "No Recourse to Public Funds (NRPF)",
              color: "#fffbeb",
              border: "#eab308",
              body: "If your visa has a 'No Recourse to Public Funds' condition, you cannot access most council housing support. However, if you have children under 18, the council's children's services team has a duty to prevent destitution under the Children Act. Contact Praxis or JCWI Brent for specialist immigration and housing advice — they have experience navigating NRPF cases.",
              link: {
                label: "Praxis — NRPF Housing Advice",
                url: "https://www.praxis.org.uk",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <strong style={{ fontSize: "0.95rem" }}>
                {item.emoji} {item.title}
              </strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.phone && (
                <p style={{ fontSize: "0.82rem", marginTop: "6px" }}>
                  <span style={{ color: "#64748b" }}>Phone: </span>
                  <code style={{ fontWeight: "600" }}>{item.phone}</code>
                </p>
              )}
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function HealthView() {
  const [activeSection, setActiveSection] = useState("urgent");

  const sections = [
    { id: "urgent", label: "Get Urgent Care" },
    { id: "gp", label: "Register with a GP" },
    { id: "services", label: "Dentist, Eyes & More" },
    { id: "mental", label: "Mental Health" },
    { id: "rights", label: "Your NHS Rights" },
    { id: "picture", label: "Brent Health Picture" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="view-wrapper"
    >
      <div className="hero-card">
        <h1>
          Health <span className="accent-text">Services.</span>
        </h1>
        <p>
          Real NHS guidance for Brent residents — from urgent care to your legal
          rights.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              border: "1px solid var(--border)",
              background: activeSection === s.id ? "var(--accent)" : "white",
              color: activeSection === s.id ? "white" : "#64748b",
              fontSize: "0.8rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {activeSection === "urgent" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Get Urgent Care — Right Place, Right Time</h3>
            <p>
              Going to A&E when you do not need to costs the NHS and means
              longer waits for everyone.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong style={{ fontSize: "1rem" }}>
              Which service should I use?
            </strong>
            <div
              style={{
                marginTop: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {[
                {
                  situation: "Life-threatening emergency",
                  where: "Call 999 or go to A&E",
                  color: "#ef4444",
                },
                {
                  situation: "Urgent but not life-threatening",
                  where: "Call NHS 111 (free, 24/7)",
                  color: "#f97316",
                },
                {
                  situation: "Minor injury or illness",
                  where: "Urgent Treatment Centre — walk in, no appointment",
                  color: "#eab308",
                },
                {
                  situation: "Ongoing health concern",
                  where: "Book a GP appointment",
                  color: "#22c55e",
                },
                {
                  situation: "Cough, cold, minor ailment",
                  where: "Local pharmacy — free advice",
                  color: "#3b82f6",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "10px",
                    background: "white",
                    borderRadius: "8px",
                    borderLeft: `4px solid ${row.color}`,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        margin: 0,
                      }}
                    >
                      {row.situation}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "#64748b",
                        margin: "2px 0 0 0",
                      }}
                    >
                      {row.where}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-header" style={{ marginBottom: "12px" }}>
            <h3>Urgent Treatment Centres in Brent</h3>
            <p>
              No appointment needed. Treat minor injuries and illness. Free on
              NHS.
            </p>
          </div>
          <div className="helpline-grid">
            <div
              className="logic-box"
              style={{ background: "#f0f9ff", borderColor: "#bae6fd" }}
            >
              <strong>Central Middlesex Hospital UTC</strong>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#64748b",
                  marginTop: "4px",
                }}
              >
                Acton Lane, London NW10 7NS
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#22c55e",
                  fontWeight: "600",
                }}
              >
                8am - midnight, 7 days a week
              </p>
              <div className="num-row" style={{ marginTop: "8px" }}>
                <code>0333 999 2575</code>
              </div>
            </div>
            <div
              className="logic-box"
              style={{ background: "#f0f9ff", borderColor: "#bae6fd" }}
            >
              <strong>Northwick Park Hospital UTC</strong>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#64748b",
                  marginTop: "4px",
                }}
              >
                Watford Road, Harrow HA1 3UJ
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#22c55e",
                  fontWeight: "600",
                }}
              >
                24 hours, 7 days a week
              </p>
              <div className="num-row" style={{ marginTop: "8px" }}>
                <code>020 8864 3232</code>
              </div>
            </div>
          </div>

          <div
            className="logic-box"
            style={{
              marginTop: "16px",
              borderLeft: "5px solid #ef4444",
              background: "#fef2f2",
            }}
          >
            <strong>Northwick Park Hospital A&E</strong>
            <p style={{ fontSize: "0.85rem", marginTop: "6px" }}>
              Watford Road, Harrow HA1 3UJ — The only full A&E serving Brent.
              Open 24hrs, 365 days. For genuine life-threatening emergencies
              only.
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "#ef4444",
                fontWeight: "600",
                marginTop: "6px",
              }}
            >
              If unsure whether to go to A&E, call 111 first.
            </p>
          </div>

          <div className="logic-box" style={{ marginTop: "12px" }}>
            <strong>NHS 111 — Free 24/7 Urgent Advice</strong>
            <p style={{ fontSize: "0.85rem", marginTop: "6px" }}>
              Call 111 for urgent medical help when it is not a 999 emergency.
              Trained clinicians will assess your situation and direct you to
              the right service — including out-of-hours GPs and dental triage.
            </p>
            <div className="num-row" style={{ marginTop: "8px" }}>
              <code>111</code>
            </div>
          </div>
        </div>
      )}

      {activeSection === "gp" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Register with a GP</h3>
            <p>
              You have a legal right to free NHS primary care. Here is
              everything you need to know.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#f0fdf4",
              borderLeft: "5px solid #22c55e",
              marginBottom: "16px",
            }}
          >
            <strong style={{ color: "#16a34a", fontSize: "1rem" }}>
              You can register even if you have no ID, no fixed address, and no
              NHS number.
            </strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              This applies to everyone in England — UK citizens, EU nationals,
              refugees, asylum seekers, undocumented residents. A GP cannot
              legally refuse to register you without valid reason.
            </p>
            <a
              href="https://www.nhs.uk/service-search/find-a-gp"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "12px",
                background: "#16a34a",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Find a GP Near You
            </a>
          </div>

          {[
            {
              title: "No ID? No problem.",
              body: "You do not need a passport, driving licence or utility bill to register. If a practice turns you away for not having ID, this may be unlawful. Ask for a written reason and contact NHS England if needed.",
            },
            {
              title: "No fixed address? You can still register.",
              body: "If you are homeless or have no permanent address, you can register using a day centre, hostel, or local GP practice address. Ask staff at a Brent Hub or Crisis Skylight for help.",
            },
            {
              title: "How to find your NHS number",
              body: "Your NHS number is on any previous NHS letter, prescription or appointment card. You can also find it on the NHS App or call your previous GP. If you have never had one, one will be created when you register.",
            },
            {
              title: "Online GP access — the NHS App",
              body: "Once registered, download the free NHS App to book and cancel appointments, request repeat prescriptions, see your health records and get referrals. Available on iOS and Android.",
            },
            {
              title: "Named accountable GP",
              body: "Every NHS patient — including children — is entitled to a named GP at their practice who takes overall responsibility for their care. You can ask your practice who your named GP is.",
            },
            {
              title: "Interpreter services",
              body: "Your GP practice must provide a professional interpreter free of charge if you need one. You should never be expected to use a family member or friend to interpret during a medical appointment.",
            },
          ].map((item, i) => (
            <div key={i} className="logic-box" style={{ marginBottom: "12px" }}>
              <strong style={{ color: "var(--accent)" }}>{item.title}</strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeSection === "services" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Dentist, Eyes and More</h3>
            <p>
              NHS services many Brent residents do not know they are entitled
              to.
            </p>
          </div>

          {[
            {
              emoji: "🦷",
              title: "NHS Dentist",
              color: "#f0f9ff",
              border: "#3b82f6",
              body: "Contact any dental practice offering NHS appointments and ask for an NHS slot. You do not need to be registered first. For emergency dental pain outside hours, call 111 and ask to be transferred to the Smile Dental Triage Service.",
              link: {
                label: "Find NHS Dentist Near You",
                url: "https://www.nhs.uk/service-search/find-a-dentist",
              },
            },
            {
              emoji: "👁️",
              title: "Free NHS Eye Tests",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "Free NHS eye test if you are: under 16, under 19 and in full-time education, 60 or over, on Universal Credit or Income Support, diagnosed with diabetes or glaucoma, or at risk of glaucoma. Glasses vouchers may also be available.",
              link: {
                label: "Find NHS Optician Near You",
                url: "https://www.nhs.uk/service-search/find-an-optician",
              },
            },
            {
              emoji: "🧬",
              title: "Sexual Health Services",
              color: "#fef2f2",
              border: "#ef4444",
              body: "NHS North West London Sexual Health provides free, confidential sexual health checks, STI testing, HIV care and contraception across Brent. No GP referral needed for most services.",
              link: {
                label: "Find Sexual Health Clinic",
                url: "https://www.nhs.uk/service-search/sexual-health",
              },
            },
            {
              emoji: "💊",
              title: "Pharmacy First",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "Your local pharmacist can treat many conditions without a GP appointment — including earache, sore throat, sinusitis, impetigo, shingles, UTIs (women), and infected insect bites. Free on NHS. Just walk in.",
              link: {
                label: "Find NHS Pharmacy",
                url: "https://www.nhs.uk/service-search/find-a-pharmacy",
              },
            },
            {
              emoji: "♿",
              title: "NHS Wheelchair Service",
              color: "#fffbeb",
              border: "#eab308",
              body: "AJM Healthcare is the appointed NHS Wheelchair Service provider for residents registered with a Brent GP. Free assessment, supply and repair of wheelchairs and mobility equipment.",
              phone: "0808 164 2040",
            },
            {
              emoji: "🩺",
              title: "Free NHS Health Check",
              color: "#f0f9ff",
              border: "#0369a1",
              body: "If you are aged 40-74 and do not have a diagnosed heart condition, diabetes, or kidney disease, you are entitled to a free NHS Health Check every 5 years. Checks your risk of heart disease, stroke, diabetes and dementia. Ask your GP to book one.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <strong style={{ fontSize: "0.95rem" }}>
                {item.emoji} {item.title}
              </strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.phone && (
                <div className="num-row" style={{ marginTop: "8px" }}>
                  <code>{item.phone}</code>
                </div>
              )}
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "mental" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Mental Health Services in Brent</h3>
            <p>
              Support at every level — from self-help to 24-hour crisis
              response.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong>In a mental health crisis right now?</strong>
            <p style={{ fontSize: "0.85rem", marginTop: "6px" }}>
              Call the Single Point of Access — free, 24 hours, 365 days.
            </p>
            <div className="num-row" style={{ marginTop: "8px" }}>
              <code>0800 0234 650</code>
            </div>
            <p
              style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "8px" }}
            >
              Or walk into Brent Cove — no appointment, aged 16+. Brent Hub, 6
              Hillside, NW10 8BN. Open 2pm-10pm every day.
            </p>
          </div>

          {[
            {
              level: "1",
              title: "Self-help and online support",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "Brent Mind offers free online resources, support groups and coaching for adults and young people. You can also text SHOUT to 85258 — a free, confidential 24/7 text service if you do not want to talk on the phone.",
              link: {
                label: "Brent Mind Website",
                url: "https://www.brent.gov.uk/children-young-people-and-families/send-local-offer/send-local-offer-directory/mind-in-brent-wandsworth-and-westminster",
              },
            },
            {
              level: "2",
              title: "Talking Therapies — self-refer, no GP needed",
              color: "#f0f9ff",
              border: "#3b82f6",
              body: "Brent Talking Therapies provides free NHS cognitive behavioural therapy (CBT) and counselling for anxiety, depression and stress. You do not need a GP referral — you can self-refer directly online or by phone.",
              link: {
                label: "Self-Refer to Talking Therapies",
                url: "https://www.cnwl.nhs.uk/services/mental-health-services/improving-access-psychological-therapies-iapt/brent-talking-therapies",
              },
            },
            {
              level: "3",
              title: "Community Mental Health Teams (CMHT)",
              color: "#fffbeb",
              border: "#eab308",
              body: "For more complex or ongoing needs, your GP can refer you to a CMHT. North Brent CMHT: 0208 937 6360. South Brent CMHT: 020 8937 2736. Mon-Fri office hours.",
            },
            {
              level: "4",
              title: "Children and Young People — CAMHS",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "CAMHS supports young people under 18 registered with a Brent GP who have complex mental health difficulties. Referral is usually through a GP, school, or social worker. For 16-25 year olds there are also specific Young Adults services through CNWL.",
            },
            {
              level: "5",
              title: "Crisis walk-in — Brent Cove",
              color: "#fef2f2",
              border: "#ef4444",
              body: "Safe, welcoming drop-in for anyone aged 16+ in mental health crisis. No appointment or referral needed. One-to-one support, safety planning, peer support, hot drink and snack.",
              address:
                "Brent Hub Community Enterprise Centre, 6 Hillside, NW10 8BN",
              hours: "2pm - 10pm every day, 365 days a year",
            },
            {
              level: "6",
              title: "24-hour crisis line — Single Point of Access",
              color: "#fef2f2",
              border: "#ef4444",
              body: "Staffed by qualified CNWL clinicians around the clock. Can arrange face-to-face response within 4 hours in emergencies, connect you to the Home Treatment Team, or refer you to the right service.",
              phone: "0800 0234 650",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "6px",
                }}
              >
                <span
                  style={{
                    background: item.border,
                    color: "white",
                    borderRadius: "50%",
                    width: "22px",
                    height: "22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    flexShrink: 0,
                  }}
                >
                  {item.level}
                </span>
                <strong style={{ fontSize: "0.95rem" }}>{item.title}</strong>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  lineHeight: "1.6",
                  marginTop: "4px",
                }}
              >
                {item.body}
              </p>
              {item.address && (
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#64748b",
                    marginTop: "6px",
                  }}
                >
                  📍 {item.address}
                </p>
              )}
              {item.hours && (
                <p style={{ fontSize: "0.8rem", color: "#64748b" }}>
                  🕐 {item.hours}
                </p>
              )}
              {item.phone && (
                <div className="num-row" style={{ marginTop: "8px" }}>
                  <code>{item.phone}</code>
                </div>
              )}
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "rights" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Know Your NHS Rights</h3>
            <p>
              Plain English — what the NHS is legally required to provide for
              you.
            </p>
          </div>
          {[
            {
              title: "Right to register with a GP",
              body: "Every person in England has the right to register with an NHS GP free of charge. A practice can only refuse if you live outside their catchment area or they have no capacity. They cannot refuse based on your nationality, immigration status, or lack of ID.",
            },
            {
              title: "Right to a second opinion",
              body: "If you disagree with a diagnosis or treatment plan, you have the right to ask your GP to refer you to another specialist. Your GP cannot refuse this request without explaining why.",
            },
            {
              title: "Right to choose your hospital",
              body: "For non-emergency referrals you have the right to choose from at least 5 NHS providers — including some private hospitals operating on the NHS. Ask your GP about the NHS e-Referral Service.",
            },
            {
              title: "Right to a professional interpreter",
              body: "The NHS must provide a professional interpreter free of charge for every appointment if you need one. You should never be asked to bring a family member to interpret. If this happens, you can raise a complaint with PALS.",
            },
            {
              title: "Right to see your health records",
              body: "You have the right to access your full GP and hospital records. Request them through the NHS App or write to your practice. They must respond within 30 days and can only refuse in rare circumstances.",
            },
            {
              title: "Waiting time standards",
              body: "NHS targets: GP appointment within 2 weeks for urgent concerns; 2-week wait for urgent cancer referrals; 18 weeks from GP referral to first hospital treatment; 4-hour A&E target. If waiting significantly longer, ask your GP about alternatives.",
            },
            {
              title: "How to complain — PALS",
              body: "Every NHS hospital has a Patient Advice and Liaison Service (PALS) to help resolve concerns, access records, or make a formal complaint. For Northwick Park Hospital, ask at reception or call the main switchboard and ask for PALS.",
            },
            {
              title: "The NHS Constitution",
              body: "Your full rights as an NHS patient are set out in the NHS Constitution — a legally binding document. Read it at nhs.uk/nhs-constitution or pick up a copy at any Brent Hub.",
            },
          ].map((item, i) => (
            <div key={i} className="logic-box" style={{ marginBottom: "12px" }}>
              <strong style={{ color: "var(--accent)" }}>{item.title}</strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeSection === "picture" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Brent's Health Picture</h3>
            <p>
              Why health in Brent is a justice issue — and what is being done
              about it.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong style={{ fontSize: "1rem" }}>The 10-Year Gap</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Across England, people in the most deprived areas live up to 10
              fewer years than those in the wealthiest. Brent ranks among
              London's most deprived boroughs. Your postcode — not your genes —
              is the biggest predictor of how long you will live in good health.
            </p>
          </div>

          <div className="problem-grid" style={{ marginBottom: "16px" }}>
            {[
              {
                stat: "130+",
                label: "Languages Spoken",
                detail: "Most linguistically diverse borough in London.",
              },
              {
                stat: "7%",
                label: "Diabetes Rate",
                detail:
                  "Above national average — a key Brent Health Matters priority.",
              },
              {
                stat: "41.7%",
                label: "Year 6 Obesity",
                detail:
                  "Among the highest rates nationally for 10-11 year olds.",
              },
              {
                stat: "428",
                label: "Community Orgs",
                detail:
                  "Working with Brent Health Matters to reduce inequalities.",
              },
            ].map((item, i) => (
              <div key={i} className="data-card">
                <span className="data-stat">{item.stat}</span>
                <h4>{item.label}</h4>
                <p style={{ fontSize: "0.8rem", color: "#64748b" }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {[
            {
              title: "Brent Health Matters Programme",
              body: "Brent Council's flagship programme works with 428 community organisations and 45 trained Community Champions to reach residents who do not normally access NHS services. In 2024 they ran 119 health events attended by over 4,200 residents. Priority areas: diabetes, bowel cancer screening, cardiovascular disease, hypertension, and children's vaccinations.",
            },
            {
              title: "Why Brent residents underuse NHS services",
              body: "Research by Brent Council found that language barriers, cultural mistrust, lack of awareness, past negative experiences, and fear about immigration status all prevent residents from accessing care. You have the right to NHS care regardless of immigration status. A GP or hospital cannot report you to the Home Office for accessing treatment.",
            },
            {
              title: "Bowel cancer screening — low uptake in Brent",
              body: "Bowel cancer is highly treatable if caught early, but Brent has below-average screening uptake — particularly in Pakistani, Black African and Black other communities. If you are aged 50-74, you should receive a home testing kit by post every 2 years. Contact your GP if you have not received one.",
            },
            {
              title: "Children's vaccinations — MMR",
              body: "MMR vaccination rates in parts of Brent have fallen below the 95% needed for community protection. Measles is circulating in London. MMR vaccines are free on the NHS at any age if you missed them as a child. Book through your GP or find a local walk-in vaccination service for ages 5-19.",
            },
            {
              title: "Adult Social Care — emergency support",
              body: "Brent Council's Adult Social Care provides support to people with disabilities or mental illness to live independently. For out-of-hours social care emergencies call the Emergency Duty Team.",
              phones: [
                "020 8937 4300 (office hours)",
                "020 8937 4300 option 1 (out of hours)",
              ],
            },
          ].map((item, i) => (
            <div key={i} className="logic-box" style={{ marginBottom: "12px" }}>
              <strong style={{ color: "var(--accent)" }}>{item.title}</strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.phones &&
                item.phones.map((p, j) => (
                  <div key={j} className="num-row" style={{ marginTop: "8px" }}>
                    <code>{p}</code>
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}


function FAQView() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { id: "all", label: "All" },
    { id: "tax", label: "Council Tax & Money" },
    { id: "bins", label: "Bins & Streets" },
    { id: "housing", label: "Housing" },
    { id: "benefits", label: "Benefits & Support" },
    { id: "services", label: "Council Services" },
  ];

  const faqs = [
    // Council Tax & Money
    {
      category: "tax",
      q: "How do I pay my Council Tax?",
      a: "You can pay online via the Brent Council website, by Direct Debit (cheapest and easiest — set up once and forget), by phone on 020 8937 1234, or at any PayPoint outlet. Direct Debit payments can be spread over 10 or 12 months instead of the default 10.",
      link: {
        label: "Pay Council Tax",
        url: "https://www.brent.gov.uk/council-tax/pay-your-council-tax",
      },
    },
    {
      category: "tax",
      q: "What happens if I can't afford to pay my Council Tax?",
      a: "Contact Brent Council immediately — do not ignore the bill. You can apply for Council Tax Support (up to 100% reduction if on low income), request a payment plan, or apply for the Resident Support Scheme for emergency help. If you receive a summons, contact the council before the court date — it is almost always possible to arrange a payment plan and avoid further costs.",
      link: {
        label: "Council Tax Support",
        url: "https://www.brent.gov.uk/council-tax/council-tax-support",
      },
    },
    {
      category: "tax",
      q: "How do I apply for the single person discount?",
      a: "If you are the only adult in your property, you are entitled to 25% off your Council Tax bill. Apply online through the Brent Council website. It is not applied automatically — you must claim it. You can also claim a refund for any period you were eligible but had not applied.",
      link: {
        label: "Single Person Discount",
        url: "https://www.brent.gov.uk/council-tax/discounts-and-exemptions/single-person-discount",
      },
    },
    {
      category: "tax",
      q: "How do I challenge my Council Tax band?",
      a: "Council Tax bands were set in 1991 and many are wrong. You can challenge your band for free via the Valuation Office Agency (VOA). If successful, your band is reduced and you receive a backdated refund. The best time to challenge is when you first move in. Search 'Challenge Council Tax band' on GOV.UK.",
      link: {
        label: "Challenge Your Band",
        url: "https://www.gov.uk/challenge-council-tax-band",
      },
    },
    {
      category: "tax",
      q: "Am I exempt from Council Tax as a student?",
      a: "Full-time students are disregarded for Council Tax. If everyone in your property is a full-time student, the property is fully exempt. If one person is a student and one is not, the non-student gets a 25% discount. You must provide a certificate from your university or college — apply through Brent Council.",
      link: {
        label: "Student Exemption",
        url: "https://www.brent.gov.uk/council-tax/discounts-and-exemptions/students",
      },
    },
    {
      category: "tax",
      q: "What is the Council Tax increase for 2026/27?",
      a: "Brent raised Council Tax by 4.99% in 2026/27 — the legal maximum without a public referendum. For a Band D property this is approximately £109 more per year, or £2.10 per week extra. The increase funds children's services, housing, and adult social care.",
    },

    // Bins & Streets
    {
      category: "bins",
      q: "When is my bin collected?",
      a: "Every street in Brent has a specific collection schedule. Recycling and food waste are collected weekly. General rubbish is collected every two weeks. Look up your exact collection day by entering your postcode on the Brent Council website.",
      link: {
        label: "Find My Collection Day",
        url: "https://recyclingservices.brent.gov.uk/waste",
      },
    },
    {
      category: "bins",
      q: "What goes in the blue recycling bin?",
      a: "Paper, card, plastic bottles and tubs, glass bottles and jars, metal tins and cans. Never put food, nappies, plastic bags, or electricals in the blue bin. If the bin is contaminated the whole load may not be collected. When in doubt, check the Brent Recycleopedia.",
      link: {
        label: "Brent Recycleopedia",
        url: "https://www.brent.gov.uk/bins-rubbish-and-recycling/recycle-reduce-reuse",
      },
    },
    {
      category: "bins",
      q: "My bin was missed — what do I do?",
      a: "Wait until after 10pm on your scheduled collection day before reporting a missed bin — collections sometimes run late. If it still has not been collected by 10pm, report it online through the Brent Council website. They aim to collect missed bins within 2 working days.",
      link: {
        label: "Report a Missed Bin",
        url: "https://www.brent.gov.uk/report-it",
      },
    },
    {
      category: "bins",
      q: "How do I report fly-tipping?",
      a: "Report fly-tipping at brent.gov.uk/dontmess or via the Fix My Street app. You can submit photos and video footage — this is exactly what the council needs to issue fines. Do not approach anyone you see fly-tipping. Fines range from £500 to £1,000.",
      link: {
        label: "Report Fly-Tipping",
        url: "https://www.brent.gov.uk/dontmess",
      },
    },
    {
      category: "bins",
      q: "How do I get rid of large items like a sofa or fridge?",
      a: "You have four free or low-cost options: Community Skips (free, up to 5 items, weekends — check schedule online), free monthly small item doorstep collection, bulky waste collection via AnyJunk (charged, free once/year for benefit recipients), or Abbey Road Recycling Centre in North Wembley (free for most household items, no booking needed).",
      link: {
        label: "Bulky Waste Options",
        url: "https://www.brent.gov.uk/bins-rubbish-and-recycling/community-skips",
      },
    },
    {
      category: "bins",
      q: "Can I put batteries in my bin?",
      a: "No — batteries and electrical items must never go in any bin. They cause fires in waste vehicles and processing facilities. Use the free monthly small item doorstep collection, or drop them off at Abbey Road Recycling Centre or any supermarket battery recycling point.",
    },
    {
      category: "bins",
      q: "How do I report a pothole or damaged pavement?",
      a: "Report potholes and pavement damage via the Brent Council website or the Fix My Street app. Include a photo and exact location. Brent aims to repair dangerous defects within 24 hours and other defects within 28 days.",
      link: {
        label: "Report a Pothole",
        url: "https://www.brent.gov.uk/report-it",
      },
    },

    // Housing
    {
      category: "housing",
      q: "How do I join the Brent housing register?",
      a: "Apply online via the Brent Council website. You must be 18+, have a local connection to Brent (lived or worked here 2+ years, or close family here), and not own a property. Once approved you are placed in a priority band (A-D) based on your housing need. You then bid on available properties via the Locata system.",
      link: {
        label: "Apply to Housing Register",
        url: "https://www.brent.gov.uk/housing/housing-register/apply",
      },
    },
    {
      category: "housing",
      q: "How does the Locata bidding system work?",
      a: "Brent uses Choice Based Lettings — it is a bidding system, not a queue. Properties are advertised on Locata every Wednesday. You have until the following Tuesday to bid. The applicant with the highest priority band who bids wins. Bid on every property you would genuinely accept — being selective reduces your chances significantly.",
      link: { label: "Locata Bidding", url: "https://www.locata.org.uk" },
    },
    {
      category: "housing",
      q: "My landlord won't do repairs — what can I do?",
      a: "Report repairs to your landlord in writing (text or email) to create a paper trail. If unresolved after a reasonable time, report to Brent Council's Private Sector Housing team — they can inspect the property and issue improvement notices. Your landlord cannot legally evict you for reporting repairs in good faith.",
      link: {
        label: "Report Housing Repairs Issue",
        url: "https://www.brent.gov.uk/housing/private-rented-sector/report-a-repair-issue",
      },
    },
    {
      category: "housing",
      q: "I've received an eviction notice — do I have to leave?",
      a: "No — not immediately. A notice is not a legal order to leave. Your landlord must still go to court and get a possession order, then apply for bailiffs. This process takes months. Contact Brent Housing Options immediately on 020 8937 2727 — they have a legal duty to help if you are threatened with homelessness within 56 days.",
      link: {
        label: "Brent Housing Options",
        url: "https://www.brent.gov.uk/housing/homelessness",
      },
    },
    {
      category: "housing",
      q: "I am homeless tonight — what do I do?",
      a: "Go to Brent Civic Centre (Engineers Way, HA9 0FJ) as early as possible and say 'I am homeless and need emergency accommodation.' The council has a legal duty to provide emergency housing for eligible applicants. Out of hours, call 020 8937 2727. If you have children, say this immediately — it strengthens your case.",
      link: {
        label: "Emergency Housing Help",
        url: "https://www.brent.gov.uk/housing/homelessness",
      },
    },
    {
      category: "housing",
      q: "Is my deposit protected?",
      a: "Your landlord must protect your deposit in a government-approved scheme within 30 days of receiving it and give you written information about it. If they haven't, you can claim 1-3 times the deposit amount in court — and any Section 21 eviction notice they serve is invalid. Check at gov.uk/tenancy-deposit-protection.",
      link: {
        label: "Check Deposit Protection",
        url: "https://www.gov.uk/tenancy-deposit-protection",
      },
    },

    // Benefits & Support
    {
      category: "benefits",
      q: "How do I apply for Council Tax Support?",
      a: "Apply online via the Brent Council website. The scheme can reduce your bill by up to 100% if you are on a low income or receiving certain benefits. Apply as soon as your circumstances change — backdating is limited. You will need details of your income, savings, and household composition.",
      link: {
        label: "Apply for Council Tax Support",
        url: "https://www.brent.gov.uk/council-tax/council-tax-support",
      },
    },
    {
      category: "benefits",
      q: "What is the Resident Support Scheme?",
      a: "An emergency grant scheme (not a loan) for Brent residents in financial crisis. Can cover food, essential household items, utility costs, and white goods. You cannot apply online — call the council on 020 8937 1234 or ask a GP, social worker, or advice agency to refer you on your behalf.",
      link: {
        label: "Resident Support Scheme",
        url: "https://www.brent.gov.uk/resident-support-scheme",
      },
    },
    {
      category: "benefits",
      q: "Where is my nearest food bank?",
      a: "Sufra NW London (160 Pitfield Way, NW10 0PW, 020 3441 1335) is open Monday-Friday with no referral required. The Trussell Trust food bank network in Brent requires a referral from a GP, social worker, or Citizens Advice. Many local churches and mosques also run food pantries — check with your nearest place of worship.",
      link: {
        label: "Sufra NW London",
        url: "https://www.sufra-nwlondon.org.uk",
      },
    },
    {
      category: "benefits",
      q: "Am I claiming all the benefits I'm entitled to?",
      a: "Many Brent residents are not claiming everything they are entitled to — particularly Pension Credit, Carer's Allowance, and disability benefits. Use the free Turn2Us benefits calculator to check. Citizens Advice Brent also offer free benefits checks and can help you claim.",
      link: {
        label: "Benefits Calculator — Turn2Us",
        url: "https://benefits-calculator.turn2us.org.uk",
      },
    },
    {
      category: "benefits",
      q: "I'm in debt and struggling — where can I get free help?",
      a: "StepChange (0800 138 1111, free) is the UK's leading free debt charity. Christians Against Poverty offer free in-home debt counselling. Citizens Advice Brent provide free advice on all debt issues. All three are completely free, confidential, and non-judgmental. The earlier you seek help, the more options you have.",
      link: {
        label: "StepChange Free Debt Help",
        url: "https://www.stepchange.org",
      },
    },
    {
      category: "benefits",
      q: "What cost of living help is available right now?",
      a: "Brent's Cost of Living Hub brings together all current support in one place — energy bill help, food banks, benefit checks, warm spaces, and emergency grants. It is updated regularly as new support becomes available. Start there if you are not sure what you are entitled to.",
      link: {
        label: "Brent Cost of Living Hub",
        url: "https://www.brent.gov.uk/cost-of-living",
      },
    },

    // Council Services
    {
      category: "services",
      q: "How do I contact my local councillor?",
      a: "Every Brent resident is represented by three ward councillors. Find yours by postcode on the Brent Council website. Email is the most effective method — phone calls are often not logged. Councillors are obligated to respond to constituent correspondence. A councillor who receives multiple emails on the same issue will raise it formally.",
      link: {
        label: "Find Your Councillors",
        url: "https://democracy.brent.gov.uk/mgFindMember.aspx",
      },
    },
    {
      category: "services",
      q: "How do I register to vote?",
      a: "Register online at gov.uk/register-to-vote in under 5 minutes. You need your National Insurance number. EU and Commonwealth citizens can vote in local elections. You can register with no fixed address using a local connection declaration. The deadline to register for any election is usually 12 working days before polling day.",
      link: {
        label: "Register to Vote",
        url: "https://www.gov.uk/register-to-vote",
      },
    },
    {
      category: "services",
      q: "How do I apply for a parking permit?",
      a: "Brent parking permits are managed by zone. Check which zone your street is in first, then apply online through the Brent Council website. You will need your vehicle registration, proof of address, and a payment card. Permits are issued digitally — no physical permit is posted.",
      link: {
        label: "Parking Permits — Brent",
        url: "https://www.brent.gov.uk/parking/parking-permits",
      },
    },
    {
      category: "services",
      q: "How do I make a complaint about the council?",
      a: "Start with a formal complaint to the relevant service via the Brent Council website. They must respond within 20 working days. If unsatisfied, escalate to the council's corporate complaints team. If still unresolved, you can refer to the Local Government and Social Care Ombudsman (LGSCO) — free and independent.",
      link: {
        label: "Make a Complaint — Brent",
        url: "https://www.brent.gov.uk/your-council/contact-us/complaints",
      },
    },
    {
      category: "services",
      q: "How do I submit a Freedom of Information request?",
      a: "Under the Freedom of Information Act, you can request any information held by Brent Council. Submit via the WhatDoTheyKnow website — responses become public record and other residents can benefit. The council must respond within 20 working days. Requests are free.",
      link: {
        label: "Submit an FOI Request",
        url: "https://www.whatdotheyknow.com/body/brent",
      },
    },
    {
      category: "services",
      q: "How do I report a broken street light?",
      a: "Report broken street lights via the Brent Council website or the Fix My Street app. Include the lamp post number (usually printed on the post) and exact location. Brent aims to repair street lights within 5 working days for safety-critical faults.",
      link: {
        label: "Report a Street Light",
        url: "https://www.brent.gov.uk/report-it",
      },
    },
    {
      category: "services",
      q: "How do I get a Blue Badge for disabled parking?",
      a: "Apply for a Blue Badge online via the Brent Council website. You automatically qualify if you receive the higher rate mobility component of DLA, enhanced rate PIP mobility, or War Pensioner's Mobility Supplement. Others can apply based on walking difficulty — a brief assessment may be required. The badge is valid for up to 3 years.",
      link: {
        label: "Apply for a Blue Badge",
        url: "https://www.brent.gov.uk/blue-badge",
      },
    },
  ];

  const filtered = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      search === "" ||
      faq.q.toLowerCase().includes(search.toLowerCase()) ||
      faq.a.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="view-wrapper"
    >
      <div className="hero-card">
        <h1>
          Council <span className="accent-text">FAQs.</span>
        </h1>
        <p>Quick answers to the questions Brent residents ask most.</p>
      </div>

      {/* Search bar */}
      <div style={{ position: "relative", marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Search any question..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setOpenIndex(null);
          }}
          style={{
            width: "100%",
            padding: "12px 16px 12px 42px",
            borderRadius: "10px",
            border: "1px solid var(--border)",
            fontSize: "0.9rem",
            outline: "none",
            boxSizing: "border-box",
            background: "white",
          }}
        />
        <span
          style={{
            position: "absolute",
            left: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "1rem",
            color: "#94a3b8",
          }}
        >
          🔍
        </span>
        {search && (
          <button
            onClick={() => {
              setSearch("");
              setOpenIndex(null);
            }}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              color: "#94a3b8",
            }}
          >
            ✕
          </button>
        )}
      </div>

      {/* Category filters */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => {
              setActiveCategory(c.id);
              setOpenIndex(null);
            }}
            style={{
              padding: "7px 13px",
              borderRadius: "20px",
              border: "1px solid var(--border)",
              background: activeCategory === c.id ? "var(--accent)" : "white",
              color: activeCategory === c.id ? "white" : "#64748b",
              fontSize: "0.78rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p
        style={{ fontSize: "0.78rem", color: "#94a3b8", marginBottom: "12px" }}
      >
        {filtered.length} {filtered.length === 1 ? "result" : "results"}
        {search && ` for "${search}"`}
        {activeCategory !== "all" &&
          ` in ${categories.find((c) => c.id === activeCategory)?.label}`}
      </p>

      {/* FAQ accordion */}
      {filtered.length === 0 ? (
        <div
          className="logic-box"
          style={{ textAlign: "center", color: "#64748b" }}
        >
          <p style={{ fontSize: "0.9rem" }}>
            No results found. Try a different search term or category.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("all");
            }}
            style={{
              marginTop: "10px",
              background: "var(--accent)",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              fontSize: "0.85rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {filtered.map((faq, i) => {
            const isOpen = openIndex === i;
            const catColors = {
              tax: "#3b82f6",
              bins: "#22c55e",
              housing: "#f97316",
              benefits: "#a855f7",
              services: "#eab308",
            };
            const color = catColors[faq.category] || "var(--accent)";
            return (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "10px",
                  border: "1px solid var(--border)",
                  borderLeft: `4px solid ${color}`,
                  overflow: "hidden",
                  transition: "box-shadow 0.2s",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    padding: "14px 16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: "600",
                      color: "#1e293b",
                      lineHeight: "1.4",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontSize: "1rem",
                      color: color,
                      flexShrink: 0,
                      fontWeight: "700",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: "0 16px 14px 16px",
                      borderTop: "1px solid #f1f5f9",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.85rem",
                        lineHeight: "1.7",
                        color: "#475569",
                        marginTop: "10px",
                      }}
                    >
                      {faq.a}
                    </p>
                    {faq.link && (
                      <a
                        href={faq.link.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "inline-block",
                          marginTop: "10px",
                          background: color,
                          color: "white",
                          padding: "7px 14px",
                          borderRadius: "6px",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          textDecoration: "none",
                        }}
                      >
                        {faq.link.label}
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
function EnvironmentView() {
  const [activeSection, setActiveSection] = useState("report");

  const sections = [
    { id: "report", label: "Report It" },
    { id: "bins", label: "Bins & Collections" },
    { id: "bigitems", label: "Get Rid of Big Items" },
    { id: "rules", label: "Rules & Fines" },
    { id: "picture", label: "The Brent Picture" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="view-wrapper"
    >
      <div className="hero-card">
        <h1>
          Cleaner <span className="accent-text">Brent.</span>
        </h1>
        <p>
          From fly-tipping capital to zero tolerance — here is everything you
          need to know.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              border: "1px solid var(--border)",
              background: activeSection === s.id ? "var(--accent)" : "white",
              color: activeSection === s.id ? "white" : "#64748b",
              fontSize: "0.8rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {activeSection === "report" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Report a Problem</h3>
            <p>
              Everything you can report to Brent Council — and how to do it.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong>Do not approach anyone you see fly-tipping.</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "6px",
                lineHeight: "1.6",
              }}
            >
              Report from a safe distance. You can submit phone or CCTV footage
              directly to the council — this is exactly what they need to issue
              fines and build prosecutions.
            </p>

            <a
              href="https://www.brent.gov.uk/dontmess"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                background: "#ef4444",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Report Fly-Tipping Now
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            {[
              {
                issue: "🗑️ Fly-tipping",
                how: "brent.gov.uk/dontmess or Fix My Street app",
                link: "https://www.brent.gov.uk/dontmess",
                color: "#ef4444",
              },
              {
                issue: "🎨 Graffiti",
                how: "brent.gov.uk/report-it",
                link: "https://www.brent.gov.uk/report-it",
                color: "#f97316",
              },
              {
                issue: "🚗 Abandoned vehicle",
                how: "brent.gov.uk/report-it",
                link: "https://www.brent.gov.uk/report-it",
                color: "#eab308",
              },
              {
                issue: "🐕 Dog mess",
                how: "brent.gov.uk/report-it",
                link: "https://www.brent.gov.uk/report-it",
                color: "#84cc16",
              },
              {
                issue: "🗂️ Missed bin collection",
                how: "Report only after 10pm on your collection day",
                link: "https://www.brent.gov.uk/report-it",
                color: "#22c55e",
              },
              {
                issue: "💡 Broken street light",
                how: "brent.gov.uk/report-it",
                link: "https://www.brent.gov.uk/report-it",
                color: "#3b82f6",
              },
              {
                issue: "🔊 Noise or anti-social behaviour",
                how: "brent.gov.uk/report-it",
                link: "https://www.brent.gov.uk/report-it",
                color: "#a855f7",
              },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 14px",
                  background: "white",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  borderLeft: `4px solid ${row.color}`,
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      margin: 0,
                    }}
                  >
                    {row.issue}
                  </p>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "#64748b",
                      margin: "2px 0 0 0",
                    }}
                  >
                    {row.how}
                  </p>
                </div>
                <a
                  href={row.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--accent)",
                    fontWeight: "600",
                    textDecoration: "none",
                    flexShrink: 0,
                    marginLeft: "12px",
                  }}
                >
                  Report
                </a>
              </div>
            ))}
          </div>

          <div className="logic-box" style={{ marginTop: "4px" }}>
            <strong>Fix My Street App</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "6px",
                lineHeight: "1.6",
              }}
            >
              Brent Council also accepts reports via Fix My Street. Take a
              photo, pin the location on a map, and submit — it goes directly to
              the right team. Free on iOS and Android.
            </p>
            <a
              href="https://www.fixmystreet.com"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                background: "var(--accent)",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Open Fix My Street
            </a>
          </div>
        </div>
      )}

      {activeSection === "bins" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Bins and Collections</h3>
            <p>
              Verified rules for every bin type in Brent — so you never get a
              fine.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#f0fdf4",
              borderLeft: "5px solid #22c55e",
              marginBottom: "16px",
            }}
          >
            <strong>Find your bin collection day</strong>
            <p style={{ fontSize: "0.85rem", marginTop: "6px" }}>
              Every street in Brent has a specific collection schedule. Look
              yours up in under 30 seconds.
            </p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://recyclingservices.brent.gov.uk/waste"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#16a34a",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Find My Collection Day
              </a>
              <a
                href="https://www.brent.gov.uk/bins-rubbish-and-recycling/recycle-reduce-reuse"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "white",
                  color: "#16a34a",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  textDecoration: "none",
                  border: "1px solid #16a34a",
                }}
              >
                Brent Recycleopedia
              </a>
            </div>
          </div>

          {[
            {
              emoji: "♻️",
              title: "Blue bin — Recycling",
              color: "#eff6ff",
              border: "#3b82f6",
              frequency: "Every week",
              accepts:
                "Paper, card, plastic bottles and tubs, glass bottles and jars, metal tins and cans.",
              rejects:
                "No food, no nappies, no plastic bags, no electricals. If contaminated the whole bin will not be emptied.",
            },
            {
              emoji: "🍎",
              title: "Small caddy — Food waste",
              color: "#f0fdf4",
              border: "#22c55e",
              frequency: "Every week",
              accepts:
                "All food waste — cooked or uncooked. Wrap in newspaper, paper bags, or certified corn starch liners (EN13432).",
              rejects:
                "No plastic bags — the entire vehicle load may be rejected by the facility and sent to landfill.",
            },
            {
              emoji: "🗑️",
              title: "Grey bin — General rubbish",
              color: "#f8fafc",
              border: "#94a3b8",
              frequency: "Every two weeks",
              accepts: "Non-recyclable household waste.",
              rejects:
                "Never put batteries or electricals in this bin — they cause fires in waste vehicles. Use the free small item collection instead.",
            },
            {
              emoji: "🌿",
              title: "Green bin — Garden waste",
              color: "#f0fdf4",
              border: "#84cc16",
              frequency:
                "Fortnightly Mar-Nov, monthly Dec-Feb (paid subscription, £69/year)",
              accepts: "Grass, leaves, plant cuttings, small branches.",
              rejects:
                "No Japanese knotweed or other invasive plants — contact a specialist contractor for these.",
            },
          ].map((bin, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: bin.color,
                borderLeft: `5px solid ${bin.border}`,
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <strong style={{ fontSize: "0.95rem" }}>
                  {bin.emoji} {bin.title}
                </strong>
                <span
                  style={{
                    fontSize: "0.75rem",
                    background: bin.border,
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    fontWeight: "600",
                    flexShrink: 0,
                    marginLeft: "8px",
                  }}
                >
                  {bin.frequency}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.82rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                <span style={{ color: "#16a34a", fontWeight: "600" }}>
                  ✓ Accepts:{" "}
                </span>
                {bin.accepts}
              </p>
              <p
                style={{
                  fontSize: "0.82rem",
                  marginTop: "4px",
                  lineHeight: "1.6",
                }}
              >
                <span style={{ color: "#ef4444", fontWeight: "600" }}>
                  ✗ Never:{" "}
                </span>
                {bin.rejects}
              </p>
            </div>
          ))}

          <div
            className="logic-box"
            style={{
              background: "#fffbeb",
              borderLeft: "5px solid #eab308",
              marginTop: "4px",
            }}
          >
            <strong>
              ⚠️ Timed collections — Harlesden and selected streets
            </strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Some streets — particularly in Harlesden — operate timed waste
              collection. Rubbish must only be put out between{" "}
              <strong>6pm and 6:30am</strong>. Putting waste out during the day
              is a fineable offence under the Environmental Protection Act 1990.
              Check your street at brent.gov.uk to see if timed rules apply to
              you.
            </p>
            <a
              href="https://www.brent.gov.uk/bins-rubbish-and-recycling/timed-waste-collection"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                background: "#eab308",
                color: "white",
                padding: "7px 14px",
                borderRadius: "6px",
                fontSize: "0.8rem",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Check Timed Collection Rules
            </a>
          </div>
        </div>
      )}

      {activeSection === "bigitems" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Get Rid of Big Items Legally</h3>
            <p>
              Most fly-tipping happens because people do not know these free
              options exist.
            </p>
          </div>

          {[
            {
              emoji: "🆓",
              title: "Community Skips — Free",
              color: "#f0fdf4",
              border: "#22c55e",
              urgent: true,
              body: "Drop off up to 5 bulky items completely free — just bring proof of a Brent address. Reusable items get donated to local families in need. Skips rotate around the borough on weekends.",
              note: "Check the schedule the day before in case of last-minute changes. Cannot accept: builders rubble, trade waste, garden waste, soil, pianos, fridges, tyres, batteries, paint or hazardous waste.",
              link: {
                label: "Find Upcoming Skip Locations",
                url: "https://www.brent.gov.uk/bins-rubbish-and-recycling/community-skips",
              },
            },
            {
              emoji: "📦",
              title: "Small Item Collection — Free monthly",
              color: "#f0f9ff",
              border: "#3b82f6",
              body: "Free monthly doorstep collection for: textiles and clothes, batteries, small electrical items (WEEE), coffee pods, and paint. Maximum one booking per month. Items must be out by 7am on collection day.",
              note: "Remove SIM cards from mobile phones before putting them out. The council is not liable for personal data on devices.",
              link: {
                label: "Book Small Item Collection",
                url: "https://www.brent.gov.uk/bins-rubbish-and-recycling/small-item-collection",
              },
            },
            {
              emoji: "🚚",
              title: "Bulky Waste Collection — Charged",
              color: "#fffbeb",
              border: "#eab308",
              body: "Book a doorstep collection for up to 5 large items via AnyJunk. Charged per item. If you receive Council Tax benefit or Pension Credit you get one free collection per year (April to March). Landlords can also use this service between tenancies.",
              note: "Items must be placed at the front of your property by 7:30am. The collection vehicle cannot stop on the North Circular — leave items at the nearest side road corner.",
              link: {
                label: "Book Bulky Waste Collection",
                url: "https://www.brent.gov.uk/bins-rubbish-and-recycling/bulky-waste-collection",
              },
              phone: "020 3141 6007",
            },
            {
              emoji: "🏭",
              title: "Abbey Road Recycling Centre — Free for most items",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "Brent's main household recycling centre in North Wembley. No booking required (advisable during busy periods). Free disposal for most household waste. Free DIY waste allowance of two 50-litre bags per visit, per week.",
              note: "Charges apply for construction and demolition waste. Cars permitted on site for maximum 30 minutes. Sort your materials before arriving.",
              link: {
                label: "Abbey Road Centre Info",
                url: "https://www.brent.gov.uk/bins-rubbish-and-recycling/abbey-road-recycling-centre",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <strong style={{ fontSize: "0.95rem" }}>
                {item.emoji} {item.title}
              </strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#64748b",
                  marginTop: "6px",
                  lineHeight: "1.5",
                  fontStyle: "italic",
                }}
              >
                ℹ️ {item.note}
              </p>
              {item.phone && (
                <div style={{ marginTop: "8px" }}>
                  <span style={{ fontSize: "0.8rem", color: "#64748b" }}>
                    AnyJunk:{" "}
                  </span>
                  <code style={{ fontSize: "0.85rem", fontWeight: "600" }}>
                    {item.phone}
                  </code>
                </div>
              )}
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "rules" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Rules and Fines</h3>
            <p>What residents are legally responsible for — plain English.</p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong style={{ fontSize: "1rem" }}>
              Fly-tipping fine: £500 to £1,000
            </strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Brent's fines start at £500 and go up to the legal maximum of
              £1,000. If a Fixed Penalty Notice is unpaid, the council can
              pursue court prosecution. This applies to anyone caught dumping —
              including residents disposing of their own household waste
              illegally.
            </p>
          </div>

          {[
            {
              title: "⚠️ Using an unlicensed waste collector",
              body: "If you pay someone to take your waste and they are not licensed by the Environment Agency, you can be fined up to £1,000 — even if you genuinely did not know they were unlicensed. Always ask for their Waste Carrier licence number and verify it for free at gov.uk/register-waste-carrier. If someone knocks on your door offering cheap waste removal, this is a red flag.",
              color: "#fef2f2",
              border: "#ef4444",
            },
            {
              title: "⚠️ Putting bins out at the wrong time",
              body: "In timed collection areas (including parts of Harlesden), putting waste out during the day is a fineable offence under the Environmental Protection Act 1990. Enforcement officers patrol these areas regularly. Check whether your street has timed rules at brent.gov.uk.",
              color: "#fffbeb",
              border: "#eab308",
            },
            {
              title: "⚠️ Batteries and electricals in general bins",
              body: "Placing batteries or electrical items in your grey bin or recycling bin is illegal and dangerous — they cause fires in waste vehicles and at processing facilities. Use the free monthly small item collection or take them to Abbey Road Recycling Centre instead.",
              color: "#fffbeb",
              border: "#eab308",
            },
            {
              title: "⚠️ Fly-tipping on private land",
              body: "Brent Council can only remove fly-tipping from land it owns or manages. If waste is dumped on private land — including private car parks, forecourts, or privately owned estates — it is the landowner's legal responsibility to clear it. You can report it to the council who may be able to help identify the offenders, but the clearance cost falls on the landowner.",
              color: "#f8fafc",
              border: "#94a3b8",
            },
            {
              title: "✅ How to check a waste collector is licensed",
              body: "Go to gov.uk/register-waste-carrier and search the public register. It is completely free and takes 30 seconds. A legitimate waste collector will always be happy to give you their licence number. If they refuse or cannot provide one, do not use them.",
              color: "#f0fdf4",
              border: "#22c55e",
            },
            {
              title: "✅ Your duty of care as a householder",
              body: "Under the Environmental Protection Act 1990, everyone who produces waste has a legal duty of care to ensure it is disposed of properly. This means you are responsible for checking that anyone you hire to take your waste is properly licensed — ignorance is not a legal defence.",
              color: "#f0fdf4",
              border: "#22c55e",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <strong
                style={{
                  color:
                    item.border === "#22c55e" ? "#16a34a" : "var(--accent)",
                }}
              >
                {item.title}
              </strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeSection === "picture" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>The Brent Picture</h3>
            <p>
              Where Brent started, what has changed, and why your reports
              matter.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong style={{ fontSize: "1rem" }}>
              Brent was the fly-tipping capital of England
            </strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              In 2022/23 Brent recorded{" "}
              <strong>34,830 fly-tipping incidents</strong> — the highest of any
              local authority in the entire country. Clearing it cost Brent
              taxpayers over <strong>£1.5 million</strong> in a single year. The
              most fly-tipped street was Connaught Road with 339 incidents in
              two years — nearly one every other day.
            </p>
          </div>

          <div className="problem-grid" style={{ marginBottom: "16px" }}>
            {[
              {
                stat: "53%",
                label: "Drop in Incidents",
                detail: "Down from 34,830 to 16,338 after the crackdown.",
              },
              {
                stat: "502%",
                label: "More FPNs Issued",
                detail: "Fixed Penalty Notices rose from 152 to 916.",
              },
              {
                stat: "487%",
                label: "More Investigations",
                detail: "From 2,705 investigations to 15,884 in one year.",
              },
              {
                stat: "3rd",
                label: "In England",
                detail:
                  "Brent now ranks 3rd highest for penalising waste offences.",
              },
            ].map((item, i) => (
              <div key={i} className="data-card">
                <span className="data-stat" style={{ color: "var(--accent)" }}>
                  {item.stat}
                </span>
                <h4>{item.label}</h4>
                <p style={{ fontSize: "0.8rem", color: "#64748b" }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {[
            {
              title: "How the turnaround happened",
              body: "The Don't Mess with Brent campaign launched with more patrol officers, AI-enabled CCTV cameras in known hotspots, fines raised to £500-£1,000, and a public 'Wanted' poster campaign that names and shames caught offenders. Investigations jumped 487% in a single year as the council built evidence files on repeat hotspots.",
            },
            {
              title: "Why resident reports are critical",
              body: "The council cannot be everywhere at once. When residents submit reports — especially with photos or video footage — it helps enforcement officers build evidence, identify patterns, and target resources. Every report filed makes the next fine more likely. The campaign's success is directly linked to residents standing with the council.",
            },
            {
              title: "The bigger cost — beyond money",
              body: "Fly-tipping is not just an aesthetic problem. Dumped waste attracts pests, blocks drains causing flooding, and makes streets feel unsafe. Research consistently links visible environmental disorder to reduced community wellbeing and lower property values. Cleaner streets are directly connected to residents' mental health and sense of pride in where they live.",
            },
            {
              title: "What still needs to happen nationally",
              body: "Despite Brent's progress, fly-tipping rose 9% nationally in 2024/25 to 1.26 million incidents across England — the highest since records began. Local government groups continue to call on the government to increase court sentencing guidelines and make vehicle seizure the default penalty for serious offenders.",
            },
          ].map((item, i) => (
            <div key={i} className="logic-box" style={{ marginBottom: "12px" }}>
              <strong style={{ color: "var(--accent)" }}>{item.title}</strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function YouthView() {
  const [activeSection, setActiveSection] = useState("rights");

  const sections = [
    { id: "rights", label: "Know Your Rights" },
    { id: "education", label: "Education Rights" },
    { id: "services", label: "Youth Services" },
    { id: "mentalhealth", label: "Mental Health" },
    { id: "careleavers", label: "Care Leavers" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="view-wrapper"
    >
      <div className="hero-card">
        <h1>
          Youth & <span className="accent-text">Rights.</span>
        </h1>
        <p>
          Know your rights, access free support, and get the help Brent owes
          you.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              border: "1px solid var(--border)",
              background: activeSection === s.id ? "var(--accent)" : "white",
              color: activeSection === s.id ? "white" : "#64748b",
              fontSize: "0.8rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {activeSection === "rights" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Know Your Rights</h3>
            <p>Plain English — what the law says, not what people assume.</p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong>Brent has a problem with stop and search</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Young Black men in Brent are stopped and searched at significantly
              higher rates than other groups. Knowing exactly what officers can
              and cannot do is not just useful — for many young Brent residents
              it is essential.
            </p>
          </div>

          {[
            {
              title: "🛑 Stop and Search — what must happen",
              color: "#fef2f2",
              border: "#ef4444",
              body: "Before searching you, an officer must tell you: their name and badge number, which police station they are from, the legal power they are using (usually Section 1 PACE or Section 60), what they are looking for, and why they are searching you specifically. You have the right to a written record of the search — ask for it on the spot or within 3 months. If they refuse to give you this information, the search may be unlawful.",
              link: {
                label: "Stop & Search Rights — Liberty",
                url: "https://www.libertyhumanrights.org.uk/advice_information/stop-and-search",
              },
            },
            {
              title: "🛑 What you can and cannot be searched for",
              color: "#fef2f2",
              border: "#ef4444",
              body: "Under Section 1 PACE, officers can search for stolen items, weapons, or items for use in crime — but only if they have reasonable grounds to suspect you specifically. Being in a certain area, wearing certain clothes, or fitting a vague description is not legally sufficient reasonable grounds on its own. Under Section 60, in a designated area, no suspicion is required — but the area and time must be formally authorised by a senior officer.",
            },
            {
              title: "🚔 If you are arrested",
              color: "#fffbeb",
              border: "#eab308",
              body: "You have the right to: know why you are being arrested, remain silent (you do not have to answer any questions — say 'I am exercising my right to silence'), have a solicitor present before any interview (this is free and you cannot be denied it), have someone informed of your arrest, and be seen by an appropriate adult if you are under 17. You cannot be held for more than 24 hours without charge in most cases.",
              link: {
                label: "Arrest Rights — Citizens Advice",
                url: "https://www.citizensadvice.org.uk/law-and-courts/civil-rights/police-powers/if-you-re-stopped-and-questioned-by-the-police",
              },
            },
            {
              title: "✊ Use of force by police",
              color: "#fff7ed",
              border: "#f97316",
              body: "Police can only use force that is necessary, proportionate, and reasonable. If you believe excessive force was used against you, do not retaliate — this will be used against you. Instead: note the officer's badge number, take photos of any injuries, get witness details, and seek medical attention. Report to the Independent Office for Police Conduct (IOPC) or contact a solicitor.",
              link: {
                label: "Report Police Misconduct — IOPC",
                url: "https://www.policeconduct.gov.uk/complaints-and-appeals/make-complaint",
              },
            },
            {
              title: "📋 Your rights at school",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "Schools cannot search you without your consent unless they believe you have a weapon. They cannot confiscate your phone permanently — it must be returned by the end of the day or your parents contacted. Fixed-term exclusions must be explained in writing to parents within one school day. You have the right to continue education during any exclusion.",
            },
            {
              title: "📞 Free legal advice for under-25s",
              color: "#f0f9ff",
              border: "#3b82f6",
              body: "If your rights have been violated, you can get free advice from: Release (drug-related arrests, 0207 324 2989), Brent Youth Justice Service, Citizens Advice Brent, or the Bar Council's free legal advice helpline. For serious incidents involving police, a solicitor can often take cases on a no-win-no-fee basis.",
              link: {
                label: "Citizens Advice Brent",
                url: "https://www.citizensadvicebrent.org.uk",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <strong style={{ color: "var(--accent)" }}>{item.title}</strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "education" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Education Rights</h3>
            <p>
              What schools and Brent Council must provide — and how to challenge
              them if they don't.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#f0f9ff",
              borderLeft: "5px solid #3b82f6",
              marginBottom: "16px",
            }}
          >
            <strong>Did you know?</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "6px",
                lineHeight: "1.6",
              }}
            >
              Brent has seen an 8% rise in SEND demand in recent years. The
              council's 2026-29 Inclusion Strategy sets out new commitments —
              but families still need to know how to claim what they are
              entitled to.
            </p>
          </div>

          {[
            {
              title: "📋 School exclusions — your appeal rights",
              color: "#fef2f2",
              border: "#ef4444",
              body: "For a fixed-term exclusion, parents must be informed in writing within one school day. For a permanent exclusion, you have the right to request a review by the school's governing body within 15 school days. If unsuccessful, you can appeal to an Independent Review Panel. The school must provide work from day 1 of exclusion and full-time education from day 6. If your child has an EHCP, the bar for exclusion is higher.",
              link: {
                label: "Exclusion Appeals — GOV.UK",
                url: "https://www.gov.uk/school-discipline-exclusions/exclusions",
              },
            },
            {
              title: "🧠 SEND — requesting an EHC needs assessment",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "Any parent or young person over 16 can request an Education, Health and Care (EHC) needs assessment from Brent Council. The council must decide within 6 weeks whether to carry out the assessment. If an EHCP is issued, it is legally binding — the council and school must provide everything written in Section F of the plan. If they don't, you can appeal to the SEND Tribunal for free.",
              link: {
                label: "Request SEND Assessment — Brent",
                url: "https://www.brent.gov.uk/send",
              },
            },
            {
              title: "🍽️ Free School Meals — check eligibility",
              color: "#f0fdf4",
              border: "#16a34a",
              body: "Your child is entitled to free school meals if you receive Universal Credit with net earnings under £7,400, Income Support, income-based JSA or ESA, Child Tax Credit (without Working Tax Credit) with income under £16,190, or support under the Immigration and Asylum Act. Apply through Brent Council — schools cannot charge for meals if you are eligible.",
              link: {
                label: "Apply for Free School Meals",
                url: "https://www.brent.gov.uk/free-school-meals",
              },
            },
            {
              title: "💰 16-19 Bursary — up to £1,200 per year",
              color: "#fffbeb",
              border: "#eab308",
              body: "If you are 16-19 in sixth form, college, or training and from a low-income household, you may be entitled to a bursary of up to £1,200 per year. Young people in care, care leavers, or receiving certain benefits are entitled to the full £1,200. Others can apply for discretionary bursaries from their college. Apply through your school or college.",
              link: {
                label: "16-19 Bursary Fund",
                url: "https://www.gov.uk/1619-bursary-fund",
              },
            },
            {
              title: "🎓 University — financial support",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "If you are from a low-income household, the Student Loans Company provides means-tested maintenance loans and grants. Many universities also offer additional bursaries specifically for students from deprived areas — Brent postcodes often qualify. UCAS has a free tool to compare university bursaries. You do not repay student loans until you earn over £25,000.",
              link: {
                label: "Student Finance England",
                url: "https://www.gov.uk/student-finance",
              },
            },
            {
              title: "📚 Pupil Premium — what your school receives",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "Schools receive additional 'Pupil Premium' funding for every child who is, or has been, eligible for free school meals; looked-after children; and children of service personnel. In Brent this represents significant funding per pupil. Schools must publish how they spend this money. If you believe your child is not benefiting, ask the school's SENCO or headteacher directly.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <strong style={{ color: "var(--accent)" }}>{item.title}</strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "services" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Youth Services in Brent</h3>
            <p>
              Free programmes, activities, and support for under-25s — most
              people don't know these exist.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#f0fdf4",
              borderLeft: "5px solid #22c55e",
              marginBottom: "16px",
            }}
          >
            <strong>Did you know?</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "6px",
                lineHeight: "1.6",
              }}
            >
              Brent invests significantly in youth services despite national
              cuts. Many programmes are free to access but heavily
              undersubscribed simply because young people and families don't
              know they exist.
            </p>
          </div>

          {[
            {
              emoji: "🏀",
              title: "Brent Youth Zones & Leisure",
              type: "Free / low cost",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "Brent Council runs youth clubs and leisure programmes across the borough for 8-19 year olds. Activities include basketball, football, arts, music, and mentoring. Many sessions are free. The council's leisure centres offer discounted memberships for under-16s and subsidised rates for young people on low incomes.",
              link: {
                label: "Brent Youth Services",
                url: "https://www.brent.gov.uk/youth",
              },
            },
            {
              emoji: "🎵",
              title: "Brent Music Service",
              type: "Subsidised lessons",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "Brent Music Service offers subsidised instrumental and vocal lessons to primary and secondary school children across the borough. Instruments can be hired cheaply. Pupils who qualify for free school meals can access lessons at significantly reduced rates. The service also runs ensembles, choirs, and orchestras.",
              link: {
                label: "Brent Music Service",
                url: "https://www.brentmusicservice.co.uk",
              },
            },
            {
              emoji: "🥇",
              title: "Duke of Edinburgh's Award",
              type: "Free for eligible young people",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "The DofE Award is free for young people in care, care leavers, and those from low-income families via the DofE Approved Activity Provider scheme. Bronze starts at 14, Silver at 15, Gold at 16. It significantly strengthens college and job applications. Several Brent schools and youth groups are registered providers.",
              link: {
                label: "DofE Award — Free Places",
                url: "https://www.dofe.org/do-dofe/free-places",
              },
            },
            {
              emoji: "⚽",
              title: "Brent Sports Development",
              type: "Free coaching",
              color: "#f0fdf4",
              border: "#84cc16",
              body: "Brent Council's sports development team runs free coaching sessions in football, cricket, tennis, and athletics across the borough. School holiday programmes provide free structured sport for 8-16 year olds. Sessions prioritise young people from deprived areas and those not currently active.",
              link: {
                label: "Brent Sports Development",
                url: "https://www.brent.gov.uk/sport",
              },
            },
            {
              emoji: "🎨",
              title: "Creative Arts & Media",
              type: "Free workshops",
              color: "#fff7ed",
              border: "#f97316",
              body: "Kiln Theatre runs free youth theatre and creative writing workshops for 14-25 year olds. Brent libraries host free digital art, photography, and filmmaking sessions. The BRIC (Brent Residents Innovation Centre) supports young people interested in creative and digital careers with free equipment access and mentoring.",
              link: {
                label: "Kiln Young Company",
                url: "https://www.kilntheatre.com/take-part/young-people",
              },
            },
            {
              emoji: "🤝",
              title: "Young Brent Foundation",
              type: "Grants & mentoring",
              color: "#fffbeb",
              border: "#eab308",
              body: "Young Brent Foundation funds and supports voluntary organisations working with young people across the borough. They can connect young people with mentoring, employability support, and personal development programmes. Their grants fund youth-led projects — young people can apply directly for small grants to run activities in their community.",
              link: {
                label: "Young Brent Foundation",
                url: "https://www.youngbrent.org",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <strong style={{ fontSize: "0.95rem" }}>
                  {item.emoji} {item.title}
                </strong>
                <span
                  style={{
                    fontSize: "0.72rem",
                    background: item.border,
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    fontWeight: "600",
                    flexShrink: 0,
                    marginLeft: "8px",
                  }}
                >
                  {item.type}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "mentalhealth" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Mental Health for Young People</h3>
            <p>
              Free support available now — no long waits, no referral needed for
              most services.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong>If you are in crisis right now</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Call the Single Point of Access 24-hour crisis line:{" "}
              <strong>0800 0234 650</strong> (free, 24/7). Text SHOUT to 85258
              for free silent support. Or go to your nearest A&E at Northwick
              Park Hospital if you are in immediate danger.
            </p>
            <a
              href="tel:08000234650"
              style={{
                display: "inline-block",
                marginTop: "10px",
                background: "#ef4444",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              0800 0234 650 — Free 24hr Crisis Line
            </a>
          </div>

          {[
            {
              emoji: "💬",
              title: "Kooth — Free Online Counselling",
              type: "No referral, no waiting list",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "Kooth is a free, anonymous online mental health platform for 10-25 year olds. You can chat with qualified counsellors via text, access self-help tools, and join peer support communities. No GP referral needed, no waiting list, available evenings and weekends. Completely confidential. This is the fastest route to professional support for most young people in Brent.",
              link: {
                label: "Access Kooth Free",
                url: "https://www.kooth.com",
              },
            },
            {
              emoji: "🧠",
              title: "CAMHS — Child and Adolescent Mental Health",
              type: "NHS — GP referral needed",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "CAMHS provides specialist NHS mental health support for under-18s. A GP, school SENCO, or social worker referral is needed. Brent CAMHS is run by CNWL NHS Trust. Waiting times can be long — use Kooth and Young Minds while waiting. If your child's needs are urgent, ask the GP to mark the referral as urgent and contact CAMHS directly to follow up.",
              phone: "020 8208 7200 (Brent CAMHS)",
              link: {
                label: "Brent CAMHS — CNWL",
                url: "https://www.cnwl.nhs.uk/services/mental-health/camhs",
              },
            },
            {
              emoji: "🏫",
              title: "School-Based Mental Health Support Teams",
              type: "In school — no referral",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "Brent has Mental Health Support Teams (MHSTs) embedded in many schools providing early intervention for mild to moderate mental health issues. Students can self-refer by speaking to their form tutor or school SENCO. MHSTs offer structured conversations, CBT-based techniques, and can fast-track referrals to CAMHS if needed.",
            },
            {
              emoji: "📱",
              title: "Young Minds & Mental Health Apps",
              type: "Self-help",
              color: "#fff7ed",
              border: "#f97316",
              body: "Young Minds offers free online resources, a parents' helpline (0808 802 5544), and a crisis messenger. For self-help between appointments, recommended apps include Calm (free version), Headspace (free for students), and Catch It (CBT-based mood tracker). These are not substitutes for professional help but can support day-to-day wellbeing.",
              link: {
                label: "Young Minds",
                url: "https://www.youngminds.org.uk",
              },
            },
            {
              emoji: "🤫",
              title: "Confidentiality — what services can and cannot share",
              type: "Important to know",
              color: "#f0fdf4",
              border: "#16a34a",
              body: "Most youth mental health services are confidential. Counsellors will only share information without your consent if they believe you or someone else is at serious risk of harm. This is called the 'duty of care' exception. For most conversations about anxiety, low mood, relationships, or family problems — your privacy is protected. Always ask any service about their confidentiality policy at the start.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <strong style={{ fontSize: "0.95rem" }}>
                  {item.emoji} {item.title}
                </strong>
                <span
                  style={{
                    fontSize: "0.72rem",
                    background: item.border,
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    fontWeight: "600",
                    flexShrink: 0,
                    marginLeft: "8px",
                  }}
                >
                  {item.type}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.phone && (
                <p style={{ fontSize: "0.82rem", marginTop: "6px" }}>
                  <span style={{ color: "#64748b" }}>Phone: </span>
                  <code style={{ fontWeight: "600" }}>{item.phone}</code>
                </p>
              )}
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "careleavers" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Care Leavers</h3>
            <p>
              Brent has legal duties to support you until age 25. Here is
              exactly what you are owed.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#f0fdf4",
              borderLeft: "5px solid #22c55e",
              marginBottom: "16px",
            }}
          >
            <strong>You are entitled to support until you are 25</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Under the Children (Leaving Care) Act 2000 and subsequent
              legislation, Brent Council has statutory duties to care leavers.
              These are legal entitlements — not discretionary services. If you
              are a care leaver and not receiving what is listed below, contact
              Brent's Leaving Care Team and put your request in writing.
            </p>
            <a
              href="tel:02089371200"
              style={{
                display: "inline-block",
                marginTop: "10px",
                background: "#22c55e",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Brent Leaving Care Team: 020 8937 1200
            </a>
          </div>

          {[
            {
              title: "👤 Personal Adviser — your right until 25",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "Every care leaver is entitled to a Personal Adviser (PA) until the age of 25 if they want one. Your PA must help you with your Pathway Plan — a written document setting out your goals and the support you will receive for housing, education, employment, health, and relationships. If you do not have a PA, request one from the Leaving Care Team in writing.",
              link: {
                label: "Brent Leaving Care",
                url: "https://www.brent.gov.uk/children-young-people/looked-after-children-and-care-leavers",
              },
            },
            {
              title: "🏠 Staying Put — remain with your foster carer to 21",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "The Staying Put scheme allows you to remain living with your foster carer after your 18th birthday until the age of 21, if both you and your carer agree. Your carer continues to receive support payments. This is a legal entitlement — your local authority must make this offer. It significantly improves outcomes for care leavers and you should not feel pressured to leave at 18.",
            },
            {
              title: "🏡 Priority housing for care leavers",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "Care leavers under 21 have priority status on Brent's housing register — equivalent to Band A. The council must also ensure you are not placed in unsuitable accommodation (such as B&Bs) unless absolutely unavoidable and for no longer than 6 weeks. If you are a care leaver facing homelessness, contact the Leaving Care Team before the Housing Options team — your route is different.",
            },
            {
              title: "💰 Council Tax exemption",
              color: "#fffbeb",
              border: "#eab308",
              body: "Care leavers under 25 in Brent are exempt from paying Council Tax. This is automatic if you are on Brent's care leaver register — but you must make sure you are registered. If you have been charged Council Tax, contact Brent's revenues team with your care leaver status and request a refund of any payments made.",
              link: {
                label: "Council Tax Exemption — Brent",
                url: "https://www.brent.gov.uk/council-tax/discounts-and-exemptions",
              },
            },
            {
              title: "🎓 Education and training support",
              color: "#f0fdf4",
              border: "#16a34a",
              body: "Care leavers are entitled to the full 16-19 Bursary of £1,200 per year automatically. At university, most institutions offer additional bursaries and guaranteed accommodation for care leavers. The government's Care Leaver Covenant connects care leavers with employers offering guaranteed interviews and work experience. Brent Council will also pay university tuition and living costs if you are not eligible for student finance.",
              link: {
                label: "Care Leaver Covenant",
                url: "https://mycovenant.org.uk",
              },
            },
            {
              title: "📋 Brent's Care Leaver Local Offer",
              color: "#fff7ed",
              border: "#f97316",
              body: "Every local authority must publish a Care Leaver Local Offer setting out exactly what it will provide. Brent's offer includes: free leisure centre access, a £2,000 setting-up-home allowance, access to a Named Worker, support with driving lessons, and guaranteed work experience with the council. Read it in full — many care leavers do not know the full list of what they are entitled to.",
              link: {
                label: "Brent Care Leaver Local Offer",
                url: "https://www.brent.gov.uk/children-young-people/looked-after-children-and-care-leavers/care-leavers-local-offer",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <strong style={{ color: "var(--accent)" }}>{item.title}</strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function BudgetView() {
  const [activeSection, setActiveSection] = useState("counciltax");

  const sections = [
    { id: "counciltax", label: "Your Council Tax" },
    { id: "wheremoney", label: "Where Your Money Goes" },
    { id: "crisis", label: "The Budget Crisis" },
    { id: "accountable", label: "Hold Them Accountable" },
    { id: "help", label: "Financial Help" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="view-wrapper"
    >
      <div className="hero-card">
        <h1>
          Tax & <span className="accent-text">Budget.</span>
        </h1>
        <p>
          Where your money goes, what you can claim back, and how to hold Brent
          accountable.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              border: "1px solid var(--border)",
              background: activeSection === s.id ? "var(--accent)" : "white",
              color: activeSection === s.id ? "white" : "#64748b",
              fontSize: "0.8rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {activeSection === "counciltax" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Your Council Tax</h3>
            <p>
              What you pay, what you can reduce, and discounts most people never
              claim.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong>2026/27 — 4.99% increase</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Brent raised Council Tax by 4.99% in 2026/27 — the maximum allowed
              without a public referendum. For a Band D property this means an
              increase of approximately £109 per year, or £2.10 per week. Check
              your band and exact amount on your bill or via the council's
              website.
            </p>
            <a
              href="https://www.brent.gov.uk/council-tax/how-much-is-my-council-tax"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                background: "#ef4444",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Check Your Council Tax Band
            </a>
          </div>

          <div className="problem-grid" style={{ marginBottom: "16px" }}>
            {[
              {
                stat: "Band A",
                label: "£1,285/yr",
                detail: "Lowest value properties in Brent.",
              },
              {
                stat: "Band C",
                label: "£1,713/yr",
                detail: "Most common band for Brent flats.",
              },
              {
                stat: "Band D",
                label: "£1,927/yr",
                detail: "Standard reference band nationally.",
              },
              {
                stat: "Band G",
                label: "£3,854/yr",
                detail: "Higher value properties.",
              },
            ].map((item, i) => (
              <div key={i} className="data-card">
                <span
                  className="data-stat"
                  style={{ color: "var(--accent)", fontSize: "1.1rem" }}
                >
                  {item.stat}
                </span>
                <h4>{item.label}</h4>
                <p style={{ fontSize: "0.8rem", color: "#64748b" }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {[
            {
              title: "💰 Council Tax Support — up to 100% reduction",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "If you are on a low income or receiving certain benefits, you may be entitled to Council Tax Support reducing your bill by up to 100%. The scheme is means-tested. You must apply — it is not applied automatically. Apply as soon as your circumstances change. Backdating is limited so do not delay.",
              link: {
                label: "Apply for Council Tax Support",
                url: "https://www.brent.gov.uk/council-tax/council-tax-support",
              },
            },
            {
              title: "👤 Single Person Discount — 25% off",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "If you are the only adult living in your property, you are entitled to a 25% single person discount. This is not applied automatically — you must apply. If your circumstances have changed and you are now living alone, apply immediately. You can also claim a refund for any period when you were eligible but had not claimed.",
              link: {
                label: "Apply for Single Person Discount",
                url: "https://www.brent.gov.uk/council-tax/discounts-and-exemptions/single-person-discount",
              },
            },
            {
              title: "🎓 Student exemption — full or partial",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "Full-time students are disregarded for Council Tax purposes. If all adults in a property are full-time students, the property is fully exempt. If one adult is a student and one is not, the non-student gets a 25% discount as if living alone. Students must provide a certificate from their institution. Part-time students do not qualify.",
              link: {
                label: "Student Council Tax Exemption",
                url: "https://www.brent.gov.uk/council-tax/discounts-and-exemptions/students",
              },
            },
            {
              title: "🧠 Severe Mental Impairment — full discount",
              color: "#fffbeb",
              border: "#eab308",
              body: "A person with a severe mental impairment — including dementia, severe learning disability, or acquired brain injury — is disregarded for Council Tax. If the only other adult in the property also qualifies for disregard, the property may be fully exempt. This is one of the least-claimed discounts in Brent. A GP certificate confirming diagnosis is required.",
              link: {
                label: "SMI Council Tax Discount",
                url: "https://www.brent.gov.uk/council-tax/discounts-and-exemptions/severe-mental-impairment",
              },
            },
            {
              title: "🏚️ Challenge your band — it may be wrong",
              color: "#fef2f2",
              border: "#ef4444",
              body: "Council Tax bands were set in 1991 based on estimated property values — many are incorrect. You can challenge your band via the Valuation Office Agency (VOA) for free. If successful, your band will be reduced and you will receive a refund for overpayment. The most effective time to challenge is when you first move in or after a significant change to the property.",
              link: {
                label: "Challenge Your Council Tax Band",
                url: "https://www.gov.uk/challenge-council-tax-band",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <strong style={{ color: "var(--accent)" }}>{item.title}</strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "wheremoney" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Where Your Money Goes</h3>
            <p>Brent's £1.1 billion budget — broken down into plain English.</p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#f0f9ff",
              borderLeft: "5px solid #3b82f6",
              marginBottom: "16px",
            }}
          >
            <strong>The big picture</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Brent Council spends approximately £1.1 billion per year. Council
              Tax raises around £130 million of this — less than 12%. The rest
              comes from government grants, business rates, fees, and charges.
              This means even large Council Tax rises make a relatively small
              dent in the overall budget gap.
            </p>
          </div>

          {[
            {
              emoji: "👶",
              pct: "34%",
              title: "Children's Services",
              color: "#fef2f2",
              border: "#ef4444",
              amount: "~£374m",
              body: "The single largest budget area. Covers child protection, looked-after children, SEND support, early help, and youth offending. Demand has risen sharply post-pandemic. The cost of placing one child in residential care can exceed £200,000 per year.",
            },
            {
              emoji: "🏠",
              pct: "22%",
              title: "Housing & Homelessness",
              color: "#fff7ed",
              border: "#f97316",
              amount: "~£242m",
              body: "Covers temporary accommodation (the fastest-growing cost), homelessness prevention, the housing register, and housing benefit administration. Brent currently houses over 3,000 households in temporary accommodation — at enormous and rising cost.",
            },
            {
              emoji: "🧓",
              pct: "20%",
              title: "Adult Social Care",
              color: "#fdf4ff",
              border: "#a855f7",
              amount: "~£220m",
              body: "Care for elderly and disabled adults — home care, residential care, day centres, and direct payments. An ageing population and rising care costs mean this budget grows every year. It is jointly commissioned with the NHS in some areas.",
            },
            {
              emoji: "🌳",
              pct: "10%",
              title: "Environment & Highways",
              color: "#f0fdf4",
              border: "#22c55e",
              amount: "~£110m",
              body: "Waste collection, street cleaning, parks maintenance, road repairs, street lighting, and the fly-tipping enforcement programme. The Don't Mess with Brent campaign and CCTV investment come from this budget.",
            },
            {
              emoji: "📚",
              pct: "7%",
              title: "Libraries, Leisure & Culture",
              color: "#eff6ff",
              border: "#3b82f6",
              amount: "~£77m",
              body: "Libraries, leisure centres, arts programming, community events, and the Brent Museum. This is the area most vulnerable to cuts when savings are needed — despite being among the most visible and valued services by residents.",
            },
            {
              emoji: "🏛️",
              pct: "7%",
              title: "Corporate & Democratic Services",
              color: "#fffbeb",
              border: "#eab308",
              amount: "~£77m",
              body: "Running the council itself — IT, legal, HR, finance, democratic services, and the Civic Centre. Includes the cost of councillors' allowances (published annually in the council's statement of accounts).",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <strong style={{ fontSize: "0.95rem" }}>
                  {item.emoji} {item.title}
                </strong>
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    flexShrink: 0,
                    marginLeft: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      background: item.border,
                      color: "white",
                      padding: "2px 8px",
                      borderRadius: "10px",
                      fontWeight: "700",
                    }}
                  >
                    {item.pct}
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      background: "#f1f5f9",
                      color: "#64748b",
                      padding: "2px 8px",
                      borderRadius: "10px",
                      fontWeight: "600",
                    }}
                  >
                    {item.amount}
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}

          <div
            className="logic-box"
            style={{
              background: "#f0f9ff",
              borderLeft: "5px solid #3b82f6",
              marginTop: "4px",
            }}
          >
            <strong>Read the full accounts</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "6px",
                lineHeight: "1.6",
              }}
            >
              Brent publishes its full Statement of Accounts every year — every
              pound of spending is publicly accountable. The accounts include
              officer salaries over £50,000, councillor allowances, and all
              major contracts.
            </p>
            <a
              href="https://www.brent.gov.uk/your-council/financial-information/statement-of-accounts"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                background: "#3b82f6",
                color: "white",
                padding: "7px 14px",
                borderRadius: "6px",
                fontSize: "0.8rem",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Read Brent's Statement of Accounts
            </a>
          </div>
        </div>
      )}

      {activeSection === "crisis" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>The Budget Crisis</h3>
            <p>
              Why Brent's finances are under severe pressure — and what it means
              for you.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#fef2f2",
              borderLeft: "5px solid #ef4444",
              marginBottom: "16px",
            }}
          >
            <strong style={{ fontSize: "1rem" }}>
              Brent faces a structural deficit
            </strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              Like most London councils, Brent is spending more than it
              receives. The gap between what the council needs to spend on
              statutory services and what it actually receives in funding has
              grown year on year. Without intervention, councils facing this
              position can issue a Section 114 notice — effectively declaring
              bankruptcy.
            </p>
          </div>

          <div className="problem-grid" style={{ marginBottom: "16px" }}>
            {[
              {
                stat: "4.99%",
                label: "Max Tax Rise",
                detail: "The legal ceiling without a public referendum.",
              },
              {
                stat: "£60m+",
                label: "Savings Target",
                detail: "Cumulative savings required over 3 years.",
              },
              {
                stat: "3,000+",
                label: "Temp Accommodation",
                detail: "Households in costly temporary housing.",
              },
              {
                stat: "8%",
                label: "SEND Demand Rise",
                detail:
                  "Year-on-year increase in Education, Health & Care plans.",
              },
            ].map((item, i) => (
              <div key={i} className="data-card">
                <span className="data-stat" style={{ color: "var(--accent)" }}>
                  {item.stat}
                </span>
                <h4>{item.label}</h4>
                <p style={{ fontSize: "0.8rem", color: "#64748b" }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {[
            {
              title: "Why government funding does not cover costs",
              body: "Central government funding to councils has fallen significantly in real terms since 2010. Brent receives a needs-based grant that accounts for deprivation — but the formula has not kept pace with actual cost increases. The result is that Brent must raise more locally via Council Tax to fund services the government used to pay for.",
            },
            {
              title: "The temporary accommodation crisis",
              body: "Brent spends over £100 million per year housing homeless families in temporary accommodation — hotels, B&Bs, and privately leased properties. This is now one of the council's fastest-growing costs, driven by a lack of affordable housing, rising private rents, and the end of pandemic eviction protections. Each family in a hotel costs the council several times what a social housing tenancy would cost.",
            },
            {
              title: "Children's services — an irreducible pressure",
              body: "Children's services are a statutory duty — the council cannot legally reduce spending below a minimum safe level. Demand for child protection, looked-after children placements, and SEND support has risen sharply post-pandemic. The private residential care market charges councils extremely high rates for complex placements, with little competitive pressure.",
            },
            {
              title: "What savings look like in practice",
              body: "When councils face deficits, savings come from: reducing discretionary services (leisure, libraries, arts), increasing fees and charges, restructuring staff, selling assets, and deferring capital investment. Brent has already made hundreds of millions of pounds of savings since 2010. The remaining options are increasingly painful — there is limited low-hanging fruit left.",
            },
            {
              title: "What residents can do",
              body: "The budget process is the single moment when residents have the most direct influence over council decisions. The annual budget consultation — usually in autumn — allows residents to prioritise services. Responses genuinely affect decisions at the margin. The Overview and Scrutiny Committee holds the executive to account and accepts public submissions. See the 'Hold Them Accountable' tab for how to engage.",
            },
          ].map((item, i) => (
            <div key={i} className="logic-box" style={{ marginBottom: "12px" }}>
              <strong style={{ color: "var(--accent)" }}>{item.title}</strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeSection === "accountable" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Hold Them Accountable</h3>
            <p>
              Real mechanisms for residents to influence how Brent spends public
              money.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#f0fdf4",
              borderLeft: "5px solid #22c55e",
              marginBottom: "16px",
            }}
          >
            <strong>
              Your council tax pays for all of this — you have the right to
              scrutinise it
            </strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "6px",
                lineHeight: "1.6",
              }}
            >
              Brent Council is legally required to be transparent about how it
              spends public money. Most residents never use the tools available
              to them. The tools below are free, legally enforceable, and
              genuinely used by people who get results.
            </p>
          </div>

          {[
            {
              emoji: "📋",
              title: "Budget Consultation — respond every autumn",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "Brent runs a public budget consultation every autumn before the February budget-setting Full Council meeting. You can say which services matter most to you and where you would accept cuts. Responses are reported to councillors and genuinely influence decisions at the margin — particularly when a large number of residents respond consistently. Look for it on the council website from September each year.",
              link: {
                label: "Brent Consultations",
                url: "https://www.brent.gov.uk/your-council/consultations",
              },
            },
            {
              emoji: "🏛️",
              title: "Attend Full Council — budget meeting in February",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "The annual budget is set at a Full Council meeting in February. This is a public meeting — any resident can attend. You can submit questions in advance (deadline usually 5 working days before). The meeting is also livestreamed. Budget debates are often the most heated of the year. Finding out the date and attending or watching sends a signal that residents are paying attention.",
              link: {
                label: "Council Meeting Calendar",
                url: "https://democracy.brent.gov.uk/ieDocHome.aspx",
              },
            },
            {
              emoji: "🔍",
              title: "Overview and Scrutiny — submit evidence",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "Brent's Overview and Scrutiny Committee holds the Cabinet to account on spending and policy decisions. Residents and community organisations can submit written evidence to scrutiny inquiries. The committee can call in Cabinet decisions for review. Check the scrutiny committee work programme — when they are reviewing a topic you care about, submitting evidence is one of the most direct ways to influence a decision.",
              link: {
                label: "Overview & Scrutiny Committee",
                url: "https://democracy.brent.gov.uk/ieListMeetings.aspx?CommitteeId=352",
              },
            },
            {
              emoji: "📄",
              title:
                "Freedom of Information requests — free and legally binding",
              color: "#fffbeb",
              border: "#eab308",
              body: "Under the Freedom of Information Act 2000, you can request any information held by Brent Council that is not already published. The council must respond within 20 working days. Useful for: officer salaries, contract values, equality impact assessments, internal reports, and complaints data. Submit via the WhatDoTheyKnow website — responses become public record.",
              link: {
                label: "Submit an FOI Request",
                url: "https://www.whatdotheyknow.com/body/brent",
              },
            },
            {
              emoji: "📊",
              title: "Read the published accounts — it is all public",
              color: "#f0f9ff",
              border: "#3b82f6",
              body: "Brent's Statement of Accounts is published every year and includes: every officer earning over £50,000 (named), all councillor allowances, major contracts, pension fund performance, and the council's financial risk register. It is a public document and reading it — or sharing what you find — is one of the most powerful forms of democratic accountability available.",
              link: {
                label: "Brent Statement of Accounts",
                url: "https://www.brent.gov.uk/your-council/financial-information/statement-of-accounts",
              },
            },
            {
              emoji: "🗳️",
              title: "Contact your ward councillors directly",
              color: "#f0fdf4",
              border: "#16a34a",
              body: "Every Brent resident is represented by three ward councillors who sit on the Full Council and vote on the budget. They are obligated to respond to constituent correspondence. Find your councillors by postcode on the Brent Council website. Email is the most effective method — phone calls are often not logged. A councillor who receives ten emails about the same issue will raise it.",
              link: {
                label: "Find Your Councillors",
                url: "https://democracy.brent.gov.uk/mgFindMember.aspx",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <strong style={{ fontSize: "0.95rem" }}>
                {item.emoji} {item.title}
              </strong>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {activeSection === "help" && (
        <div>
          <div className="section-header" style={{ marginBottom: "16px" }}>
            <h3>Financial Help</h3>
            <p>
              If the cost of living or Council Tax rise is affecting you — here
              is what you can claim.
            </p>
          </div>

          <div
            className="logic-box"
            style={{
              background: "#f0fdf4",
              borderLeft: "5px solid #22c55e",
              marginBottom: "16px",
            }}
          >
            <strong>Free debt advice — do not struggle alone</strong>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "8px",
                lineHeight: "1.6",
              }}
            >
              If you are struggling with debt, council tax arrears, or household
              bills — free, confidential, non-judgmental advice is available.
              You do not need to be in crisis to use these services. The earlier
              you seek advice, the more options you have.
            </p>
          </div>

          {[
            {
              emoji: "🏛️",
              title: "Council Tax Support Scheme",
              type: "Up to 100% reduction",
              color: "#f0fdf4",
              border: "#22c55e",
              body: "Brent's Council Tax Support scheme reduces your bill based on your income and household composition. Working-age residents can receive up to 80% reduction; pensioners can receive up to 100%. You must apply — it is not automatic. If your income has recently fallen, apply immediately as backdating is limited.",
              link: {
                label: "Apply for Council Tax Support",
                url: "https://www.brent.gov.uk/council-tax/council-tax-support",
              },
            },
            {
              emoji: "🆘",
              title: "Brent Resident Support Scheme",
              type: "Emergency grants",
              color: "#fef2f2",
              border: "#ef4444",
              body: "Emergency grants (not loans) for Brent residents in financial crisis. Can cover food, essential household items, utility costs, and white goods. Means-tested. Applications are assessed by the council. You cannot apply online — call the council or ask a GP, social worker, or advice agency to refer you.",
              phone: "020 8937 1234",
              link: {
                label: "Resident Support Scheme",
                url: "https://www.brent.gov.uk/resident-support-scheme",
              },
            },
            {
              emoji: "🍲",
              title: "Household Support Fund",
              type: "Food & essentials",
              color: "#fff7ed",
              border: "#f97316",
              body: "The government's Household Support Fund provides grants to councils to distribute to households in financial need. Brent uses this to provide food vouchers, utility top-ups, and essential item grants. Eligibility changes each funding round — check the Brent website for current criteria and how to apply.",
              link: {
                label: "Household Support Fund — Brent",
                url: "https://www.brent.gov.uk/household-support-fund",
              },
            },
            {
              emoji: "📞",
              title: "StepChange — Free Debt Advice",
              type: "Free charity",
              color: "#eff6ff",
              border: "#3b82f6",
              body: "StepChange is the UK's leading debt charity offering completely free, confidential debt advice by phone and online. They can set up Debt Management Plans, advise on insolvency options, and help negotiate with creditors. They never charge fees and never sell your data. Used by over 600,000 people per year.",
              phone: "0800 138 1111 (free)",
              link: {
                label: "StepChange Debt Charity",
                url: "https://www.stepchange.org",
              },
            },
            {
              emoji: "✝️",
              title: "Christians Against Poverty — Free Debt Help",
              type: "Free charity",
              color: "#fdf4ff",
              border: "#a855f7",
              body: "CAP offers free, in-home debt counselling for anyone regardless of faith. A CAP debt coach will visit you at home, help you create a budget, negotiate with creditors, and support you through debt resolution. Several Brent churches are CAP centres — you do not need to be religious to access the service.",
              link: {
                label: "Find a CAP Centre in Brent",
                url: "https://capuk.org/get-help/cap-debt-help",
              },
            },
            {
              emoji: "💡",
              title: "Brent Cost of Living Hub",
              type: "All help in one place",
              color: "#fffbeb",
              border: "#eab308",
              body: "Brent Council's cost of living hub brings together all available financial support in one place — energy bill help, food banks, benefits checks, debt advice, and warm spaces. If you are not sure what you are entitled to, start here. The hub is updated regularly as new support becomes available.",
              link: {
                label: "Brent Cost of Living Hub",
                url: "https://www.brent.gov.uk/cost-of-living",
              },
            },
          ].map((item, i) => (
            <div
              key={i}
              className="logic-box"
              style={{
                background: item.color,
                borderLeft: `5px solid ${item.border}`,
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <strong style={{ fontSize: "0.95rem" }}>
                  {item.emoji} {item.title}
                </strong>
                <span
                  style={{
                    fontSize: "0.72rem",
                    background: item.border,
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    fontWeight: "600",
                    flexShrink: 0,
                    marginLeft: "8px",
                  }}
                >
                  {item.type}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {item.body}
              </p>
              {item.phone && (
                <p style={{ fontSize: "0.82rem", marginTop: "6px" }}>
                  <span style={{ color: "#64748b" }}>Phone: </span>
                  <code style={{ fontWeight: "600" }}>{item.phone}</code>
                </p>
              )}
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    background: item.border,
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  {item.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-grid">
        <div className="footer-column">
          <div className="footer-brand">
            <div className="logo small">BN</div>
            <strong>Brent Navigator</strong>
          </div>
          <p>Community-led data for the 330,000 residents of Brent.</p>
        </div>

        <div className="footer-column">
          <h4>Resident Services</h4>
          <ul>
            {/* Verified: Public entry for all council tax services */}
            <li>
              <a
                href="https://www.brent.gov.uk/council-tax"
                target="_blank"
                rel="noreferrer"
              >
                Council Tax & Support
              </a>
            </li>
            {/* Verified: Public 'Report It' hub for fly-tipping and waste */}
            <li>
              <a
                href="https://www.brent.gov.uk/report-it"
                target="_blank"
                rel="noreferrer"
              >
                Report a Problem
              </a>
            </li>
            {/* Verified: Public jobs and volunteering portal */}
            <li>
              <a
                href="https://www.brent.gov.uk/jobs-training-and-skills"
                target="_blank"
                rel="noreferrer"
              >
                Jobs & Training
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Direct Support</h4>
          <ul>
            {/* Verified: Public landing for all benefits and money advice */}
            <li>
              <a
                href="https://www.brent.gov.uk/benefits-and-money-advice"
                target="_blank"
                rel="noreferrer"
              >
                Benefits & Financial Help
              </a>
            </li>
            {/* Verified: Public entry for housing and homelessness support */}
            <li>
              <a
                href="https://www.brent.gov.uk/housing"
                target="_blank"
                rel="noreferrer"
              >
                Housing & Homelessness
              </a>
            </li>
            {/* Verified: Public council contact and accessibility info */}
            <li>
              <a
                href="https://www.brent.gov.uk/your-council/contact-us"
                target="_blank"
                rel="noreferrer"
              >
                Contact & Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2026- Present • Supporting the community • Made with ❤️ by{" "}
          <a
            href="https://github.com/Maame-codes"
            target="_blank"
            rel="noreferrer"
            style={{
              marginLeft: "5px",
              color: "var(--accent)",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Maame
          </a>
        </p>
      </div>
    </footer>
  );
}
