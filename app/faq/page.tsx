import React from "react";
import FAQSection from "@/components/faq/FAQSection";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#040149] py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#040149]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#040149]/0 via-[#040149]/50 to-[#040149]/90"></div>
        </div>
        <div className="relative container mx-auto p-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pt-8">
  <span className="text-white">Frequently Asked </span>
  <span className="text-[#DBB13B]">Questions</span>
</h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Find answers to common questions about Buraq Space Camp
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-700 mb-8">
              We&apos;ve compiled answers to the most common questions about Buraq Space Camp. 
              If you can&apos;t find what you&apos;re looking for, please don&apos;t hesitate to 
              <a href="/contact" className="text-[#304b78] font-medium hover:underline"> contact us</a>.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-16">
            <FAQSection 
              title="Coming to Buraq" 
              faqs={[
                {
                  question: "What is the selection process?",
                  answer: "Prospective cadets are required to fill out the registration form provided in the registration section. The Buraq Planetary Society then carefully reviews the applications and selects candidates who demonstrate the greatest potential to benefit from and contribute to the Buraq experience."
                },
                {
                  question: "Why does Buraq have an age restriction?",
                  answer: "Buraq sets its age limit between 14 and 17 years because this age group is at a formative stage of life where they are exploring interests and considering future paths. Students older than 17 are usually engaged in college or career-related responsibilities, which can make it difficult to commit to the full camp experience. Limiting the age range also ensures a fair and balanced environment for all cadets."
                },
                {
                  question: "What is the cost of attending Buraq and who pays for it?",
                  answer: "Once selected, cadets attend the camp entirely free of charge. Buraq covers all accommodation, meals, learning resources, and access to lectures and activities. However, Buraq is not responsible for covering the cost of the cadets transport to and from the camp location."
                }
              ]} 
            />

            <FAQSection 
              title="Parental Queries" 
              faqs={[
                {
                  question: "Are cadets allowed to leave the campsite during the camp?",
                  answer: "Cadets are not allowed to leave the campsite at any time during the camp. Doing so disrupts team-based activities and creates an unfair experience for the other cadets who remain present and engaged throughout."
                },
                {
                  question: "Are visitors allowed during the camp?",
                  answer: "No, visitors are not allowed at any point during the camp. This ensures the camp environment remains focused, secure, and free from outside disruptions."
                },
                {
                  question: "Where is the camp held?",
                  answer: "The Buraq Space Camp is held at a secure location in Islamabad. The site is fully walled and monitored by security guards throughout the day to ensure the safety of all cadets."
                },
                {
                  question: "Will there be gender segregation?",
                  answer: "Yes, gender segregation will be strictly maintained in tents and restroom facilities to ensure comfort and privacy for all cadets."
                },
                {
                  question: "How will cadets stay warm?",
                  answer: "Buraq will provide sleeping bags and warm blankets to all cadets to keep them comfortable during the nights. If additional warmth is needed, cadets are advised to pack accordingly."
                },
                {
                  question: "Will there be hot water?",
                  answer: "Yes, hot water will be available in all restroom stalls for both male and female cadets, ensuring hygiene and comfort throughout the camp."
                },
                {
                  question: "Will there be phone access?",
                  answer: "Phones will be collected from cadets in the morning and returned at night. This policy helps maintain focus and discipline while still allowing cadets to check in with their families daily."
                }
              ]} 
            />

            <FAQSection 
              title="Arriving at Buraq" 
              faqs={[
                {
                  question: "What should cadets pack?",
                  answer: "Cadets should come prepared with warm clothing, toiletries, sneakers for physical activity, and one all-black formal suit with black shoes for designated formal occasions during the camp."
                },
                {
                  question: "Will there be exercise?",
                  answer: "Yes, morning exercise is a daily and mandatory part of the Buraq routine. All cadets are required to participate as it builds discipline and team spirit."
                },
                {
                  question: "Are cadets required to sleep in tents?",
                  answer: "Yes, sleeping in tents is a core aspect of the Buraq experience. It fosters camaraderie, self-reliance, and a connection with the outdoors, all of which are essential to the camp's goals."
                },
                {
                  question: "What do cadets do at Buraq?",
                  answer: "Buraq Camp offers a wide variety of space-themed lectures, activities, and workshops designed to empower young minds. These sessions are crafted to raise awareness about technology, global challenges, and modern innovation while also instilling vital life skills such as leadership, teamwork, time management, and creativity."
                }
              ]} 
            />

            <FAQSection 
              title="Beyond Buraq" 
              faqs={[
                {
                  question: "What does being a Buraqian mean beyond the camp itself?",
                  answer: "Buraq is not just a 10-day camp- it's a lifelong society. Once the camp ends, you become part of a close-knit alumni network of over 700 individuals, spread across cities and fields, who actively support and inspire one another"
                },
                {
                  question: "How does Buraq maintain alumni engagement?",
                  answer: "We hold regular reunions in cities with active alumni, maintain dynamic group chats, and foster continuous conversations around growth, learning, and opportunity. The community is always just a message away."
                },
                {
                  question: "What kind of opportunities or initiatives are available to Buraq alumni after camp?",
                  answer: "Alumni get access to internship opportunities- many facilitated by former Buraqians- as well as academic and career mentorship across a wide range of disciplines including STEM, business, and social sciences. Additionally, buraqians have organized book drives, community outreach projects, and support programs for younger cadets. The culture of giving back is deeply embedded in the post-camp experience."
                }
              ]} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}