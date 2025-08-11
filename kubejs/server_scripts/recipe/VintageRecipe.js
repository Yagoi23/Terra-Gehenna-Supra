const VintageRecipe = (event) => {
	function clamp(num, min, max) {
		if (num === num) {
    if (max !== undefined) {
      num = num <= max ? num : max;
    }
    if (min !== undefined) {
      num = num >= min ? num : min;
    }
  }
  return num;
	}
	
	function hammering(input, output, anvilTier, hits) {
		if (anvilTier <= 1) {
			event.custom({
				type: 'vintageimprovements:hammering',
				hammerBlows: clamp(hits+anvilTier-1,1,99),
				ingredients: [{ item: input}],
				results: [{ item: output}],
				anvilBlock: 'tfc:metal/anvil/copper'
			})
		}
		if (anvilTier <= 2) {
			event.custom({
				type: 'vintageimprovements:hammering',
				hammerBlows: clamp(hits+anvilTier-2,1,99),
				ingredients: [{ item: input}],
				results: [{ item: output}],
				anvilBlock: 'tfc:metal/anvil/bronze'
			})
			event.custom({
				type: 'vintageimprovements:hammering',
				hammerBlows: clamp(hits+anvilTier-2,1,99),
				ingredients: [{ item: input}],
				results: [{ item: output}],
				anvilBlock: 'tfc:metal/anvil/black_bronze'
			})
			event.custom({
				type: 'vintageimprovements:hammering',
				hammerBlows: clamp(hits+anvilTier-2,1,99),
				ingredients: [{ item: input}],
				results: [{ item: output}],
				anvilBlock: 'tfc:metal/anvil/bismuth_bronze'
			})
		}
		if (anvilTier <= 3) {
			event.custom({
				type: 'vintageimprovements:hammering',
				hammerBlows: clamp(hits+anvilTier-3,1,99),
				ingredients: [{ item: input}],
				results: [{ item: output}],
				anvilBlock: 'tfc:metal/anvil/wrought_iron'
			})
		}
		if (anvilTier <= 4) {
			event.custom({
				type: 'vintageimprovements:hammering',
				hammerBlows: clamp(hits+anvilTier-4,1,99),
				ingredients: [{ item: input}],
				results: [{ item: output}],
				anvilBlock: 'tfc:metal/anvil/steel'
			})
		}
		if (anvilTier <= 5) {
			event.custom({
				type: 'vintageimprovements:hammering',
				hammerBlows: clamp(hits+anvilTier-5,1,99),
				ingredients: [{ item: input}],
				results: [{ item: output}],
				anvilBlock: 'tfc:metal/anvil/black_steel'
			})
		}
		if (anvilTier <= 6) {
			event.custom({
				type: 'vintageimprovements:hammering',
				hammerBlows: clamp(hits+anvilTier-6,1,99),
				ingredients: [{ item: input}],
				results: [{ item: output}],
				anvilBlock: 'tfc:metal/anvil/red_steel'
			})
			event.custom({
				type: 'vintageimprovements:hammering',
				hammerBlows: clamp(hits+anvilTier-6,1,99),
				ingredients: [{ item: input}],
				results: [{ item: output}],
				anvilBlock: 'tfc:metal/anvil/blue_steel'
			})
		}
		
	}
	hammering('tfc:raw_iron_bloom','tfc:refined_iron_bloom',2,7)
	hammering('tfc:refined_iron_bloom','gtceu:wrought_iron_ingot',2,6)
	
	hammering('kubejs:double_iron_ingot','gtceu:iron_plate',3,6)
	hammering('kubejs:double_wrought_iron_ingot','gtceu:wrought_iron_plate',3,6)
	hammering('kubejs:double_steel_ingot','gtceu:steel_plate',4,6)
	hammering('kubejs:double_copper_ingot','gtceu:copper_plate',1,6)
	hammering('kubejs:double_lead_ingot','gtceu:lead_plate',2,6)
	hammering('kubejs:double_gold_ingot','gtceu:gold_plate',1,6)
	hammering('kubejs:double_rose_gold_ingot','gtceu:rose_gold_plate',1,6)
	hammering('kubejs:double_red_steel_ingot','gtceu:red_steel_plate',6,6)
	hammering('kubejs:double_blue_steel_ingot','gtceu:blue_steel_plate',6,6)
	hammering('kubejs:double_black_steel_ingot','gtceu:black_steel_plate',5,6)
	hammering('kubejs:double_titanium_ingot','gtceu:titanium_plate',1,15)
	hammering('kubejs:double_vanadium_steel_ingot','gtceu:vanadium_steel_plate',1,15)
	hammering('kubejs:double_tin_ingot','gtceu:tin_plate',1,6)
	hammering('kubejs:double_chromium_ingot','gtceu:chromium_plate',1,15)
	hammering('kubejs:double_zinc_ingot','gtceu:zinc_plate',1,6)
	hammering('kubejs:double_silver_ingot','gtceu:silver_plate',1,6)
	hammering('kubejs:double_nickel_ingot','gtceu:nickel_plate',1,6)
	hammering('kubejs:double_brass_ingot','gtceu:brass_plate',1,6)
	//hammering('kubejs:double_bismuth_ingot','gtceu:bismuth_plate',1,6)
	hammering('kubejs:double_bronze_ingot','gtceu:bronze_plate',2,6)
	hammering('kubejs:double_bismuth_bronze_ingot','gtceu:bismuth_bronze_plate',2,6)
	hammering('kubejs:double_black_bronze_ingot','gtceu:black_bronze_plate',2,6)
	hammering('kubejs:double_stainless_steel_ingot','gtceu:stainless_steel_plate',5,6)
	hammering('kubejs:double_aluminium_ingot','gtceu:aluminium_plate',6,6)
	hammering('kubejs:double_invar_ingot','gtceu:invar_plate',4,6)
	hammering('kubejs:double_sterling_silver_ingot','gtceu:sterling_silver_plate',1,6)
	hammering('kubejs:double_tungsten_carbide_ingot','gtceu:tungsten_carbide_plate',1,15)
	hammering('kubejs:double_damascus_steel_ingot','gtceu:damascus_steel_plate',1,15)
	hammering('kubejs:double_cobalt_brass_ingot','gtceu:cobalt_brass_plate',1,15)
	hammering('kubejs:double_ultimet_ingot','gtceu:ultimet_plate',1,15)
	hammering('kubejs:double_tungsten_steel_ingot','gtceu:tungsten_steel_plate',1,15)
	
	hammering('kubejs:double_netherite_ingot','gtceu:netherite_plate',1,15)
	
	hammering('gtceu:high_carbon_red_steel_ingot','gtceu:red_steel_ingot',5,8)
	hammering('gtceu:high_carbon_blue_steel_ingot','gtceu:blue_steel_ingot',5,8)
	hammering('gtceu:high_carbon_black_steel_ingot','gtceu:black_steel_ingot',4,8)
	hammering('gtceu:high_carbon_steel_ingot','gtceu:steel_ingot',3,8)
	hammering('gtceu:pig_iron_ingot','gtceu:high_carbon_steel_ingot',3,8)
	
	function basin_welding(input, output, tier){
		event.recipes.greate.compacting(output, [input, input, 'tfc:powder/flux'])
			.heated()
			.recipeTier(tier)
	}
	basin_welding('minecraft:iron_ingot', 'kubejs:double_iron_ingot', 0)
	basin_welding('minecraft:copper_ingot', 'kubejs:double_copper_ingot', 0)
	basin_welding('minecraft:gold_ingot', 'kubejs:double_gold_ingot', 0)
	
	basin_welding('gtceu:lead_ingot', 'kubejs:double_lead_ingot', 0)
	basin_welding('gtceu:tin_ingot', 'kubejs:double_tin_ingot', 0)
	basin_welding('gtceu:nickel_ingot', 'kubejs:double_nickel_ingot', 0)
	//basin_welding('gtceu:osmium_ingot', 'kubejs:double_osmium_ingot', 0)
	basin_welding('gtceu:silver_ingot', 'kubejs:double_silver_ingot', 0)
	
	basin_welding('gtceu:bronze_ingot', 'kubejs:double_bronze_ingot', 0)
	basin_welding('gtceu:black_bronze_ingot', 'kubejs:double_black_bronze_ingot', 0)
	basin_welding('gtceu:bismuth_bronze_ingot', 'kubejs:double_bismuth_bronze_ingot', 0)
	basin_welding('gtceu:brass_ingot', 'kubejs:double_brass_ingot', 0)
	basin_welding('gtceu:rose_gold_ingot', 'kubejs:double_rose_gold_ingot', 0)
	basin_welding('gtceu:wrought_iron_ingot', 'kubejs:double_wrought_iron_ingot', 0)
	basin_welding('gtceu:steel_ingot', 'kubejs:double_steel_ingot', 0)
	basin_welding('gtceu:red_steel_ingot', 'kubejs:double_red_steel_ingot', 0)
	basin_welding('gtceu:blue_steel_ingot', 'kubejs:double_blue_steel_ingot', 0)
	basin_welding('gtceu:cobalt_brass_ingot', 'kubejs:double_cobalt_brass_ingot', 0)
	basin_welding('gtceu:black_steel_ingot', 'kubejs:double_black_steel_ingot', 0)
	basin_welding('minecraft:netherite_ingot', 'kubejs:double_netherite_ingot', 0)
	basin_welding('gtceu:vanadium_steel_ingot', 'kubejs:double_vanadium_steel_ingot', 0)
	basin_welding('gtceu:chromium_ingot', 'kubejs:double_chromium_ingot', 0)
	basin_welding('gtceu:zinc_ingot', 'kubejs:double_zinc_ingot', 0)
	basin_welding('gtceu:bismuth_ingot', 'kubejs:double_bismuth_ingot', 0)
	basin_welding('gtceu:stainless_steel_ingot', 'kubejs:double_stainless_steel_ingot', 0)
	basin_welding('gtceu:aluminium_ingot', 'kubejs:double_aluminium_ingot', 0)
	basin_welding('gtceu:titanium_ingot', 'kubejs:double_titanium_ingot', 0)
	basin_welding('gtceu:invar_ingot', 'kubejs:double_invar_ingot', 0)
	basin_welding('gtceu:sterling_silver_ingot', 'kubejs:double_sterling_silver_ingot', 0)
	basin_welding('gtceu:tungsten_carbide_ingot', 'kubejs:double_tungsten_carbide_ingot', 0)
	basin_welding('gtceu:tungsten_steel_ingot', 'kubejs:double_tungsten_steel_ingot', 0)
	basin_welding('gtceu:damascus_steel_ingot', 'kubejs:double_damascus_steel_ingot', 0)
	basin_welding('gtceu:ultimet_ingot', 'kubejs:double_ultimet_ingot', 0)
	
	basin_welding('gtceu:iron_plate', 'gtceu:double_iron_plate', 0)
	basin_welding('gtceu:copper_plate', 'gtceu:double_copper_plate', 0)
	basin_welding('gtceu:gold_plate', 'gtceu:double_gold_plate', 0)
	basin_welding('gtceu:tin_plate', 'gtceu:double_tin_plate', 0)
	basin_welding('gtceu:zinc_plate', 'gtceu:double_zinc_plate', 0)
	basin_welding('gtceu:silver_plate', 'gtceu:double_silver_plate', 0)
	basin_welding('gtceu:bronze_plate', 'gtceu:double_bronze_plate', 0)
	basin_welding('gtceu:black_bronze_plate', 'gtceu:double_black_bronze_plate', 0)
	basin_welding('gtceu:bismuth_bronze_plate', 'gtceu:double_bismuth_bronze_plate', 0)
	basin_welding('gtceu:wrought_iron_plate', 'gtceu:double_wrought_iron_plate', 0)
	basin_welding('gtceu:steel_plate', 'gtceu:double_steel_plate', 0)
	basin_welding('gtceu:black_steel_plate', 'gtceu:double_black_steel_plate', 0)
	basin_welding('gtceu:red_steel_plate', 'gtceu:double_red_steel_plate', 0)
	basin_welding('gtceu:blue_steel_plate', 'gtceu:double_blue_steel_plate', 0)
	basin_welding('gtceu:lead_plate', 'gtceu:double_lead_plate', 0)
	basin_welding('gtceu:invar_plate', 'gtceu:double_invar_plate', 0)
	basin_welding('gtceu:rose_gold_plate', 'gtceu:double_rose_gold_plate', 0)
	basin_welding('gtceu:vanadium_steel_plate', 'gtceu:double_vanadium_steel_plate', 0)
	basin_welding('gtceu:chromium_plate', 'gtceu:double_chromium_plate', 0)
	basin_welding('gtceu:nickel_plate', 'gtceu:double_nickel_plate', 0)
	basin_welding('gtceu:brass_plate', 'gtceu:double_brass_plate', 0)
	basin_welding('gtceu:stainless_steel_plate', 'gtceu:double_stainless_steel_plate', 0)
	basin_welding('gtceu:aluminium_plate', 'gtceu:double_aluminium_plate', 0)
	basin_welding('gtceu:titanium_plate', 'gtceu:double_titanium_plate', 0)
	basin_welding('gtceu:sterling_silver_plate', 'gtceu:double_sterling_silver_plate', 0)
	basin_welding('gtceu:netherite_plate', 'gtceu:double_netherite_plate', 0)
	basin_welding('gtceu:tungsten_steel_plate', 'gtceu:double_tungsten_steel_plate', 0)
	basin_welding('gtceu:tungsten_carbide_plate', 'gtceu:double_tungsten_carbide_plate', 0)
	basin_welding('gtceu:cobalt_brass_plate', 'gtceu:double_cobalt_brass_plate', 0)
	basin_welding('gtceu:damascus_steel_plate', 'gtceu:double_damascus_steel_plate', 0)
	basin_welding('gtceu:ultimet_plate', 'gtceu:double_ultimet_plate', 0)
	
	basin_welding('gtceu:iron_rod', 'gtceu:long_iron_rod', 0)
	basin_welding('gtceu:wrought_iron_rod', 'gtceu:long_wrought_iron_rod', 0)
	basin_welding('gtceu:copper_rod', 'gtceu:long_copper_rod', 0)
	basin_welding('gtceu:gold_rod', 'gtceu:long_gold_rod', 0)
	basin_welding('gtceu:tin_rod', 'gtceu:long_tin_rod', 0)
	basin_welding('gtceu:zinc_rod', 'gtceu:long_zinc_rod', 0)
	basin_welding('gtceu:nickel_rod', 'gtceu:long_nickel_rod', 0)
	basin_welding('gtceu:silver_rod', 'gtceu:long_silver_rod', 0)
	basin_welding('gtceu:steel_rod', 'gtceu:long_steel_rod', 0)
	basin_welding('gtceu:black_steel_rod', 'gtceu:long_black_steel_rod', 0)
	basin_welding('gtceu:red_steel_rod', 'gtceu:long_red_steel_rod', 0)
	basin_welding('gtceu:blue_steel_rod', 'gtceu:long_blue_steel_rod', 0)
	basin_welding('gtceu:bronze_rod', 'gtceu:long_bronze_rod', 0)
	basin_welding('gtceu:black_bronze_rod', 'gtceu:long_black_bronze_rod', 0)
	basin_welding('gtceu:bismuth_bronze_rod', 'gtceu:long_bismuth_bronze_rod', 0)
	basin_welding('gtceu:stainless_steel_rod', 'gtceu:long_stainless_steel_rod', 0)
	basin_welding('gtceu:sterling_silver_rod', 'gtceu:long_sterling_silver_rod', 0)
	basin_welding('gtceu:chromium_rod', 'gtceu:long_chromium_rod', 0)
	basin_welding('gtceu:rose_gold_rod', 'gtceu:long_rose_gold_rod', 0)
	basin_welding('gtceu:brass_rod', 'gtceu:long_brass_rod', 0)
	basin_welding('gtceu:vanadium_steel_rod', 'gtceu:long_vanadium_steel_rod', 0)
	basin_welding('gtceu:tungsten_steel_rod', 'gtceu:long_tungsten_steel_rod', 0)
	basin_welding('gtceu:tungsten_carbide_rod', 'gtceu:long_tungsten_carbide_rod', 0)
	basin_welding('gtceu:aluminium_rod', 'gtceu:long_aluminium_rod', 0)
	basin_welding('gtceu:invar_rod', 'gtceu:long_invar_rod', 0)
	basin_welding('gtceu:cobalt_bras_rod', 'gtceu:long_cobalt_brass_rod', 0)
	basin_welding('gtceu:titanium_rod', 'gtceu:long_titanium_rod', 0)
	basin_welding('gtceu:ultimet_rod', 'gtceu:long_ultimet_rod', 0)
	basin_welding('gtceu:lead_rod', 'gtceu:long_lead_rod', 0)
	basin_welding('gtceu:damascus_steel_rod', 'gtceu:long_damascus_rod', 0)
	
	//event.recipes.create.cutting(['gtceu:aluminium_rod', 'gtceu:aluminium_rod'], 'gtceu:long_aluminium_rod')
	function lathe(input, output, count, time){
		event.custom({
			type: 'vintageimprovements:turning',
			ingredients: [{item: input}],
			results: [{item: output, count: count}],
			processingTime: time
		})
	}
	
	
	lathe('gtceu:copper_bolt','gtceu:copper_screw',1,100)
	lathe('gtceu:iron_bolt','gtceu:iron_screw',1,100)
	lathe('gtceu:wrought_iron_bolt','gtceu:wrought_iron_screw',1,100)
	lathe('gtceu:tin_bolt','gtceu:tin_screw',1,100)
	lathe('gtceu:zinc_bolt','gtceu:zinc_screw',1,100)
	lathe('gtceu:gold_bolt','gtceu:gold_screw',1,100)
	lathe('gtceu:silver_bolt','gtceu:silver_screw',1,100)
	lathe('gtceu:lead_bolt','gtceu:lead_screw',1,100)
	lathe('gtceu:aluminium_bolt','gtceu:aluminium_screw',1,100)
	lathe('gtceu:chromium_bolt','gtceu:chromium_screw',1,100)
	lathe('gtceu:sterling_silver_bolt','gtceu:sterling_silver_screw',1,100)
	lathe('gtceu:stainless_steel_bolt','gtceu:stainless_steel_screw',1,100)
	lathe('gtceu:steel_bolt','gtceu:steel_screw',1,100)
	lathe('gtceu:red_steel_bolt','gtceu:red_steel_screw',1,100)
	lathe('gtceu:blue_steel_bolt','gtceu:blue_steel_screw',1,100)
	lathe('gtceu:black_steel_bolt','gtceu:black_steel_screw',1,100)
	lathe('gtceu:vanadium_steel_bolt','gtceu:vanadium_steel_screw',1,100)
	lathe('gtceu:tungsten_steel_bolt','gtceu:tungsten_steel_screw',1,100)
	lathe('gtceu:tungsten_carbide_bolt','gtceu:tungsten_carbide_screw',1,100)
	lathe('gtceu:brass_bolt','gtceu:brass_screw',1,100)
	lathe('gtceu:bronze_bolt','gtceu:bronze_screw',1,100)
	lathe('gtceu:black_bronze_bolt','gtceu:black_bronze_screw',1,100)
	lathe('gtceu:bismuth_bronze_bolt','gtceu:bismuth_bronze_screw',1,100)
	lathe('gtceu:invar_bolt','gtceu:invar_screw',1,100)
	lathe('gtceu:cobalt_brass_bolt','gtceu:cobalt_brass_screw',1,100)
	lathe('gtceu:damascus_steel_bolt','gtceu:damascus_steel_screw',1,100)
	//lathe('gtceu:nickel_bolt','gtceu:nickel_screw',1,100)
	lathe('gtceu:titanium_bolt','gtceu:titanium_screw',1,100)
	lathe('gtceu:ultimet_bolt','gtceu:ultimet_screw',1,100)
	lathe('gtceu:rose_gold_bolt','gtceu:rose_gold_screw',1,100)
	
	
	lathe('minecraft:copper_ingot','gtceu:copper_rod',2,100)
	lathe('minecraft:iron_ingot','gtceu:iron_rod',2,100)
	lathe('minecraft:gold_ingot','gtceu:gold_rod',2,100)
	lathe('gtceu:wrought_iron_ingot','gtceu:wrought_iron_rod',2,100)
	lathe('gtceu:tin_ingot','gtceu:tin_rod',2,100)
	lathe('gtceu:zinc_ingot','gtceu:zinc_rod',2,100)
	lathe('gtceu:lead_ingot','gtceu:lead_rod',2,100)
	lathe('gtceu:silver_ingot','gtceu:silver_rod',2,100)
	//lathe('gtceu:nickel_ingot','gtceu:nickel_rod',2,100)
	lathe('gtceu:rose_gold_ingot','gtceu:rose_gold_rod',2,100)
	lathe('gtceu:sterling_silver_ingot','gtceu:sterling_silver_rod',2,100)
	lathe('gtceu:brass_ingot','gtceu:brass_rod',2,100)
	lathe('gtceu:cobalt_brass_ingot','gtceu:cobalt_brass_rod',2,100)
	lathe('gtceu:bronze_ingot','gtceu:bronze_rod',2,100)
	lathe('gtceu:bismuth_bronze_ingot','gtceu:bismuth_bronze_rod',2,100)
	lathe('gtceu:black_bronze_ingot','gtceu:black_bronze_rod',2,100)
	lathe('gtceu:steel_ingot','gtceu:steel_rod',2,100)
	lathe('gtceu:black_steel_ingot','gtceu:black_steel_rod',2,100)
	lathe('gtceu:red_steel_ingot','gtceu:red_steel_rod',2,100)
	lathe('gtceu:blue_steel_ingot','gtceu:blue_steel_rod',2,100)
	lathe('gtceu:stainless_steel_ingot','gtceu:stainless_steel_rod',2,100)
	lathe('gtceu:tungsten_steel_ingot','gtceu:tungsten_steel_rod',2,100)
	lathe('gtceu:tungsten_carbide_ingot','gtceu:tungsten_carbide_rod',2,100)
	lathe('gtceu:vanadium_steel_ingot','gtceu:vanadium_steel_rod',2,100)
	lathe('gtceu:damascus_steel_ingot','gtceu:damascus_steel_rod',2,100)
	lathe('gtceu:aluminium_ingot','gtceu:aluminium_rod',2,100)
	lathe('gtceu:titanium_ingot','gtceu:titanium_rod',2,100)
	lathe('gtceu:ultimet_ingot','gtceu:ultimet_rod',2,100)
	
	function extruder(input, output, count, mold, time){
		event.custom({
				type: 'vintageimprovements:curving',
				ingredients: [{item: input}],
				itemAsHead: mold,
				results: [{item: output, count: count}],
				processingTime: time
			})
	}
	
	extruder('minecraft:copper_ingot', 'gtceu:copper_ring', 2, 'gtceu:ring_extruder_mold', 100)
	extruder('minecraft:iron_ingot', 'gtceu:iron_ring', 2, 'gtceu:ring_extruder_mold', 100)
	extruder('minecraft:iron_ingot', 'gtceu:small_iron_gear', 1, 'gtceu:small_gear_extruder_mold', 100)
	extruder('minecraft:gold_ingot', 'gtceu:gold_ring', 2, 'gtceu:ring_extruder_mold', 100)
	
	extruder('gtceu:silver_ingot', 'gtceu:silver_ring', 2, 'gtceu:ring_extruder_mold', 100)
	extruder('gtceu:steel_ingot', 'gtceu:steel_ring', 2, 'gtceu:ring_extruder_mold', 100)
	extruder('gtceu:stainless_steel_ingot', 2, 'gtceu:stainless_steel_ring', 'gtceu:ring_extruder_mold', 100)
	extruder('gtceu:tungsten_steel_ingot', 2, 'gtceu:tungsten_steel_ring', 'gtceu:ring_extruder_mold', 100)
	
	extruder('gtceu:tin_ingot', 'gtceu:tin_ring', 2, 'gtceu:ring_extruder_mold', 100)
	extruder('gtceu:chromium_ingot', 'gtceu:chromium_ring', 2, 'gtceu:ring_extruder_mold', 100)
	
	extruder('gtceu:bronze_ingot', 'gtceu:bronze_ring', 2, 'gtceu:ring_extruder_mold', 100)
	extruder('gtceu:lead_ingot', 'gtceu:lead_ring', 2, 'gtceu:ring_extruder_mold', 100)
	extruder('gtceu:aluminium_ingot', 'gtceu:aluminium_ring', 2, 'gtceu:ring_extruder_mold', 100)
	extruder('gtceu:titanium_ingot', 'gtceu:titanium_ring', 2, 'gtceu:ring_extruder_mold', 100)
	extruder('gtceu:zinc_ingot', 'gtceu:zinc_ring', 2, 'gtceu:ring_extruder_mold', 100)
	extruder('gtceu:wrought_iron_ingot', 'gtceu:wrought_iron_ring', 2, 'gtceu:ring_extruder_mold', 100)
	extruder('gtceu:rose_gold_ingot', 'gtceu:rose_gold_ring', 2, 'gtceu:ring_extruder_mold', 100)

	extruder('gtceu:dry_mdf_composite_dust', 'kubejs:formed_mdf_composite', 1, 'gtceu:plate_extruder_mold', 100)


	extruder('gtceu:aluminium_ingot', 'gtceu:small_aluminium_gear', 1, 'gtceu:small_gear_extruder_mold', 100)
	extruder('gtceu:titanium_ingot', 'gtceu:small_titanium_gear', 1, 'gtceu:small_gear_extruder_mold', 100)
	extruder('gtceu:bronze_ingot', 'gtceu:small_bronze_gear', 1, 'gtceu:small_gear_extruder_mold', 100)
	extruder('gtceu:stainless_steel_ingot', 'gtceu:small_stainless_steel_gear', 1, 'gtceu:small_gear_extruder_mold', 100)
	extruder('gtceu:steel_ingot', 'gtceu:small_steel_gear', 1, 'gtceu:small_gear_extruder_mold', 100)
	extruder('gtceu:tungsten_steel_ingot', 'gtceu:small_tungsten_steel_gear', 1, 'gtceu:small_gear_extruder_mold', 100)
	extruder('gtceu:tungsten_carbide_ingot', 'gtceu:small_tungsten_carbide_gear', 1, 'gtceu:small_gear_extruder_mold', 100)
	
	
	event.shaped('create:precision_mechanism', ['ABC','DEF','GHI'],
	{
		A: 'gtceu:steel_screw',
		B: 'tfc:brass_mechanisms',  
		C: '#gtceu:tools/crafting_screwdrivers',
		D: 'gtceu:small_iron_gear',
		E: 'gtceu:iron_spring',
		F: 'gtceu:small_bronze_gear',
		G: '#gtceu:tools/crafting_wrenches',
		H: 'gtceu:gold_plate',
		I: '#gtceu:tools/crafting_wire_cutters'
		
	}
	)
}
	