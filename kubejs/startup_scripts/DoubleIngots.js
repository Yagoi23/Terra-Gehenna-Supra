const Metals = [
  {
    id: "iron",
	colour0: 0xeeeeee,
	colour1: 0x979797,
    name: "Iron",
	icon: "metallic"
  },
  {
    id: "copper",
    colour0: 0xe77c56,
	colour1: 0xe4673e,
    name: "Copper",
	icon: "metallic"
  },
  {
    id: "gold",
    colour0: 0xfdf55f,
	colour1: 0xf25833,
    name: "Gold",
	icon: "metallic"
  },
  {
    id: "lead",
    colour0: 0x7e6f82,
	colour1: 0x290633,
    name: "Lead",
	icon: "dull"
  },
  {
    id: "rose_gold",
    colour0: 0xecd5b8,
	colour1: 0xd85f2d,
    name: "Rose Gold",
	icon: "shiny"
  },
  {
    id: "red_steel",
    colour0: 0xa09191,
	colour1: 0x500404,
    name: "Red Steel",
	icon: "metallic"
  },
  {
    id: "blue_steel",
    colour0: 0x779ac6,
	colour1: 0x191948,
    name: "Blue Steel",
	icon: "metallic"
  },
  {
    id: "vanadium_steel",
    colour0: 0xb59fcc,
	colour1: 0x19140d,
    name: "Vanadium Steel",
	icon: "shiny"
  },
  {
    id: "chromium",
    colour0: 0xf3e0ea,
	colour1: 0x441f2e,
    name: "Chromium",
	icon: "shiny"
  },
  {
    id: "tin",
    colour0: 0xfafeff,
	colour1: 0x4e676c,
    name: "Tin",
	icon: "metallic"
  },
  {
    id: "zinc",
    colour0: 0xEBEBFA,
	colour1: 0x232c30,
    name: "Zinc",
	icon: "metallic"
  },
  {
    id: "silver",
    colour0: 0xDCDCFF,
	colour1: 0x5a4705,
    name: "Silver",
	icon: "shiny"
  },
  {
    id: "nickel",
    colour0: 0xccdff5,
	colour1: 0x59563a,
    name: "Nickel",
	icon: "metallic"
  },
  {
    id: "brass",
    colour0: 0xffe36e,
	colour1: 0x935828,
    name: "Brass",
	icon: "shiny"
  },
  {
    id: "bismuth",
    colour0: 0x5fdddd,
	colour1: 0x517385,
    name: "Bismuth",
	icon: "metallic"
  },
  {
    id: "black_bronze",
    colour0: 0x8b7c70,
	colour1: 0x4b3d32,
    name: "Black Bronze",
	icon: "metallic"
  },
  {
    id: "bismuth_bronze",
    colour0: 0xffd26f,
	colour1: 0x895f3d,
    name: "Bismuth Bronze",
	icon: "metallic"
  },
  {
    id: "bronze",
    colour0: 0xffc370,
	colour1: 0x806752,
    name: "Bronze",
	icon: "metallic"
  },
  {
    id: "steel",
    colour0: 0xa7a7a7,
	colour1: 0x121c37,
    name: "Steel",
	icon: "metallic"
  },
  {
    id: "stainless_steel",
    colour0: 0xededfd,
	colour1: 0x19191d,
    name: "Stainless Steel",
	icon: "shiny"
  },
  {
    id: "aluminium",
    colour0: 0x7db9d8,
	colour1: 0x756ac9c,
    name: "Aluminium",
	icon: "metallic"
  },
  {
    id: "titanium",
    colour0: 0xed8eea,
	colour1: 0xff64bc,
    name: "Titanium",
	icon: "metallic"
  },
  {
    id: "black_steel",
    colour0: 0x666666,
	colour1: 0x1a120e,
    name: "Black Steel",
	icon: "metallic"
  },
  {
    id: "invar",
    colour0: 0xe2e8e1,
	colour1: 0x495d57,
    name: "Invar",
	icon: "metallic"
  },
  {
    id: "sterling_silver",
    colour0: 0xfaf4dc,
	colour1: 0x484434,
    name: "Sterling Silver",
	icon: "shiny"
  },
  {
    id: "wrought_iron",
    colour0: 0xbcbcbc,
	colour1: 0x521c0b,
    name: "Wrought Iron",
	icon: "metallic"
  },
  {
    id: "tungsten_carbide",
    colour0: 0x635480,
	colour1: 0x392e44,
    name: "Tungsten Carbide",
	icon: "metallic"
  },
  {
    id: "damascus_steel",
    colour0: 0x6E6E6E,
	colour1: 0x302222,
    name: "Damascus Steel",
	icon: "metallic"
  },
  {
    id: "tungsten_steel",
    colour0: 0x687ece,
	colour1: 0x03192f,
    name: "Tungstensteel",
	icon: "metallic"
  },
  {
    id: "cobalt_brass",
    colour0: 0xbaa365,
	colour1: 0x596338,
    name: "Cobalt Brass",
	icon: "metallic"
  },
  {
    id: "ultimet",
    colour0: 0x9f9fb1,
	colour1: 0x385086,
    name: "Ultimet",
	icon: "shiny"
  },
  {
    id: "netherite",
    colour0: 0x4b4042,
	colour1: 0x474447,
    name: "Netherite",
	icon: "metallic"
  }
]

const Metals2 = [
  

 ]

let DoubleIngots = (/** @type {Registry.Item} */ event) => {
	Metals.forEach((metal) => {
		event.create(`double_${metal.id}_ingot`)
			.displayName(`${metal.name} Double Ingot`)
			//.texture(`gtceu:item/material_sets/${metal.icon}/ingot_double`)//.texture("tfc:item/metal/double_ingot/wrought_iron")
			.texture('layer0',`gtceu:item/material_sets/${metal.icon}/ingot_double`)
			.texture('layer1',`gtceu:item/material_sets/${metal.icon}/ingot_double_secondary`)
			.texture('layer2',`gtceu:item/material_sets/${metal.icon}/ingot_double_overlay`)
			.color(0, metal.colour0)
			.color(1, metal.colour1)
	})
}