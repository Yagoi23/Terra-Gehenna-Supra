let EmbersMat = (/** @type {Registry.Material} */ event) => {
	event.create('caminite')
		.ore()
        //.ingot()
		.dust()
        .components('7x magnesium', '5x sulfur_trioxide', '9x oxygen', '4x hydrogen')
		.color(0xd1cdbe).iconSet(GTMaterialIconSet.DULL)
        //.flags(GTMaterialFlags.GENERATE_PLATE)
		.formula("Mg7(SO4)5(OH)4")
	/*event.create('processed_caminite')
        //.ingot()
		.dust()
        .components('caminite')
		.color(0xbab397).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_DECOMPOSITION)
	*/
}