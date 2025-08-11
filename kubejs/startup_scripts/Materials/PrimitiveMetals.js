let PrimitiveMetals = (/** @type {Registry.Material} */ event) => {
	var metalTools = [
		GTToolType.AXE,
		GTToolType.PICKAXE,
		GTToolType.HARD_HAMMER,
		GTToolType.BUTCHERY_KNIFE,
		GTToolType.SWORD,
		GTToolType.FILE,
		GTToolType.SAW,
		GTToolType.SHOVEL,
		GTToolType.SHOVEL,
		GTToolType.SPADE,
		GTToolType.MINING_HAMMER,
		GTToolType.HOE,
		GTToolType.KNIFE,
		GTToolType.BUZZSAW,
		GTToolType.SCYTHE,
		GTToolType.WIRE_CUTTER,
		GTToolType.DRILL_LV,
		GTToolType.DRILL_MV,
		GTToolType.DRILL_HV,
		GTToolType.DRILL_EV,
		GTToolType.DRILL_IV,
		GTToolType.SCREWDRIVER,
		GTToolType.SCREWDRIVER_LV,
		GTToolType.CHAINSAW_LV,
		GTToolType.WRENCH,
		GTToolType.WRENCH_LV,
		GTToolType.WRENCH_HV,
		GTToolType.WRENCH_IV,
		GTToolType.CROWBAR,
	]
	GTMaterials.Copper.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.0, 1.5, 132, 2, metalTools).build());
	GTMaterials.BismuthBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(2.7, 2.0, 188, 2, metalTools).build());
	GTMaterials.BlackBronze.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(3.1, 2.0, 194, 2, metalTools).build());
	GTMaterials.BlackSteel.setProperty(PropertyKey.TOOL, ToolProperty.Builder.of(6.5, 4.5, 1228, 3, metalTools).build());
	
	//GTMaterials.get('custom_material_name').addFlags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_DENSE); 
	/*event.create('andesite_alloy')
        .ingot()
		.liquid()
        .components('1x andesite', '1x iron')
		.color(0x839689).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_DENSE)
	*/
	
	event.create('purple_steel')
        .ingot()
		.liquid()
        .components('1x sterling_silver', '1x rose_gold', '1x bismuth_bronze', '1x brass', '4x steel', '8x black_steel')
		.color(0xc24fc0).secondaryColor(0x910d8f).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_DENSE)
	
	event.create('molten_andesite')
		.liquid()
        .components('1x andesite')
        .color(0x910d18)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
	
	event.create('weak_red_steel')
	    .ingot()
		.liquid()
        .components('1x rose_gold', '1x brass', '2x steel', '4x black_steel')
        .color(0x992831).iconSet(GTMaterialIconSet.METALLIC)
	
	event.create('high_carbon_red_steel')
	    .ingot()
		.liquid()
        .components('1x rose_gold', '1x brass', '2x steel', '4x black_steel')
        .color(0x6e1d23).iconSet(GTMaterialIconSet.METALLIC)
	
	event.create('weak_blue_steel')
	    .ingot()
		.liquid()
        .components('1x sterling_silver', '1x bismuth_bronze', '2x steel', '4x black_steel')
        .color(0x2b548a).iconSet(GTMaterialIconSet.METALLIC)
	
	event.create('high_carbon_blue_steel')
	    .ingot()
		.liquid()
        .components('1x sterling_silver', '1x bismuth_bronze', '2x steel', '4x black_steel')
        .color(0x214370).iconSet(GTMaterialIconSet.METALLIC)
	
	event.create('weak_steel')
	    .ingot()
		.liquid()
        .components('1x nickel', '1x black_bronze', '3x steel')
        .color(0x595a5c).iconSet(GTMaterialIconSet.METALLIC)
	
	event.create('high_carbon_black_steel')
	    .ingot()
		.liquid()
        .components('1x nickel', '1x black_bronze', '3x steel')
        .color(0x171717).iconSet(GTMaterialIconSet.METALLIC)
	
	event.create('weak_purple_steel')
	    .ingot()
		.liquid()
		.components('1x sterling_silver', '1x rose_gold', '1x bismuth_bronze', '1x brass', '4x steel', '8x black_steel')
        .color(0xab2ca9).iconSet(GTMaterialIconSet.METALLIC)
	
	event.create('high_carbon_purple_steel')
	    .ingot()
		.liquid()
        .components('1x sterling_silver', '1x rose_gold', '1x bismuth_bronze', '1x brass', '4x steel', '8x black_steel')
        .color(0x7d0e7b).iconSet(GTMaterialIconSet.METALLIC)
	
	event.create('high_carbon_steel')
	    .ingot()
		.liquid()
        .components('1x steel')
        .color(0x575757).iconSet(GTMaterialIconSet.METALLIC)
	
	event.create('pig_iron')
	    .ingot()
		.liquid()
        .components('1x iron')
        .color(0x7d7a6a).secondaryColor(0xa69c8b).iconSet(GTMaterialIconSet.METALLIC)
		
	event.create('nordic_gold')
        .ingot()
		.liquid()
        .components('10x copper', '2x aluminium', '2x zinc', '1x tin')
		.color(0xbdb54a).secondaryColor(0xccc45e).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_DENSE)
	
	event.create('meteoric_iron')
        .ingot()
		.liquid()
        .components('1x iron', '1x nickel')
		.color(0x696756).secondaryColor(0x7d7b6a).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_DENSE)
	event.create('telluric_iron')
        .ingot()
		.liquid()
        .components('4x iron', '1x carbon', '3x nickel')
		.color(0x767d6a).secondaryColor(0x848a79).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_DENSE)
	
	/*event.create('aluminium_oxide')
        .dust()
        .components('2x aluminium', '3x oxygen')
		.color(0x54320f)*/
	event.create('silicon_carbide')
        .dust()
        .components('silicon', 'carbon')
		.color(0x313840)
	
	GTMaterials.Netherite.addFlags(GTMaterialFlags.GENERATE_PLATE);
	
	//GTMaterials.Obsidian.setProperty(PropertyKey.INGOT, new $IngotProperty());
	//GTMaterials.Bismuth.setProperty(PropertyKey.INGOT, new $IngotProperty());
	//GTMaterials.Bismuth.setProperty(PropertyKey.ORE, new $OreProperty());
}