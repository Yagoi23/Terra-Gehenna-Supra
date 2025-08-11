const CreateRecipe = (event) => {
	/*event.shaped(
		Item.of('create:shaft', 2), 
		[
			'AC',
			'BC'
		],
		{
			A: '#forge:tools/files',
			B: '#forge:tools/hammers', 
			C: 'minecraft:iron_ingot'
		})
	event.shaped(
		Item.of('create:shaft', 4), 
		[
			'AC',
			'BC'
		],
		{
			A: '#forge:tools/files',
			B: '#forge:tools/hammers', 
			C: 'gtceu:wrought_iron_ingot'
		})
	event.shaped(
		Item.of('create:shaft', 8), 
		[
			'AC',
			'BC'
		],
		{
			A: '#forge:tools/files',
			B: '#forge:tools/hammers', 
			C: 'gtceu:steel_ingot'
		})*/
		
	event.shaped(
		Item.of('vintageimprovements:vibrating_table'), 
		[
			'ABA',
			'CDC',
			'EFE'
		],
		{
			A: 'gtceu:wrought_iron_ingot',
			B: '#minecraft:wooden_slabs', 
			C: 'gtceu:iron_spring',
			D: 'create:cogwheel',
			E: 'create:andesite_casing',
			F: 'create:mechanical_piston'
		})
	
	
	/*event.shaped(
		Item.of('create:cogwheel'), 
		[
			'AB',
			'C '
		],
		{
			A: 'create:shaft',
			B: '#forge:gears/wood',
			C: '#forge:tools/hammers'
		})
	event.shaped(
		Item.of('create:large_cogwheel'), 
		[
			'CBC',
			'BAB',
			'CBC'
		],
		{
			A: 'create:cogwheel',
			B: '#minecraft:planks',
			C: '#tfc:lumber'
		})*/
		
	
}