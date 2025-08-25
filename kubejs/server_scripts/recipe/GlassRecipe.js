const GlassRecipe = (event) => {
	event.shapeless(
		Item.of('tfc:silica_glass_batch', 4), 
		[
			'4x tfc:white_sand',
			'#tgs:any_glass_work_potash_dust', 	       
			'#tgs:any_glass_work_lime_dust',
			'#tgs:any_glass_work_quartz_sand_dust',
			'gtceu:flint_dust'
		]
	)
	event.shapeless(
		Item.of('tfc:hematitic_glass_batch', 4), 
		[
			'4x #tfc:hematitic_sand',
			'#tgs:any_glass_work_potash_dust', 	       
			'#tgs:any_glass_work_lime_dust',
			'#tgs:any_glass_work_quartz_sand_dust',
			'gtceu:flint_dust'
		]
	)
	event.shapeless(
		Item.of('tfc:olivine_glass_batch', 4), 
		[
			'4x #tfc:olivine_sand',
			'#tgs:any_glass_work_potash_dust', 	       
			'#tgs:any_glass_work_lime_dust',
			'#tgs:any_glass_work_quartz_sand_dust',
			'gtceu:flint_dust'
		]
	)
	event.shapeless(
		Item.of('tfc:volcanic_glass_batch', 4), 
		[
			'4x #tfc:volcanic_sand',
			'#tgs:any_glass_work_potash_dust', 	       
			'#tgs:any_glass_work_lime_dust',
			'#tgs:any_glass_work_quartz_sand_dust',
			'gtceu:flint_dust'
		]
	)
	event.recipes.gtceu.mixer('mix_volcanic_glass_batch_4x')
		.itemInputs('4x #tfc:volcanic_sand',
			'#tgs:any_glass_work_potash_dust', 	       
			'#tgs:any_glass_work_lime_dust',
			'#tgs:any_glass_work_quartz_sand_dust',
			'gtceu:flint_dust')
		.itemOutputs('4x tfc:volcanic_glass_batch')
		.duration(200)
		.EUt(3)
	event.recipes.gtceu.mixer('mix_olivine_glass_batch_4x')
		.itemInputs('4x #tfc:olivine_sand',
			'#tgs:any_glass_work_potash_dust', 	       
			'#tgs:any_glass_work_lime_dust',
			'#tgs:any_glass_work_quartz_sand_dust',
			'gtceu:flint_dust')
		.itemOutputs('4x tfc:olivine_glass_batch')
		.duration(200)
		.EUt(3)
	event.recipes.gtceu.mixer('mix_hematitic_glass_batch_4x')
		.itemInputs('4x #tfc:hematitic_sand',
			'#tgs:any_glass_work_potash_dust', 	       
			'#tgs:any_glass_work_lime_dust',
			'#tgs:any_glass_work_quartz_sand_dust',
			'gtceu:flint_dust')
		.itemOutputs('4x tfc:hematitic_glass_batch')
		.duration(200)
		.EUt(3)
	event.recipes.gtceu.mixer('mix_silica_glass_batch_4x')
		.itemInputs('4x tfc:white_sand',
			'#tgs:any_glass_work_potash_dust', 	       
			'#tgs:any_glass_work_lime_dust',
			'#tgs:any_glass_work_quartz_sand_dust',
			'gtceu:flint_dust')
		.itemOutputs('4x tfc:silica_glass_batch')
		.duration(200)
		.EUt(3)
	
	event.recipes.gtceu.alloy_smelter('alloy_smelt_glass_batch_block')
		.itemInputs('tfc:silica_glass_batch')
		.notConsumable('gtceu:block_casting_mold')
		.itemOutputs('minecraft:glass')
		.duration(120)
		.EUt(6)
	event.recipes.gtceu.alloy_smelter('alloy_smelt_olivine_glass_batch_block')
		.itemInputs('tfc:olivine_glass_batch')
		.notConsumable('gtceu:block_casting_mold')
		.itemOutputs('minecraft:green_stained_glass')
		.duration(120)
		.EUt(6)
	event.recipes.gtceu.alloy_smelter('alloy_smelt_hematitic_glass_batch_block')
		.itemInputs('tfc:hematitic_glass_batch')
		.notConsumable('gtceu:block_casting_mold')
		.itemOutputs('minecraft:orange_stained_glass')
		.duration(120)
		.EUt(6)
	event.recipes.gtceu.alloy_smelter('alloy_smelt_volcanic_glass_batch_block')
		.itemInputs('tfc:volcanic_glass_batch')
		.notConsumable('gtceu:block_casting_mold')
		.itemOutputs('minecraft:blue_stained_glass')
		.duration(120)
		.EUt(6)
	
	event.recipes.gtceu.alloy_smelter('alloy_smelt_glass_batch_tube')
		.itemInputs('tfc:silica_glass_batch')
		.notConsumable('gtceu:ball_casting_mold')
		.itemOutputs('gtceu:glass_tube')
		.duration(160)
		.EUt(16)
	
	event.recipes.gtceu.alloy_smelter('alloy_smelt_glass_batch_plate')
		.itemInputs('2x tfc:silica_glass_batch')
		.notConsumable('gtceu:plate_casting_mold')
		.itemOutputs('gtceu:glass_plate')
		.duration(40)
		.EUt(6)
	
	event.recipes.gtceu.alloy_smelter('alloy_smelt_glass_batch_bottle')
		.itemInputs('tfc:silica_glass_batch')
		.notConsumable('gtceu:bottle_casting_mold')
		.itemOutputs('minecraft:glass_bottle')
		.duration(64)
		.EUt(6)
		
	event.recipes.gtceu.forming_press('press_glass_batch_tube')
		.itemInputs('tfc:silica_glass_batch')
		.notConsumable('gtceu:ball_casting_mold')
		.itemOutputs('gtceu:glass_tube')
		.duration(80)
		.EUt(7)
	event.recipes.gtceu.forming_press('press_glass_batch_block')
		.itemInputs('tfc:silica_glass_batch')
		.notConsumable('gtceu:block_casting_mold')
		.itemOutputs('minecraft:glass')
		.duration(80)
		.EUt(30)
}