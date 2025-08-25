const AlgaeRecipe = (event) => {
	event.recipes.gtceu.green_algae_farm('grow_green_algae')
		.itemOutputs('tfc:plant/green_algae')
		.duration(1200)
		.EUt(6)
	
	event.recipes.gtceu.red_algae_farm('grow_red_algae')
		.itemOutputs('tfc:plant/red_algae')
		.duration(1200)
		.EUt(6)
}