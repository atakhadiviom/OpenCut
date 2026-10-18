"use client";

import { PanelView } from "@/components/editor/panels/assets/views/base-view";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ADJUSTMENT_CONTROLS = [
	{ id: "brightness", name: "Brightness", defaultValue: 0, min: -50, max: 50 },
	{ id: "contrast", name: "Contrast", defaultValue: 0, min: -50, max: 50 },
	{ id: "saturation", name: "Saturation", defaultValue: 0, min: -50, max: 50 },
	{ id: "temperature", name: "Temperature", defaultValue: 0, min: -50, max: 50 },
	{ id: "tint", name: "Tint", defaultValue: 0, min: -50, max: 50 },
	{ id: "highlights", name: "Highlights", defaultValue: 0, min: -50, max: 50 },
	{ id: "shadows", name: "Shadows", defaultValue: 0, min: -50, max: 50 },
];

export function AdjustmentsView() {
	return (
		<PanelView title="Adjustment">
			<div className="flex flex-col gap-6 py-2 px-1">
				{ADJUSTMENT_CONTROLS.map((control) => (
					<AdjustmentSlider key={control.id} control={control} />
				))}
			</div>
		</PanelView>
	);
}

function AdjustmentSlider({ control }: { control: (typeof ADJUSTMENT_CONTROLS)[0] }) {
	const [value, setValue] = useState([control.defaultValue]);

	const handleValueChange = (newValue: number[]) => {
		setValue(newValue);
		// In a real implementation, this would update the editor state for the selected element
		console.log(`Adjusted ${control.name} to ${newValue[0]}`);
	};

	return (
		<div className="flex flex-col gap-3">
			<div className="flex items-center justify-between">
				<Label className="text-sm font-medium">{control.name}</Label>
				<span className="text-muted-foreground text-xs w-8 text-right">
					{value[0]}
				</span>
			</div>
			<Slider
				value={value}
				min={control.min}
				max={control.max}
				step={1}
				onValueChange={handleValueChange}
			/>
		</div>
	);
}
