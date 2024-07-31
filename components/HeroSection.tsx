import { Button } from "./ui/button";
import { DotBackground } from "./ui/DotBackgroud";

export function HeroSection() {
  return (
    <div>
      <DotBackground>
        <div className="flex flex-col gap-8 justify-center items-center text-center">
          <h2 className="text-4xl sm:text-7xl font-bold text-secondary">
            Where Talents find Tech Jobs
          </h2>
          <p className="text-lg md:text-xl w-[50%]">
            Apply with one click to selected job opportunities. We&apos;ll
            organize the interview for you.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <Button variant="default" size={"lg"}>
              Get Started
            </Button>
            <Button variant="outline" size={"lg"}>
              I&apos;m hiring
            </Button>
          </div>
        </div>
      </DotBackground>
    </div>
  );
}
