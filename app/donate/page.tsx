"use client"
import BecomingSponsor from "@/components/donate/BecomingSponsor";
import CurrentSponsors from "@/components/donate/CurrentSponsors";
import DonateHero from "@/components/donate/DonateHero";
import IndividualSupport from "@/components/donate/IndividualSupport";
import SponsorshipSection from "@/components/donate/SponsorshipSection";

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      <DonateHero />
      <SponsorshipSection />
      <CurrentSponsors />
      
      <BecomingSponsor />
      <IndividualSupport />
      
      {/* Enhanced Payment Form Section */}
      {/* <section id="payment-form" className="py-16">
        <PaymentForm />
      </section> */}
      
    </main>
  );
}