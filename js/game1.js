var game = new Phaser.Game(800, 600, Phaser.AUTO,'',{
    preload: preload,
    create: create,
    render: render,
    update: update
});


function preload() {
    game.load.spritesheet('personagem', 'sprites/dude.png', 32, 48);
}

function create() {
    game.stage.backgroundColor = "#09F";

    game.input.mouse.capture = true;

}

function render() {
    game.debug.text("Botão Esquerdo: " + game.input.activePointer.leftButton.isDown, 320, 120);

    game.debug.text("Botão Direito: " + game.input.activePointer.rightButton.isDown, 320, 220);
    
}

function update() {
    if(game.input.activePointer.leftButton){
        console.log('Atirar');
    }
    
}
