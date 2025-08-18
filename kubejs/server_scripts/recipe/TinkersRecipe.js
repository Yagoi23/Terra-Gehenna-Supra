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
	/*event.shaped(Item.of('tconstruct:hand_axe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock#stone","tconstruct:wood","tconstruct:rock#stone"],tic_modifiers:[{level:2,name:"tconstruct:stonebound"},{level:1,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:stripping"}],tic_persistent:{},tic_stats:{"tconstruct:attack_damage":7.0f,"tconstruct:attack_speed":0.9f,"tconstruct:durability":130.0f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":4.0f},tic_volatile_data:{abilities:1,upgrades:3}}'), ['CA',' B'],
	{
		A: Item.of('tconstruct:small_axe_head', '{Material:"tconstruct:rock"}'),
		B: 'minecraft:stick',
		C: Item.of('tconstruct:tool_binding', '{Material:"tconstruct:vine"}')
		
	})*/
	event.recipes.tfc.advanced_shaped_crafting(
        Item.of('tconstruct:hand_axe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock#stone","tconstruct:wood","tconstruct:rock#stone"],tic_modifiers:[{level:2,name:"tconstruct:stonebound"},{level:1,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:stripping"}],tic_persistent:{},tic_stats:{"tconstruct:attack_damage":7.0f,"tconstruct:attack_speed":0.9f,"tconstruct:durability":130.0f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":4.0f},tic_volatile_data:{abilities:1,upgrades:3}}'),
        [
            'CA',
            'B '
        ], {
            A: Item.of('tconstruct:small_axe_head', '{Material:"tconstruct:rock"}'),
		B: 'minecraft:stick',
		C: Item.of('tconstruct:tool_binding', '{Material:"tconstruct:vine"}')
        },
		0,
		0
    )
	
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
	event.smelting('tconstruct:seared_brick', 'kubejs:grout_brick')
	
	event.shaped(Item.of('tconstruct:dagger', '{Damage:0,ISB_Spells:{data:[],maxSpells:1,mustEquip:0b,spellWheel:1b},tic_broken:0b,tic_materials:["tconstruct:rock","tconstruct:wood"],tic_modifiers:[{level:1,name:"tconstruct:stonebound"},{level:1,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:offhand_attack"},{level:1,name:"tconstruct:padded"},{level:1,name:"tconstruct:silky_shears"}],tic_multipliers:{"tconstruct:attack_damage":0.65f,"tconstruct:durability":0.75f,"tconstruct:mining_speed":0.75f},tic_persistent:{},tic_stats:{"tconstruct:attack_damage":2.6f,"tconstruct:attack_speed":2.0f,"tconstruct:block_amount":10.0f,"tconstruct:durability":97.5f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":3.0f,"tconstruct:use_item_speed":1.0f},tic_volatile_data:{abilities:1,"tconstruct:duel_wielding":1b,upgrades:3}}'), ['A','B'],
	{
		A: Item.of('tconstruct:small_blade', '{Material:"tconstruct:rock"}'),
		B: 'minecraft:stick'
		
	})
}