import { TwitterIcon, GithubIcon, LinkedinIcon } from "lucide-react"


export default function Footer() {
    return (
        <footer className="flex items-center justify-between px-8 py-4 bg-muted dark:bg-zinc-900">
            <div className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Sighted. All rights reserved.</div>
            <div className="text-sm text-muted-foreground flex space-x-4">
                <a href="https://x.com/lnxpylnxpy" target="blank"><TwitterIcon className="h-4 w-4" /></a>
                <a href="https://github.com/lnxpy/sighted" target="blank"><GithubIcon className="h-4 w-4" /></a>
                <a href="https://linkedin.com/in/sadra-yahyapour" target="blank"><LinkedinIcon className="h-4 w-4" /></a>
            </div>
        </footer>
    )
}