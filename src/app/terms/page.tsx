import Link from "next/link";

export const metadata = { title: "Terms of Service — Online Benefit Helper" };

export default function Terms() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/" className="text-sm text-blue-600 hover:underline">
        &larr; Back to Home
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-gray-900">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        Last updated: April 1, 2026
      </p>
      <div className="mt-8 space-y-6 text-sm text-gray-700 leading-relaxed">
        <p>
          By using the Online Benefit Helper website, you agree to these Terms
          of Service. If you do not agree, please do not use our website.
        </p>
        <h2 className="text-lg font-semibold text-gray-900">Our Services</h2>
        <p>
          Online Benefit Helper is a referral platform that connects users with
          third-party benefit programs and service providers. We do not
          guarantee eligibility for any program, and we do not provide legal,
          financial, or medical advice.
        </p>
        <h2 className="text-lg font-semibold text-gray-900">Disclaimers</h2>
        <p>
          All information on this website is provided &quot;as is&quot; for
          general informational purposes only. We make no warranties regarding
          the accuracy or completeness of any information. Benefit amounts,
          eligibility criteria, and program availability are subject to change
          without notice.
        </p>
        <h2 className="text-lg font-semibold text-gray-900">
          Limitation of Liability
        </h2>
        <p>
          Online Benefit Helper shall not be liable for any damages arising from
          your use of this website or reliance on any information provided. Your
          use of third-party services accessed through our platform is governed
          by those providers&apos; own terms and policies.
        </p>
        <h2 className="text-lg font-semibold text-gray-900">Contact Us</h2>
        <p>
          Questions about these terms? Contact us at{" "}
          <span className="font-medium">support@onlinebenefithelper.com</span>.
        </p>
      </div>
    </div>
  );
}
