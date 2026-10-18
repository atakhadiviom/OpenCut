"use client";

import { PanelView } from "@/components/editor/panels/assets/views/base-view";
import { DraggableItem } from "@/components/editor/panels/assets/draggable-item";
import { useCallback } from "react";
import { useEditor } from "@/hooks/use-editor";
import Image from "next/image";

const DUMMY_FILTERS = [
	{ id: "filter-bw", name: "B&W", type: "filter", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=200&auto=format&fit=crop&grayscale=true" },
	{ id: "filter-vintage", name: "Vintage", type: "filter", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=200&auto=format&fit=crop&sepia=1" },
	{ id: "filter-cool", name: "Cool", type: "filter", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=200&auto=format&fit=crop" },
	{ id: "filter-warm", name: "Warm", type: "filter", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=200&auto=format&fit=crop" },
	{ id: "filter-fade", name: "Fade", type: "filter", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=200&auto=format&fit=crop" },
	{ id: "filter-vibrant", name: "Vibrant", type: "filter", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=200&auto=format&fit=crop" },
	{ id: "filter- cinematic", name: "Cinematic", type: "filter", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=200&auto=format&fit=crop" },
	{ id: "filter-noir", name: "Noir", type: "filter", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=200&auto=format&fit=crop&grayscale=true" },
];

export function FiltersView() {
	return (
		<PanelView title="Filters">
			<div
				className="grid gap-2"
				style={{ gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))" }}
			>
				{DUMMY_FILTERS.map((filter) => (
					<FilterItem key={filter.id} filter={filter} />
				))}
			</div>
		</PanelView>
	);
}

function FilterItem({ filter }: { filter: (typeof DUMMY_FILTERS)[0] }) {
	const editor = useEditor();

	const handleAddToTimeline = useCallback(() => {
		// Mock inserting a filter element. For now, since "filter" element type isn't fully
        // supported in the timeline, we just log or fallback to a text element indicating it.
		console.log("Added filter", filter.name);
	}, [editor, filter.name]);

	const preview = (
		<div className="relative size-full">
			<Image
				src={filter.image}
				alt={filter.name}
				fill
				className="object-cover"
			/>
		</div>
	);

	return (
		<DraggableItem
			name={filter.name}
			preview={preview}
			dragData={{
				id: filter.id,
				name: filter.name,
				type: filter.type as any, // "filter" element type
			}}
			onAddToTimeline={handleAddToTimeline}
			aspectRatio={1}
			isRounded
			variant="card"
			containerClassName="w-full"
		/>
	);
}
