GTCEuStartupEvents.registry("gtceu:material", (event) => {
  PrimitiveMetals(event)
  MysticMetals(event)
  Ore(event)
  EmbersMat(event)
  ViralIncubationMat(event)
  ElementalMat(event)
  IndustrialMetal(event)
  StoneDusts(event)
})

StartupEvents.registry("item", (event) => {
  ItemRegistry(event)
  DoubleIngots(event)
  Singularity(event)
  StackedPlates(event)
})

StartupEvents.registry('block', event => {
	BlockRegistry(event)
	
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	RecipeTypeRegistry(event)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    MachineRegistry(event)
})



StartupEvents.registry('fluid', event => {
  FluidRegistry(event)
  
})