const WoodRecipes = (event) => {
	event.recipes.gtceu.mixer('mdf_composite_dust')
		.itemInputs('gtceu:wood_dust', 'gtceu:sticky_resin')
		.itemOutputs('gtceu:mdf_composite_dust')
		.duration(400)
		.EUt(8)
	
	event.smelting('gtceu:dry_mdf_composite_dust', 'gtceu:mdf_composite_dust')
	
	event.recipes.gtceu.compressor('formed_mdf_composite')
		.itemInputs('gtceu:dry_mdf_composite_dust')
		.itemOutputs('kubejs:formed_mdf_composite')
		.duration(200)
		.EUt(8)
	event.recipes.gtceu.compressor('pressed_mdf_composite')
		.itemInputs('kubejs:formed_mdf_composite')
		.itemOutputs('kubejs:pressed_mdf_composite')
		.duration(800)
		.EUt(8)
	
	event.recipes.greate.compacting('kubejs:pressed_mdf_composite', 'kubejs:formed_mdf_composite')
			.heated()
			.recipeTier(0)
	//event.smelting('kubejs:seasoned_mdf_composite', 'kubejs:pressed_mdf_composite')
	
	
	
	event.recipes.tfc.damage_inputs_shapeless_crafting(
        event.recipes.minecraft.crafting_shapeless(
            'gtceu:wood_plate',
            [
                'kubejs:pressed_mdf_composite',
                'tfc:sandpaper'
            ]
        )
    )
	//event.shapeless('gtceu:wood_plate', ['kubejs:seasoned_mdf_composite','tfc:sandpaper'])
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/kapok'))
        .resultFluid(Fluid.of('afc:latex', 2))
        .minTemp(22)
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/acacia'))
        .resultFluid(Fluid.of('kubejs:gum_arabic', 2))
        .minTemp(22)
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('afc:wood/log/gum_arabic'))
        .resultFluid(Fluid.of('kubejs:gum_arabic', 2))
        .minTemp(22)
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('afc:wood/log/fig'))
        .resultFluid(Fluid.of('kubejs:fig_sap', 1))
        .minTemp(12)
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/rosewood'))
        .resultFluid(Fluid.of('kubejs:rosewood_sap', 2))
		.minTemp(12)
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('afc:wood/log/baobab'))
        .resultFluid(Fluid.of('minecraft:water', 2))
		.minTemp(14)
     
	 event.recipes.afc.tree_tapping(TFC.blockIngredient('afc:wood/log/cypress'))
        .resultFluid(Fluid.of('kubejs:resin', 2))
		.minTemp(-15)
		.maxTemp(15)
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/white_cedar'))
        .resultFluid(Fluid.of('kubejs:resin', 2))
		.minTemp(-15)
		.maxTemp(15)
	event.recipes.afc.tree_tapping(TFC.blockIngredient('afc:wood/log/redcedar'))
        .resultFluid(Fluid.of('kubejs:resin', 2))
		.minTemp(-15)
		.maxTemp(15)
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/douglas_fir'))
        .resultFluid(Fluid.of('kubejs:resin', 2))
		.minTemp(-15)
		.maxTemp(15)
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/spruce'))
        .resultFluid(Fluid.of('kubejs:resin', 2))
		.minTemp(-15)
		.maxTemp(15)
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/pine'))
        .resultFluid(Fluid.of('kubejs:resin', 2))
		.minTemp(-15)
		.maxTemp(15)
		
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/oak'))
        .resultFluid(Fluid.of('kubejs:oak_resin', 2))
		.minTemp(10)
		.maxTemp(20)
	event.recipes.afc.tree_tapping(TFC.blockIngredient('afc:wood/log/black_oak'))
        .resultFluid(Fluid.of('kubejs:oak_resin', 2))
		.minTemp(-10)
		.maxTemp(20)
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('afc:wood/log/ironwood'))
        .resultFluid(Fluid.of('kubejs:ironwood_sap', 2))
		.minTemp(8)
		
	event.recipes.afc.tree_tapping(TFC.blockIngredient('afc:wood/log/poplar'))
        .resultFluid(Fluid.of('kubejs:willow_sap', 2))
		.maxTemp(-5)
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/willow'))
        .resultFluid(Fluid.of('kubejs:willow_sap', 2))
		.minTemp(-8)
		.maxTemp(20)
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/sycamore'))
        .resultFluid(Fluid.of('kubejs:sycamore_sap', 2))
		.minTemp(-8)
		.maxTemp(12)
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('afc:wood/log/eucalyptus'))
        .resultFluid(Fluid.of('kubejs:eucalyptus_gum', 2))
		.minTemp(8)
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('afc:wood/log/rainbow_eucalyptus'))
        .resultFluid(Fluid.of('kubejs:eucalyptus_gum', 2))
		.minTemp(15)
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('afc:wood/log/ipe'))
        .resultFluid(Fluid.of('kubejs:sap', 2))
		.minTemp(10)
	event.recipes.afc.tree_tapping(TFC.blockIngredient('afc:wood/log/teak'))
        .resultFluid(Fluid.of('kubejs:sap', 2))
		.minTemp(10)
	event.recipes.afc.tree_tapping(TFC.blockIngredient('afc:wood/log/tualang'))
        .resultFluid(Fluid.of('kubejs:sap', 2))
		.minTemp(20)
	event.recipes.afc.tree_tapping(TFC.blockIngredient('afc:wood/log/mahogany'))
        .resultFluid(Fluid.of('kubejs:sap', 2))
		.minTemp(10)
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/ash'))
        .resultFluid(Fluid.of('kubejs:sap', 2))
		.minTemp(-10)
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/aspen'))
        .resultFluid(Fluid.of('kubejs:sap', 2))
		.maxTemp(1)
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/blackwood'))
        .resultFluid(Fluid.of('kubejs:sap', 1))
		.minTemp(8)
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/chestnut'))
        .resultFluid(Fluid.of('kubejs:chestnut_resin', 2))
		.minTemp(-8)
		.maxTemp(15)
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/palm'))
        .resultFluid(Fluid.of('kubejs:palm_sap', 2))
		.minTemp(17)
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/hickory'))
        .resultFluid(Fluid.of('kubejs:hickory_sap', 2))
		.minTemp(-8)
		.maxTemp(20)
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/mangrove'))
        .resultFluid(Fluid.of('kubejs:mangrove_sap', 2))
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/sequoia'))
        .resultFluid(Fluid.of('kubejs:sequoia_sap', 1))
		.minTemp(-1)
		.maxTemp(11)
		
	event.recipes.gtceu.centrifuge('cent_latex_log')
		.itemInputs('#forge:latex_log')
		//.itemOutputs('gtceu:wood_dust')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.outputFluids('gtceu:methane 60', 'afc:latex 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_latex_log')
		.itemInputs('#forge:latex_log')
		.outputFluids('afc:latex 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_sap_log')
		.itemInputs('#forge:sap_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.outputFluids('gtceu:methane 60', 'kubejs:sap 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_sap_log')
		.itemInputs('#forge:sap_log')
		.outputFluids('kubejs:sap 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_resin_log')
		.itemInputs('#forge:resin_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.chancedOutput('gtceu:rosin_gem', 3000, 1)
		.outputFluids('gtceu:methane 60', 'kubejs:resin 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_resin_log')
		.itemInputs('#forge:resin_log')
		.outputFluids('kubejs:resin 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_oak_resin_log')
		.itemInputs('#forge:oak_resin_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.chancedOutput('gtceu:rosin_gem', 3000, 1)
		.outputFluids('gtceu:methane 60', 'kubejs:oak_resin 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_oak_resin_log')
		.itemInputs('#forge:oak_resin_log')
		.outputFluids('kubejs:oak_resin 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_chestnut_resin_log')
		.itemInputs('#forge:chestnut_resin_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.chancedOutput('gtceu:rosin_gem', 3000, 1)
		.outputFluids('gtceu:methane 60', 'kubejs:chestnut_resin 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_chestnut_resin_log')
		.itemInputs('#forge:chestnut_resin_log')
		.outputFluids('kubejs:chestnut_resin 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_fig_sap_log')
		.itemInputs('#forge:fig_sap_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.outputFluids('gtceu:methane 60', 'kubejs:fig_sap 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_fig_sap_log')
		.itemInputs('#forge:fig_sap_log')
		.outputFluids('kubejs:fig_sap 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_mangrove_sap_log')
		.itemInputs('#forge:mangrove_sap_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.outputFluids('gtceu:methane 60', 'kubejs:mangrove_sap 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_mangrove_sap_log')
		.itemInputs('#forge:mangrove_sap_log')
		.outputFluids('kubejs:mangrove_sap 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_maple_sap_log')
		.itemInputs('#forge:maple_sap_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.outputFluids('gtceu:methane 60', 'afc:maple_sap 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_maple_sap_log')
		.itemInputs('#forge:maple_sap_log')
		.outputFluids('afc:maple_sap 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_birch_sap_log')
		.itemInputs('#forge:birch_sap_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.outputFluids('gtceu:methane 60', 'afc:birch_sap 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_birch_sap_log')
		.itemInputs('#forge:birch_sap_log')
		.outputFluids('afc:birch_sap 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_eucalyptus_log')
		.itemInputs('#forge:eucalyptus_gum_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.chancedOutput('gtceu:eucalyptus_gum_gem', 3000, 1)
		.outputFluids('gtceu:methane 60', 'kubejs:eucalyptus_gum 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_eucalyptus_log')
		.itemInputs('#forge:eucalyptus_gum_log')
		.outputFluids('kubejs:eucalyptus_gum 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_water_log')
		.itemInputs('#forge:water_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.outputFluids('gtceu:methane 60', 'minecraft:water 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_water_log')
		.itemInputs('#forge:water_log')
		.outputFluids('minecraft:water 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_willow_log')
		.itemInputs('#forge:willow_sap_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.outputFluids('gtceu:methane 60', 'kubejs:willow_sap 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_willow_log')
		.itemInputs('#forge:willow_sap_log')
		.outputFluids('kubejs:willow_sap 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_sycamore_log')
		.itemInputs('#forge:sycamore_sap_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.outputFluids('gtceu:methane 60', 'kubejs:sycamore_sap 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_sycamore_log')
		.itemInputs('#forge:sycamore_sap_log')
		.outputFluids('kubejs:sycamore_sap 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_palm_log')
		.itemInputs('#forge:palm_sap_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.outputFluids('gtceu:methane 60', 'kubejs:palm_sap 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_palm_log')
		.itemInputs('#forge:palm_sap_log')
		.outputFluids('kubejs:palm_sap 200')
		.duration(600)
		.EUt(20)
		
	event.recipes.gtceu.centrifuge('cent_rosewood_log')
		.itemInputs('#forge:rosewood_sap_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.outputFluids('gtceu:methane 60', 'kubejs:rosewood_sap 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_rosewood_log')
		.itemInputs('#forge:rosewood_sap_log')
		.outputFluids('kubejs:rosewood_sap 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_ironwood_log')
		.itemInputs('#forge:ironwood_sap_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.outputFluids('gtceu:methane 60', 'kubejs:ironwood_sap 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_ironwood_log')
		.itemInputs('#forge:ironwood_sap_log')
		.outputFluids('kubejs:ironwood_sap 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_sequoia_sap_log')
		.itemInputs('#forge:sequoia_sap_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.outputFluids('gtceu:methane 60', 'kubejs:sequoia_sap 25')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_sequoia_sap_log')
		.itemInputs('#forge:sequoia_sap_log')
		.outputFluids('kubejs:sequoia_sap 50')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_hickory_sap_log')
		.itemInputs('#forge:hickory_sap_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.outputFluids('gtceu:methane 60', 'kubejs:hickory_sap 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_hickory_sap_log')
		.itemInputs('#forge:hickory_sap_log')
		.outputFluids('kubejs:hickory_sap 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_gum_arabic_log')
		.itemInputs('#forge:gum_arabic_log')
		.chancedOutput('gtceu:plant_ball', 5000, 1)
		.chancedOutput('gtceu:wood_dust', 2500, 1)
		.chancedOutput('gtceu:gum_arabic_gem', 3000, 1)
		.outputFluids('gtceu:methane 60', 'kubejs:gum_arabic 100')
		.duration(200)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_gum_arabic_log')
		.itemInputs('#forge:gum_arabic_log')
		.outputFluids('kubejs:gum_arabic 200')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.mixer('make_sticky_resin')
		.inputFluids('gtceu:glue 50', 'kubejs:resin 50')
		.itemOutputs('gtceu:sticky_resin')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.mixer('make_sticky_resin2')
		.inputFluids('gtceu:glue 50', 'kubejs:oak_resin 50')
		.itemOutputs('gtceu:sticky_resin')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.mixer('make_sticky_resin3')
		.inputFluids('gtceu:glue 50', 'kubejs:chestnut_resin 50')
		.itemOutputs('gtceu:sticky_resin')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.mixer('make_sticky_resin4')
		.inputFluids('gtceu:glue 50', 'kubejs:eucalyptus_gum 50')
		.itemOutputs('gtceu:sticky_resin')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.extractor('ext_glue')
		.itemInputs('tfc:glue')
		.outputFluids('gtceu:glue 500')
		.duration(600)
		.EUt(20)
		
	event.recipes.gtceu.extractor('ext_raw_eucalyptus_oil')
		.itemInputs('#forge:eucalyptus_leaves')
		.outputFluids('kubejs:raw_eucalyptus_oil 100')
		.duration(600)
		.EUt(20)
	
	event.recipes.gtceu.centrifuge('cent_figsap')
		.inputFluids('kubejs:fig_sap 1000')
		.outputFluids('kubejs:sap 900', 'afc:latex 100')
		.duration(200)
		.EUt(20)
	
	event.shaped('vintageimprovements:grinder_belt', ['AAA','AAA','B C'],
	{
		A: 'tfc:sandpaper',
		B: '#forge:tools/files',  
		C: '#gtceu:tools/crafting_hammers'
	})
	
	event.recipes.tfc.barrel_sealed(18000)
    .outputItem('gtceu:latex_dust')
    .inputFluid(TFC.fluidStackIngredient('afc:latex', 1000))
	
	event.recipes.tfc.barrel_sealed(18000)
    .outputItem('gtceu:sticky_resin')
    .inputFluid(TFC.fluidStackIngredient('kubejs:resin', 1000))
	
	/*event.recipes.tfc.pot(
        [
            'gtceu:latex_dust',
            'gtceu:sulfur_dust',
			'gtceu:sulfur_dust',
			'gtceu:sulfur_dust',
			'gtceu:sulfur_dust'
        ],
        Fluid.of('minecraft:water', 750),
        750,
        100
    ).itemOutput(['gtceu:raw_rubber_dust'])*/
	event.recipes.greate.compacting('gtceu:vulcanized_latex_dust', ['gtceu:latex_dust', 'gtceu:sulfur_dust', 'tfc:powder/flux'])
			.heated()
			.recipeTier(0)
	
	event.custom({
	type:"vintageimprovements:pressurizing",
	ingredients: [ 
		{
			item: "gtceu:vulcanized_latex_dust"
		}
	],
	results: [
		{
			item: "gtceu:raw_rubber_dust"
		}
	],
	processingTime: 800
	})
    
}