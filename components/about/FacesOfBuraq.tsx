"use client";

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FaceOfBuraq = {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
};

const facesOfBuraq: FaceOfBuraq[] = [
  {
    id: 'shahid-mahmud',
    name: 'Dr. Shahid Mahmud',
    position: 'Chairman',
    image: '/images/facesofburaq/DrShahidMahmud.png',
    bio: `Dr. Mahmud is dedicated to addressing the critical needs of society through systems integration, enhanced by optimized connectivity to support sectors such as health, education, and public safety. He holds a Ph.D. in Computer Science from Coventry University, United Kingdom, a Master's degree in Defense and Strategic Studies from the National Defence University, Pakistan, and a Bachelor's degree in Engineering from NED University, Pakistan. Dr. Mahmud serves as a Senior Fellow at the Global Think Tank Network (GTTN) and is the Co-chair for ICT on the Corporate Advisory Council (CAC) of the National University of Sciences and Technology (NUST). He is actively engaged in Futures research in collaboration with several universities. As the Founder, CEO, and Chairman of Interactive Group, Dr. Mahmud has over 33 years of experience in advancing telecommunications, information technology, and wireless media infrastructure in Pakistan. He is also the Co-Founder of the 'Foresight Lab,' a collaborative initiative between AGAHI, a non-governmental organization, and the Interactive Group of Companies. The Lab aims to promote a Futures Index in Pakistan to enhance policymaking and strategic narratives on key issues by engaging lawmakers, policymakers, academia, and the broader society. Dr. Mahmud has been widely recognized for his contributions to Pakistan's ICT industry, receiving numerous awards and being honored as a Distinguished Fellow by the Eisenhower Fellowships. He is a passionate entrepreneur, futurist, and philanthropist, with a particular focus on health and youth-oriented projects, and is an avid mountaineer.`
  },
  {
    id: 'sameer-qureshi',
    name: 'Sameer Qureshi',
    position: 'Co Chairman',
    image: '/images/facesofburaq/SameerQureshi.png',
    bio: `Sameer Qureshi holds a Bachelor's degree in Computer Science from Carnegie Mellon University and a Master's degree in Computer Science from Stanford University. He is currently engaged in advancing the development of self-driving cars, having previously worked at Tesla and now contributing to Lyft Level 5.`
  },
  {
    id: 'naureen-mahmud',
    name: 'Naureen Gul Mahmud',
    position: 'Vice Chairperson',
    image: '/images/facesofburaq/NaureenGulMahmud.png',
    bio: `Naureen Gul Mahmud serves as a member of the Board of Directors at the Buraq Planetary Society, where she provides essential guidance on the organization's vision, strategy, and objectives. With over 20 years of experience, she has an exemplary track record in developing organizational strategies and optimization plans, particularly in her role as Chief Operating Officer (COO) at Interactive Group of Companies. Since 1994, Mrs. Mahmud has been actively involved in organizing the Buraq Space Camps. Her extensive experience has equipped her with a multidisciplinary perspective, which is essential for effective leadership. Additionally, she plays a significant role in various educational and social development projects within the Interactive Group.`
  },
  {
    id: 'usman-yousuf',
    name: 'Usman Yousuf',
    position: 'Vice Chairperson',
    image: '/images/facesofburaq/UsmanYousuf.png',
    bio: `MBA London Business School An influential figure with an extensive track record, Usman stands as a regional entrepreneur, an internationally recognized tutor and coach at Euronext, and a visionary venture investor investing in start ups in Pakistan and the region. His commitments extend across a diverse spectrum of industries, including IT, Media, Public Relations, F&B, and the world of venture capital. In his role as a venture investor, Usman has played a pivotal role in supporting numerous enterprises, spanning from the cutting edge of Pharmatech and Agritech to the dynamic realms of EdTech, msmetech, digital publishing and beyond. He is passionate about education and has been involved with Buraq for the past 24 years. He first arrived at Buraq as a cadet in 1999 and came back thrice as a commander including as Base Commander in 2003.`
  },
  {
    id: 'anushay-usman',
    name: 'Anushay Mahmud Usman',
    position: 'Program Director',
    image: '/images/facesofburaq/AnushayMahmudUsman.png',
    bio: `Masters in Educational Leadership from The University of Exeter Anushay is motivated by a passion for empowering the youth. With an unwavering commitment to enhancing the educational experience for teenagers, she is dedicated to regionally expanding and proliferating Buraq's special brand and programs within and beyond Pakistan. Her dedication to fostering personal growth, critical thinking, and creativity through these programs while highlighting the importance of STEM and sustainability underscores her belief in the transformative potential of out-of-school engagements. Anushay has attended Buraq Space Canps since 1993 and has been the driving force behind all the camps since 2012. As a mother of three children herself, Anushay is particularly attentive when it comes to ensuring a smooth parent experience throughout the Buraq journey. She is also the main point of contact for coordinating and communicating with all the schools in Pakistan.
`
  },
  {
    id: 'moiz-amer', 
    name: 'Moiz Amer',
    position: 'Program Manager',
    image: '/images/facesofburaq/MoizAmer.png',
    bio: `Possessing a Bachelor's degree in Accounting and Finance from the Lahore University of Management Sciences (LUMS), Moiz Amer is committed to empowering the youth, encouraging independent thought, and fostering critical thinking skills. Over the course of the past ten years, Moiz has been an integral part of the Buraq organization, diligently contributing to the successful planning and execution of various programs. Moiz's unwavering dedication extends beyond program logistics; he is driven by the vision of creating an educational environment that not only facilitates learning and personal growth but also places a strong emphasis on the imperative of sustainability in our contemporary era. His steadfast commitment emphasizes a profound belief in the life-changing potential that youth can attain through participation in such programs. As a seasoned professional, Moiz Amer continues to play a pivotal role in shaping the future of Buraq, demonstrating a keen understanding of the intricate balance between education, growth, and sustainability within the dynamic landscape of today's world.`
  },
  {
    id: 'nadeem-hashmi',
    name: 'Col (R) Nadeem Maqsood Hashmi',
    position: 'Head of Logistical Operations and Administration',
    image: '/images/facesofburaq/Col(R)NadeemMaqsoodHashmi.png',
    bio: `Colonel (R) Nadeem Maqsood Hashmi has been an integral part of the Buraq Camp since 2012, playing a pivotal role in maintaining discipline and ensuring the smooth execution of the camp's operations. His contributions extend to various aspects, including the deployment and comfortable accommodation of cadets, organizing dining and catering for participants and guests, and overseeing the security of the camp. Beyond logistics, Col. Hashmi has been instrumental in arranging educational trips for cadets, conducting exams in major cities, and managing key events like the opening and closing ceremonies. His expertise in administration and supply chain management, honed through years of service in the Pakistan Army, has greatly benefited the camp's operations. With a strong background in logistics and leadership, Col. Hashmi's dedication and strategic planning have made him a cornerstone of the Buraq Camp, ensuring its continued success and impact on its participants.`
  },
  {
    id: 'shahryar-khan',
    name: 'Shahryar Khan',
    position: 'STEM Leader',
    image: '/images/facesofburaq/ShahryarKhan.png',
    bio: `Shahryar is PhD Physics candidate at the University of Houston, Texas and Buraq Space Camp alumnus from 2012.  Shahryar is a budding physicist who is passionate about science outreach and education. He has delivered dozens of scientific talks to general audiences at diverse forums, from universities to scientific societies. As part of his role as Instructor at The Black Hole in Pakistan he runs a science lab where young students from nearby schools learn about scientific concepts through fun demonstrations. He is also part of a Teachers' Training program at The Black Hole where a cohort of 6 young college graduates are being trained to become effective teachers in physics and math for the next generation. He aims to increase the level of scientific awareness in his community and the country as a whole because he believes that STEM is the most important route to progress for any nation. Apart from his teaching and outreach activities, he is an active researcher in theoretical physics dedicated to uncovering the secrets of the universe. It was his selection in the Buraq space camp 2012 that he credits for his current life trajectory and in the same spirit he believes in giving back to the community. The Buraq Learning initiative is an effort he strongly believes will bring a positive change to the world because it merges STEM with the idea of sustainability, which is crucially important in a world that is being changed radically by the effects of climate change. `
  },
  {
    id: 'ammar-mahdi',
    name: 'Syed Ammar Mahdi',
    position: 'STEM Leader',
    image: '/images/facesofburaq/SyedAmmarMahdi.png',
    bio: `Ammar is a Biomedical Computer Engineer from Habib University. He is a trainee field engineer and technician currently based in Pakistan and Nigeria. He also works as an educator who has taught students different subjects at experimental learning camps in Pakistan. Having a background in the liberal arts, he also maintains a continued interest in a wide range of subjects, including, but not limited to: anthropology, biology, chemistry, fitness, history, psychology, literature, music, and philosophy. His novel approach to knowledge is strongly rooted in the belief that, at its core, learning is not separate from play; a concept that he acquired from Buraq's flagship Space Camp in Pakistan when he was selected as a cadet in 2012.`
  },
];

