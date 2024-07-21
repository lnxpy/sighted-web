import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "../components/ui/accordion";

export default function Faq() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container flex flex-col items-center justify-center px-4 md:px-6 space-y-4">
				<h2 className="text-3xl mb-4 font-bold tracking-tight md:text-3xl/tight">
					You might be <span className="text-emerald-400">wondered</span>..
				</h2>
				<Accordion type="single" collapsible className="w-full max-w-4xl">
					<AccordionItem value="item-1">
						<AccordionTrigger className="text-left">
							How does Sighted help with Dyslexia and ADHD?
						</AccordionTrigger>
						<AccordionContent>
							Sighted aids individuals with dyslexia by highlighting the first
							few letters of words, enhancing pattern recognition and reducing
							the cognitive effort needed for word decoding. For those with ADHD
							(Attention Deficit Hyperactivity Disorder), this technique helps
							maintain focus and improves reading fluency by guiding the eyes
							and reducing distractions within the text.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger className="text-left">
							How does human brain deal with texts?
						</AccordionTrigger>
						<AccordionContent>
							As you read, your brain actively engages with the context of the
							text. As you process new words, your brain seeks connections to
							the main topic and relevant information. For instance, when
							reading "Magi.. wan.." in a Harry Potter book, your brain quickly
							identifies it as "Magic wand" because it uses contextual clues and
							prior knowledge to make sense of the text. That's why all you need
							is the first few letters to understand the word.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger className="text-left">
							How does Sighted decide which letters should be bolded?
						</AccordionTrigger>
						<AccordionContent>
							Sighted uses an NLP model to evaluate each word either
							grammatically or by importance rate. By using that rate, selected
							letters will be highlighted out and bolded in the further stages.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger className="text-left">
							How is Sighted served?
						</AccordionTrigger>
						<AccordionContent>
							Sighted is{" "}
							<a
								href="https://pypi.org/project/sighted"
								className="underline"
								target="blank"
							>
								available as an installable Python package
							</a>
							, allowing you to integrate it into any web service. You can even
							design API endpoints that utilize Sighted, enabling a fully
							customized implementation.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-5">
						<AccordionTrigger className="text-left">
							How much does Sighted cost?
						</AccordionTrigger>
						<AccordionContent>It's free and open-source.</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	);
}
