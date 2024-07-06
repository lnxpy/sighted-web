import { WandSparklesIcon, LogsIcon, ListMinusIcon, EraserIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

import BionicReading from "@/utils/bionic"


export default function Demo() {
    const sample = "Fasted is the ultimate tool to help you read faster and retain more information. Our cutting-edge technology and proven techniques will transform the way you consume content. With Fasted, you can breeze through articles, books, and documents with ease, freeing up more time for the things that matter most. Experience the power of speed reading and unlock your full potential today. Fasted is the ultimate tool to help you read faster and retain more information. Our cutting-edge technology and proven techniques will transform the way you consume content. With Fasted, you can breeze through articles, books, and documents with ease, freeing up more time for the things that matter most. Experience the power of speed reading and unlock your full potential today. Fasted is the ultimate tool to help you read faster and retain more information."

    return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container flex flex-col items-center justify-center px-4 md:px-6">
          <h1 className="text-4xl font-bold mb-11">Try it!</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap shadow-sm rounded-lg p-2">
            <Toggle size="lg" aria-label="Toggle bold" className="gap-2" onClick={()=>alert()}>
              <LogsIcon className="h-4 w-4" />
              <span>Sighted</span>
            </Toggle>
            <Toggle size="lg" aria-label="Toggle italic" className="gap-2">
              <WandSparklesIcon className="h-4 w-4" />
              <span>Simplify</span>
            </Toggle>
            <Toggle size="lg" aria-label="Toggle underline" className="gap-2">
              <ListMinusIcon className="h-4 w-4" />
              <span>Summarize</span>
            </Toggle>
            <Toggle size="lg" aria-label="Toggle strikethrough" className="gap-2">
              <EraserIcon className="h-4 w-4" />
              <span>Correct</span>
            </Toggle>
          </div>
            <BionicReading words={sample} className="text-justify" />
        </div>
      </section>
    )
}