import { seoData, serviceImages } from "@/lib/translations";
import { ServiceSchemas } from "@/lib/service-schemas";
import ServiceLayout from "@/components/ServiceLayout";
import { makeServiceMetadata } from "@/lib/service-metadata";
import { boilerServiceFaqs } from "@/lib/boiler-service-faqs";

const data = seoData.boiler;

export const metadata = makeServiceMetadata({ ...data, image: serviceImages.boiler });

export default function Page() {
  return (
    <>
      <ServiceSchemas
        serviceType="Montáž bojleru"
        title={data.title}
        description={data.description}
        slug={data.slug}
        pageName="Montáž a výmena bojlerov"
        faqs={boilerServiceFaqs}
      />
      <ServiceLayout
        translationKey="boiler"
        image={serviceImages.boiler}
        faqs={boilerServiceFaqs}
      />
    </>
  );
}
