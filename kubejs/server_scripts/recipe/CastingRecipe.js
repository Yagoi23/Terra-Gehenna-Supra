const CastingRecipe = (event) => {
	event.recipes.tfc.heating('minecraft:copper_ingot', 1080)
        .resultFluid(Fluid.of('gtceu:copper', 144))
        .id('heating_copper_ingot')
		
	event.recipes.tfc.heating('gtceu:tiny_copper_dust', 1080)
        .resultFluid(Fluid.of('gtceu:copper', 16))
        .id('heating_tiny_copper_dust')
		
	event.recipes.tfc.heating('gtceu:copper_dust', 1080)
        .resultFluid(Fluid.of('gtceu:copper', 144))
        .id('heating_copper_dust')
		
	event.recipes.tfc.heating('gtceu:small_copper_dust', 1080)
        .resultFluid(Fluid.of('gtceu:copper', 36))
        .id('heating_small_copper_dust')
	
	event.recipes.tfc.heating('minecraft:raw_copper', 1080)
        .resultFluid(Fluid.of('gtceu:copper', 144))
        .id('heating_raw_copper')
	
	event.recipes.tfc.heating('gtceu:copper_nugget', 1080)
        .resultFluid(Fluid.of('gtceu:copper', 16))
        .id('heating_copper_nugget')
	
    event.recipes.tfc.casting('minecraft:copper_ingot', 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient('gtceu:copper', 144), 1)
	event.recipes.tfc.casting('minecraft:copper_ingot', 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient('gtceu:copper', 144), 1)
	
	event.recipes.tfc.casting('minecraft:iron_ingot', 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient('gtceu:iron', 144), 1)
	event.recipes.tfc.casting('minecraft:iron_ingot', 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient('gtceu:iron', 144), 1)
	
	event.recipes.tfc.casting('minecraft:gold_ingot', 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient('gtceu:gold', 144), 1)
	event.recipes.tfc.casting('minecraft:gold_ingot', 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient('gtceu:gold', 144), 1)
	
	event.recipes.tfc.casting('minecraft:bell', 'tfc:ceramic/bell_mold', TFC.fluidStackIngredient('gtceu:gold', 144), 1)
	
	const coppertypes = ["malachite", "tetrahedrite", "bornite", "chalcocite", "chalcopyrite"]
	coppertypes.forEach((copper) => {
		event.recipes.tfc.heating(`gtceu:${copper}_dust`, 1080)
			.resultFluid(Fluid.of('gtceu:copper', 144))
			.id(`heating_${copper}_dust`)
		event.recipes.tfc.heating(`gtceu:small_${copper}_dust`, 1080)
			.resultFluid(Fluid.of('gtceu:copper', 36))
			.id(`heating_small_${copper}_dust`)
		event.recipes.tfc.heating(`gtceu:tiny_${copper}_dust`, 1080)
			.resultFluid(Fluid.of('gtceu:copper', 16))
			.id(`heating_tiny_${copper}_dust`)
		event.recipes.tfc.heating(`gtceu:raw_${copper}`, 1080)
			.resultFluid(Fluid.of('gtceu:copper', 144))
			.id(`heating_raw_${copper}`)
	})
	
	event.recipes.tfc.heating('minecraft:iron_ingot', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 144))
        .id('heating_iron_ingot')
	event.recipes.tfc.heating('minecraft:raw_iron', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 144))
        .id('heating_raw_iron')
	event.recipes.tfc.heating('minecraft:iron_nugget', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 16))
        .id('heating_iron_nugget')
	event.recipes.tfc.heating('gtceu:tiny_iron_dust', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 16))
        .id('heating_tiny_iron_dust')
		
	event.recipes.tfc.heating('gtceu:iron_dust', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 144))
        .id('heating_iron_dust')
		
	event.recipes.tfc.heating('gtceu:small_iron_dust', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 36))
        .id('heating_small_iron_dust')
	
	//const irontypes = ["yellow_limonite", "brown_limonite", "hematite", "magnetite", "goethite", "pyrite", "granitic_mineral_sand", "basaltic_mineral_sand"]
	const irontypes = ["yellow_limonite", "hematite", "magnetite", "goethite", "pyrite", "granitic_mineral_sand", "basaltic_mineral_sand"]
	irontypes.forEach((iron) => {
		event.recipes.tfc.heating(`gtceu:${iron}_dust`, 1535)
			.resultFluid(Fluid.of('gtceu:iron', 144))
			.id(`heating_${iron}_dust`)
		event.recipes.tfc.heating(`gtceu:small_${iron}_dust`, 1535)
			.resultFluid(Fluid.of('gtceu:iron', 36))
			.id(`heating_small_${iron}_dust`)
		event.recipes.tfc.heating(`gtceu:tiny_${iron}_dust`, 1535)
			.resultFluid(Fluid.of('gtceu:iron', 16))
			.id(`heating_tiny_${iron}_dust`)
		event.recipes.tfc.heating(`gtceu:raw_${iron}`, 1535)
			.resultFluid(Fluid.of('gtceu:iron', 144))
			.id(`heating_raw_${iron}`)
	})
	
	event.recipes.tfc.heating('gtceu:silver_ingot', 950)
        .resultFluid(Fluid.of('gtceu:silver', 144))
        .id('heating_silver_ingot')
	event.recipes.tfc.heating('gtceu:silver_nugget', 950)
        .resultFluid(Fluid.of('gtceu:silver', 16))
        .id('heating_silver_nugget')
	event.recipes.tfc.heating('gtceu:silver_dust', 950)
		.resultFluid(Fluid.of('gtceu:silver', 144))
		.id('heating_silver_dust')
	event.recipes.tfc.heating('gtceu:small_silver_dust', 950)
		.resultFluid(Fluid.of('gtceu:silver', 36))
		.id('heating_small_silver_dust')
	event.recipes.tfc.heating('gtceu:tiny_silver_dust', 950)
		.resultFluid(Fluid.of('gtceu:silver', 16))
		.id('heating_tiny_silver_dust')
	event.recipes.tfc.heating('gtceu:raw_silver', 950)
		.resultFluid(Fluid.of('gtceu:silver', 144))
		.id('heating_raw_silver')
	
	//event.recipes.tfc.heating('gtceu:andesite_alloy_ingot', 1535)
		//.resultFluid(Fluid.of('gtceu:andesite_alloy', 144))
		//.id('heating_andesite_alloy_ingot')
	
	event.recipes.tfc.casting('gtceu:silver_ingot', 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient('gtceu:silver', 144), 1)
	event.recipes.tfc.casting('gtceu:silver_ingot', 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient('gtceu:silver', 144), 1)
	
	//event.recipes.tfc.casting('gtceu:andesite_alloy_ingot', 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient('gtceu:andesite_alloy', 144), 1)
	//event.recipes.tfc.casting('gtceu:andesite_alloy_ingot', 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient('gtceu:andesite_alloy', 144), 1)
	
	const tintypes = ["tin", "cassiterite", "cassiterite_sand"]
	tintypes.forEach((tin) => {
		event.recipes.tfc.heating(`gtceu:${tin}_dust`, 1535)
			.resultFluid(Fluid.of('gtceu:tin', 144))
			.id(`heating_${tin}_dust`)
		event.recipes.tfc.heating(`gtceu:small_${tin}_dust`, 1535)
			.resultFluid(Fluid.of('gtceu:tin', 36))
			.id(`heating_small_${tin}_dust`)
		event.recipes.tfc.heating(`gtceu:tiny_${tin}_dust`, 1535)
			.resultFluid(Fluid.of('gtceu:tin', 16))
			.id(`heating_tiny_${tin}_dust`)
		event.recipes.tfc.heating(`gtceu:raw_${tin}`, 1535)
			.resultFluid(Fluid.of('gtceu:tin', 144))
			.id(`heating_raw_${tin}`)
	})
	event.recipes.tfc.heating('gtceu:tin_ingot', 1535)
		.resultFluid(Fluid.of('gtceu:tin', 144))
		.id('heating_tin_ingot')
	
	event.recipes.tfc.casting('gtceu:tin_ingot', 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient('gtceu:tin', 144), 1)
	event.recipes.tfc.casting('gtceu:tin_ingot', 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient('gtceu:tin', 144), 1)
	
	event.recipes.tfc.heating('gtceu:bismuth_bronze_ingot', 1535)
		.resultFluid(Fluid.of('gtceu:bismuth_bronze', 144))
		.id('heating_bismuth_bronze_ingot')
	
	event.recipes.tfc.casting('gtceu:bismuth_bronze_ingot', 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient('gtceu:bismuth_bronze', 144), 1)
	event.recipes.tfc.casting('gtceu:bismuth_bronze_ingot', 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient('gtceu:bismuth_bronze', 144), 1)
	
	/*event.recipes.tfc.alloy(
        'gtceu:bismuth_bronze',
        [
            TFC.alloyPart('gtceu:copper', 0.5, 0.6),
            TFC.alloyPart('gtceu:zinc', 0.2, 0.3),
            TFC.alloyPart('gtceu:bismuth', 0.1, 0.2)
        ]
    )*/
	//event.recipes.tfc.bloomery('tfc:raw_iron_bloom', Fluid.of('gtceu:iron', 100), 'minecraft:charcoal', 2)
	event.custom({
        "type": "tfc:bloomery",
		"result": {
			"item": "tfc:raw_iron_bloom"
		},
		"fluid": {
			"ingredient": "gtceu:iron",
			"amount": 100
		},
		"catalyst": {
			"item": "minecraft:charcoal"
		},
		"duration": 15000
	}).id('bloomery_charcoal_bloom')
	
	event.custom({
        "type": "tfc:bloomery",
		"result": {
			"item": "tfc:raw_iron_bloom"
		},
		"fluid": {
			"ingredient": "gtceu:iron",
			"amount": 100
		},
		"catalyst": {
			"item": "minecraft:coal"
		},
		"duration": 12500
	}).id('bloomery_coal_bloom')
	
	event.custom({
        "type": "tfc:bloomery",
		"result": {
			"item": "tfc:raw_iron_bloom"
		},
		"fluid": {
			"ingredient": "gtceu:iron",
			"amount": 100
		},
		"catalyst": {
			"item": "minecraft:coal"
		},
		"duration": 10000
	}).id('bloomery_anthracite_bloom')
	
	event.custom({
        "type": "tfc:bloomery",
		"result": {
			"item": "tfc:raw_iron_bloom"
		},
		"fluid": {
			"ingredient": "gtceu:iron",
			"amount": 100
		},
		"catalyst": {
			"item": 'gtceu:coke_gem'
		},
		"duration": 7500
	}).id('bloomery_coke_bloom')
}