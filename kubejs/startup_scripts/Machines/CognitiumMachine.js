let CognitiumMachine = (/** @type {Registry.Item} */ event) => {
	event.create('cognitium_enrichment_tower', 'multiblock')
        .tooltips(Component.translatable('your.langfile.entry.here')) // 
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['bacterial_vat'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'CCCCC', 'GGGGG', 'CCCCC', 'CCCCC', 'GGGGG', 'CCCCC', 'CCCCC', 'GGGGG', 'CCCCC', 'CCCCC')
            .aisle('CCCCC', 'C#P#C', 'G#P#G', 'C#P#C', 'C#P#C', 'G#P#G', 'C#P#C', 'C#P#C', 'G#P#G', 'C#P#C', 'CCCCC')
			.aisle('CCCCC', 'C#P#C', 'GP#PG', 'C#P#C', 'C#P#C', 'G#P#G', 'C#P#C', 'C#P#C', 'G#P#G', 'C#P#C', 'CCCCC')
			.aisle('CCCCC', 'C#P#C', 'G#P#G', 'C#P#C', 'C#P#C', 'G#P#G', 'C#P#C', 'C#P#C', 'G#P#G', 'C#P#C', 'CCCCC')
			.aisle('CCKCC', 'CCCCC', 'GGGGG', 'CCCCC', 'CCCCC', 'GGGGG', 'CCCCC', 'CCCCC', 'GGGGG', 'CCCCC', 'CCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('gtceu:nichrome_coil_block'))
            .where('C', Predicates.blocks(GTBlocks.MACHINE_CASING_EV.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
			.where('P', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
			.where('#', Predicates.air())
        .build())
        .workableCasingRenderer(
            "gtceu:block/casings/voltage/ev/side",
            "gtceu:block/multiblock/large_chemical_reactor",
            false
        )
	
	
}