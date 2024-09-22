import { AuthorizedSalesPartner } from "@/components/home/AuthorizedSalesPartner";
import Banner from "@/components/home/Banner";
import Intro from "@/components/home/Intro";
import Notification from "@/components/home/Notification";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Intro />
      <Notification />
      <AuthorizedSalesPartner />
    </>
  );
}
