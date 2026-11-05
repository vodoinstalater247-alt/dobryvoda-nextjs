import { seoData, serviceImages } from "@/lib/translations";
import { ServiceSchemas } from "@/lib/service-schemas";
import ServiceLayout from "@/components/ServiceLayout";
import { makeServiceMetadata } from "@/lib/service-metadata";
import { genericServiceFaqs } from "@/lib/generic-service-faqs";

const data = seoData.valve;

export const metadata = makeServiceMetadata({ ...data, image: serviceImages.valve });

export default function Page() {
  return (
    <>
      <ServiceSchemas
        serviceType="Výmena ventilov"
        title={data.title}
        description={data.description}
        slug={data.slug}
        pageName="Výmena ventilov"
        faqs={genericServiceFaqs}
      />
      <ServiceLayout translationKey="valve" image={serviceImages.valve} />
    </>
  );
}
