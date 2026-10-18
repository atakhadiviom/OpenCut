"use client";

import { PanelView } from "@/components/editor/panels/assets/views/base-view";
import { DraggableItem } from "@/components/editor/panels/assets/draggable-item";
import { useCallback } from "react";
import { useEditor } from "@/hooks/use-editor";
import Image from "next/image";

const DUMMY_TRANSITIONS = [
	{ id: "transition-cross-dissolve", name: "Cross Dissolve", type: "transition", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200&auto=format&fit=crop" },
	{ id: "transition-fade-black", name: "Fade to Black", type: "transition", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200&auto=format&fit=crop" },
	{ id: "transition-fade-white", name: "Fade to White", type: "transition", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200&auto=format&fit=crop" },
	{ id: "transition-slide-left", name: "Slide Left", type: "transition", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200&auto=format&fit=crop" },
	{ id: "transition-slide-right", name: "Slide Right", type: "transition", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200&auto=format&fit=crop" },
	{ id: "transition-slide-up", name: "Slide Up", type: "transition", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200&auto=format&fit=crop" },
	{ id: "transition-slide-down", name: "Slide Down", type: "transition", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200&auto=format&fit=crop" },
	{ id: "transition-zoom-in", name: "Zoom In", type: "transition", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200&auto=format&fit=crop" },
	{ id: "transition-zoom-out", name: "Zoom Out", type: "transition", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=200&auto=format&fit=crop" },
];

export function TransitionsView() {
	return (
		<PanelView title="Transitions">
			<div
				className="grid gap-2"
				style={{ gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))" }}
			>
				{DUMMY_TRANSITIONS.map((transition) => (
					<TransitionItem key={transition.id} transition={transition} />
				))}
			</div>
		</PanelView>
	);
}

function TransitionItem({ transition }: { transition: (typeof DUMMY_TRANSITIONS)[0] }) {
	const editor = useEditor();

	const handleAddToTimeline = useCallback(() => {
		// Mock inserting a transition element.
		console.log("Added transition", transition.name);
	}, [editor, transition.name]);

	const preview = (
		<div className="relative size-full">
			<Image
				src={transition.image}
				alt={transition.name}
				fill
				className="object-cover"
			/>
		</div>
	);

	return (
		<DraggableItem
			name={transition.name}
			preview={preview}
			dragData={{
				id: transition.id,
				name: transition.name,
				type: transition.type as any, // "transition" element type
			}}
			onAddToTimeline={handleAddToTimeline}
			aspectRatio={1}
			isRounded
			variant="card"
			containerClassName="w-full"
		/>
	);
}
