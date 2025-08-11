const BloodMagic = (event) => {
	event.recipes.gtceu.centrifuge("centrifuge_life_essence")
		.inputFluids(
			'bloodmagic:life_essence_fluid 1000'
        )
		.outputFluids(
			'hexerei:blood_fluid 750',
			'experienceobelisk:cognitium 250'
		)
		.duration(480)
		.EUt(60)
}