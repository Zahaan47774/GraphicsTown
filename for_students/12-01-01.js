/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as SimpleObjects from "../libs/CS559-Framework/SimpleObjects.js";
let mydiv = document.getElementById("div1");
let bumps = new T.TextureLoader().load("./images/dots-bump.png");
let ct = new T.CubeTextureLoader().load([
    './images/left.png',
    './images/bottom.png',
    './images/top.png',
    './images/right.png',
    './images/back.png',
    './images/front.png',
  ]);
let world = new GrWorld({groundplane: false,  width: mydiv ? 600 : 800, where: mydiv });
world.scene.background = ct;
let shaderMat = new T.MeshStandardMaterial({color:"white",bumpMap:bumps, side:T.DoubleSide, envMap:ct, metalness:1.0, roughness:0});
let sph = new SimpleObjects.GrSphere({x:-2,y:1, material:shaderMat});
let sqh = new SimpleObjects.GrSquareSign({x:2,y:1,size:1,material:shaderMat});
world.add(sph);
world.add(sqh);
world.go();

