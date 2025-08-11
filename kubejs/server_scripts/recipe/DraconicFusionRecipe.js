const DraconicFusionRecipe = (event) => {
 event.custom({

  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": "kubejs:demon_will_singularity"
  },
  "ingredients": [
    {
      "item": 'kubejs:corrosive_will_singularity'
    },
	{
      "item": 'kubejs:steadfast_will_singularity'
    },
	{
      "item": "kubejs:vengeful_will_singularity"
    },
	{
      "item": "kubejs:destructive_will_singularity"
    }
  ],
  "result": {
    "item": "kubejs:combined_will_singularity"
  },
  "tier": "CHAOTIC",
  "total_energy": 16000000
  })
  
  event.custom({

  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": "kubejs:combined_will_singularity"
  },
  "ingredients": [
    {
      "item": 'kubejs:divine_gemstone_singularity'
    },
	{
      "item": 'kubejs:divine_gemstone_singularity'
    },
	{
      "item": "kubejs:divine_gemstone_singularity"
    },
	{
      "item": "kubejs:divine_gemstone_singularity"
    },
	{
      "item": "kubejs:divine_gemstone_singularity"
    },
	{
      "item": "kubejs:divine_gemstone_singularity"
    }
  ],
  "result": {
    "item": "kubejs:divine_combined_will_singularity"
  },
  "tier": "CHAOTIC",
  "total_energy": 16000000
  })
  
  event.custom({

  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": 'bloodmagic:defaultcrystal'
  },
  "ingredients": [
    {
      "item": 'bloodmagic:corrosivecrystal'
    },
	{
      "item": 'bloodmagic:steadfastcrystal'
    },
	{
      "item": "bloodmagic:vengefulcrystal"
    },
	{
      "item": "bloodmagic:destructivecrystal"
    }
  ],
  "result": {
    "item": "kubejs:combined_will_crystal"
  },
  "tier": "DRACONIC",
  "total_energy": 1000000
  })
}