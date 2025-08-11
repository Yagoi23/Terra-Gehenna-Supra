
const AdAstraRecipe = (event) => {
	event.recipes.gtceu.assembler('tier1rocket')
		.itemInputs('ad_astra:rocket_nose_cone', '6x gtnn:heavy_plate_t1', '2x ad_astra:steel_tank', '4x ad_astra:rocket_fin', 'ad_astra:steel_engine')
		.itemOutputs('ad_astra:tier_1_rocket')
		.duration(3000)
		.EUt(480)
	
	event.recipes.gtceu.assembler('tier2rocket')
		.itemInputs('ad_astra:rocket_nose_cone', '6x gtnn:heavy_plate_t2', '2x ad_astra:desh_tank', '4x ad_astra:rocket_fin', 'ad_astra:desh_engine')
		.itemOutputs('ad_astra:tier_2_rocket')
		.duration(6000)
		.EUt(1920)
	
	event.recipes.gtceu.assembler('tier3rocket')
		.itemInputs('ad_astra:rocket_nose_cone', '6x gtnn:heavy_plate_t3', '2x ad_astra:ostrum_tank', '4x ad_astra:rocket_fin', 'ad_astra:ostrum_engine')
		.itemOutputs('ad_astra:tier_3_rocket')
		.duration(9000)
		.EUt(7680)
	
	event.recipes.gtceu.assembler('tier4rocket')
		.itemInputs('ad_astra:rocket_nose_cone', '6x gtnn:heavy_plate_t4', '2x ad_astra:calorite_tank', '4x ad_astra:rocket_fin', 'ad_astra:calorite_engine')
		.itemOutputs('ad_astra:tier_4_rocket')
		.duration(12000)
		.EUt(30720)
	
	event.recipes.gtceu.assembler('steel_engine')
		.itemInputs('4x gtnn:heavy_plate_t1', 'gtnn:t1_chip', 'ad_astra:engine_frame', 'ad_astra:steel_tank', 'gtceu:hv_electric_motor', 'ad_astra:fan')
		.itemOutputs('ad_astra:steel_engine')
		.duration(1500)
		.EUt(480)
	
	event.recipes.gtceu.assembler('engine_frame')
		.itemInputs('4x gtceu:steel_rod', 'gtceu:steel_firebox_casing', '#gtceu:circuits/hv', 'gtceu:hv_fluid_regulator', 'gtceu:advanced_activity_detector_cover', 'gtceu:steel_fluid_cell')
		.itemOutputs('ad_astra:engine_frame')
		.duration(700)
		.EUt(480)
	
	event.recipes.gtceu.assembler('rocket_fin')
		.itemInputs('4x gtnn:heavy_plate_t1', '2x gtceu:double_steel_plate')
		.itemOutputs('ad_astra:rocket_fin')
		.inputFluids('gtceu:stainless_steel 72')
		.duration(600)
		.EUt(480)
	
	event.recipes.gtceu.assembler('fan')
		.itemInputs('4x gtnn:heavy_plate_t1', 'gtceu:long_stainless_steel_rod', '2x gtceu:steel_rotor')
		.itemOutputs('ad_astra:fan')
		.duration(500)
		.EUt(480)
	event.shaped('ad_astra:fan', ['AEA','BCB','ADA'],
	{
		A: 'gtnn:heavy_plate_t1',
		B: 'gtceu:steel_rotor',  
		C: 'gtceu:long_stainless_steel_rod',
		D: '#gtceu:tools/crafting_wrenches',
		E: '#gtceu:tools/crafting_screwdrivers'
	})
	event.recipes.gtceu.assembler('desh_tank')
		.itemInputs('gtceu:stainless_steel_fluid_cell', '2x gtnn:t2_chip', '2x gtceu:desh_plate')
		.itemOutputs('ad_astra:desh_tank')
		.duration(500)
		.EUt(1920)
	event.recipes.gtceu.assembler('ostrum_tank')
		.itemInputs('gtceu:titanium_fluid_cell', '2x gtnn:t3_chip', '2x gtceu:ostrum_plate')
		.itemOutputs('ad_astra:ostrum_tank')
		.duration(500)
		.EUt(7680)
	event.recipes.gtceu.assembler('calorite_tank')
		.itemInputs('gtceu:tungsten_steel_fluid_cell', '2x gtnn:t4_chip', '2x gtceu:calorite_plate')
		.itemOutputs('ad_astra:calorite_tank')
		.duration(500)
		.EUt(30720)
	
}