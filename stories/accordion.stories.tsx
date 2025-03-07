import type { Meta, StoryObj } from "@storybook/react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../src/components/ui/accordion";

const meta = {
	title: "UI/Accordion",
	component: Accordion,
	subcomponents: {
		AccordionItem,
		AccordionTrigger,
		AccordionContent,
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
	render: () => (
		<Accordion>
			<AccordionItem value="item-1">
				<AccordionTrigger>Item 1</AccordionTrigger>
				<AccordionContent>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec enim
					in diam mattis fringilla.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Item 2</AccordionTrigger>
				<AccordionContent>
					Sed nec enim in diam mattis fringilla.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};

export const MultipleItems: Story = {
	render: () => (
		<Accordion>
			<AccordionItem value="item-1">
				<AccordionTrigger>Item 1</AccordionTrigger>
				<AccordionContent>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec enim
					in diam mattis fringilla.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Item 2</AccordionTrigger>
				<AccordionContent>
					Sed nec enim in diam mattis fringilla.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Item 3</AccordionTrigger>
				<AccordionContent>
					Sed nec enim in diam mattis fringilla.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};
