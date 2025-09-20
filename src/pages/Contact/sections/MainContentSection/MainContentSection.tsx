import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

const contactInfo = [
  {
    icon: "/vector.svg",
    title: "Address",
    content: "236 5th SE Avenue, New York NY10000, United States",
    topPosition: "top-[58px]",
  },
  {
    icon: "/bxs-phone.svg",
    title: "Phone",
    content: "Mobile: +(84) 546-6789\nHotline: +(84) 456-6789",
    topPosition: "top-52",
  },
  {
    icon: "/bi-clock-fill.svg",
    title: "Working Time",
    content: "Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00",
    topPosition: "top-[334px]",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-4xl tracking-[0] leading-[normal] mb-4">
            Get In Touch With Us
          </h1>
          <p className="max-w-2xl mx-auto [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base text-center tracking-[0] leading-[normal]">
            For More Information About Our Product &amp; Services. Please Feel
            Free To Drop Us An Email. Our Staff Always Be There To Help You Out.
            Do Not Hesitate!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-18">
          <Card className="lg:w-[405px] bg-white border-0 shadow-none">
            <CardContent className="p-12 relative h-[537px]">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`absolute ${info.topPosition} left-0`}
                >
                  <div className="flex items-start gap-6">
                    <img
                      className="w-6 h-6 mt-1"
                      alt={info.title}
                      src={info.icon}
                    />
                    <div>
                      <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-2xl tracking-[0] leading-[normal] mb-4">
                        {info.title}
                      </h3>
                      <p className="w-[212px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="flex-1 bg-white border-0 shadow-none">
            <CardContent className="p-12">
              <form className="space-y-8">
                <div className="space-y-6">
                  <Label
                    htmlFor="name"
                    className="[font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal]"
                  >
                    Your name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Abc"
                    className="h-[75px] bg-white rounded-[10px] border border-solid border-[#9f9f9f] [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base px-8"
                  />
                </div>

                <div className="space-y-6">
                  <Label
                    htmlFor="email"
                    className="[font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal]"
                  >
                    Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="Abc@def.com"
                    className="h-[75px] bg-white rounded-[10px] border border-solid border-[#9f9f9f] [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base px-8"
                  />
                </div>

                <div className="space-y-6">
                  <Label
                    htmlFor="subject"
                    className="[font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal]"
                  >
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    defaultValue="This is an optional"
                    className="h-[75px] bg-white rounded-[10px] border border-solid border-[#9f9f9f] [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base px-8"
                  />
                </div>

                <div className="space-y-6">
                  <Label
                    htmlFor="message"
                    className="[font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal]"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    defaultValue="Hi! i'd like to ask about"
                    className="h-[120px] bg-white rounded-[10px] border border-solid border-[#9f9f9f] [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base px-8 py-6 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-[239px] h-[55px] bg-[#b88e2f] hover:bg-[#a67d28] rounded-[5px] border border-solid border-[#b88e2f] [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
