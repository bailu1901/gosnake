cc.game.onStart = function(){
    cc.view.setDesignResolutionSize(960, 480, cc.ResolutionPolicy.SHOW_ALL);
	cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new MainMenuScene());
        //cc.director.runScene(new GameScene());
    }, this);
};
cc.game.run();