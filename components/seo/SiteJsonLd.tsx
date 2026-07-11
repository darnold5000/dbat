import { StructuredData } from "@/components/seo/StructuredData";
import {
  localBusinessJsonLd,
  organizationJsonLd,
} from "@/lib/schema";

export function SiteJsonLd() {
  return (
    <>
      <StructuredData data={localBusinessJsonLd()} />
      <StructuredData data={organizationJsonLd()} />
    </>
  );
}
