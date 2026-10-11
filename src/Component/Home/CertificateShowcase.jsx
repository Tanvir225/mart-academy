
import React from "react";

const CertificateShowcase = () => {
  const benefits = [
    {
      icon: "🏛️",
      title: "Government Approved",
      description: "Recognized by the relevant authority.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: "🛡️",
      title: "100% Authentic",
      description: "Showcase your genuine certificate.",
      color: "bg-sky-100 text-sky-600",
    },
    {
      icon: "🖥️",
      title: "Digital Certificate",
      description: "Access your e-certificate when available.",
      color: "bg-violet-100 text-violet-600",
    },
    {
      icon: "💼",
      title: "Boost Your Career",
      description: "Showcase your learning achievements.",
      color: "bg-amber-100 text-amber-600",
    },
  ];

  const certificateImages = [
    "/certificates/certificate-1.jpg",
    "/certificates/certificate-2.jpg",
    "/certificates/certificate-3.jpg",
  ];

  const details = [
    "Issuing authority and seal",
    "Your name and course details",
    "Certificate ID, if provided",
    "Professional certificate format",
  ];

  return (
    <section
      id="certificate"
      className="certificate-section relative isolate  overflow-hidden rounded-[2rem] py-5  md:py-10"
    >
      {/* Animated background decorations */}
      <div className="pointer-events-none absolute -left-24 -top-28 -z-10 h-80 w-80 rounded-full bg-teal-200/50 blur-3xl animate-float-slow" />

      <div className="pointer-events-none absolute -bottom-32 -right-24 -z-10 h-96 w-96 rounded-full bg-cyan-200/50 blur-3xl animate-float-slow animation-delay-2" />

      <div className="pointer-events-none absolute right-8 top-8 grid grid-cols-4 gap-3 opacity-40">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-teal-400"
          />
        ))}
      </div>

      <div className="relative mx-auto w-11/12 max-w-[1400px]">
        {/* Top heading */}
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <div className="inline-flex items-center animate-pulse gap-3 rounded-full border border-teal-100 bg-teal-50/90 px-5 py-3 text-sm font-semibold text-teal-800 shadow-sm">
            <span className="text-xl">🎓</span>
            <span className="text-[10px] md:text-sm">
              Your Skills <span className="mx-1">•</span>
              Our Commitment <span className="mx-1">•</span>
              Recognition
            </span>
          </div>

          <h2 className="mt-7 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Get Your
            <span className="mt-2 block bg-gradient-to-tr from-teal-500 via-purple-400 to-cyan-500 bg-clip-text text-transparent">
              E-Certificate
            </span>
          </h2>

          <div className="mx-auto mt-3 h-1.5 w-48 rounded-full bg-gradient-to-r from-amber-300 to-yellow-400 animate-shimmer" />

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7  sm:text-base md:text-lg">
            Complete your course at Mart Academy and celebrate your
            achievement with a <span className="text-teal-300">government-issued</span> certificate that showcases
            your learning and skills.
          </p>
        </div>

        {/* Main three-column layout */}
        <div className="mt-2 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.35fr_0.9fr] lg:gap-8">

          {/* LEFT: Benefits */}
          <div className="space-y-3">
            {benefits.map((item, index) => (
              <div
                key={item.title}
                style={{ animationDelay: `${index * 150}ms` }}
                className={`certificate-benefit group flex items-center gap-4 rounded-2xl border border-white/80 ${item?.color} p-3 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-lg sm:p-4`}
              >
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-3xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 ${item.color}`}
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-[#174477] sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER: Certificate gallery */}
          <div className="relative mx-auto w-full max-w-[560px] px-2 py-8 sm:px-5  ">

            <div className="absolute inset-10 rounded-full bg-teal-300/30 blur-3xl animate-pulse" />

            {/* Floating approval-style badge */}
            <div className="absolute right-1 -top-5 z-30 flex h-24 w-24 animate-float flex-col items-center justify-center rounded-full border-[5px] border-white bg-gradient-to-br from-emerald-500 to-emerald-800 text-center text-white shadow-xl sm:right-2 sm:h-28 sm:w-28">
              <span className="text-4xl font-black leading-none">✓</span>
              <span className="mt-1 text-[10px] font-black leading-tight tracking-wide">
                CERTIFICATE
                <br />
                SHOWCASE
              </span>
            </div>

            {/* Overlapping certificate images */}
            <div className="relative flex h-[300px] items-center justify-center sm:h-[380px] md:h-[420px]">

              {/* Left certificate */}
              <div className="absolute left-[1%] z-0 w-[50%] -rotate-12 transition duration-500 hover:z-20 hover:rotate-0 hover:scale-105">
                <div className="overflow-hidden border-4 border-white bg-white shadow-xl">
                  <img
                    src={certificateImages[0]}
                    alt="Certificate preview one"
                    className="aspect-[3/4] w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right certificate */}
              <div className="absolute right-[1%] z-0 w-[50%] rotate-12 transition duration-500 hover:z-20 hover:rotate-0 hover:scale-105">
                <div className="overflow-hidden border-4 border-white bg-white shadow-xl">
                  <img
                    src={certificateImages[2]}
                    alt="Certificate preview three"
                    className="aspect-[3/4] w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Main center certificate */}
              <div className="certificate-main absolute z-10 w-[70%] -translate-y-1 transition-transform duration-500 hover:-translate-y-3">
                <div className="overflow-hidden border-[5px] border-white bg-white shadow-2xl ring-1 ring-teal-100">
                  <img
                    src={certificateImages[1]}
                    alt="Main certificate preview"
                    className="aspect-[3/4] w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Small floating label */}
            <div className="absolute bottom-2 left-0 z-20 rounded-2xl border border-teal-100 bg-white/95 px-4 py-3 shadow-lg animate-float-slow">
              <p className="text-xs text-slate-500">
                Celebrate your progress
              </p>
              <p className="mt-1 font-bold text-teal-700">
                Learn • Practice • Achieve
              </p>
            </div>
          </div>

          {/* RIGHT: Certificate details */}
          <div className="relative overflow-hidden rounded-[2rem] border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-cyan-50 p-6 sm:p-8">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-teal-200/40 blur-2xl" />

            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-2xl">
                🏅
              </div>

              <h3 className="mt-4 text-2xl font-black leading-snug text-teal-800">
                Your Certificate
                <br />
                Looks Like This
              </h3>

              <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-teal-400 to-cyan-300" />

              <div className="mt-7 space-y-5">
                {details.map((detail, index) => (
                  <div
                    key={detail}
                    className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1"
                  >
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-black text-white shadow-sm"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      ✓
                    </span>

                    <p className="text-sm leading-6 text-slate-700">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9 border-t border-teal-100 pt-6">
                <p className="text-xl font-black italic leading-relaxed text-teal-700 sm:text-2xl">
                  Real Skills.
                  <br />
                  Real Achievement.
                </p>

                <div className="mt-3 h-1 w-32 origin-left -rotate-3 rounded-full bg-teal-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-7 overflow-hidden rounded-xl md:rounded-full bg-gradient-to-br from-cyan-800 via-purple-500 to-teal-600 px-6 py-6 text-white shadow-xl transition duration-500 hover:shadow-2xl sm:px-10 md:px-12">
          <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-white/10 blur-xl" />

          <div className="relative flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-14  shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/15 text-3xl">
                🛡️
              </div>

              <div>
                <h3 className="text-sm font-black md:text-lg">
                  Your Effort Deserves Recognition
                </h3>

                <p className="mt-1 text-sm text-teal-50">
                  Get Certified. Get Ahead.
                </p>
              </div>
            </div>

            <a
              href="#courses"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-3.5 font-bold text-teal-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
            >
              Explore Our Courses
              <span className="text-sm md:text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateShowcase;
