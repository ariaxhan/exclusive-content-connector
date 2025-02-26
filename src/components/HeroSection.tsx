
import { useState } from 'react';
import { Button } from "@/components/ui/button"

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/5 to-primary/5">
      <div className="w-full lg:w-2/3 p-8 md:p-16 flex flex-col justify-center z-10">
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            100K+ Followers Required
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            FOR THE VERIFIED,
            <br />
            <span className="text-gradient">NOT THE ASPIRING</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            The AI platform reserved exclusively for creators with 100K+ followers. Join the elite.
          </p>
          <div className="space-y-4">
            <Button 
              size="lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105 ${
                isHovered ? 'bg-secondary' : 'bg-primary'
              }`}
            >
              <span className="relative z-10">Check Eligibility</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <p className="text-sm text-gray-500">
              A product by Content Creator Connector
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 h-full relative">
        <div className="absolute inset-0 gradient-overlay" />
      </div>
    </section>
  );
};
