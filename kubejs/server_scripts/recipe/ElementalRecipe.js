const ElementalRecipe = (event) => {
	event.recipes.gtceu.mixer("mix_pyrotheum")
		.inputFluids('minecraft:lava 500', 'kubejs:energized_glowstone 500')
		//.notConsumable('kubejs:cultured_petri_dish_ecoli')
		//.chancedFluidOutput('gtceu:escherichia_koli', 3300, 1)
		.outputFluids('kubejs:pyrotheum 1000')
		.itemInputs('kubejs:pyrotheum_dust')
		//.itemOutputs('gtceu:petri_dish')
		.duration(12000)
		.EUt(1620)

	event.recipes.gtceu.mixer("mix_pyrotheum_dust")
		.inputFluids('kubejs:destabilized_redstone 500')
		//.notConsumable('kubejs:cultured_petri_dish_ecoli')
		//.chancedFluidOutput('gtceu:escherichia_koli', 3300, 1)
		//.outputFluids('kubejs:pyrotheum 1000')
		.itemInputs('minecraft:blaze_powder', 'minecraft:glowstone_dust', 'gtceu:sulfur_dust')
		.itemOutputs('kubejs:pyrotheum_dust')
		.duration(12000)
		.EUt(1620)

	event.recipes.gtceu.mixer("mix_blazing_pyrotheum")
		.inputFluids('kubejs:pyrotheum 1000')
		.outputFluids('kubejs:blazing_pyrotheum 1000')
		.itemInputs('kubejs:fire_gem_dust')
		//.itemOutputs('kubejs:pyrotheum_dust')
		.duration(12000)
		.EUt(1620)

	event.recipes.gtceu.mixer("mix_earthen_petrotheum")
		.inputFluids('kubejs:petrotheum 1000')
		.outputFluids('kubejs:earthen_petrotheum 1000')
		.itemInputs('kubejs:earth_gem_dust')
		//.itemOutputs('kubejs:pyrotheum_dust')
		.duration(12000)
		.EUt(1620)

	let Elements = ['earth', 'air', 'fire', 'water']

	Elements.forEach((ele) => {
		event.recipes.gtceu.macerator(`crush_crude_${ele}_gem`)
			.itemInputs(`elementalcraft:crude_${ele}_gem`)
			.itemOutputs(`kubejs:${ele}_gem_dust`)
			.duration(12000)
			.EUt(1620)
		event.recipes.gtceu.macerator(`crush_fine_${ele}_gem`)
			.itemInputs(`elementalcraft:fine_${ele}_gem`)
			.itemOutputs(`2x kubejs:${ele}_gem_dust`)
			.duration(12000)
			.EUt(1620)
		event.recipes.gtceu.macerator(`crush_pristine_${ele}_gem`)
			.itemInputs(`elementalcraft:pristine_${ele}_gem`)
			.itemOutputs(`4x kubejs:${ele}_gem_dust`)
			.duration(12000)
			.EUt(1620)
		event.recipes.gtceu.macerator(`crush_${ele}_crystal`)
			.itemInputs(`elementalcraft:${ele}crystal`)
			//.itemOutputs(`6x elementalcraft:${ele}_shard`)
			//.chancedOutput(`elementalcraft:${ele}_shard`, 50)
			//.chancedOutput(Item.of(`elementalcraft:${ele}_shard`, 4), 2000, 1000)
			//.chancedOutput(Item.of(`elementalcraft:${ele}_shard`, 4), 2000, 1000)
			.itemOutputsRanged(`elementalcraft:${ele}_shard`, 6, 8)
			.itemOutputsRanged(`elementalcraft:powerful_${ele}_shard`, 1, 2)
			//.chancedOutput(`elementalcraft:powerful_${ele}_shard`, 50)
			.duration(12000)
			.EUt(1620)


	})
	//I dunno how to do spirit trades
	//event.recipes.occultism.spirit_trade('minecraft:diamond', 'minecraft:bone')
	event.shaped('elementalcraft:firecrystal', [' A ', 'ABA', ' A '], { A: 'mysticalagriculture:fire_essence', B: 'elementalcraft:inert_crystal' })
	event.shaped('elementalcraft:watercrystal', [' A ', 'ABA', ' A '], { A: 'mysticalagriculture:water_essence', B: 'elementalcraft:inert_crystal' })
	event.shaped('elementalcraft:aircrystal', [' A ', 'ABA', ' A '], { A: 'mysticalagriculture:air_essence', B: 'elementalcraft:inert_crystal' })
	event.shaped('elementalcraft:earthcrystal', [' A ', 'ABA', ' A '], { A: 'mysticalagriculture:earth_essence', B: 'elementalcraft:inert_crystal' })

	//Item.of('forbidden_arcanus:blood_test_tube', '{Blood:3000}')

	event.recipes.gtceu.assembler('fire_inductor')
		.itemInputs('gtceu:steel_ring', '2x gtceu:fine_blazing_iron_wire')
		.itemOutputs('2x kubejs:fire_inductor')
		.inputFluids('gtceu:polyethylene 36')
		.duration(320)
		.EUt(120)
	event.recipes.gtceu.assembler('water_inductor')
		.itemInputs('gtceu:steel_ring', '2x gtceu:fine_drenched_iron_wire')
		.itemOutputs('2x kubejs:water_inductor')
		.inputFluids('gtceu:polyethylene 36')
		.duration(320)
		.EUt(120)
	event.recipes.gtceu.assembler('earth_inductor')
		.itemInputs('gtceu:steel_ring', '2x gtceu:fine_earthen_iron_wire')
		.itemOutputs('2x kubejs:earth_inductor')
		.inputFluids('gtceu:polyethylene 36')
		.duration(320)
		.EUt(120)
	event.recipes.gtceu.assembler('air_inductor')
		.itemInputs('gtceu:steel_ring', '2x gtceu:fine_aerial_iron_wire')
		.itemOutputs('2x kubejs:air_inductor')
		.inputFluids('gtceu:polyethylene 36')
		.duration(320)
		.EUt(120)
	
	event.recipes.gtceu.assembler('fire_capacitor')
		.itemInputs('gtceu:polyethylene_foil', '2x gtceu:blazing_iron_foil')
		.itemOutputs('8x kubejs:fire_capacitor')
		.inputFluids('gtceu:polyethylene 144')
		.duration(320)
		.EUt(120)
	event.recipes.gtceu.assembler('air_capacitor')
		.itemInputs('gtceu:polyethylene_foil', '2x gtceu:aerial_iron_foil')
		.itemOutputs('8x kubejs:air_capacitor')
		.inputFluids('gtceu:polyethylene 144')
		.duration(320)
		.EUt(120)
	event.recipes.gtceu.assembler('earth_capacitor')
		.itemInputs('gtceu:polyethylene_foil', '2x gtceu:earthen_iron_foil')
		.itemOutputs('8x kubejs:earth_capacitor')
		.inputFluids('gtceu:polyethylene 144')
		.duration(320)
		.EUt(120)
	event.recipes.gtceu.assembler('water_capacitor')
		.itemInputs('gtceu:polyethylene_foil', '2x gtceu:drenched_iron_foil')
		.itemOutputs('8x kubejs:water_capacitor')
		.inputFluids('gtceu:polyethylene 144')
		.duration(320)
		.EUt(120)


	event.custom({
		"type": "elementalcraft:pureinfusion",
		"element_amount": 60000,
		"ingredients": [
			{
				"item": "gtceu:inductor"
			},
			{
				"item": "kubejs:water_inductor"
			},
			{
				"item": "kubejs:fire_inductor"
			},
			{
				"item": "kubejs:earth_inductor"
			},
			{
				"item": "kubejs:air_inductor"
			}
		],
		"output": {
			"item": "kubejs:elemental_inductor"
		}
	})
	event.custom({
		"type": "elementalcraft:pureinfusion",
		"element_amount": 60000,
		"ingredients": [
			{
				"item": "gtceu:capacitor"
			},
			{
				"item": "kubejs:water_capacitor"
			},
			{
				"item": "kubejs:fire_capacitor"
			},
			{
				"item": "kubejs:earth_capacitor"
			},
			{
				"item": "kubejs:air_capacitor"
			}
		],
		"output": {
			"item": "kubejs:elemental_capacitor"
		}
	})
	
	event.recipes.gtceu.large_chemical_reactor('pulsating_printed_board_1')
		.itemInputs('gtceu:plastic_circuit_board', '6x gtceu:copper_foil', 'kubejs:pulsating_dust')
		.itemOutputs('kubejs:pulsating_printed_board')
		.inputFluids('gtceu:sodium_persulfate 500')
		.duration(600)
		.EUt(60)
	event.recipes.gtceu.large_chemical_reactor('pulsating_printed_board')
		.itemInputs('gtceu:plastic_circuit_board', '6x gtceu:copper_foil', 'kubejs:pulsating_dust')
		.itemOutputs('kubejs:pulsating_printed_board')
		.inputFluids('gtceu:iron_iii_chloride 250')
		.duration(600)
		.EUt(60)
	
	event.recipes.gtceu.circuit_assembler('water_processor_chip')
		.itemInputs('kubejs:pulsating_printed_board', 'gtceu:cpu_chip', '2x gtceu:resistor',
		'2x kubejs:water_capacitor', '2x gtceu:transistor', '2x gtceu:fine_copper_wire')
		.itemOutputs('3x kubejs:water_processor')
		.inputFluids('gtceu:tin 144')
		.duration(200)
		.EUt(60)
	event.recipes.gtceu.circuit_assembler('water_processor')
		.itemInputs('kubejs:pulsating_printed_board', 'gtceu:cpu_chip', '4x gtceu:resistor',
		'4x kubejs:water_capacitor', '4x gtceu:transistor', '4x gtceu:fine_red_alloy_wire')
		.itemOutputs('2x kubejs:water_micro_processor')
		.inputFluids('gtceu:tin 144')
		.duration(200)
		.EUt(60)
	event.recipes.gtceu.circuit_assembler('water_processor_assembly')
		.itemInputs('kubejs:pulsating_printed_board', '2x kubejs:water_micro_processor', '4x kubejs:water_inductor',
		'8x kubejs:water_capacitor', '4x gtceu:ram_chip', '8x gtceu:fine_red_alloy_wire')
		.itemOutputs('2x kubejs:water_processor_assembly')
		.inputFluids('gtceu:tin 288')
		.duration(200)
		.EUt(60)
}