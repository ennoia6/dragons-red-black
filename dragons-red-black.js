Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "dragons-red-black", name: "Q WORKSHOP Dragons Red & Black"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/dragons-red-black/d2_dragons.glb",
		system: "dragons-red-black"
	});
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/dragons-red-black/d4_dragons_SDRA04.glb",
		system: "dragons-red-black"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/dragons-red-black/d6_dragons_SDRA04.glb",
		system: "dragons-red-black"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/dragons-red-black/d8_dragons_SDRA04.glb",
		system: "dragons-red-black"
	});
	dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/dragons-red-black/d10_dragons_SDRA04.glb",
		system: "dragons-red-black"
	});
	dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/dragons-red-black/d100_dragons_SDRA04.glb",
		system: "dragons-red-black"
	});
	dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/dragons-red-black/d12_dragons_SDRA04.glb",
		system: "dragons-red-black"
	});
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/dragons-red-black/d20_dragons_SDRA04.glb",
		system: "dragons-red-black"
	});
});
