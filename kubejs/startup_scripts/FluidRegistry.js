let FluidRegistry = (/** @type {Registry.Item} */ event) => {
   event.create('aerotheum')
    .displayName('Aerotheum')
    .stillTexture('kubejs:block/fluid/aerotheum_still')
    .flowingTexture('kubejs:block/fluid/aerotheum_flow')
    .bucketColor(0xaca779)//
	event.create('cryotheum')
    .displayName('Cryotheum')
    .stillTexture('kubejs:block/fluid/cryotheum_still')
    .flowingTexture('kubejs:block/fluid/cryotheum_flow')
    .bucketColor(0x2ab0fb)
	event.create('pyrotheum')
    .displayName('Pyrotheum')
    .stillTexture('kubejs:block/fluid/pyrotheum_still')
    .flowingTexture('kubejs:block/fluid/pyrotheum_flow')
    .bucketColor(0xebd534)
	
	event.create('petrotheum')
    .displayName('Petrotheum')
    .stillTexture('kubejs:block/fluid/petrotheum_still')
    .flowingTexture('kubejs:block/fluid/petrotheum_flow')
    .bucketColor(0x2a2308)
	
	event.create('destabilized_redstone')
    .displayName('Destabilized Redstone')
    .stillTexture('kubejs:block/fluid/destabilized_redstone_still')
    .flowingTexture('kubejs:block/fluid/destabilized_redstone_flow')
    .bucketColor(0x5c1313)
	event.create('energized_glowstone')
    .displayName('Energized Glowstone')
    .stillTexture('kubejs:block/fluid/energized_glowstone_still')
    .flowingTexture('kubejs:block/fluid/energized_glowstone_flow')
    .bucketColor(0xbbb535)
	event.create('resonant_ender')
    .displayName('Resonant Ender')
    .stillTexture('kubejs:block/fluid/resonant_ender_still')
    .flowingTexture('kubejs:block/fluid/resonant_ender_flow')
    .bucketColor(0x13505c)
	
	event.create('earthen_petrotheum')
    .displayName('Earthen Petrotheum')
    .stillTexture('kubejs:block/fluid/petrotheum_still')
    .flowingTexture('kubejs:block/fluid/petrotheum_flow')
    .bucketColor(0x120c02)
	.color(0x5c4311)
	
	event.create('blazing_pyrotheum')
    .displayName('Blazing Pyrotheum')
    .stillTexture('kubejs:block/fluid/pyrotheum_still')
    .flowingTexture('kubejs:block/fluid/pyrotheum_flow')
    .bucketColor(0xff7300)
	.color(0xfc9403)
	
	event.create('sap')
    .thinTexture(0xffe669)
    .bucketColor(0xffe669)
	
	event.create('ironwood_sap')
    .thinTexture(0xd1c68e)
    .bucketColor(0xd1c68e)
	
	event.create('eucalyptus_gum')
    .thinTexture(0xeb8c49)
    .bucketColor(0xeb8c49)
	
	event.create('raw_eucalyptus_oil')
    .thinTexture(0xb8965c)
    .bucketColor(0xb8965c)
	
	event.create('distilled_eucalyptus_oil')
    .thinTexture(0xb8965c)
    .bucketColor(0xb8965c)
	
	event.create('eucalyptus_oil')
    .thinTexture(0xb8965c)
    .bucketColor(0xb8965c)
	
	event.create('fig_sap')
    .thinTexture(0xe1fa96)
    .bucketColor(0xe1fa96)
    
	event.create('oak_resin')
    .thinTexture(0xffc182)
    .bucketColor(0xffc182)
	
	event.create('willow_sap')
    .thinTexture(0xc9b685)
    .bucketColor(0xc9b685)
	
	event.create('rosewood_sap')
    .thinTexture(0xba3838)
    .bucketColor(0xba3838)
	
	event.create('sycamore_sap')
    .thinTexture(0xe3d6b6)
    .bucketColor(0xe3d6b6)
	
	event.create('concentrated_sycamore_sap')
    .thinTexture(0xe3d6b6)
    .bucketColor(0xe3d6b6)
	
	event.create('sycamore_syrup')
    .thinTexture(0xe3d6b6)
    .bucketColor(0xe3d6b6)
	
	event.create('resin')
    .thinTexture(0xde8a5f)
    .bucketColor(0xde8a5f)
	
	event.create('gum_arabic')
    .thinTexture(0xe8776f)
    .bucketColor(0xe8776f)

	
	event.create('mangrove_sap')
    .thinTexture(0xc75858)
    .bucketColor(0xc75858)
	
	event.create('palm_sap')
    .thinTexture(0xd9d9c7)
    .bucketColor(0xd9d9c7)
	
	event.create('concentrated_palm_sap')
    .thinTexture(0xd9d9c7)
    .bucketColor(0xd9d9c7)
	
	event.create('palm_syrup')
    .thinTexture(0xd9d9c7)
    .bucketColor(0xd9d9c7)
	
	event.create('sequoia_sap')
    .thinTexture(0xdbcf9c)
    .bucketColor(0xdbcf9c)
	
	event.create('hickory_sap')
    .thinTexture(0xd9c7c7)
    .bucketColor(0xd9c7c7)
	
	event.create('concentrated_hickory_sap')
    .thinTexture(0xd9c7c7)
    .bucketColor(0xd9c7c7)
	
	event.create('hickory_syrup')
    .thinTexture(0xd9c7c7)
    .bucketColor(0xd9c7c7)
	
	event.create('chestnut_resin')
    .thinTexture(0xa38a6c)
    .bucketColor(0xa38a6c)
	
	event.create('spirit_water')
    .thinTexture(0xb3fcff)
    .bucketColor(0xb3fcff)
	
	event.create('alkaline_binder')
    .thinTexture(0xb0a28d)
    .bucketColor(0xb0a28d)
	
	event.create('clarifying_oil')
    .thinTexture(0xfce77c)
    .bucketColor(0xfce77c)
	
	let Essence = [
	{
		id: "fire",
		colour0: 0xff4d4d,
		colour1: 0xd63636,
		colour2: 0xff0000,
	},
	{
		id: "water",
		colour0: 0x4e8bfc,
		colour1: 0x3666d6,
		colour2: 0x004cff,
	},
	{
		id: "earth",
		colour0: 0x4efc5f,
		colour1: 0x36d649,
		colour2: 0x00ff3c,
	},
	{
		id: "air",
		colour0: 0xf6fc4e,
		colour1: 0xd6d336,
		colour2: 0xfcfc03,
	}]
	Essence.forEach((essence) => {
		event.create(`raw_${essence.id}_essence`)
			.thickTexture(essence.colour0)
			.bucketColor(essence.colour0)
		event.create(`distilled_${essence.id}_essence`)
			.thinTexture(essence.colour0)
			.bucketColor(essence.colour0)
		event.create(`condensed_${essence.id}_essence`)
			.thickTexture(essence.colour1)
			.bucketColor(essence.colour1)
		event.create(`condensed_unstable_${essence.id}_essence`)
			.thickTexture(essence.colour1)
			.bucketColor(essence.colour1)
		event.create(`unstable_${essence.id}_essence`)
			.thinTexture(essence.colour1)
			.bucketColor(essence.colour1)
		event.create(`volatile_${essence.id}_essence`)
			.thinTexture(essence.colour2)
			.bucketColor(essence.colour2)
		event.create(`enriched_${essence.id}_essence`)
			.thickTexture(essence.colour2)
			.bucketColor(essence.colour2)
	})

}