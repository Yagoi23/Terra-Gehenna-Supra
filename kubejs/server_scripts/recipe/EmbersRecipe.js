const EmbersRecipe = (event) => {
	event.shapeless(Item.of('embers:caminite_blend', 6), ['#minecraft:sand', 'gtceu:calcite_dust', '2x gtceu:caminite_dust', '4x minecraft:clay_ball'])

	event.shapeless('tfc:ceramic/unfired_brick', ['gtceu:brick_wooden_form', 'minecraft:clay_ball'])

	event.shapeless('tfc:ceramic/unfired_fire_brick', ['gtceu:brick_wooden_form', 'tfc:fire_clay'])
	
	event.custom({
		type: "embers:mixing",
		inputs: [
		{
			amount: 15,
			fluid: "gtceu:mercury"
		},
		{
			amount: 15,
			fluid: "gtceu:rose_gold"
		}
		],
		output: {
			amount: 30,
			fluid: "embers:molten_dawnstone"
		}
	})
}