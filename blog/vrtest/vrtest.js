document.querySelector('a-scene').addEventListener('render-target-loaded', function () {
var MAP_SIZE = 100,
  PLATFORM_SIZE = 5,
  NUM_PLATFORMS = 50;
var platformsEl = document.querySelector('#platforms');
var v, box;
for (var i = 0;  i < NUM_PLATFORMS; i++) {
v = {
  x: (Math.floor(Math.random() * MAP_SIZE) - PLATFORM_SIZE) * PLATFORM_SIZE,
  y: (Math.floor(Math.random() * MAP_SIZE)                ) * PLATFORM_SIZE + PLATFORM_SIZE / 2,
  z: (Math.floor(Math.random() * MAP_SIZE) - PLATFORM_SIZE) * PLATFORM_SIZE
};
box = document.createElement('a-box');
platformsEl.appendChild(box);
box.setAttribute('color', '#39BB82');
box.setAttribute('width', PLATFORM_SIZE);
box.setAttribute('height', PLATFORM_SIZE);
box.setAttribute('depth', PLATFORM_SIZE);
box.setAttribute('position', v.x + ' ' + v.y + ' ' + v.z);
box.setAttribute('static-body', '');
}
console.info('Platforms loaded.');
});
