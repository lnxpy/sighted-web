import { CircleCheckBig } from "lucide-react"


export default function Features() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-20 bg-slate-50 dark:bg-zinc-900">
          <div className="container grid max-w-6xl items-center justify-center gap-12 px-4 md:px-6">
            <div className="space-y-7">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-4xl">As a <span className="text-emerald-400">developer</span>, you are able to..</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CircleCheckBig className="h-4 w-4" stroke="#34D399" />
                  Style and customize any part-of-speech.
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckBig className="h-4 w-4" stroke="#34D399" />
                  Render based on the custom templates that you define.
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckBig className="h-4 w-4" stroke="#34D399" />
                  Set thresholds for fixations and saccades.
                </li>
                <li className="flex items-centers gap-2">
                  <CircleCheckBig className="h-4 w-4" stroke="#34D399" />
                  Render based on letters or syllables.
                </li>
              </ul>
            </div>
          </div>
        </section>
    )
}