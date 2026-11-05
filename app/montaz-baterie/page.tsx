import { seoData, serviceImages } from "@/lib/translations";
import { ServiceSchemas } from "@/lib/service-schemas";
import ServiceLayout from "@/components/ServiceLayout";
import { makeServiceMetadata } from "@/lib/service-metadata";
import { genericServiceFaqs } from "@/lib/generic-service-faqs";

const data = seoData.faucet;

export const metadata = makeServiceMetadata({ ...data, image: serviceImages.faucet });

export default function Page() {
  return (
    <>
      <ServiceSchemas
        serviceType="Montáž batérie"
        title={data.title}
        description={data.description}
        slug={data.slug}
        pageName="Montáž a výmena batérií"
        faqs={genericServiceFaqs}
      />
      <ServiceLayout translationKey="faucet" image={serviceImages.faucet} />
    </>
  );
}
