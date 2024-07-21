import React from "react";

export default function bionicReading(props: any) {
	// Split the text into words
	const words = props.words.split(" ");

	// Process each word to create the bionic reading effect
	const processedWords = words.map((word: any, index: any) => {
		// Determine the split point for the word (usually half of the word length)
		const splitIndex = Math.ceil(word.length / 2);

		// Create two parts: bold part and normal part
		const boldPart = word.slice(0, splitIndex);
		const normalPart = word.slice(splitIndex);

		// Return a JSX element with the bold and normal parts
		return (
			<React.Fragment key={index}>
				<span className="font-bold text-gray-800 dark:text-white">
					{boldPart}
				</span>
				{normalPart}{" "}
			</React.Fragment>
		);
	});

	// Return the processed words as a single paragraph
	return (
		<p className="mt-8 text-gray-400 dark:text-gray-400 max-w-4xl md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
			{processedWords}
		</p>
	);
}
