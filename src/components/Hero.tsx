import { Badge } from "@/components/ui/badge"
import { FlipWords } from "@/components/ui/flip-words";

import HashnodeIcon from "@/components/icons/Hashnode"  

import { useToast } from "@/components/ui/use-toast"

import { CopyIcon, DollarSignIcon } from "lucide-react";

import { Button } from "@/components/ui/button"


export default function Hero() {
  const words = ["Consistent", "Faster", "Effective"];

  const { toast } = useToast()

  function copyCommand() {
    navigator.clipboard.writeText("pip install sighted")
    toast({
      description: "Copied to the clipboard! ✅",
    })
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 min-h-screen flex">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="flex items-center justify-center my-20">
        <div className="flex flex-col-reverse items-center justify-between w-full max-w-6xl mx-auto px-8 md:flex-row gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex justify-center">
              <Badge variant="outline"><HashnodeIcon width="13" className="mr-2" />Hashnode Hackathon</Badge>
              <Badge className="ml-2">AI for Tomorrow</Badge>
            </div>
            <h1 className="text-4xl font-bold">Sighted helps you read</h1>
            <h1 className="text-4xl font-bold inline"><FlipWords words={words} /></h1>
            <p className="text-muted-foreground pt-3">
              Using NLP and bionic AI algorithms to enhance your reading quality.
              You can also build your own AI algorithms and serve them anywhere!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 border border-slate-300 rounded-md px-4 py-2 text-muted-foreground font-mono flex items-center gap-4">
            <DollarSignIcon className="h-5 w-5" />
            <span>pip install sighted</span>
            <Button variant="ghost" size="icon" className="ml-auto" onClick={copyCommand}>
              <CopyIcon className="h-4 w-4" />
              <span className="sr-only">Copy to clipboard</span>
            </Button>
          </div>
        </div>
    </section>
  )
}

