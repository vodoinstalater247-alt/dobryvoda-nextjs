import { seoData, serviceImages } from "@/lib/translations";
import { ServiceSchemas } from "@/lib/service-schemas";
import ServiceLayout from "@/components/ServiceLayout";
import { makeServiceMetadata } from "@/lib/service-metadata";

const data = seoData.pipes;

export const metadata = makeServiceMetadata({ ...data, image: serviceImages.pipes });

export default function Page() {
  return (
    <>
      <ServiceSchemas
        serviceType="Výmena rozvodov"
        title={data.title}
        description={data.description}
        slug={data.slug}
        pageName="Výmena rozvodov vody"
      />
      <ServiceLayout translationKey="pipes" image={serviceImages.pipes} />
    </>
  );
}
