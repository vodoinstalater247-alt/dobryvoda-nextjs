import { seoData, serviceImages } from "@/lib/translations";
import { ServiceSchemas } from "@/lib/service-schemas";
import ServiceLayout from "@/components/ServiceLayout";
import { makeServiceMetadata } from "@/lib/service-metadata";

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
      />
      <ServiceLayout translationKey="wc" image={serviceImages.wc} />
    </>
  );
}
