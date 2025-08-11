const fluidTags = (event) => {
	//event.remove('ad_astra:fuel', 'gtceu:diesel')
	event.remove('ad_astra:tier_1_rocket_fuel', 'gtceu:diesel')
	event.remove('ad_astra:tier_2_rocket_fuel', 'gtceu:diesel')
	//event.remove('ad_astra:fuel', 'gtceu:cetane_boosted_diesel')
	event.remove('ad_astra:tier_1_rocket_fuel', 'gtceu:cetane_boosted_diesel')
	event.remove('ad_astra:tier_2_rocket_fuel', 'gtceu:cetane_boosted_diesel')
	event.add('ad_astra:tier_1_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:cetane_boosted_diesel')
	
	event.add('forge:resin', 'kubejs:resin')
	event.add('forge:resin', 'kubejs:chestnut_resin')
	event.add('forge:resin', 'kubejs:oak_resin')
	event.add('forge:resin', 'kubejs:eucalyptus_gum')
}