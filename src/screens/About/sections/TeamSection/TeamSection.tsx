import React from "react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    description: "With over 15 years in furniture design, Sarah leads our vision for creating beautiful, functional spaces."
  },
  {
    name: "Michael Chen",
    role: "Head of Design",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    description: "Michael brings innovative design concepts to life, ensuring every piece meets our high standards."
  },
  {
    name: "Emily Rodriguez",
    role: "Quality Manager",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    description: "Emily oversees our quality control processes, ensuring every product exceeds customer expectations."
  },
  {
    name: "David Thompson",
    role: "Sustainability Director",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    description: "David leads our environmental initiatives, making sure we create beautiful furniture responsibly."
  }
];

export const TeamSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f9f1e7] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-4xl tracking-[0] leading-[48px] mb-4">
            Meet Our Team
          </h2>
          <p className="max-w-2xl mx-auto [font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px]">
            Our passionate team of designers, craftspeople, and innovators work together to bring you exceptional furniture that transforms your living spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6">
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#3a3a3a] text-xl mb-2">
                  {member.name}
                </h3>
                <p className="[font-family:'Poppins',Helvetica] font-medium text-[#b88e2f] text-base mb-3">
                  {member.role}
                </p>
                <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-sm leading-[20px]">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};