const CraftIronChests = (event) => {
	event.custom({
		"type": "embers:alchemy",
		"aspects": [
			{"tag": "embers:aspectus/copper"},
			{"tag": "embers:aspectus/iron"}
		],
		"inputs": [
			{"tag": "forge:plates/copper"},
			{"tag": "forge:plates/copper"},
			{"tag": "forge:plates/copper"},
			{"tag": "forge:ingots/copper"}
		],
		"output": {"item": "ironchest:copper_chest"},
		"tablet": {"tag": "forge:chests"}
	})
	event.custom({
		"type": "embers:alchemy",
		"aspects": [
			{"tag": "embers:aspectus/lead"},
			{"tag": "embers:aspectus/iron"}
		],
		"inputs": [
			{"tag": "forge:plates/iron"},
			{"tag": "forge:plates/iron"},
			{"tag": "forge:plates/iron"},
			{"tag": "forge:ingots/iron"}
		],
		"output": {"item": "ironchest:iron_chest"},
		"tablet": {"item": "ironchest:copper_chest"}
	})
	event.custom({
		"type": "embers:alchemy",
		"aspects": [
			{"tag": "embers:aspectus/copper"},
			{"tag": "embers:aspectus/lead"}
		],
		"inputs": [
			{"tag": "forge:plates/gold"},
			{"tag": "forge:plates/gold"},
			{"tag": "forge:plates/gold"},
			{"tag": "forge:ingots/gold"}
		],
		"output": {"item": "ironchest:gold_chest"},
		"tablet": {"item": "ironchest:iron_chest"}
	})
	event.custom({
		"type": "embers:alchemy",
		"aspects": [
			{"tag": "embers:aspectus/silver"},
			{"tag": "embers:aspectus/lead"}
		],
		"inputs": [
			{"tag": "forge:plates/diamond"},
			{"tag": "forge:plates/diamond"},
			{"tag": "forge:plates/diamond"},
			{"tag": "forge:exquisite_gems/diamond"}
		],
		"output": {"item": "ironchest:diamond_chest"},
		"tablet": {"item": "ironchest:gold_chest"}
	})
	event.custom({
		"type": "embers:alchemy",
		"aspects": [
			{"tag": "embers:aspectus/silver"},
			{"tag": "embers:aspectus/dawnstone"}
		],
		"inputs": [
			{"tag": "forge:obsidian"},
			{"tag": "forge:obsidian"},
			{"tag": "forge:ingots/refined_obsidian"},
			{"tag": "forge:ingots/refined_obsidian"}
		],
		"output": {"item": "ironchest:obsidian_chest"},
		"tablet": {"item": "ironchest:diamond_chest"}
	})
}