import { seoData, serviceImages } from "@/lib/translations";
import { ServiceSchemas } from "@/lib/service-schemas";
import ServiceLayout from "@/components/ServiceLayout";
import { makeServiceMetadata } from "@/lib/service-metadata";
import { genericServiceFaqs } from "@/lib/generic-service-faqs";

const data = seoData.wc;

export const metadata = makeServiceMetadata({ ...data, image: serviceImages.wc });

export default function Page() {
  return (
    <>
      <ServiceSchemas
        serviceType="Oprava WC"
        title={data.title}
        description={data.description}
        slug={data.slug}
        pageName="Oprava a montáž WC"
        faqs={genericServiceFaqs}
      />
      <ServiceLayout translationKey="wc" image={serviceImages.wc} />
    </>
  );
}
