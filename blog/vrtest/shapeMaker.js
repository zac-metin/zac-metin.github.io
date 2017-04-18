var gridSize = 100,
shapeMaxSize = 8,
shapeQuantity = 111;
var sCanvas = document.querySelector('#shapeCanvas');
document.querySelector('a-scene').addEventListener('render-target-loaded', generateShapes());
document.querySelector('a-scene').addEventListener('click', regenerate());
function generateShapes(){
for (var i = 0; i < shapeQuantity; i++) {
var shapeRandomizer = Math.floor(Math.random()*6+1);
if (shapeRandomizer==1){makeBox();}
else if (shapeRandomizer==2){makeSphere();}
else if (shapeRandomizer==3){makeTetrahedron();}
else if (shapeRandomizer==4){makeTorus();}
else if (shapeRandomizer==5){makeIcosahedron();}
else if (shapeRandomizer==6){makeSky();}
}
};

function regenerate()
{
  generateShapes();
};

function randomColour() {
    var color = '#' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    return color;
};
function makeBox(){
          box = document.createElement('a-box');
          sCanvas.appendChild(box);
          box.setAttribute('color', randomColour());
          box.setAttribute('width', Math.random() * shapeMaxSize);
          box.setAttribute('height', Math.random() * shapeMaxSize);
          box.setAttribute('depth', Math.random() * shapeMaxSize);
          box.setAttribute('position', ((Math.random() * gridSize) - (Math.random() * gridSize)) + ' ' + ((Math.random() * gridSize) - (Math.random() * gridSize)) + ' ' + ((Math.random() * gridSize) - (Math.random() * gridSize)));
          
}
function makeSphere(){
          sphere = document.createElement('a-sphere');
          sCanvas.appendChild(sphere);
          sphere.setAttribute('color', randomColour());
          sphere.setAttribute('radius', Math.random() * shapeMaxSize);
          sphere.setAttribute('position', ((Math.random() * gridSize) - (Math.random() * gridSize)) + ' ' + ((Math.random() * gridSize) - (Math.random() * gridSize)) + ' ' + ((Math.random() * gridSize) - (Math.random() * gridSize)));
}
function makeTetrahedron(){
          tetrahedron = document.createElement('a-tetrahedron');
          sCanvas.appendChild(tetrahedron);
          tetrahedron.setAttribute('color', randomColour());
          tetrahedron.setAttribute('radius', Math.random() * shapeMaxSize);
          tetrahedron.setAttribute('position', ((Math.random() * gridSize) - (Math.random() * gridSize)) + ' ' + ((Math.random() * gridSize) - (Math.random() * gridSize)) + ' ' + ((Math.random() * gridSize) - (Math.random() * gridSize)));
}
function makeIcosahedron(){
          icosahedron = document.createElement('a-icosahedron');
          sCanvas.appendChild(icosahedron);
          icosahedron.setAttribute('color', randomColour());
          icosahedron.setAttribute('radius', Math.random() * shapeMaxSize);
          icosahedron.setAttribute('position', ((Math.random() * gridSize) - (Math.random() * gridSize)) + ' ' + ((Math.random() * gridSize) - (Math.random() * gridSize)) + ' ' + ((Math.random() * gridSize) - (Math.random() * gridSize)));
}
function makeTorus(){
          torus = document.createElement('a-torus');
          sCanvas.appendChild(torus);
          torus.setAttribute('color', randomColour());
          torus.setAttribute('radius', Math.random() * shapeMaxSize);
          torus.setAttribute('position', ((Math.random() * gridSize) - (Math.random() * gridSize)) + ' ' + ((Math.random() * gridSize) - (Math.random() * gridSize)) + ' ' + ((Math.random() * gridSize) - (Math.random() * gridSize)));
}
function makeSky(){
          sky = document.createElement('a-sky');
          sCanvas.appendChild(sky);
          sky.setAttribute('color', randomColour());
}
