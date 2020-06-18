const move = new Moveable(document.body, {
  target: document.querySelector(".root"),
  draggable: false,
  scalable: true,
  resizable: false,
  keepRatio: false,
  rotatable: false,
  warpable:false,
});

move.on("drag", ({ target, transform }) => {
  target.style.transform = transform;
});

move.on("resize", ({ target, width, height }) => {
  target.style.width = width + "px";
  target.style.height = height + "px";
});

move.on("scale", ({ target, transform }) => {
  target.style.transform = transform;
  console.log(target)
});

move.on("rotate", ({ target, transform }) => {
  target.style.transform = transform;
});

 move.on("warp", ({ target, transform, }) => {
  target.style.transform = transform;
});

