import Link from "next/link";

const services = [
  {
    icon: "🛡️",
    title: "Disability Benefits",
    description:
      "Find out if you qualify for monthly disability benefit programs. Free eligibility checks available.",
  },
  {
    icon: "⚖️",
    title: "Legal Assistance",
    description:
      "Connect with legal professionals who specialize in benefits claims, injury cases, and consumer rights.",
  },
  {
    icon: "🏥",
    title: "Senior Programs",
    description:
      "Explore programs designed to help seniors with healthcare, prescription costs, and daily living support.",
  },
  {
    icon: "📋",
    title: "Insurance Options",
    description:
      "Compare insurance plans and find coverage that fits your needs and budget.",
  },
];

const steps = [
  {
    number: "1",
    title: "Answer a Few Questions",
    description:
      "Tell us about your situation so we can match you with the right programs.",
  },
  {
    number: "2",
    title: "Review Your Options",
    description:
      "We'll show you benefit programs you may be eligible for based on your answers.",
  },
  {
    number: "3",
    title: "Get Connected",
    description:
      "Speak with a qualified specialist who can help you through the process.",
  },
];

export default function Home() {
  return (
    <>
      {/* Nav */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight text-gray-900">
            Online Benefit Helper
          </span>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900">
              Services
            </a>
            <a href="#how-it-works" className="hover:text-gray-900">
              How It Works
            </a>
            <a href="#about" className="hover:text-gray-900">
              About
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Helping Americans Find the Benefits They Deserve
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We connect people with benefit programs, legal resources, and
              support services — all at no cost to you. Answer a few simple
              questions to see what you may qualify for.
            </p>
            <a
              href="#services"
              className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
            >
              Explore Programs
            </a>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-center text-gray-900">
              What We Help With
            </h2>
            <p className="mt-3 text-center text-gray-500 max-w-xl mx-auto">
              We partner with trusted providers across multiple benefit
              categories.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl">{s.icon}</span>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="bg-gray-50 py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-center text-gray-900">
              How It Works
            </h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              {steps.map((s) => (
                <div key={s.number} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold">
                    {s.number}
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900">About Us</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Online Benefit Helper is a resource platform that connects
              individuals with benefit programs and professional services. We do
              not provide legal, financial, or medical advice. Our goal is to
              simplify the process of finding programs you may be eligible for
              and connecting you with qualified professionals.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 px-6">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>
            &copy; {new Date().getFullYear()} Online Benefit Helper. All rights
            reserved.
          </span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-900">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
