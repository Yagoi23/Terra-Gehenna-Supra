const StackedPlate = [
  {
    id: "titanium_dark_steel",
    colour0top: 0xed8eea,
	colour1top: 0xff64bc,
	colour0bot: 0x414751,
	colour1bot: 0x414751,
    name: "Titanium Dark Steel"
  },
  {
    id: "dark_steel_fluix",
    colour0top: 0x414751,
	colour1top: 0x414751,
	colour0bot: 0x7f5bb3,
	colour1bot: 0x7f5bb3,
    name: "Dark Steel Fluix"
  },
  {
    id: "source_steel_dark_steel",
    colour0top: 0xb045e5,
	colour1top: 0xb045e5,
	colour0bot: 0x414751,
	colour1bot: 0x414751,
    name: "Source Steel Dark Steel"
  }
]

let StackedPlates = (/** @type {Registry.Item} */ event) => {
	StackedPlate.forEach((plate) => {
		event.create(`${plate.id}_stacked_plate`)
			.displayName(`${plate.name} Stacked Plates`)
			//.texture(`gtceu:item/material_sets/${metal.icon}/ingot_double`)//.texture("tfc:item/metal/double_ingot/wrought_iron")
			.texture('layer0','kubejs:item/stacked_plate_bottom')
			.texture('layer1','kubejs:item/stacked_plate_bottom_secondary')
			.texture('layer2','kubejs:item/stacked_plate_top')
			.texture('layer3','kubejs:item/stacked_plate_top_secondary')
			.texture('layer4','gtceu:item/material_sets/metallic/plate_double_overlay')
			.color(0, plate.colour0bot)
			.color(1, plate.colour1bot)
			.color(2, plate.colour0top)
			.color(3, plate.colour1top)
	})
}