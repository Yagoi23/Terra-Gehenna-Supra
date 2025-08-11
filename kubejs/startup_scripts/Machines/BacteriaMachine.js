let BacteriaMachine = (/** @type {Registry.Item} */ event) => {
	event.create('bacterial_vat', 'multiblock')
        .tooltips(Component.translatable('your.langfile.entry.here')) // 
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['bacterial_vat'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'GGGGG', 'GGGGG', 'CCCCC')
            .aisle('CCCCC', 'G###G', 'G###G', 'CCCCC')
			.aisle('CCCCC', 'G###G', 'G###G', 'CCCCC')
			.aisle('CCCCC', 'G###G', 'G###G', 'CCCCC')
			.aisle('CCKCC', 'GGGGG', 'GGGGG', 'CCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('kubejs:tempered_borosilicate_glass'))
            .where('C', Predicates.blocks(GTBlocks.MACHINE_CASING_MV.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
			.where('#', Predicates.air())
        .build())
        .workableCasingRenderer(
            "gtceu:block/casings/voltage/mv/side",
            "gtceu:block/multiblock/large_chemical_reactor",
            false
        )
	
	event.create('bacterial_centrifuge', 'multiblock')
        .tooltips(Component.translatable('your.langfile.entry.here')) // 
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['bacterial_centrifuge'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#CCC#', 'CCCCC', '#CCC#')
            .aisle('CCCCC', 'C#P#C', 'CGGGC')
			.aisle('CCCCC', 'CP#PC', 'CGGGC')
			.aisle('CCCCC', 'C#P#C', 'CGGGC')
			.aisle('#CCC#', 'CCKCC', '#CCC#')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:cleanroom_glass'))
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
			.where('#', Predicates.air())
			.where('P', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
        .build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/large_chemical_reactor",
            false
        )
	
	event.create('bio_lab', 'multiblock')
        .tooltips(Component.translatable('your.langfile.entry.here')) // 
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['bio_lab'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'GGG', 'GGG', 'CCC')
            .aisle('CCC', 'G#G', 'G#G', 'CCC')
			.aisle('CKC', 'GGG', 'GGG', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('kubejs:cleanroom_borosilicate_glass'))
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
			.where('#', Predicates.air())
        .build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/large_chemical_reactor",
            false
        )
}