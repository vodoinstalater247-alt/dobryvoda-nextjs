import { seoData, serviceImages } from "@/lib/translations";
import { ServiceSchemas } from "@/lib/service-schemas";
import ServiceLayout from "@/components/ServiceLayout";
import { makeServiceMetadata } from "@/lib/service-metadata";

const data = seoData.shower;

export const metadata = makeServiceMetadata({ ...data, image: serviceImages.shower });

export default function Page() {
  return (
    <>
      <ServiceSchemas
        serviceType="Montáž sprchy"
        title={data.title}
        description={data.description}
        slug={data.slug}
        pageName="Montáž sprchových kútov"
      />
      <ServiceLayout translationKey="shower" image={serviceImages.shower} />
    </>
  );
}
