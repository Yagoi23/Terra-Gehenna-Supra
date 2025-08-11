const AlloyRecipe = (event) => {

	event.recipes.tfc.alloy(
        'gtceu:bismuth_bronze',
        [
            TFC.alloyPart('gtceu:zinc', 0.2, 0.3),
            TFC.alloyPart('gtceu:bismuth', 0.1, 0.2),
            TFC.alloyPart('gtceu:copper', 0.5, 0.65)
        ]
    )
	event.recipes.tfc.alloy(
        'gtceu:rose_gold',
        [
            TFC.alloyPart('gtceu:gold', 0.7, 0.85),
            TFC.alloyPart('gtceu:copper', 0.15, 0.3)
        ]
    )
	
	/*event.recipes.tfc.alloy(
        'gtceu:andesite_alloy',
        [
            TFC.alloyPart('gtceu:molten_andesite', 0.45, 0.65),
            TFC.alloyPart('gtceu:iron', 0.45, 0.65)
        ]
    )*/
	
	event.recipes.tfc.alloy(
        'gtceu:weak_blue_steel',
        [
            TFC.alloyPart('gtceu:bismuth_bronze', 0.1, 0.15),
			TFC.alloyPart('gtceu:sterling_silver', 0.1, 0.15),
			TFC.alloyPart('gtceu:steel', 0.2, 0.25),
            TFC.alloyPart('gtceu:black_steel', 0.5, 0.55)
        ]
    )
	
	event.recipes.tfc.alloy(
        'gtceu:sterling_silver',
        [
            TFC.alloyPart('gtceu:copper', 0.2, 0.4),
			TFC.alloyPart('gtceu:silver', 0.6, 0.8)
        ]
    )
	
	event.recipes.tfc.alloy(
        'gtceu:brass',
        [
            TFC.alloyPart('gtceu:copper', 0.88, 0.92),
			TFC.alloyPart('gtceu:zinc', 0.8, 0.12)
        ]
    )
	
	event.recipes.tfc.alloy(
        'gtceu:weak_red_steel',
        [
            TFC.alloyPart('gtceu:rose_gold', 0.1, 0.15),
			TFC.alloyPart('gtceu:brass', 0.1, 0.15),
			TFC.alloyPart('gtceu:steel', 0.2, 0.25),
            TFC.alloyPart('gtceu:black_steel', 0.5, 0.55)
        ]
    )
	
	event.recipes.tfc.alloy(
        'gtceu:bronze',
        [
            TFC.alloyPart('gtceu:copper', 0.88, 0.92),
			TFC.alloyPart('gtceu:tin', 0.8, 0.12)
        ]
    )
	
	event.recipes.tfc.alloy(
        'gtceu:black_bronze',
        [
            TFC.alloyPart('gtceu:copper', 0.5, 0.7),
			TFC.alloyPart('gtceu:silver', 0.1, 0.25),
			TFC.alloyPart('gtceu:gold', 0.1, 0.25)
        ]
    )
	
	event.recipes.tfc.alloy(
        'gtceu:weak_steel',
        [
            TFC.alloyPart('gtceu:steel', 0.5, 0.7),
			TFC.alloyPart('gtceu:black_bronze', 0.15, 0.25),
			TFC.alloyPart('gtceu:nickel', 0.15, 0.25)
        ]
    )
}