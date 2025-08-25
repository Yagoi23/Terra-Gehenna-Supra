const SteamMachineRecipes = (event) => {
	event.shaped('ironfurnaces:iron_furnace', ['AAA','ABA','ACA'],
	{
		A: 'gtceu:double_iron_plate',
		B: '#gtceu:tools/crafting_wrenches',  
		C: 'ironfurnaces:copper_furnace'
		
	})
	event.shaped('ironfurnaces:copper_furnace', ['AAA','ABA','ACA'],
	{
		A: 'gtceu:double_copper_plate',
		B: '#gtceu:tools/crafting_wrenches',  
		C: 'minecraft:furnace'
		
	})
	event.shaped('ironfurnaces:silver_furnace', ['AAA','ABA','ACA'],
	{
		A: 'gtceu:double_silver_plate',
		B: '#gtceu:tools/crafting_wrenches',  
		C: 'ironfurnaces:iron_furnace'
		
	})
	event.shaped('ironfurnaces:gold_furnace', ['AAA','ABA','ACA'],
	{
		A: 'gtceu:double_gold_plate',
		B: '#gtceu:tools/crafting_wrenches',  
		C: 'ironfurnaces:silver_furnace'
		
	})
	
	event.shaped('gtceu:lp_steam_solid_boiler', ['AAA','ABA','DCD'],
	{
		A: '#minecraft:any_bronze_double_plate',
		B: '#gtceu:tools/crafting_wrenches',  
		C: 'ironfurnaces:iron_furnace',
		D: 'minecraft:bricks'
		
	})
	event.shaped('gtceu:hp_steam_solid_boiler', ['AAA','ABA','DCD'],
	{
		A: 'gtceu:double_steel_plate',
		B: '#gtceu:tools/crafting_wrenches',  
		C: 'ironfurnaces:iron_furnace',
		D: 'minecraft:bricks'
		
	})
	event.shaped('gtceu:lp_steam_alloy_smelter', ['ADA','BCB','ADA'],
	{
		A: 'gtceu:bronze_small_fluid_pipe',
		B: 'ironfurnaces:copper_furnace',  
		C: 'gtceu:bronze_brick_casing',
		D: '#minecraft:any_bronze_double_plate'
		
	})
	event.shaped('gtceu:hp_steam_alloy_smelter', ['ABA','DCD','AEA'],
	{
		A: 'gtceu:double_wrought_iron_plate',
		B: 'ironfurnaces:iron_furnace',  
		C: 'gtceu:lp_steam_alloy_smelter',
		D: 'gtceu:double_steel_plate',
		E: 'gtceu:tin_alloy_small_fluid_pipe'
		
	})
	event.shaped('minecraft:furnace', ['AAA','CBC','DDD'],
	{
		A: '#forge:cobblestone/normal',
		B: '#gtceu:tools/crafting_wrenches',  
		C: 'gtceu:double_wrought_iron_plate',
		D: '#forge:stone_bricks'
		
	})
}