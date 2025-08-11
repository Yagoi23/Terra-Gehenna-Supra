/*StartupEvents.registry('block', event => {
    event.create('my_crop', 'tfc:crop')
        .nutrient('phosphorous')
		.stages(3)
		.model(0, 'hexerei:models/block/belladonna_plant_stage0')
		.textureAll(0, 'hexerei:textures/block/belladonna_plant_stage0')
		.model(1, 'hexerei:models/block/belladonna_plant_stage1')
		.textureAll(1, 'hexerei:textures/block/belladonna_plant_stage1')
		.model(2, 'hexerei:models/block/belladonna_plant_stage2')
		.textureAll(2, 'hexerei:textures/block/belladonna_plant_stage2')
		.model(3, 'hexerei:models/block/belladonna_plant_stage3')
		.textureAll(3, 'hexerei:textures/block/belladonna_plant_stage3')
})*/ //doesn't crash but no texture
StartupEvents.registry('item', event => {
	event.create('witch_hazel_bush').texture('hexerei:block/witch_hazel_sapling')
	event.create('cleaned_witch_hazel_bush').texture('hexerei:block/witch_hazel_sapling')
	event.create('mugwort_bush').texture('hexerei:block/mugwort_bush_top_stage3')
	event.create('yellow_dock_bush').texture('hexerei:block/yellow_dock_bush_top_stage3')
	//event.create('nipa_leaf').texture('forbidden_arcanus:item/nipa')
})
StartupEvents.registry('block', event => {
    event.create('plant/sage', 'tfc:crop')
        .nutrient('phosphorous')
		.stages(7)//sage_stage7
		.soundType("grass")
		.hardness(0.5)
		.tagBlock("minecraft:mineable/hoe")
		.productItem('hexerei:sage')
		.displayName("Sage")
		.seedItem(seed => {
			seed.texture('hexerei:item/sage_seed')
			seed.displayName("Sage Seeds")
            //seed.unstackable()
            //seed.burnTime(500)
        })
		//.seeds('hexerei:sage_seed')
		//.productItem("aether_redux:wynd_oat_panicle")
		//.textureAll("sage", "hexerei:sage_stage7")
		event.create('plant/wild_sage', 'tfc:wild_crop').seeds('kubejs:plant/sage_seeds')
		
	event.create('plant/belladonna', 'tfc:pickable_crop')
        .matureFruit('hexerei:belladonna_berries')
        .fruit('hexerei:belladonna_flowers')
		.stages(4)
		.soundType("grass")
		.hardness(0.5)
		.displayName("Belladonna")
		.tagBlock("minecraft:mineable/hoe")
		.seedItem(seed => {
			seed.texture('hexerei:block/belladonna_plant_stage3')
			seed.displayName("Belladonna Plant")
        })
	event.create('plant/wild_belladonna', 'tfc:wild_crop').seeds('kubejs:plant/belladonna_seeds')
	
	event.create('plant/mandrake', 'tfc:pickable_crop')
        .matureFruit('hexerei:mandrake_root')
        .fruit('hexerei:mandrake_flowers')
		.stages(3)
		.soundType("grass")
		.hardness(0.5)
		.displayName("Mandrake")
		.tagBlock("minecraft:mineable/hoe")
		.seedItem(seed => {
			seed.texture('hexerei:block/mandrake_plant_stage3')
			seed.displayName("Mandrake Plant")
        })
	event.create('plant/wild_mandrake', 'tfc:wild_crop').seeds('kubejs:plant/mandrake_seeds')
	
	event.create('plant/witch_hazel', 'tfc:crop')
        .nutrient('phosphorous')
		.stages(2)//sage_stage7
		.soundType("grass")
		.hardness(0.5)
		.tagBlock("minecraft:mineable/hoe")
		.displayName("Witch Hazel")
		.productItem("kubejs:witch_hazel_bush")
		.seedItem(seed => {
			seed.displayName("Witch Hazel Seeds")
			//seed.texture('minecraft:melon_seeds')
        })
	event.create('plant/wild_witch_hazel', 'tfc:wild_crop').seeds('kubejs:plant/witch_hazel_seeds')
		/*.productItem(product => {
			product.texture('hexerei:block/witch_hazel_sapling')
			product.displayName("Witch Hazel")
        })*/
	
	 event.create('plant/mugwort', 'tfc:crop')
        //.requiresStick(false)
		.nutrient('phosphorous')
		.stages(3)//sage_stage7
		.soundType("grass")
		.hardness(0.5)
		.tagBlock("minecraft:mineable/hoe")
		.displayName("Mugwort")
		.productItem("kubejs:mugwort_bush")
		.seedItem(seed => {
			seed.displayName("Mugwort Seeds")
			//seed.texture('minecraft:melon_seeds')
        })
		/*.productItem(product => {
			product.texture('hexerei:block/mugwort_bush_top_stage3')
			product.displayName("Mugwort Bush")
        })*/
	
	event.create('plant/yellow_dock', 'tfc:crop')
        //.requiresStick(false)
		.nutrient('phosphorous')
		.stages(3)//sage_stage7
		.soundType("grass")
		.hardness(0.5)
		.tagBlock("minecraft:mineable/hoe")
		.displayName("Yellow Dock")
		.productItem("kubejs:yellow_dock_bush")
		.seedItem(seed => {
			seed.displayName("Yellow Dock Seeds")
			//seed.texture('minecraft:melon_seeds')
        })
		
	/*event.create('plant/nipa', 'tfc:crop')
        .nutrient('phosphorous')
		.stages(2)//sage_stage7
		.soundType("grass")
		.hardness(0.5)
		.tagBlock("minecraft:mineable/hoe")
		.displayName("Nipa")
		.productItem("kubejs:nipa_leaf")
		.seedItem(seed => {
			seed.displayName("Nipa Seeds")
			//seed.texture('minecraft:melon_seeds')
        })*/

})