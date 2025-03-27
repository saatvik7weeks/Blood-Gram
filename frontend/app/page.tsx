import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = "Welcome to Blood Bank";

export default function Home() {
  return (
    <main className="text-3xl text-center">
       <TextGenerateEffect words={words} />
   </main>
  );
}
