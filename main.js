var canvas= new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
playerx=10;
playery=10;
player_object="";
function Player_Update(){
fabric.Image.fromURL("hahaha.gif",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:playery,
        left:playerx
    });
    canvas.add(player_object);

});
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(block_image_object);
    });
}
