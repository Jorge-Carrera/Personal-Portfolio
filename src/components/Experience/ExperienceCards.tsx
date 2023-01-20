import ExperienceCard from "./ExperienceCard"

function ExperienceCards() {
  return (
    <div className="w-full h-min flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
    </div>
  );
} 

export default ExperienceCards