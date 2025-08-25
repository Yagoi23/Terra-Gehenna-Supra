const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');

let addFluid = (mat, key) => {
    let prop = new $FluidProperty();
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
    mat.setProperty(PropertyKey.FLUID, prop);
}

let IndustrialMetal = (/** @type {Registry.Material} */ event) => {
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
	
	
	/*event.create('electrical_steel')
        .ingot()
		.liquid()
        .components('1x silicon', '1x steel')
		.color(0xdfe3e6).secondaryColor(0x97abb0).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
	
	event.create('dark_steel')
        .ingot()
		.liquid()
        .components('1x obsidian', '1x steel')
		.color(0x414751).iconSet('dull')//595f69
		.flags(GTMaterialFlags.GENERATE_PLATE)*/
	
	event.create('energetic_alloy')
        .ingot()
		.liquid()
        .components('2x gold', '1x glowstone', '1x redstone')
		.color(0xffb545).iconSet(GTMaterialIconSet.METALLIC)
		//.cableProperties(128, 1, 0, true)
	
	event.create('vibrant_alloy')
        .ingot()
		.liquid()
        .components('1x energetic_alloy', 'ender_pearl', '3x emerald', '1x steel')
		.color(0x97fca2).secondaryColor(0x42c951).iconSet(GTMaterialIconSet.METALLIC)
		//.cableProperties(512, 1, 0, true)
		
	event.create('mithril_europium_alloy_23')
        .ingot()
		.liquid()
        //.components('1x energetic_alloy', 'ender_pearl', '3x emerald', '1x steel')
		.color(0x8ffc82).secondaryColor(0x00ff82).iconSet(GTMaterialIconSet.METALLIC)
		//.cableProperties(512, 1, 0, true)
		//.setFormula('MiEu', true)
	
	event.create('fluix')
        .gem()
        .dust()
		.liquid()
        .color(0x7f5bb3)
		//.components('1x quartz', '1x redstone', '1x certus_quartz')
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create('charged_certus_quartz')
        .gem()
        .dust()
		//.components('certus_quartz')
        .color(0x9fd5e8)
        .iconSet(GTMaterialIconSet.QUARTZ)
	
	addFluid(GTMaterials.EnderPearl, $FluidStorageKeys.LIQUID);
	
	event.create('quartz_glass')
        .dust()
		.liquid()
		//.components('certus_quartz')
        .color(0xcedaed)
        .iconSet(GTMaterialIconSet.QUARTZ)
		//.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.FORCE_GENERATE_BLOCK)
	event.create('mdf_composite')
        .dust()
        .color(0x9e8642)
	event.create('dry_mdf_composite')
        .dust()
        .color(0xbfa763)
	
	event.create('rosin')
		.dust()
        .gem()
        .color(0xedd353)
		.iconSet(GTMaterialIconSet.QUARTZ)
	
	event.create('eucalyptus_gum')
		.dust()
        .gem()
        .color(0xeb8c49)
		.iconSet(GTMaterialIconSet.QUARTZ)
	
	event.create('gum_arabic')
		.dust()
        .gem()
        .color(0xe8776f)
		.iconSet(GTMaterialIconSet.QUARTZ)
	
	event.create('latex')
		.dust()
        .color(0xe0e0bf)
	event.create('vulcanized_latex')
		.dust()
        .color(0xe0cfbf)
		
	event.create('chloride_waste_i')
		.liquid()
        .color(0xd6a9d5)
	
	event.create('chloride_waste_ii')
		.liquid()
        .color(0xd6a9be)
	
	event.create('crude_titanium_tetrachloride')
		.liquid()
        .color(0xa9d6d0)
	
	event.create('aluminium_chloride')
		.components('aluminium', '2x chlorine')
		.liquid()
        .color(0x82afb8)
	
	event.create('manganese_chloride')
		.components('manganese', '2x chlorine')
		.liquid()
        .color(0x99b882)
	
	event.create('silicon_chloride')
		.components('silicon', '4x chlorine')
		.liquid()
        .color(0xa39281)
	
	event.create('tin_chloride')
		.components('tin', '4x chlorine')
		.liquid()
        .color(0xc2d1cf)
	
	event.create('vanadium_oxytrichloride')
		.components('vanadium', 'oxygen', '3x chlorine')
		.liquid()
        .color(0xedeb8a)
	
	/*event.create('dichloromethane')
		.formula('CH2Cl2')
		.liquid()
        .color(0xedeb8a)*/
	
	/*event.create('dimethyldichlorosilane')
		.formula('Si(CH3)2Cl2')
		.liquid()
        .color(0xedeb8a)
	
	event.create('polydimethylsiloxane') //pdms
		.formula('CH3[Si(CH3)2O]2Si(CH3)3')
		.liquid()
        .color(0xedeb8a)*/
	
	event.create('amethyst_bronze')
        .ingot()
		.liquid()
        .components('1x copper', '1x amethyst')
		.color(0xfba6ff).iconSet('shiny')//595f69
		.flags(GTMaterialFlags.GENERATE_PLATE)
	
	event.create('lime')
        .dust() 
        .color(0xf2d891)
		.components('calcium_hydroxide')
		
	addFluid(GTMaterials.Amethyst, $FluidStorageKeys.LIQUID);
	addFluid(GTMaterials.Emerald, $FluidStorageKeys.LIQUID);
	addFluid(GTMaterials.EnderPearl, $FluidStorageKeys.LIQUID);
}