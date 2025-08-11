const Grains = ["wheat", "rice", "barley", "rye", "maize", "oat"]
const FoodRecipe = (event) => {
	Grains.forEach((grain) => {
		event.recipes.gtceu.macerator(`macerate_${grain}`)
			.itemInputs(`tfc:food/${grain}`)
			.itemOutputs(`2x tfc:food/${grain}_grain`)
			.duration(300)
			.EUt(8)
		event.recipes.gtceu.macerator(`macerate_${grain}_grain`)
			.itemInputs(`tfc:food/${grain}_grain`)
			.itemOutputs(`tfc:food/${grain}_flour`)
			.chancedOutput(`tfc:food/${grain}_flour`, 3000, 1)
			.duration(400)
			.EUt(8)
		event.recipes.gtceu.mixer(`mix_${grain}_flatbread_dough`)
			.itemInputs(`tfc:food/${grain}_flour`)
			.itemOutputs(`2x tfc:food/${grain}_dough`)
			.inputFluids('minecraft:water 20')
			.duration(400)
			.EUt(8)
		event.recipes.gtceu.mixer(`mix_${grain}_flatbread_dough_dw`)
			.itemInputs(`tfc:food/${grain}_flour`)
			.itemOutputs(`2x tfc:food/${grain}_dough`)
			.inputFluids('gtceu:distilled_water 200')
			.chancedOutput(`tfc:food/${grain}_dough`, 3000, 1)
			.duration(400)
			.EUt(8)
		
		event.recipes.gtceu.mixer(`mix_${grain}_dough`)
			.itemInputs(`tfc:food/${grain}_flour`, '#tfc:sweetener')
			.itemOutputs(`4x firmalife:food/${grain}_dough`)
			.inputFluids('firmalife:yeast_starter 200')
			.duration(400)
			.EUt(8)
		
		event.smelting(`firmalife:food/${grain}_flatbread`, `tfc:food/${grain}_dough`)
		event.smelting(`tfc:food/${grain}_bread`, `firmalife:food/${grain}_dough`)
	})
	
	event.recipes.tfc.advanced_shapeless_crafting(
        'farmersdelight:mutton_wrap',
        [
            'firmalife:food/corn_tortilla',
            'tfc:food/onion',
			'farmersdelight:cooked_mutton_chops',
			'farmersdelight:cabbage_leaf'
        ]
    )
	event.recipes.gtceu.macerator('macerate_wheat2')
			.itemInputs('tfc:food/wheat')
			.itemOutputs('2x tfc:food/wheat_grain')
			.duration(300)
			.EUt(8)
	
}