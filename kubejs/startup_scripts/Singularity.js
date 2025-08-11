const Singularitys = [
  {
    id: "iron",
	colour: 0xeeeeee
  },
  {
    id: "copper",
	colour: 0xe77c56
  },
  {
    id: "aluminium",
	colour: 0x7db9d8
  },
  {
	  id: "bronze",
	  colour: 0xffc370
  },
  {
	  id: "corrosive_will",
	  colour: 0xdcf0ba
  },
  {
	  id: "demon_will",
	  colour: 0xc2e8e6
  },
  {
	  id: "steadfast_will",
	  colour: 0xbcd2ee
  },
  {
	  id: "vengeful_will",
	  colour: 0xf7b3b6
  },
  {
	  id: "destructive_will",
	  colour: 0xf3ebb7
  },
  {
	  id: "black_bronze",
	  colour: 0x8b7c70
  },
  {
	  id: "bismuth_bronze",
	  colour: 0xffd26f
  },
  {
	  id: "coal",
	  colour: 0x363739
  },
  {
	  id: "diamond",
	  colour: 0xa6fce9
  },
  {
	  id: "electrum",
	  colour: 0xf5f18e
  },
  {
	  id: "emerald",
	  colour: 0x7df8ac
  },
  {
	  id: "glowstone",
	  colour: 0xffd38f
  },
  {
	  id: "gold",
	  colour: 0xfdf55f
  },
  {
	  id: "invar",
	  colour: 0xbcc5bb
  },
  {
	  id: "lapis",
	  colour: 0x678dea
  },
  {
	  id: "osmium",
	  colour: 0x54afff
  },
  {
	  id: "lead",
	  colour: 0x7e6f82
  },
  {
	  id: "netherite",
	  colour: 0x443a3b
  },
  {
	  id: "nickel",
	  colour: 0xccdff5
  },
  {
	  id: "redstone",
	  colour: 0xff0000
  },
  {
	  id: "platinum",
	  colour: 0xfff4ba
  },
  {
	  id: "refined_obsidian",
	  colour: 0xa9a1b8
  },
  {
	  id: "silver",
	  colour: 0xc0cdd2
  },
  {
	  id: "steel",
	  colour: 0x565656
  },
  {
	  id: "tin",
	  colour: 0xa0bebd
  },
  {
	  id: "uranium",
	  colour: 0xd2f9d1
  }
]


let Singularity = (/** @type {Registry.Item} */ event) => {
	event.create('combined_will_singularity')
			.texture('layer0','kubejs:item/singularity_2')
			.texture('layer1','kubejs:item/combined_will_singularity')
	event.create('divine_gemstone_singularity')
			.texture('layer0','kubejs:item/singularity_2')
			.texture('layer1','kubejs:item/singularity_divine')
			.texture('layer2','kubejs:item/divine_singularity_outline')
			.color(0, 0xfff93a)
			//.color(1, 0xfff700)
	event.create('divine_combined_will_singularity')
			.texture('layer0','kubejs:item/singularity_2')
			.texture('layer1','kubejs:item/combined_will_singularity')
			.texture('layer2','kubejs:item/divine_singularity_outline')
	Singularitys.forEach((sing) => {
		event.create(`${sing.id}_singularity`)
			//.texture('layer0','avaritia:item/resource/singularity/singularity')
			.texture('layer0','kubejs:item/singularity_2')
			//.texture('layer1','avaritia:item/resource/singularity/singularity_overlay')
			.texture('layer1','kubejs:item/singularity_1')
			.color(0, sing.colour)
			.color(1, sing.colour)
	})
}