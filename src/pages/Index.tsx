
import { HeroSection } from "@/components/HeroSection";
import { Counter } from "@/components/Counter";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Members section */}
      <section className="py-20 px-8 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            MEMBERS ONLY
          </h2>
          <div className="flex flex-col items-center space-y-8">
            <div className="glass-panel p-8 md:p-12 rounded-2xl">
              <p className="text-lg mb-4">Verified Creators Using Content</p>
              <Counter end={1234} />
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 px-8 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            TOOLS FOR THE INFLUENTIAL
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Algorithm Decoder"
              description="AI-powered insights predict and optimize your content performance across platforms."
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
              stats="+43% Engagement"
            />
            <FeatureCard
              title="Brand Match"
              description="Connect with premium brands actively seeking established creators."
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
              stats="2.5x Revenue"
            />
            <FeatureCard
              title="Revenue Amplifier"
              description="Unlock advanced monetization strategies beyond standard sponsorships."
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
              stats="+127% Growth"
            />
          </div>
        </div>
      </section>

      {/* iOS App section */}
      <section className="py-20 px-8 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="container mx-auto text-center space-y-8">
          <div className="flex flex-col items-center gap-6">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Content for iOS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Take Your Content Creation Mobile
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Access all premium features on the go with our powerful iOS app.
            </p>
            <Button 
              size="lg"
              className="bg-black hover:bg-black/80 text-white"
            >
              <span className="mr-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </span>
              Download on the App Store
            </Button>
          </div>
          
          {/* Company attribution */}
          <div className="pt-12 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Content is a product by Content Creator Connector
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