export default function FacesOfBuraqPage() {
  const [selectedPersonMobile, setSelectedPersonMobile] = useState<string | null>(null);
  const [selectedPersonDesktop, setSelectedPersonDesktop] = useState<string | null>(null);

  const handleMobileClick = (personId: string) => {
    setSelectedPersonMobile(selectedPersonMobile === personId ? null : personId);
  };

  const handleDesktopClick = (personId: string) => {
    setSelectedPersonDesktop(personId);
  };

  const closeDesktopModal = () => {
    setSelectedPersonDesktop(null);
  };

  return (
    <div className="bg-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#040149] mb-6">
          Faces of <span className="text-[#DBB13B]">Buraq</span>
        </h2>
        <div className="w-24 h-1 bg-[#DBB13B] mx-auto mb-6"></div>
      </div>

      {/* Desktop View - Card-based design */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
          {facesOfBuraq.map((person, index) => (
            <motion.div
              key={person.id}
              className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 overflow-hidden ${
                index === facesOfBuraq.length - 1 && facesOfBuraq.length % 2 === 1 
                  ? 'md:col-span-2 md:justify-self-center md:max-w-sm lg:col-span-1 lg:justify-self-auto lg:max-w-none' 
                  : ''
              }`}
              whileHover={{ y: -5 }}
              onClick={() => handleDesktopClick(person.id)}
            >
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover w-24 h-24 shadow-md"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#040149] mb-2">
                  {person.name}
                </h3>
                <p className="text-sm text-[#DBB13B] font-medium mb-3">
                  {person.position}
                </p>
                <p className="text-xs text-gray-600 line-clamp-3">
                  {person.bio.substring(0, 120)}...
                </p>
                <div className="mt-4">
                  <span className="text-xs text-blue-600 font-medium hover:underline">
                    Click to read more
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Modal */}
        <AnimatePresence>
          {selectedPersonDesktop && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={closeDesktopModal}
              />
              
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 flex items-center justify-center z-50 p-8"
              >
                <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  {(() => {
                    const person = facesOfBuraq.find(p => p.id === selectedPersonDesktop);
                    if (!person) return null;
                    
                    return (
                      <div className="p-8">
                        <div className="flex items-start mb-6">
                          <Image
                            src={person.image}
                            alt={person.name}
                            width={120}
                            height={120}
                            className="rounded-full object-cover w-24 h-24 mr-6 shadow-lg"
                          />
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-[#040149] mb-2">
                              {person.name}
                            </h3>
                            <p className="text-lg text-[#DBB13B] font-medium mb-4">
                              {person.position}
                            </p>
                          </div>
                          <button
                            onClick={closeDesktopModal}
                            className="text-gray-500 hover:text-gray-700 text-3xl font-bold ml-4"
                          >
                            ×
                          </button>
                        </div>
                        <div className="border-t pt-6">
                          <p className="text-gray-700 leading-relaxed text-justify">
                            {person.bio}
                          </p>
                        </div>
                      </div>
                    );
                  })()
                  }
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile View - faces only with clickable descriptions */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-4 px-4 justify-items-center">
          {facesOfBuraq.map((person, index) => (
            <div 
              key={person.id} 
              className={`flex flex-col items-center text-center w-full ${
                index === facesOfBuraq.length - 1 && facesOfBuraq.length % 2 === 1 
                  ? 'col-span-2 justify-self-center' 
                  : ''
              }`}
            >
              <motion.div
                className="cursor-pointer flex flex-col items-center"
                whileTap={{ scale: 0.95 }}
                onClick={() => handleMobileClick(person.id)}
              >
                <div className="flex justify-center mb-2">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={0}
                    height={0}
                    className="rounded-full object-cover w-32 h-32 sm:w-24 sm:h-24 shadow-lg"
                  />
                </div>
                <h3 className="text-xs font-semibold text-center text-[#040149] mb-1 px-1">
                  {person.name}
                </h3>
                <p className="text-xs text-[#DBB13B] font-medium text-center px-1">
                  {person.position}
                </p>
              </motion.div>

              {/* Mobile Bio Modal/Overlay */}
              <AnimatePresence>
                {selectedPersonMobile === person.id && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/50 z-40"
                      onClick={() => setSelectedPersonMobile(null)}
                    />
                    
                    {/* Modal Content */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 50 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 50 }}
                      className="fixed inset-x-4 top-24 -translate-y-1/2 bg-white rounded-lg shadow-xl z-50 max-h-[80vh] overflow-y-auto"
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <Image
                            src={person.image}
                            alt={person.name}
                            width={80}
                            height={80}
                            className="rounded-full object-cover w-16 h-16 mr-4"
                          />
                          <div>
                            <h3 className="text-lg font-bold text-[#040149]">
                              {person.name}
                            </h3>
                            <p className="text-sm text-[#DBB13B] font-medium">
                              {person.position}
                            </p>
                          </div>
                          <button
                            onClick={() => setSelectedPersonMobile(null)}
                            className="ml-auto text-gray-500 hover:text-gray-700 text-2xl font-bold"
                          >
                            ×
                          </button>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed text-justify">
                          {person.bio}
                        </p>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
