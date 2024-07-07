import { TwitterIcon, GithubIcon, LinkedinIcon } from "lucide-react"


export default function Footer() {
    return (
        <footer className="flex items-center justify-between px-8 py-4 bg-muted">
            <div className="text-sm text-muted-foreground">&copy; 2023 Fasted. All rights reserved.</div>
            <div className="text-sm text-muted-foreground flex space-x-4">
            <a href="https://x.com/lnxpylnxpy" target="blank"><TwitterIcon className="h-5 w-5" /></a>
            <a href="https://github.com/lnxpy/sighted" target="blank"><GithubIcon className="h-5 w-5" /></a>
            <a href="https://linkedin.com/in/sadra-yahyapour" target="blank"><LinkedinIcon className="h-5 w-5" /></a>
            </div>
        </footer>
    )
}