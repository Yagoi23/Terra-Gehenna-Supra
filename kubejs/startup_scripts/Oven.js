/*GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	event.create('oven')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE)
})*/

/*GTCEuStartupEvents.registry('gtceu:machine', event => {
	event.create('oven', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Oven")
                .recipeType('oven')
                .workableTieredHullRenderer('gtceu:block/machines/reconstructor')
        )
		//.langValue("Oven")
        //.recipeType('oven', true, true)
        //.workableTieredHullRenderer('gtceu:block/machines/reconstructor')
})*/