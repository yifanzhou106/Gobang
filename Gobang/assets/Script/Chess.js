// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        X: 0,
        Y: 0,
        id: 0,
        tag: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var self = this;

        this.node.on(cc.Node.EventType.TOUCH_END,function(event){
            self.game.touchChess = self;
            cc.log(self.X);
            cc.log(self.Y);
            cc.log(self.id);
            if(self.game.gameState ===  'black' && self.getComponent(cc.Sprite).spriteFrame === null){
                self.getComponent(cc.Sprite).spriteFrame = self.game.blackSpriteFrame;//下子后添加棋子图片使棋子显示
                self.game.judgeOver();
                if(self.game.gameState == 'white'){
                    self.game.scheduleOnce(function(){self.game.ai()},1);//延迟一秒电脑下棋
                }
            }
        });
    },

    start () {

    },

    // update (dt) {},
});
