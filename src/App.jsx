import React from 'react'

const services = [
  {
    tag: 'Websites',
    title: 'Business & portfolio websites',
    body:
      'Clean, modern websites for small businesses, personal brands, and local services. Optimised for mobile, speed and clarity.',
    points: ['3–6 pages', 'Fast delivery', 'Contact & WhatsApp links'],
  },
  {
    tag: 'Web Apps',
    title: 'Custom web applications',
    body:
      'Dashboards, CRMs, booking systems, and internal tools built around your exact workflows and business rules.',
    points: ['Role-based access', 'Reporting & exports', 'Scalable architecture'],
  },
  {
    tag: 'Mobile Apps',
    title: 'Flutter mobile apps',
    body:
      'High-quality Android & iOS apps for customers, delivery partners, and internal teams with a single codebase.',
    points: ['Play Store ready', 'Modern UI/UX', 'API integration'],
  },
  {
    tag: 'Backend',
    title: 'Java & Spring Boot backends',
    body:
      'Production-grade APIs and microservices with security, logging, and performance best practices built-in.',
    points: ['REST APIs', 'Microservices', 'PostgreSQL / MySQL'],
  },
  {
    tag: 'Cloud',
    title: 'AWS & DevOps setup',
    body:
      'Deploy, scale, and monitor your applications on the cloud with reliable, secure infrastructure.',
    points: ['EC2, RDS, S3', 'CI/CD pipelines', 'Docker & containers'],
  },
  {
    tag: 'Support',
    title: 'Ongoing maintenance',
    body:
      'Keep your software healthy with structured maintenance, performance tuning, and feature enhancements.',
    points: ['Bug fixing', 'Minor features', 'Server checks'],
  },
]

const pricing = [
  {
    tag: 'Starter',
    title: 'Websites',
    price: '₹9,999+',
    note: 'Perfect for small businesses, shops, clinics, and coaching centres.',
    chips: ['3–4 pages', 'Mobile friendly', 'WhatsApp & contact forms'],
  },
  {
    tag: 'Growth',
    title: 'Web apps',
    price: '₹19,999+',
    note: 'Custom workflows for booking, CRM, inventory, and internal tools.',
    chips: ['Login & roles', 'Dashboards', 'Reports & exports'],
  },
  {
    tag: 'Scale',
    title: 'Mobile apps',
    price: '₹29,999+',
    note: 'Flutter apps for Android & iOS, connected to your backend.',
    chips: ['Single codebase', 'API integration', 'Store-ready build'],
  },
  {
    tag: 'Backend',
    title: 'APIs & microservices',
    price: '₹499+/API',
    note: 'For startups and enterprises needing robust backend engineering.',
    chips: ['Java & Spring Boot', 'Secure endpoints', 'Database integration'],
  },
  {
    tag: 'Cloud',
    title: 'AWS setup',
    price: '₹5,999+',
    note: 'Deploy existing or new apps to AWS with best practices.',
    chips: ['EC2 / RDS / S3', 'Basic CI/CD', 'Monitoring hooks'],
  },
  {
    tag: 'Retainer',
    title: 'Maintenance plans',
    price: '₹4,999+/month',
    note: 'Steady support for updates, fixes, and small improvements.',
    chips: ['Priority fixes', 'Minor features', 'Regular checkups'],
  },
]

const testimonials = [
  {
    text:
      'Our website was delivered on time with a clean, modern design. Communication was clear from start to finish.',
    name: 'Amit Kumar',
    role: 'Founder, local business – India',
  },
  {
    text:
      'We needed a reliable backend for our application. The APIs were well-documented and easy for our frontend team to consume.',
    name: 'Sarah Lee',
    role: 'Product Manager – Global SaaS client',
  },
  {
    text:
      'Quaricorn Software handled both the app build and the cloud deployment. Everything works smoothly and is easy to maintain.',
    name: 'Rahul Mehta',
    role: 'Entrepreneur – India',
  },
]

