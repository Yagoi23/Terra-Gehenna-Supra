const RootsRecipe = (event) => {
	event.shaped('rootsclassic:altar', ['ABA','CDC','EFG'],
	{
		A: 'rootsclassic:verdant_sprig',
		B: '#minecraft:flowers',  
		C: '#tfc:rock/smooth',
		D: 'minecraft:gold_block',
		E: '#gtceu:tools/crafting_hammers',
		F: '#tfc:rock/chiseled_bricks',
		G: '#gtceu:tools/crafting_files'
		
	})
	event.shaped('rootsclassic:mundane_standing_stone', [' B ','ACA','ABA'],
	{
		A: 'tfc:rock/smooth/gabbro',
		B: 'tfc:rock/bricks/gabbro',  
		C: 'bloodmagic:largebloodstonebrick'
		
	})
	event.shaped('bloodmagic:altar', ['A A','BCB','BDB'],
	{
		A: 'gtceu:steel_ingot',
		B: 'tfc:rock/smooth/gabbro',  
		C: 'hexerei:blood_bottle',
		D: 'hexerei:blood_sigil'
		
	})
	
}