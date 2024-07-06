import React from "react";


export default function bionicReading(props) {
  // Split the text into words
  const words = props.words.split(' ');

  // Process each word to create the bionic reading effect
  const processedWords = words.map((word, index) => {
    // Determine the split point for the word (usually half of the word length)
    const splitIndex = Math.ceil(word.length / 2);

    // Create two parts: bold part and normal part
    const boldPart = word.slice(0, splitIndex);
    const normalPart = word.slice(splitIndex);

    // Return a JSX element with the bold and normal parts
    return (
      <React.Fragment key={index}>
        <span className="font-bold">{boldPart}</span>{normalPart}{' '}
      </React.Fragment>
    );
  });

  // Return the processed words as a single paragraph
  return (
      <p className="mt-8 max-w-4xl text-justify text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        {processedWords}
      </p>
  )
}