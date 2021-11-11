/*jshint esversion: 6 */
// @ts-check

/**
 * Graphics Town Framework - "Main" File
 *
 * This is the main file - it creates the world, populates it with
 * objects and behaviors, and starts things running
 *
 * The initial distributed version has a pretty empty world.
 * There are a few simple objects thrown in as examples.
 *
 * It is the students job to extend this by defining new object types
 * (in other files), then loading those files as modules, and using this
 * file to instantiate those objects in the world.
 */

 import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { WorldUI } from "../libs/CS559-Framework/WorldUI.js";
import { CircularTrack } from "../examples/track.js";

import {
    Car,
    Truck,
    HotAir
  } from "./CarAndTruck.js";
  import {
    GrBuilding1,
    GrBuilding2,
    GrBuilding3,
    Tree,
    Road,
    SkyScraper,
    Aquarium
  } from "./buildings.js";
  import {
    GrSimpleSwing,
    GrColoredRoundabout,
    GrCarousel
  } from "./08-08-parkobjects.js";

/**m
 * The Graphics Town Main -
 * This builds up the world and makes it go...
 */

// make the world
let world = new GrWorld({
    width: 800,
    height: 600,
    groundplanesize: 40 // make the ground plane big enough for a world of stuff
});
let ct = new T.CubeTextureLoader()
.setPath('./images/skybox/')
.load( [
        'rainbow_rt.png',
        'rainbow_lf.png',
        'rainbow_up.png',
        'rainbow_dn.png',
        'rainbow_bk.png',
        'rainbow_ft.png'
    ]);
world.scene.background = ct;

// while making your objects, be sure to identify some of them as "highlighted"

function shift(num, grobj, x, z,y) {
    if(num == 1){
        grobj.objects[0].rotateY(Math.PI / 2);
    }
    if(num == 2){
        grobj.objects[0].rotateY(Math.PI);
    }
    if(num == 3){
        grobj.objects[0].rotateY(Math.PI * 1.5);
    }
    grobj.objects[0].translateX(x);
    grobj.objects[0].translateZ(z);
    grobj.objects[0].translateY(y);
    grobj.objects[0].rotateY(4.7);
    return grobj;
  }
  for(let j = 0; j<4;j++){
      let tt = shift(j,new Road(), 0,-33,0);
      if(j<2 ){
      let t1 = shift(j,new Road(), 0,0,0);
      world.add(t1);
      }
      world.add(tt);
      
    for(let i = 0; i<10;i++){
        let t0;
        let t6 = shift(j,new Tree(), (i-4.7)*7.5,-40,0.7);
        if(i%3 == 0){
            t0 = shift(j,new GrBuilding1(Math.floor(Math.random() * 3)), (i-4)*7.5,-40,0);
        }
        if(i%3 == 1){
            t0 = shift(j,new GrBuilding2(Math.floor(Math.random() * 3)), (i-4)*7.5,-40,0);
        }
        if(i%3 == 2){
            t0 = shift(j,new GrBuilding3(Math.floor(Math.random() * 3)), (i-4)*7.5,-40,0);
        }
        world.add(t6);
        world.add(t0);
    }
}
  let t1 = new Car();
  
  world.add(t1);
  let tt = new Truck();
  world.add(tt);

let skyscrapers = new SkyScraper();
world.add(skyscrapers);
let roundabout_2 = new GrColoredRoundabout({ x: 17,z:25  });
world.add(roundabout_2);
let roundabout = new GrColoredRoundabout({ x: 25,z:15  });
world.add(roundabout);

let swing_2 = new GrSimpleSwing({ x: 15,z:20 });
world.add(swing_2);
let swing = new GrSimpleSwing({ x: 20,z:20 });
world.add(swing);
let swing_3 = new GrSimpleSwing({ x: 15,z:15 });
world.add(swing_3);
let swing4 = new GrSimpleSwing({ x: 20,z:15 });
world.add(swing4);
let carousel = new GrCarousel({x:25,z:25});
world.add(carousel);
let carousel2 = new GrCarousel({x:9,z:25});
world.add(carousel2);
let aquarium = shift(0,new Aquarium(0), -15,15,0.2);
let aquarium2 = shift(0,new Aquarium(2), -15,-23,0.2);
let aquarium3 = shift(0,new Aquarium(1), 23,-23,0.2);
world.add(aquarium);
world.add(aquarium2);
world.add(aquarium3);
let hotairballoon = shift(0,new HotAir(),-11,0,10);
world.add(hotairballoon);
let hotairballoon2 = shift(0,new HotAir(),9,0,10);
world.add(hotairballoon2);
let track = new CircularTrack();
  world.add(track);
///////////////////////////////////////////////////////////////
// because I did not store the objects I want to highlight in variables, I need to look them up by name
// This code is included since it might be useful if you want to highlight your objects here
function highlight(obName) {
    console.log(world.objects);
    const toHighlight = world.objects.find(ob => ob.name === obName);
    if (toHighlight) {
        toHighlight.highlighted = true;
    } else {
        throw `no object named ${obName} for highlighting!`;
    }
}
// of course, the student should highlight their own objects, not these
highlight("Skyscraper-0");
highlight("Cottage-1");
highlight("Carousel-1");
highlight("Entertainment-1");
highlight("Hot air Ballon-1");
///////////////////////////////////////////////////////////////
// build and run the UI
// only after all the objects exist can we build the UI
// @ts-ignore       // we're sticking a new thing into the world

world.ui = new WorldUI(world);
// now make it go!
world.go();
