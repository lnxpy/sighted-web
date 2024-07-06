import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"


export default function Faq() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container flex flex-col items-center justify-center px-4 md:px-6 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-4xl">
                <AccordionItem value="item-1">
                <AccordionTrigger>How does Fasted work?</AccordionTrigger>
                <AccordionContent>
                    Fasted uses a combination of techniques to help you{" "}
                    <span className="bg-yellow-300 px-1 rounded">read faster</span> and{" "}
                    <span className="bg-yellow-300 px-1 rounded">retain more information</span>. This includes visual
                    pacing, subvocalization reduction, and comprehension enhancement. Our cutting-edge technology analyzes
                    your reading patterns and provides personalized recommendations to optimize your speed and
                    understanding.
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                <AccordionTrigger>Is Fasted available on mobile?</AccordionTrigger>
                <AccordionContent>
                    Yes, Fasted is available as a mobile app for both iOS and Android devices. You can download it from the
                    App Store or Google Play and start reading faster on the go.
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                <AccordionTrigger>How much does Fasted cost?</AccordionTrigger>
                <AccordionContent>
                    Fasted offers a free trial so you can experience the benefits of speed reading before committing to a
                    subscription. Our paid plans start at $9.99 per month, with discounts available for annual
                    subscriptions.
                </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
        </section>
    )
}