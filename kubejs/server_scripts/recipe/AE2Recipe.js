const AE2Recipe = (event) => {
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "middle": {
        "item": "gtceu:silicon_plate"
      },
      "top": {
        "item": "ae2:silicon_press"
      }
    },
    "mode": "inscribe",
    "result": {
      "item": "ae2:printed_silicon"
    }
  }).id('inscriber_printed_silicon')

  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "middle": {
        "item": "gtceu:gold_plate"
      },
      "top": {
        "item": "ae2:logic_processor_press"
      }
    },
    "mode": "inscribe",
    "result": {
      "item": "ae2:printed_logic_processor"
    }
  }).id('inscriber_printed_logic_processor')

  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "middle": {
        "item": "gtceu:diamond_plate"
      },
      "top": {
        "item": "ae2:engineering_processor_press"
      }
    },
    "mode": "inscribe",
    "result": {
      "item": "ae2:printed_engineering_processor"
    }
  }).id('inscriber_printed_engineering_processor')

  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "middle": {
        "item": "gtceu:certus_quartz_plate"
      },
      "top": {
        "item": "ae2:calculation_processor_press"
      }
    },
    "mode": "inscribe",
    "result": {
      "item": "ae2:printed_calculation_processor"
    }
  }).id('inscriber_printed_calculation_processor')


  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "bottom": {
        "item": "ae2:printed_calculation_processor"
      },
      "middle": {
        "item": "kubejs:redstone_printed_silicon_wafer"
      },
      "top": {
        "item": "ae2:printed_logic_processor"
      }
    },
    "mode": "press",
    "result": {
      "item": "kubejs:calculation_logic_processor"
    }
  }).id('inscriber_calculation_logic_processor')
  
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "bottom": {
        "item": "ae2:printed_engineering_processor"
      },
      "middle": {
        "item": "kubejs:redstone_printed_silicon_wafer"
      },
      "top": {
        "item": "ae2:printed_logic_processor"
      }
    },
    "mode": "press",
    "result": {
      "item": "kubejs:engineering_logic_processor"
    }
  }).id('inscriber_engineering_logic_processor')
  
  //##############################################
  
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "bottom": {
        "item": "ae2:printed_logic_processor"
      },
      "middle": {
        "item": "kubejs:redstone_printed_silicon_wafer"
      },
      "top": {
        "item": "ae2:printed_calculation_processor"
      }
    },
    "mode": "press",
    "result": {
      "item": "kubejs:logic_calculation_processor"
    }
  }).id('inscriber_logic_calculation_processor')
  
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "bottom": {
        "item": "ae2:printed_engineering_processor"
      },
      "middle": {
        "item": "kubejs:redstone_printed_silicon_wafer"
      },
      "top": {
        "item": "ae2:printed_calculation_processor"
      }
    },
    "mode": "press",
    "result": {
      "item": "kubejs:engineering_calculation_processor"
    }
  }).id('inscriber_engineering_calculation_processor')
  
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "bottom": {
        "item": "ae2:printed_calculation_processor"
      },
      "middle": {
        "item": "kubejs:redstone_printed_silicon_wafer"
      },
      "top": {
        "item": "ae2:printed_engineering_processor"
      }
    },
    "mode": "press",
    "result": {
      "item": "kubejs:calculation_engineering_processor"
    }
  }).id('inscriber_calculation_engineering_processor')
  
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "bottom": {
        "item": "ae2:printed_logic_processor"
      },
      "middle": {
        "item": "kubejs:redstone_printed_silicon_wafer"
      },
      "top": {
        "item": "ae2:printed_engineering_processor"
      }
    },
    "mode": "press",
    "result": {
      "item": "kubejs:logic_engineering_processor"
    }
  }).id('inscriber_logic_engineering_processor')
  
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "middle": {
        "item": "minecraft:redstone"
      },
      "top": {
        "item": "gtceu:silicon_wafer"
      }
    },
    "mode": "inscribe",
    "result": {
      "item": "kubejs:redstone_printed_silicon_wafer"
    }
  }).id('inscriber_redstone_printed_silicon_wafer')
  
  event.recipes.gtceu.circuit_assembler('formation_core_e')
		.itemInputs('gtceu:certus_quartz_plate', 'ae2:fluix_dust',
		'ae2:logic_processor', 'kubejs:engineering_logic_processor', 'kubejs:elemental_capacitor')
		.itemOutputs('ae2:formation_core')
		.duration(200)
		.EUt(60)
	event.recipes.gtceu.circuit_assembler('annihilation_core_e')
		.itemInputs('gtceu:nether_quartz_plate', 'ae2:fluix_dust',
		'ae2:logic_processor', 'kubejs:engineering_logic_processor', 'kubejs:elemental_capacitor')
		.itemOutputs('ae2:annihilation_core')
		.duration(200)
		.EUt(60)
		
	event.recipes.gtceu.circuit_assembler('formation_core')
		.itemInputs('gtceu:certus_quartz_plate', 'ae2:fluix_dust',
		'ae2:logic_processor', 'kubejs:engineering_logic_processor', 'gtceu:advanced_smd_capacitor')
		.itemOutputs('ae2:formation_core')
		.duration(200)
		.EUt(60)
	event.recipes.gtceu.circuit_assembler('annihilation_core')
		.itemInputs('gtceu:nether_quartz_plate', 'ae2:fluix_dust',
		'ae2:logic_processor', 'kubejs:engineering_logic_processor', 'gtceu:advanced_smd_capacitor')
		.itemOutputs('ae2:annihilation_core')
		.duration(200)
		.EUt(60)
		
  event.recipes.gtceu.assembler('terminal')
		.itemInputs('#ae2:illuminated_panel', 'ae2:formation_core', 'ae2:annihilation_core',
		'ae2:logic_processor', 'kubejs:logic_engineering_processor')
		.itemOutputs('ae2:terminal')
		.duration(200)
		.EUt(60)
	
	event.recipes.gtceu.circuit_assembler('1k_cell_component')
		.itemInputs('4x gtceu:certus_quartz_plate', '4x gtceu:fine_red_alloy_wire', 'ae2:logic_processor',
		'kubejs:logic_calculation_processor', '#kubejs:any_elemental_capacitor')
		.itemOutputs('ae2:cell_component_1k')
		.duration(200)
		.EUt(60)
	event.recipes.gtceu.circuit_assembler('4k_cell_component')
		.itemInputs('4x ae2:cell_component_1k', '4x gtceu:fine_red_alloy_wire', 'ae2:quartz_glass',
		'ae2:calculation_processor', 'kubejs:engineering_calculation_processor')
		.itemOutputs('ae2:cell_component_4k')
		.duration(200)
		.EUt(60)
	
	event.recipes.gtceu.circuit_assembler('processor_formation')
		.itemInputs('ae2:calculation_processor', 'ae2:engineering_processor', 'ae2:logic_processor', '#gtceu:circuits/lv', '3x #gtceu:resistors', 'gtceu:fine_tin_wire')
		.itemOutputs('kubejs:processor_formation')
		.inputFluids('gtceu:polyethylene 144')
		.duration(200)
		.EUt(60)
	
	event.recipes.gtceu.circuit_assembler('logic_processor_formation')
		.itemInputs('kubejs:logic_calculation_processor', 'kubejs:logic_engineering_processor', '#gtceu:circuits/lv', '2x #gtceu:resistors', 'gtceu:fine_tin_wire')
		.itemOutputs('kubejs:logic_processor_formation')
		.inputFluids('gtceu:polyethylene 144')
		.duration(200)
		.EUt(60)
	
	event.recipes.gtceu.circuit_assembler('engineering_processor_formation')
		.itemInputs('kubejs:engineering_calculation_processor', 'kubejs:engineering_logic_processor', '#gtceu:circuits/lv', '2x #gtceu:resistors', 'gtceu:fine_tin_wire')
		.itemOutputs('kubejs:engineering_processor_formation')
		.inputFluids('gtceu:polyethylene 144')
		.duration(200)
		.EUt(60)
	
	event.recipes.gtceu.circuit_assembler('calculation_processor_formation')
		.itemInputs('kubejs:calculation_engineering_processor', 'kubejs:calculation_logic_processor', '#gtceu:circuits/lv', '2x #gtceu:resistors', 'gtceu:fine_tin_wire')
		.itemOutputs('kubejs:calculation_processor_formation')
		.inputFluids('gtceu:polyethylene 144')
		.duration(200)
		.EUt(60)
	
	event.recipes.gtceu.circuit_assembler('ae2_processing_formation_assembly')
		.itemInputs('kubejs:calculation_processor_formation', 'kubejs:logic_processor_formation', 'kubejs:engineering_processor_formation', '2x #gtceu:resistors', '#gtceu:diodes', 'gtceu:fine_tin_wire')
		.itemOutputs('kubejs:processing_formation_assembly')
		//.inputFluids('gtceu:tin 72')
		.duration(200)
		.EUt(60)
	
	/*event.recipes.gtceu.assembler('ae2_controller')
		.itemInputs('4x gtceu:fluix_plate', '4x gtceu:dark_steel_plate', 'ae2:smooth_sky_stone_block', 'ae2:energy_acceptor', 'kubejs:processor_formation', 'kubejs:processing_formation_assembly', '#kubejs:any_elemental_proc')
		.itemOutputs('ae2:controller')
		.duration(200)
		.EUt(60)*/
	
	
	
	event.recipes.gtceu.alloy_smelter('dark_steel')
		.itemInputs('gtceu:obsidian_dust', 'gtceu:steel_dust')
		.itemOutputs('gtceu:dark_steel_ingot')
		.duration(100)
		.EUt(60)
	event.recipes.gtceu.alloy_smelter('dark_steel1')
		.itemInputs('minecraft:obsidian', 'gtceu:steel_ingot')
		.itemOutputs('gtceu:dark_steel_ingot')
		.duration(200)
		.EUt(60)
	event.recipes.gtceu.alloy_smelter('dark_steel2')
		.itemInputs('gtceu:obsidian_dust', 'gtceu:steel_ingot')
		.itemOutputs('gtceu:dark_steel_ingot')
		.duration(100)
		.EUt(60)
	
	event.recipes.gtceu.mixer('sky_stone_dust')
		.itemInputs('#forge:dusts/stone', 'gtceu:fluix_dust')
		.itemOutputs('ae2:sky_dust')
		.duration(100)
		.EUt(60)
	
	event.recipes.gtceu.alloy_smelter('electrical_steel')
		.itemInputs('gtceu:silicon_dust', 'gtceu:steel_ingot')
		.itemOutputs('gtceu:electrical_steel_ingot')
		.duration(100)
		.EUt(60)
	event.recipes.gtceu.alloy_smelter('electrical_steel1')
		.itemInputs('gtceu:silicon_dust', 'gtceu:steel_dust')
		.itemOutputs('gtceu:electrical_steel_ingot')
		.duration(100)
		.EUt(60)
	
	event.recipes.gtceu.mixer('fluix')
		.itemInputs('gtceu:charged_certus_quartz_gem', 'minecraft:redstone', 'minecraft:quartz')
		.itemOutputs('2x gtceu:fluix_gem')
		.inputFluids('minecraft:water 1000')
		.duration(100)
		.EUt(60)
	
	event.custom({
  "type": "ae2:charger",
  "ingredient": {
    "item": "gtceu:certus_quartz_gem"
  },
  "result": {
    "item": "gtceu:charged_certus_quartz_gem"
  }
})
	event.recipes.gtceu.mixer('quartz_glass_dust')
		.itemInputs('gtceu:glass_dust', 'gtceu:certus_quartz_dust')
		.itemOutputs('2x gtceu:quartz_glass_dust')
		.duration(100)
		.EUt(16)
	event.recipes.gtceu.alloy_smelter('quartz_glass')
		.itemInputs('gtceu:quartz_glass_dust')
		.itemOutputs('ae2:quartz_glass')
		.notConsumable('gtceu:block_casting_mold')
		.duration(200)
		.EUt(16)
	event.recipes.gtceu.forming_press('quartz_glass1')
		.itemInputs('gtceu:quartz_glass_dust')
		.itemOutputs('ae2:quartz_glass')
		.notConsumable('gtceu:block_casting_mold')
		.duration(200)
		.EUt(16)
	
	event.recipes.gtceu.fluid_solidifier('quartz_glass2')
		//.itemInputs('gtceu:quartz_glass_dust')
		.inputFluids('gtceu:quartz_glass 144')
		.itemOutputs('ae2:quartz_glass')
		.notConsumable('gtceu:block_casting_mold')
		.duration(4)
		.EUt(16)
	
	event.recipes.gtceu.mixer('quartz_glass3')
		.itemInputs('gtceu:certus_quartz_dust')
		.inputFluids('gtceu:glass 144')
		.outputFluids('gtceu:quartz_glass 288')
		//.itemOutputs('ae2:quartz_glass')
		//.notConsumable('gtceu:block_casting_mold')
		.duration(4)
		.EUt(16)
	
	event.recipes.gtceu.macerator('quartz_glass_dustm')
		.itemInputs('ae2:quartz_glass')
		.itemOutputs('gtceu:certus_quartz_dust')
		.duration(20)
		.EUt(16)
	
	event.recipes.gtceu.wiremill('quartz_fiber')
		.itemInputs('gtceu:certus_quartz_gem')
		.itemOutputs('ae2:quartz_fiber')
		.duration(100)
		.EUt(32)
	
	event.recipes.gtceu.assembler('fluix_glass_cable')
		.itemInputs('ae2:quartz_fiber', 'gtceu:fluix_plate')
		.inputFluids('gtceu:quartz_glass 144')
		.itemOutputs('ae2:fluix_glass_cable')
		.duration(100)
		.EUt(32)
	
	event.recipes.gtceu.assembler('fluix_covered_cable')
		.itemInputs('ae2:fluix_glass_cable')
		.inputFluids('gtceu:rubber 288')
		.itemOutputs('ae2:fluix_covered_cable')
		.duration(100)
		.EUt(7)
	
	event.recipes.gtceu.assembler('fluix_covered_cable1')
		.itemInputs('ae2:fluix_glass_cable')
		.inputFluids('gtceu:silicone_rubber 144')
		.itemOutputs('ae2:fluix_covered_cable')
		.duration(100)
		.EUt(7)
	
	event.recipes.gtceu.assembler('fluix_covered_cable2')
		.itemInputs('ae2:fluix_glass_cable')
		.inputFluids('gtceu:styrene_butadiene_rubber 72')
		.itemOutputs('ae2:fluix_covered_cable')
		.duration(100)
		.EUt(7)
	
	event.shaped('kubejs:sky_stone_case', ['ABA','BCB','ABA'],
  {
    A: 'gtceu:electrical_steel_rod',
    B: 'kubejs:sky_stone_plate',  
    C: 'ae2:energy_acceptor'
  }
)
	event.recipes.gtceu.assembler('sky_stone_case')
		.itemInputs('4x kubejs:sky_stone_plate', '4x gtceu:electrical_steel_rod',  'ae2:energy_acceptor')
		.itemOutputs('kubejs:sky_stone_case')
		.duration(200)
		.EUt(60)
	
	event.recipes.gtceu.assembler('fluix_engraved_sky_stone_case')
		.itemInputs('kubejs:sky_stone_case')
		.inputFluids('gtceu:fluix 1000')
		.itemOutputs('kubejs:fluix_engraved_sky_stone_case')
		.duration(200)
		.EUt(120)
	
	event.shaped('ae2:energy_acceptor', ['ADA','BCB','ABA'],
  {
    A: 'gtceu:electrical_steel_plate',
    B: 'gtceu:fluix_plate',  
    C: 'gtceu:hv_energy_input_hatch',
	D: 'ae2:quartz_glass'
  }
)
	event.recipes.gtceu.assembler('ae2_energy_acceptor')
		.itemInputs('3x gtceu:fluix_plate', '4x gtceu:electrical_steel_plate', 'gtceu:hv_energy_input_hatch', 'ae2:quartz_glass')
		.itemOutputs('ae2:energy_acceptor')
		.duration(100)
		.EUt(240)
	
	event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ae2:quartz_glass",
            "gtceu:electrical_steel_plate",
            "gtceu:fluix_plate",
            "gtceu:electrical_steel_plate",
            "gtceu:fluix_plate",
			"gtceu:electrical_steel_plate",
            "gtceu:fluix_plate",
			"gtceu:electrical_steel_plate"
        ], 
	    "gtceu:mv_energy_input_hatch",
	    "ae2:energy_acceptor", 
	    1000
	);
	
	/*event.shaped('kubejs:processing_formation_assembly', ['AD ','BEB',' FC'],
		{
			A: '#gtceu:diodes',
			B: '#gtceu:resistors',  
			C: 'gtceu:fine_tin_wire',
			D: 'kubejs:calculation_processor_formation',
			E: 'kubejs:engineering_processor_formation',
			F: 'kubejs:logic_processor_formation'
		})*/
	event.shaped('ae2:controller', ['ABA','CDE','ABA'],
  {
    A: 'kubejs:titanium_dark_steel_stacked_plate',
    B: 'gtceu:micro_processor_assembly',  
    C: 'kubejs:processing_formation_assembly',
	D: 'kubejs:fluix_engraved_sky_stone_case',
	E: 'kubejs:processor_formation'
  }
)
	event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "#kubejs:any_elemental_mv_circuit",
            "kubejs:source_steel_dark_steel_stacked_plate",
            "kubejs:processing_formation_assembly",
            "kubejs:source_steel_dark_steel_stacked_plate",
            "#kubejs:any_elemental_mv_circuit",
			"kubejs:source_steel_dark_steel_stacked_plate",
            "kubejs:processor_formation",
			"kubejs:source_steel_dark_steel_stacked_plate"
        ], 
	    "kubejs:fluix_engraved_sky_stone_case",
	    "ae2:controller", 
	    1000
	);
	
	event.recipes.gtceu.cutter('sky_stone_plate')
		.itemInputs('ae2:smooth_sky_stone_block')
		.itemOutputs('9x kubejs:sky_stone_plate')
		.duration(1200)
		.EUt(30)
	
	event.recipes.gtceu.assembler('source_dark_steel_plate_stack')
		.itemInputs('gtceu:source_steel_plate', 'gtceu:dark_steel_plate')
		.itemOutputs('kubejs:source_steel_dark_steel_stacked_plate')
		.inputFluids('gtceu:steel 72')
		.duration(300)
		.EUt(60)
	
	event.recipes.gtceu.assembler('titanium_dark_steel_plate_stack')
		.itemInputs('gtceu:titanium_plate', 'gtceu:dark_steel_plate')
		.itemOutputs('kubejs:titanium_dark_steel_stacked_plate')
		.inputFluids('gtceu:steel 72')
		.duration(300)
		.EUt(60)
}