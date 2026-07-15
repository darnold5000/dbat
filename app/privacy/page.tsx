import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy information for the Batter Up website redesign concept.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This redesign concept is a private demo. Production privacy terms require owner approval."
        compact
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Breadcrumbs items={[{ label: "Privacy" }]} />
        <div className="space-y-6 text-sm leading-relaxed text-muted">
          <p>
            Before production launch, replace this page with an owner-approved
            privacy policy specific to {siteConfig.name}.
          </p>
          <h2 className="font-display text-2xl text-white">Demo site notice</h2>
          <p>
            This website redesign concept is prepared by Signal Works for private
            review. It is configured with <code>noindex, nofollow</code> and does
            not process real customer transactions. Contact and birthday forms
            operate in demo mode unless Resend environment variables are configured
            by the owner.
          </p>
          <h2 className="font-display text-2xl text-white">Information we may collect</h2>
          <p>
            If you submit a form on this demo, we may process your name, email,
            phone number, and message content for the sole purpose of responding to
            your inquiry. Do not submit sensitive personal information through the
            demo forms.
          </p>
          <h2 className="font-display text-2xl text-white">Contact</h2>
          <p>
            For privacy questions, contact {siteConfig.name} at{" "}
            <a href={siteConfig.phoneTel} className="text-white hover:text-brand">
              {siteConfig.phone}
            </a>{" "}
            or visit {siteConfig.address.street}, {siteConfig.address.unit},{" "}
            {siteConfig.address.city}, {siteConfig.address.state}{" "}
            {siteConfig.address.postalCode}.
          </p>
        </div>
      </div>
    </>
  );
}
