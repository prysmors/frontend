import LegalPageLayout, { LegalSection, DefinitionBlock, BulletList } from "./LegalPageLayout";

const SECTIONS = [
  { id: "interpretation", label: "Interpretation & Definitions" },
  { id: "data-collection", label: "Data Collection" },
  { id: "data-usage", label: "Use of Personal Data" },
  { id: "data-sharing", label: "Disclosure of Data" },
  { id: "data-retention", label: "Data Retention" },
  { id: "data-transfer", label: "Data Transfers" },
  { id: "data-rights", label: "Your Rights" },
  { id: "security", label: "Security" },
  { id: "children", label: "Children's Privacy" },
  { id: "third-party", label: "Third-Party Links" },
  { id: "changes", label: "Policy Changes" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="July 15, 2026"
      sections={SECTIONS}
    >
      <LegalSection id="interpretation" title="Interpretation and Definitions">
        <p>
          This Privacy Policy describes how Prysmors, Inc. ("Company", "we", "us", or "our")
          collects, uses, and protects your personal information when you use our enterprise
          decision intelligence platform, website, and related services (collectively, the "Service").
          By accessing or using the Service, you agree to the collection and use of information
          in accordance with this policy.
        </p>

        <h3 className="text-base font-semibold text-[var(--color-text)] mt-6 mb-3 font-display">
          Definitions
        </h3>
        <DefinitionBlock
          terms={[
            ["Account", "A unique account created for you to access our Service or parts of our Service."],
            ["Company", "Refers to Prysmors, Inc., the legal entity responsible for your data."],
            ["Cookies", "Small files placed on your device by a website, containing browsing history and preferences."],
            ["Personal Data", "Any information that identifies or can be used to identify an individual, including but not limited to name, email, IP address, and usage behavior."],
            ["Service", "The Prysmors enterprise platform, associated APIs, dashboards, and the website at prysmors.com."],
            ["Usage Data", "Data collected automatically through use of the Service, such as pages visited, session duration, and diagnostic information."],
            ["You", "The individual or legal entity accessing or using the Service."],
          ]}
        />
      </LegalSection>

      <LegalSection id="data-collection" title="Collecting and Using Your Personal Data">
        <h3 className="text-base font-semibold text-[var(--color-text)] mt-4 mb-2 font-display">
          Types of Data Collected
        </h3>

        <h4 className="text-[15px] font-semibold text-[var(--color-text)] mt-4 mb-2 font-display">
          Personal Data
        </h4>
        <p>
          While using our Service, we may ask you to provide certain personally identifiable
          information that can be used to contact or identify you. This may include:
        </p>
        <BulletList
          items={[
            "Full name and professional title",
            "Email address and phone number",
            "Company name, department, and job function",
            "Billing address and payment information",
            "IP address, browser type, and operating system",
            "Geographic location data derived from IP address",
          ]}
        />

        <h4 className="text-[15px] font-semibold text-[var(--color-text)] mt-4 mb-2 font-display">
          Usage Data
        </h4>
        <p>
          Usage Data is collected automatically when you interact with the Service. This
          includes information such as your device's Internet Protocol address, browser type,
          browser version, the pages you visit, the time and date of your visit, the duration
          of your sessions, and diagnostic data. We may also collect information about your
          interaction with dashboards, decision workflows, and API endpoints.
        </p>

        <h4 className="text-[15px] font-semibold text-[var(--color-text)] mt-4 mb-2 font-display">
          Enterprise Data
        </h4>
        <p>
          If you use the Service to process business or organizational data, that data is handled
          in accordance with our Enterprise Data Processing Agreement. We do not access, analyze,
          or use your enterprise data for purposes other than providing and improving the Service
          as directed by your organization.
        </p>
      </LegalSection>

      <LegalSection id="data-usage" title="Use of Your Personal Data">
        <p>We use Personal Data for the following purposes:</p>
        <BulletList
          items={[
            "To provide, maintain, and improve the Service and its features.",
            "To manage your Account and provide you with customer support.",
            "To process transactions and send related information, including invoices and confirmations.",
            "To send administrative notifications, such as service updates, security alerts, and changes to our terms.",
            "To monitor usage patterns and analyze trends to improve user experience and platform performance.",
            "To detect, prevent, and address technical issues, fraud, and unauthorized access.",
            "To comply with legal obligations, enforce our agreements, and protect our rights.",
            "To send promotional communications only with your explicit consent, which you may withdraw at any time.",
          ]}
        />
      </LegalSection>

      <LegalSection id="data-sharing" title="Disclosure of Your Personal Data">
        <p>
          We may share your personal information in the following situations and with the
          following parties:
        </p>

        <h4 className="text-[15px] font-semibold text-[var(--color-text)] mt-4 mb-2 font-display">
          Service Providers
        </h4>
        <p>
          We engage third-party companies and individuals to facilitate the Service, provide
          the Service on our behalf, perform Service-related functions, or assist us in
          analyzing how the Service is used. These parties have access to your Personal Data
          only to perform these tasks on our behalf and are obligated not to disclose or
          use it for any other purpose.
        </p>

        <h4 className="text-[15px] font-semibold text-[var(--color-text)] mt-4 mb-2 font-display">
          Business Transfers
        </h4>
        <p>
          If we are involved in a merger, acquisition, or asset sale, your Personal Data may
          be transferred. We will provide notice before your Personal Data becomes subject to
          a different privacy policy.
        </p>

        <h4 className="text-[15px] font-semibold text-[var(--color-text)] mt-4 mb-2 font-display">
          Legal Requirements
        </h4>
        <p>
          We may disclose your Personal Data if required to do so by law or in response to
          valid requests by public authorities, including a court order, subpoena, or
          government agency request.
        </p>
      </LegalSection>

      <LegalSection id="data-retention" title="Retention of Your Personal Data">
        <p>
          We retain your Personal Data only for as long as necessary for the purposes set
          out in this Privacy Policy. We will retain and use your Personal Data to the extent
          necessary to comply with our legal obligations, resolve disputes, and enforce our
          legal agreements and policies.
        </p>
        <p>
          Usage Data is generally retained for a shorter period, except when this data is
          used to strengthen the security of our Service or to improve its functionality,
          or we are legally obligated to retain this data for longer periods.
        </p>
      </LegalSection>

      <LegalSection id="data-transfer" title="Transfer of Your Personal Data">
        <p>
          Your information, including Personal Data, is processed at the Company's operating
          offices and in any other places where the parties involved in the processing are
          located. This means that your information may be transferred to — and maintained on —
          computers located outside of your state, province, country, or other governmental
          jurisdiction where data protection laws may differ.
        </p>
        <p>
          Your consent to this Privacy Policy followed by your submission of such information
          represents your agreement to that transfer. We will take all steps reasonably
          necessary to ensure that your data is treated securely and in accordance with this
          Privacy Policy, and no transfer of your Personal Data will take place to an
          organization or a country unless there are adequate controls in place.
        </p>
      </LegalSection>

      <LegalSection id="data-rights" title="Your Data Protection Rights">
        <p>
          Depending on your location, you may have certain rights regarding your personal
          information, including the right to:
        </p>
        <BulletList
          items={[
            "Access — Request a copy of the personal data we hold about you.",
            "Rectification — Request correction of inaccurate or incomplete data.",
            "Erasure — Request deletion of your personal data, subject to legal obligations.",
            "Restriction — Request restriction of processing of your personal data.",
            "Data Portability — Request transfer of your data to another organization or directly to you.",
            "Object — Object to our processing of your personal data for certain purposes.",
            "Withdraw Consent — Withdraw consent at any time where we rely on consent to process your data.",
          ]}
        />
        <p>
          To exercise any of these rights, please contact us at the address provided below.
          We will respond to your request within 30 days.
        </p>
      </LegalSection>

      <LegalSection id="security" title="Security of Your Personal Data">
        <p>
          The security of your Personal Data is important to us. We strive to use commercially
          acceptable means of protecting your Personal Data, following industry best practices
          including SOC 2-aligned controls, AES-256 encryption at rest, and TLS 1.3 encryption
          in transit. However, no method of transmission over the Internet or method of electronic
          storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection id="children" title="Children's Privacy">
        <p>
          Our Service is intended for use by enterprise professionals and is not directed to
          individuals under the age of 18. We do not knowingly collect personally identifiable
          information from anyone under 18. If you are a parent or guardian and you become
          aware that your child has provided us with Personal Data, please contact us. If we
          become aware that we have collected Personal Data from a child without verification
          of parental consent, we will take steps to remove that information.
        </p>
      </LegalSection>

      <LegalSection id="third-party" title="Links to Other Websites">
        <p>
          Our Service may contain links to other websites that are not operated by us. If you
          click on a third-party link, you will be directed to that third party's site. We
          strongly advise you to review the Privacy Policy of every site you visit. We have no
          control over and assume no responsibility for the content, privacy policies, or
          practices of any third-party sites or services.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="Changes to This Privacy Policy">
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any
          changes by posting the new Privacy Policy on this page and updating the "Last updated"
          date at the top of this policy. You are advised to review this Privacy Policy
          periodically for any changes. Changes are effective when they are posted on this page.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact Us">
        <p>
          If you have any questions about this Privacy Policy or our data practices, please
          contact us:
        </p>
        <div className="mt-4 rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface)]/40 p-5 space-y-2">
          <p className="text-[var(--color-text)] font-semibold">Prysmors, Inc.</p>
          <p>
            555 Fulston St, Ste C140, San Francisco, CA 94102
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+13185311063" className="text-[var(--color-mint)] hover:underline">
              +1 318-531-1063
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:help@prysmors.com" className="text-[var(--color-mint)] hover:underline">
              help@prysmors.com
            </a>
          </p>
          <p>
            Web:{" "}
            <a href="https://prysmors.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-mint)] hover:underline">
              https://prysmors.com/
            </a>
          </p>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}
