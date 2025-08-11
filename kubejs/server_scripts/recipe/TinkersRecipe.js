const TinkersRecipe = (event) => {
	/*event.shaped('tconstruct:pattern', ['ABA','BCB','ABA'],
	{
		A: '#tfc:lumber',
		B: 'minecraft:stick',  
		C: 'minecraft:paper'
		
	})*/
	
	event.shaped('tconstruct:pattern', ['AB','BA'],
	{
		A: '#tfc:lumber',
		B: 'minecraft:stick'
		
	})
	event.shaped(Item.of('tconstruct:hand_axe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock#stone","tconstruct:wood","tconstruct:rock#stone"],tic_modifiers:[{level:2,name:"tconstruct:stonebound"},{level:1,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:stripping"}],tic_persistent:{},tic_stats:{"tconstruct:attack_damage":7.0f,"tconstruct:attack_speed":0.9f,"tconstruct:durability":130.0f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":4.0f},tic_volatile_data:{abilities:1,upgrades:3}}'), ['A','B'],
	{
		A: Item.of('tconstruct:small_axe_head', '{Material:"tconstruct:rock"}'),
		B: 'minecraft:stick'
		
	})
	
	event.shaped('tconstruct:seared_bricks', ['ABA','ACA','ABA'],
	{
		A: 'tconstruct:seared_brick',
		B: 'tfc:mortar',
		C: 'gtceu:concrete_bucket'
		
	})
	
	event.shaped('tconstruct:seared_melter', ['ABA','BCB','DED'],
	{
		A: 'gtceu:steel_ingot',
		B: 'tconstruct:seared_brick',
		C: '#tconstruct:seared_tanks',
		D: 'tconstruct:seared_bricks',
		E: '#gtceu:tools/crafting_hammers'
	})
	
	event.shaped('tconstruct:seared_heater', ['AAA','ABA','CDC'],
	{
		A: 'tconstruct:seared_bricks',
		B: 'ironfurnaces:copper_furnace',
		C: 'tconstruct:seared_bricks',
		D: 'gtceu:double_steel_plate'
	})
	event.shaped('kubejs:grout_brick', ['A','B'],
	{
		A: 'tconstruct:grout',
		B: 'gtceu:brick_wooden_form'
		
	})
}