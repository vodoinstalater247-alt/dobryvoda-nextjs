import { seoData, serviceImages } from "@/lib/translations";
import { ServiceSchemas } from "@/lib/service-schemas";
import ServiceLayout from "@/components/ServiceLayout";
import { makeServiceMetadata } from "@/lib/service-metadata";

const data = seoData.appliance;

export const metadata = makeServiceMetadata({ ...data, image: serviceImages.appliance });

export default function Page() {
  return (
    <>
      <ServiceSchemas
        serviceType="Zapojenie spotrebičov"
        title={data.title}
        description={data.description}
        slug={data.slug}
        pageName="Zapojenie spotrebičov"
      />
      <ServiceLayout translationKey="appliance" image={serviceImages.appliance} />
    </>
  );
}
