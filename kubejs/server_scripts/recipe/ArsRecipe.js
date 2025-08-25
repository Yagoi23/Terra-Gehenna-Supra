const ArsRecipe = (event) => {
	/*event.recipes.ars_nouveau.enchanting_apparatus(
        [
            Item.of('avaritia:singularity', '{Id:"avaritia:corrosive_will"}'),
            Item.of('avaritia:singularity', '{Id:"avaritia:steadfast_will"}'),
            Item.of('avaritia:singularity', '{Id:"avaritia:destructive_will"}'),
            Item.of('avaritia:singularity', '{Id:"avaritia:vengeful_will"}')
        ], // input items
	    Item.of('avaritia:singularity', '{Id:"avaritia:demon_will"}'), // reagent
	    Item.of('avaritia:singularity', '{Id:"avaritia:combined_will"}'), // output
	    1000, // source cost
	    false // keep nbt of reagent, think like a smithing recipe
	);*/
	event.recipes.ars_nouveau.imbuement(
        '#forge:crafting_gem', // input item
        'ars_nouveau:source_gem', // output
        500, // source cost
		[]
    )
	
	/*event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'kubejs:void_quartz',
            'gtceu:hematite_dust',
			'gtceu:obsidian_dust',
			'minecraft:netherite_scrap',
			'kubejs:void_quartz',
            'gtceu:hematite_dust',
			'gtceu:obsidian_dust',
			'minecraft:netherite_scrap'
        ], // input items
	    'minecraft:flint', // reagent
	    'tinkers_things:hematite', // output
	    1000, // source cost
	    false // keep nbt of reagent, think like a smithing recipe
	);*/
}