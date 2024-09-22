import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import { salesPartnerLogos } from "@/data/salesPartnerLogos";

const firstRow = salesPartnerLogos.slice(0, salesPartnerLogos.length / 2);
// const secondRow = salesPartnerLogos.slice(salesPartnerLogos.length / 2);

const AuthorizedSalesPartnerCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row w-full h-full items-center gap-4">
        <Image
          className="rounded-full w-full h-full"
          width={1000}
          height={1000}
          alt=""
          src={img}
        />
      </div>
    </figure>
  );
};

export function AuthorizedSalesPartner() {
  return (
    <section className="py-10 relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <div className="text-center mb-6">
        <h6 className="font-medium uppercase tracking-[10px] text-gray-500 ">
          Our
        </h6>
        <h3 className="uppercase tracking-[1px] mb-30 gradient-text">
          Authorized Sales Partner
        </h3>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((partnersLogo) => (
          <AuthorizedSalesPartnerCard
            key={partnersLogo.img}
            {...partnersLogo}
          />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((partnersLogo) => (
          <AuthorizedSalesPartnerCard
            key={partnersLogo.img}
            {...partnersLogo}
          />
        ))}
      </Marquee> */}
    </section>
  );
}
