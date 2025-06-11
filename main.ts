player.onChat("run", function () {
	
})
player.onItemInteracted(IRON_SHOVEL, function () {
    mobs.spawn(CHICKEN, pos(5, 0, 0))
    mobs.spawn(LIGHTNING_BOLT, pos(5, 0, 0))
})