const portfolio = [
  {
    tag: 'Platform',
    title: 'Roadside assistance backend',
    body:
      'Service-request driven backend that connects vehicle owners, service providers, and operations teams with real-time updates.',
    list: ['Multi-role access', 'Pricing by area & distance', 'Notifications & status tracking'],
  },
  {
    tag: 'Data',
    title: 'Healthcare data exchange APIs',
    body:
      'Robust API layer to securely move and transform sensitive data between systems using queues and background jobs.',
    list: ['Queued processing', 'Encryption in transit', 'Audit logs & monitoring'],
  },
  {
    tag: 'Demo',
    title: 'Restaurant POS & ordering demo',
    body:
      'End-to-end demo for dine-in and takeaway flows, from table management and ordering to billing and daily reports.',
    list: ['Table & menu management', 'KOT-style order flow', 'Billing & daily summaries'],
  },
]

function App() {
  return (
    <div className="app-root">
      <main className="container">
        <header>
          <div className="badge">
            <span className="badge-dot" />
            QUARICORN SOFTWARE
          </div>
          <div className="hero-grid">
            <section>
              <h1>
                Smart software for{' '}
                <span className="hero-highlight">small businesses & global teams.</span>
              </h1>
              <p className="hero-subtitle">
                We design and build modern websites, mobile apps, and cloud-powered backends
                using React, Flutter, Java, Spring Boot, and AWS.
              </p>
              <div className="hero-actions">
                <a href="https://wa.me/918217603602" target="_blank" rel="noreferrer" className="btn btn-primary">
                  <span className="btn-icon">⚡</span>
                  WhatsApp for a free consultation
                </a>
                <a href="mailto:quaricorn.software@gmail.com" className="btn btn-outline">
                  📩 Email project details
                </a>
              </div>
              <div className="hero-note">
                <img
                  src="https://api.dicebear.com/9.x/identicon/svg?seed=quaricorn"
                  alt="Quaricorn avatar"
                  loading="lazy"
                />
                <div>
                  <div style={{ fontSize: '0.8rem' }}>Senior engineer with 6+ years of experience</div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                    Working with clients in India and abroad.
                  </div>
                </div>
              </div>
              <div className="chip-row">
                <span className="chip">Websites</span>
                <span className="chip">Mobile apps</span>
                <span className="chip">Java & Spring Boot</span>
                <span className="chip">Microservices</span>
                <span className="chip">AWS & DevOps</span>
              </div>
            </section>

            <aside className="hero-card">
              <div className="hero-card-inner">
                <div className="hero-metric-tag">
                  Project snapshot
                  <span>New & existing projects</span>
                </div>
                <div className="hero-metric-grid">
                  <div className="metric-card">
                    <div className="metric-label">Typical website delivery</div>
                    <div className="metric-value metric-accent">5–10 days</div>
                    <div className="metric-sub">Includes mobile friendly layout.</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-label">Backend projects</div>
                    <div className="metric-value metric-accent">₹499+/API</div>
                    <div className="metric-sub">For secure, documented endpoints.</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-label">Engagement models</div>
                    <div className="metric-value">Fixed + Retainer</div>
                    <div className="metric-sub">Project or monthly support.</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-label">Clients</div>
                    <div className="metric-value">India & Global</div>
                    <div className="metric-sub">Startups, founders, small teams.</div>
                  </div>
                </div>
                <div className="hero-pill-row">
                  <span className="hero-pill">Free 30-minute consultation</span>
                  <span className="hero-pill">Tech stack suggestions</span>
                  <span className="hero-pill">Honest timeline & cost</span>
                </div>
              </div>
            </aside>
          </div>
        </header>

        <section className="section" id="services">
          <div className="section-header">
            <div>
              <div className="section-kicker">Services</div>
              <h2 className="section-title">What Quaricorn can build for you</h2>
            </div>
            <p className="section-subtitle">
              From quick marketing websites to complete cloud-backed platforms, we design, build, and deploy solutions
              that match your current budget and long-term goals.
            </p>
          </div>
          <div className="grid-3">
            {services.map((s) => (
              <article key={s.title} className="card">
                <div className="card-pill">
                  <span>●</span> {s.tag}
                </div>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-body">{s.body}</p>
                <ul className="card-list">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="section-header">
            <div>
              <div className="section-kicker">Portfolio</div>
              <h2 className="section-title">Examples of work & experience</h2>
            </div>
            <p className="section-subtitle">
              A mix of real client work and structured demo projects to showcase how we approach architecture, quality,
              and business problems.
            </p>
          </div>
          <div className="grid-3">
            {portfolio.map((item) => (
              <article key={item.title} className="card">
                <div className="card-pill">
                  <span>◆</span> {item.tag}
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-body">{item.body}</p>
                <ul className="card-list">
                  {item.list.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section-header">
            <div>
              <div className="section-kicker">Pricing</div>
              <h2 className="section-title">Transparent, flexible pricing</h2>
            </div>
            <p className="section-subtitle">
              Budget-friendly options for Indian small businesses and structured estimates for international clients,
              with clear scope and timelines.
            </p>
          </div>
          <div className="pricing-grid">
            {pricing.map((plan) => (
              <article key={plan.title} className="card">
                <div className="card-pill">
                  <span>₹</span> {plan.tag}
                </div>
                <h3 className="card-title">{plan.title}</h3>
                <div className="price-tag">
                  {plan.price}
                  <span> (indicative)</span>
                </div>
                <p className="price-note">{plan.note}</p>
                <div className="price-chip-row">
                  {plan.chips.map((chip) => (
                    <span key={chip} className="price-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="section-header">
            <div>
              <div className="section-kicker">Feedback</div>
              <h2 className="section-title">What clients & collaborators say</h2>
            </div>
            <p className="section-subtitle">
              Trust is built through consistent delivery, clear communication, and a focus on long-term partnerships.
            </p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <article key={t.name} className="testimonial">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">“{t.text}”</p>
                <div className="testimonial-author">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-header">
            <div>
              <div className="section-kicker">About</div>
              <h2 className="section-title">Quaricorn Software in a snapshot</h2>
            </div>
            <p className="section-subtitle">
              A compact, engineering-first studio based in India, focused on delivering clean, reliable software for
              founders and teams around the world.
            </p>
          </div>
          <div className="about-grid">
            <article className="about-card">
              <h3 className="about-heading">Who we are</h3>
              <p className="about-body">
                Quaricorn Software is led by a senior engineer with over six years of hands-on experience building
                Java, Spring Boot, microservice, and cloud-based systems for production environments.
              </p>
              <ul className="about-list">
                <li>Focused on clarity, maintainability, and performance.</li>
                <li>Comfortable working with both technical and non-technical founders.</li>
                <li>Available for one-time projects and long-term retainers.</li>
              </ul>
            </article>
            <article className="about-card">
              <h3 className="about-heading">How we work</h3>
              <p className="about-body">
                Every project starts with a short call or chat to understand your goals, constraints, and timelines.
                From there, we propose a simple plan with milestones, estimates, and communication channels.
              </p>
              <ul className="about-list">
                <li>Clear milestones with visible progress.</li>
                <li>Regular check-ins over WhatsApp, email, or calls.</li>
                <li>Source code, documentation, and deployment support included.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-header">
            <div>
              <div className="section-kicker">Contact</div>
              <h2 className="section-title">Start a project or ask a question</h2>
            </div>
            <p className="section-subtitle">
              Share a rough idea, a Google Doc, or an existing app that needs improvement. We will reply with options,
              timelines, and an honest recommendation.
            </p>
          </div>
          <div className="about-grid">
            <article className="contact-card">
              <div className="contact-row">
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">quaricorn@gmail.com</div>
                  <div className="contact-value">quaricorn.software@gmail.com</div>
                </div>
                <div>
                  <div className="contact-label">Phone & WhatsApp</div>
                  <div className="contact-value">+91 82176 03602</div>
                  <div className="contact-value">+91 93481 53726</div>
                </div>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Bhubaneswar, India · Working with clients worldwide</div>
                </div>
              </div>
              <div className="contact-actions">
                <a
                  href="https://wa.me/918217603602"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ paddingInline: '1rem' }}
                >
                  Chat on WhatsApp
                </a>
                <a href="mailto:quaricorn.software@gmail.com" className="btn btn-outline">
                  Send an email
                </a>
              </div>
            </article>
          </div>
        </section>

        <footer className="footer">
          <div>© {new Date().getFullYear()} Quaricorn Software – Innovation. Engineering. Growth.</div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
