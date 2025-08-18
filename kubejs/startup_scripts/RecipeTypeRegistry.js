let RecipeTypeRegistry = (/** @type {Registry.Item} */ event) => {
	event.create('bacterial_vat')
        .setEUIO('in')
        .setMaxIOSize(3, 2, 3, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
	
	event.create('bacterial_centrifuge')
        .setEUIO('in')
        .setMaxIOSize(2, 12, 1, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
	
	event.create('bio_lab')
        .setEUIO('in')
        .setMaxIOSize(3, 2, 3, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
	
	event.create('steam_bloomery')
		.category('steam_bloomery')
		.setEUIO('in')
		.setMaxIOSize(2, 1, 0, 0)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.FIRE)
}