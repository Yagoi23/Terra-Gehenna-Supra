const EnchantedRecipe = (event) => {
	event.recipes.tfc.knapping(
        'enchanted:soft_clay_jar',
        'tfc:clay',
        [
            '  X  ',
            ' XXX ',
			' XXX ',
			'XXXXX',
            ' XXX '
        ]
    ).outsideSlotRequired(false)
  event.custom(
    {
      type: "enchanted:wheel",
      duration: 300,
      ingredients: [
        {
          item: 'gtceu:fine_gold_wire'
        },
        {
          item: "minecraft:string"
        },
        {
          item: 'enchanted:whiff_of_magic'
        }
      ],
      power: 500,
      result: {
        item: "kubejs:gold_thread"
      }
    }
  )
  
  event.custom(
  {
  type: "enchanted:distilling",
  cookTime: 300,
  ingredients: [
    {
      item: "enchanted:clay_jar"
    },
    {
      item: "enchanted:foul_fume"
    },
    {
      item: "gtceu:quicklime_dust"
    }
  ],
  power: 750,
  results: [
    {
      item: 'gtceu:gypsum_dust'
    },
    {
      item: "enchanted:oil_of_vitriol"
    },
    {
      item: "minecraft:slime_ball"
    }
  ]
})
}