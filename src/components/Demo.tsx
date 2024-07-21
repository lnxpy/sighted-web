import {
	WandSparklesIcon,
	LogsIcon,
	ListMinusIcon,
	EraserIcon,
} from "lucide-react";
import { Toggle } from "./ui/toggle";
import BionicReading from "../utils/bionic";
import {
	sample,
	sampleSimplified,
	sampleSummarized,
	sampleSummarizedAndSimplified,
} from "../samples";
import { useState } from "react";
import TextTransition, { presets } from "react-text-transition";

export default function Demo() {
	const [operation, setOperation] = useState({
		sighted: true,
		simplify: false,
		summarize: false,
	});

	let shownText = sample;

	if (operation.simplify && operation.summarize)
		shownText = sampleSummarizedAndSimplified;
	else if (operation.summarize) shownText = sampleSummarized;
	else if (operation.simplify) shownText = sampleSimplified;

	return (
		<section className="w-full py-12 md:py-24 lg:py-32 min-h-screen">
			<div className="container flex flex-col items-center justify-center px-4 md:px-6">
				<h1 className="text-4xl font-bold mb-8 tracking-tight">
					Your brain reads <span className="text-emerald-400">faster</span> than
					your eyes!
				</h1>
				<div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap shadow-sm rounded-lg p-2 m-4 dark:shadow-emerald-500/5 dark:shadow-lg">
					<Toggle
						size="lg"
						id="sighted"
						variant="outline"
						aria-label="Toggle bold"
						className="gap-2"
						pressed={operation.sighted}
						onPressedChange={() =>
							setOperation({ ...operation, sighted: !operation.sighted })
						}
					>
						<LogsIcon className="h-4 w-4" />
						<span>Sighted</span>
					</Toggle>
					<Toggle
						size="lg"
						id="simplify"
						aria-label="Toggle italic"
						className="gap-2"
						pressed={operation.simplify}
						onPressedChange={() =>
							setOperation({ ...operation, simplify: !operation.simplify })
						}
					>
						<WandSparklesIcon className="h-4 w-4" />
						<span>Simplify</span>
					</Toggle>
					<Toggle
						size="lg"
						id="summarize"
						aria-label="Toggle underline"
						className="gap-2"
						pressed={operation.summarize}
						onPressedChange={() =>
							setOperation({ ...operation, summarize: !operation.summarize })
						}
					>
						<ListMinusIcon className="h-4 w-4" />
						<span>Summarize</span>
					</Toggle>
					<Toggle
						disabled
						size="lg"
						aria-label="Toggle strikethrough"
						className="gap-2"
					>
						<EraserIcon className="h-4 w-4" />
						<span>Correct</span>
					</Toggle>
				</div>
				<TextTransition springConfig={presets.stiff} translateValue="0">
					{operation.sighted ? (
						<BionicReading words={shownText} />
					) : (
						<p className="mt-8 max-w-4xl md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							{shownText}
						</p>
					)}
				</TextTransition>
			</div>
		</section>
	);
}
