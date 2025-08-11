const DeepMobRecipe = (event) => {
 event.shaped(
  Item.of('hostilenetworks:blank_data_model'),
  [
    'AAB',
    'CDB',
    'AAB'
  ],
  {
    A: 'gtceu:electrical_steel_plate',
    B: 'gtceu:fine_gold_wire',  
    C: 'kubejs:pulsating_mesh',
	D: '#gtceu:circuits/mv'
  }
)
	event.recipes.gtceu.alloy_smelter("pulsating_mesh")
		//.inputFluids('gtceu:sterilized_growth_medium 500')
		//.notConsumable('kubejs:cultured_petri_dish_ecoli')
		//.chancedFluidOutput('gtceu:escherichia_koli', 3300, 1)
		//.outputFluids('gtceu:escherichia_koli 50')
		.itemInputs('kubejs:pulsating_dust',
					 'gtceu:carbon_fiber_mesh')
		.itemOutputs('kubejs:pulsating_mesh')
		.duration(120)
		.EUt(32)
	
	event.recipes.gtceu.mixer("pulsating_dust")
		.inputFluids('kubejs:resonant_ender 500')
		.itemInputs('kubejs:petrotheum_dust')
		.itemOutputs('kubejs:pulsating_dust')
		.duration(120)
		.EUt(32)
	
	event.recipes.gtceu.brewery("resonant_ender")
		.inputFluids('gtceu:ender_pearl 1000')
		.notConsumable('gtceu:tiny_uranium_235_dust')
		.outputFluids('kubejs:resonant_ender 1000')
		.duration(120)
		.EUt(32)
		
	event.recipes.gtceu.mixer("petrotheum_dust")
		.inputFluids('gtceu:diesel 500')
		.itemInputs('gtceu:coal_dust')
		.itemOutputs('kubejs:petrotheum_dust')
		.duration(120)
		.EUt(32)
	
	event.recipes.gtceu.alloy_smelter("electrical_steel_ingot")
		.itemInputs('gtceu:silicon_dust',
					 'gtceu:steel_dust')
		.itemOutputs('gtceu:electrical_steel_ingot')
		.duration(120)
		.EUt(32)
	
	event.recipes.gtceu.mixer("petrotheum")
		.inputFluids('kubejs:pyrotheum 500')
		.itemInputs('kubejs:petrotheum_dust')
		.outputFluids('kubejs:petrotheum 500')
		.duration(120)
		.EUt(32)
}