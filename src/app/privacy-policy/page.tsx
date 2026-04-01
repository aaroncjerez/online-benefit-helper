import Link from "next/link";

export const metadata = { title: "Privacy Policy — Online Benefit Helper" };

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/" className="text-sm text-blue-600 hover:underline">
        &larr; Back to Home
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">
        Last updated: April 1, 2026
      </p>
      <div className="mt-8 space-y-6 text-sm text-gray-700 leading-relaxed">
        <p>
          Online Benefit Helper (&quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;) respects your privacy and is committed to protecting
          your personal information. This Privacy Policy describes how we
          collect, use, and share information when you visit our website.
        </p>
        <h2 className="text-lg font-semibold text-gray-900">
          Information We Collect
        </h2>
        <p>
          We may collect information you voluntarily provide, such as your name,
          phone number, and responses to eligibility questions. We also
          automatically collect certain usage data, including IP address, browser
          type, and pages visited.
        </p>
        <h2 className="text-lg font-semibold text-gray-900">
          How We Use Your Information
        </h2>
        <p>
          We use collected information to match you with relevant benefit
          programs, connect you with qualified service providers, improve our
          website, and comply with legal obligations.
        </p>
        <h2 className="text-lg font-semibold text-gray-900">
          Information Sharing
        </h2>
        <p>
          We may share your information with third-party service providers and
          partners who can assist with your benefit inquiries. We do not sell
          your personal information. We may disclose information when required
          by law or to protect our rights.
        </p>
        <h2 className="text-lg font-semibold text-gray-900">Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <span className="font-medium">support@onlinebenefithelper.com</span>.
        </p>
      </div>
    </div>
  );
}
