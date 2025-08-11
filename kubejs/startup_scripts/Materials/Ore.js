let Ore = (/** @type {Registry.Material} */ event) => {
	event.create('brown_limonite')
        .color(0x918063)
        .ore()
		.element(GTElements.Fe)
		//.oreSmeltInto('1x iron')
}