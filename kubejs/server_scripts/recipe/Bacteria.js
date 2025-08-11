const Bacteria = (event) => {
	event.recipes.gtceu.autoclave("sterile_petri_dish")
		.inputFluids(
			'gtceu:chlorine 8'
        )
		.itemInputs(
			'gtceu:petri_dish'
		)
		.itemOutputs(
			'kubejs:sterilized_petri_dish'
		)
		.duration(320)
		.EUt(120)
	event.recipes.gtceu.electric_blast_furnace("tempered_boro_glass")
		.inputFluids(
			'gtceu:nitrogen 100'
        )
		.itemInputs(
			'gtceu:borosilicate_glass_block'
		)
		.itemOutputs(
			'kubejs:tempered_borosilicate_glass'
		)
		.duration(320)
		.EUt(120)
		.blastFurnaceTemp(1700)
	event.recipes.gtceu.arc_furnace("tempered_boro_glass")
		.inputFluids(
			'gtceu:nitrogen 60'
        )
		.itemInputs(
			'gtceu:borosilicate_glass_block'
		)
		.itemOutputs(
			'kubejs:tempered_borosilicate_glass'
		)
		.duration(120)
		.EUt(60)
	
	event.recipes.gtceu.assembler("clean_boro_glass")
		.inputFluids('gtceu:borosilicate_glass 144')
		.itemInputs('gtceu:tungsten_steel_frame',
		'6x gtceu:polyethylene_plate')
		.itemOutputs('2x kubejs:cleanroom_borosilicate_glass')
		.duration(12000)
		.EUt(60)
	
	event.recipes.gtceu.bacterial_vat("grow_bacteria")
		.inputFluids('gtceu:bacteria 500',
		'gtceu:distilled_water 500')
		//.notConsumable('kubejs:cultured_petri_dish_rotten_flesh')
		//.chancedFluidOutput('gtceu:escherichia_cadaver', 2500, 1)
		.outputFluids('gtceu:bacteria 1000')
		.itemInputs('gtceu:bio_chaff')
		.duration(12000)
		.EUt(160)
	
	event.recipes.gtceu.bio_lab("culture_dish")
		.inputFluids(
			'gtceu:bacteria 1000'
        )
		.itemInputs(
			'kubejs:sterilized_petri_dish',
			'minecraft:rotten_flesh'
		)
		.itemOutputs(
			'kubejs:cultured_petri_dish_rotten_flesh'
		)
		.duration(12000)
		.EUt(1620)
	
	event.recipes.gtceu.bacterial_vat("grow_escherichia_cadaver")
		.inputFluids('gtceu:sterilized_growth_medium 500')
		//.notConsumable('kubejs:cultured_petri_dish_rotten_flesh')
		//.chancedFluidOutput('gtceu:escherichia_cadaver', 2500, 1)
		.outputFluids('gtceu:escherichia_cadaver 50')
		.itemInputs('kubejs:cultured_petri_dish_rotten_flesh')
		.itemOutputs('gtceu:petri_dish')
		.duration(12000)
		.EUt(1620)
	event.recipes.gtceu.bacterial_vat("grow_escherichia_ecoli")
		.inputFluids('gtceu:sterilized_growth_medium 500')
		//.notConsumable('kubejs:cultured_petri_dish_ecoli')
		//.chancedFluidOutput('gtceu:escherichia_koli', 3300, 1)
		.outputFluids('gtceu:escherichia_koli 50')
		.itemInputs('kubejs:cultured_petri_dish_ecoli')
		.itemOutputs('gtceu:petri_dish')
		.duration(12000)
		.EUt(1620)
	
	event.recipes.gtceu.bacterial_vat("grow_pseudomonas_fluorescens")
		.inputFluids('gtceu:sterilized_growth_medium 500')
		//.notConsumable('kubejs:cultured_petri_dish_ecoli')
		//.chancedFluidOutput('gtceu:escherichia_koli', 3300, 1)
		.outputFluids('gtceu:pseudomonas_fluorescens 50')
		.itemInputs('kubejs:cultured_petri_dish_fluorescens')
		.itemOutputs('gtceu:petri_dish')
		.duration(12000)
		.EUt(1620)
	
	/*event.recipes.gtceu.bacterial_centrifuge("cent_bacteria")
		.inputFluids('gtceu:bacteria 1000')
		.chancedOutput('kubejs:lambda_phage', 330, 1)
		.chancedOutput('kubejs:t4_phage', 330, 1)
		.duration(12000)
		.EUt(60)*/
	
	event.recipes.gtceu.bacterial_centrifuge("cent_ecoli")
		.inputFluids('gtceu:escherichia_koli 1000')
		.outputFluids('gtceu:bacterial_sludge 500')
		.chancedOutput('kubejs:t1_phage', 120, 1)
		.chancedOutput('kubejs:t2_phage', 100, 1)
		.chancedOutput('kubejs:t3_phage', 90, 1)
		.chancedOutput('kubejs:t4_phage', 3300, 1)
		.chancedOutput('kubejs:t7_phage', 2900, 1)
		.chancedOutput('kubejs:t1_ent_phage', 80, 1)
		.chancedOutput('kubejs:t2_ent_phage', 2200, 1)
		.chancedOutput('kubejs:t3_ent_phage', 240, 1)
		.chancedOutput('kubejs:m13_phage', 2300, 1)
		.chancedOutput('kubejs:phi_phage', 2800, 1)
		.chancedOutput('kubejs:lambda_phage', 3400, 1)
		.chancedOutput('kubejs:ms2_phage', 2600, 1)
		.duration(12000)
		.EUt(1620)
	
	event.recipes.gtceu.bacterial_centrifuge("cent_fluor")
		.inputFluids('gtceu:pseudomonas_fluorescens 1000')
		.outputFluids('gtceu:bacterial_sludge 500')
		.chancedOutput('kubejs:ms2_phage', 3800, 1)
		.chancedOutput('kubejs:p_phi_6_phage', 2600, 1)
		.chancedOutput('kubejs:p_phi_7_phage', 3200, 1)
		.chancedOutput('kubejs:p_phi_8_phage', 2900, 1)
		.duration(12000)
		.EUt(1620)
	
	event.recipes.gtceu.bacterial_centrifuge("cent_ecad")
		.inputFluids('gtceu:escherichia_cadaver 1000')
		.outputFluids('gtceu:bacterial_sludge 500')
		.chancedOutput('kubejs:t1_phage', 1200, 1)
		.chancedOutput('kubejs:t2_phage', 1000, 1)
		.chancedOutput('kubejs:t3_phage', 900, 1)
		.chancedOutput('kubejs:t4_phage', 300, 1)
		.chancedOutput('kubejs:t7_phage', 1500, 1)
		.chancedOutput('kubejs:t1_ent_phage', 800, 1)
		.chancedOutput('kubejs:t2_ent_phage', 1000, 1)
		.chancedOutput('kubejs:t3_ent_phage', 2400, 1)
		.chancedOutput('kubejs:m13_phage', 2400, 1)
		.chancedOutput('kubejs:phi_phage', 2900, 1)
		.chancedOutput('kubejs:lambda_phage', 3600, 1)
		.chancedOutput('kubejs:ms2_phage', 260, 1)
		.duration(12000)
		.EUt(1620)
}