ServerEvents.recipes(event => {
	Removal(event)
	RecipeMain(event)
})

ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:large_features/deep_ocean', 'molten_vents:aquatic_caminite_vent')
})

ServerEvents.tags('item', event => {itemTagsMain(event)})
ServerEvents.tags('block', event => {blockTagsMain(event)})
ServerEvents.tags('fluid', event => {fluidTagsMain(event)})

ServerEvents.tags("worldgen/biome", (event) => {
  /*event.add("malum:has_structure/weeping_well_biomes", [
	"tfc:lowlands", 
	"tfc:low_canyons", 
	"tfc:plains", 
	"tfc:plateau",
	"tfc:rolling_hills", 
	"tfc:hills",
	"tfc:badlands",
	"tfc:canyons",
	"tfc:mountains",
	"tfc:old_mountains"])*/
	event.add("minecraft:has_structure/weeping_well", [
	"tfc:lowlands", 
	"tfc:low_canyons", 
	"tfc:plains", 
	"tfc:plateau",
	"tfc:rolling_hills", 
	"tfc:hills",
	"tfc:badlands",
	"tfc:canyons",
	"tfc:mountains",
	"tfc:old_mountains"])
})