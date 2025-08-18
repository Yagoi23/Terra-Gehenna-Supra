let SteamMachine = (/** @type {Registry.Item} */ event) => {
	/*event.create('oven', 'simple', 0, GTValues.LV, GTValues.MV, GTValues.HV) // 
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('test_recipe_type')*/
	
	event.create('steam_bloomery', 'multiblock')
		.machine((holder) => new $SteamMulti(holder, 8))
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType('steam_bloomery')
		.recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
		.appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
		.pattern(definition => FactoryBlockPattern.start()
			.aisle(" F ", " C ", " E ", " E ", " E ")
			.aisle("FCF", "C#C", "E#E", "E#E", "E#E")
			.aisle(" F ", "CXC", " E ", " E ", " E ")
			.where('X', Predicates.controller(Predicates.blocks(definition.get())))
			.where('C', Predicates.blockTag($Tags.block("tfc:bloomery_insulation")))
			.where('F', Predicates.blocks(GTBlocks.FIREBOX_BRONZE.get())
				.or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1)))
			.where('E', Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setMaxGlobalLimited(2)
				.or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setExactLimit(1))
				.or(Predicates.blockTag($Tags.block("tfc:bloomery_insulation"))))
			.where('#', Predicates.air())
			.where(' ', Predicates.any())
			.build()
		)
		.shapeInfo(controller => MultiblockShapeInfo.builder()
			.aisle(" F ", " C ", " C ", " C ", " C ")
			.aisle("FCF", "C#C", "C#C", "C#C", "C#C")
			.aisle(" i ", "CXC", " O ", " I ", " C ")
			.where('X', controller, Direction.SOUTH)
			.where('C', Block.getBlock('tfc:rock/bricks/rhyolite'))
			.where('F', GTBlocks.FIREBOX_BRONZE.get())
			.where('i', GTMachines.STEAM_HATCH, Direction.SOUTH)
			.where('O', GTMachines.STEAM_EXPORT_BUS, Direction.SOUTH)
			.where('I', GTMachines.STEAM_IMPORT_BUS, Direction.SOUTH)
			.build()
		)
		.workableCasingModel(
			"gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
			"gtceu:block/machines/fluid_heater")
	
}