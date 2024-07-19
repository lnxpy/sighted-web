import { Badge } from "../components/ui/badge"
import { FlipWords } from "../components/ui/flip-words";
import HashnodeIcon from "./icons/Hashnode"  
import { useToast } from "../components/ui/use-toast"
import { CopyIcon, DollarSignIcon } from "lucide-react";
import { Button } from "../components/ui/button"
import { useTheme } from "../components/theme-provider"

export default function Hero() {
  const words = ["Consistent", "Faster", "Effective"];
  const theme = useTheme().theme
  const { toast } = useToast()

  function copyCommand() {
    navigator.clipboard.writeText("pip install sighted")
    toast({
      description: `Copied to the clipboard! ✅`,
    })
  }

  return (
  <section className="flex flex-col items-center justify-center h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6 z-10">
          <div className="space-y-4">
          <div className="flex justify-center">
            <Badge variant="outline" className="bg-white dark:bg-black"><HashnodeIcon fill={theme === "dark" ? "white" : "black"} width="13" className="mr-2" />Hashnode Hackathon</Badge>
            <Badge className="ml-2">AI for Tomorrow</Badge>
          </div>
          <h1 className="text-4xl font-bold">Sighted helps you read</h1>
          <h1 className="text-4xl font-bold inline"><FlipWords words={words} /></h1>
            <p className="text-muted-foreground md:text-xl lg:text-base/relaxed">
              Revolutionize your reading with NLP and bionic AI algorithms.
              An exceptional solution for <b>Dyslexia</b> and <b>ADHD</b> book enthusiasts!
            </p>
            <div>
              <Button variant="default" className="mt-3">
                <a href="https://github.com/lnxpy/sighted/tree/main/examples" target="blank">See example</a>
              </Button>
              <Button variant="outline" className="ml-2">
                <a href="https://blog.imsadra.me/sighted-read-faster-comprehend-better-with-ai" target="blank">Read article</a>
              </Button>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 rounded-md px-4 py-2 text-muted-foreground font-mono flex items-center gap-4">
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

