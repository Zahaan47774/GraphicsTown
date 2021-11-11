/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { WorldUI } from "../libs/CS559-Framework/WorldUI.js";
import { OBJLoader } from "../libs/CS559-Three/examples/jsm/loaders/OBJLoader.js";
// define your buildings here - remember, they need to be imported
// into the "main" program
let simpleTreeCount = 0;
let simpleHouseCount = 0;
let simpleRoadCount =0;
let entertainmentCount = 0;
let skyCtr = 0;
 export class GrBuilding1 extends GrObject {
    constructor(num) {
      let geometry = new T.Geometry();
      //
      geometry.vertices.push(new T.Vector3(0, 0, 0));
      geometry.vertices.push(new T.Vector3(0, 0, 3));
      geometry.vertices.push(new T.Vector3(3, 0, 0));
      geometry.vertices.push(new T.Vector3(3, 0, 3));

      geometry.vertices.push(new T.Vector3(0, 2, 0));
      geometry.vertices.push(new T.Vector3(0, 2, 3));
      geometry.vertices.push(new T.Vector3(3, 2, 0));
      geometry.vertices.push(new T.Vector3(3, 2, 3));

      geometry.faceVertexUvs = [[]];
      let f1 = new T.Face3( 1,0, 2);
      geometry.faces.push(f1);
      geometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(0, 1),
        new T.Vector2(1,1),
      ]);
      let f2 = new T.Face3(1,3, 2);
      geometry.faces.push(f2);
      geometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let f3 = new T.Face3(0, 1, 5);
      geometry.faces.push(f3);
      geometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(0, 1),
        new T.Vector2(1,1),
      ]);
      let f4 = new T.Face3(0, 4, 5);
      geometry.faces.push(f4);
      geometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let f5 = new T.Face3(3,1, 5);
      geometry.faces.push(f5);
      geometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(0, 1),
        new T.Vector2(1,1),
      ]);
      let f6 = new T.Face3(3, 7, 5);
      geometry.faces.push(f6);
      geometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let f7 = new T.Face3(2,3, 7);
      geometry.faces.push(f7);
      geometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(0, 1),
        new T.Vector2(1,1),
      ]);
      let f8 = new T.Face3(2,6, 7);
      geometry.faces.push(f8);
      geometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let f9 = new T.Face3( 4,6, 2);
      geometry.faces.push(f9);
      geometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(0, 1),
        new T.Vector2(1,1),
      ]);
      let f10 = new T.Face3(4,0,2);
      geometry.faces.push(f10);
      geometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);

      
      geometry.computeFaceNormals();
      geometry.uvsNeedUpdate = true;
      //
      let tl;
      if(num == 0){
      tl = new T.TextureLoader().load("./images/brick.png");
      }
      else if(num == 2){
        tl = new T.TextureLoader().load("./images/whiteBrick.jpg");
        }
      else{
        tl = new T.TextureLoader().load("./images/coolBrick.jpg");
        
      }
      let material = new T.MeshStandardMaterial({ map: tl, roughness: 0.75, side: T.DoubleSide });
      let mesh = new T.Mesh(geometry, material);
      var window = new T.MeshLambertMaterial( { color: 'cyan' } );
      var frame = new T.MeshLambertMaterial( { color: 'white' } );
      let geometry1 = new T.BoxGeometry( 0.5, 0.5, 0.01 );
      let geometry2 = new T.BoxGeometry( 0.6, 0.6, 0 );
      var windowobj5 = new T.Mesh( geometry1, window );
      var windowobj6 = new T.Mesh( geometry2, frame );
      var windowobj7 = new T.Mesh( geometry1, window );
      var windowobj8 = new T.Mesh( geometry2, frame );
      var windowG = new T.Group();
      windowG.add( windowobj5 );
      windowG.add( windowobj6 );
      windowobj5.translateX(2.5);
      windowobj6.translateX(2.5);
      windowobj5.rotateY(1.5);
      windowobj6.rotateY(1.5);
      windowobj5.translateX(-0.5);
      windowobj6.translateX(-0.5);
      windowG.add( windowobj7 );
      windowG.add( windowobj8 );
      windowobj7.translateX(2.5);
      windowobj8.translateX(2.5);
      windowobj7.rotateY(1.5);
      windowobj8.rotateY(1.5);
      windowobj7.translateX(-2.3);
      windowobj8.translateX(-2.3);
      windowobj7.translateZ(0.1);
      windowobj8.translateZ(0.1);

      let kgeometry = new T.Geometry();
      //
      kgeometry.vertices.push(new T.Vector3(0, 0, 0));
      kgeometry.vertices.push(new T.Vector3(0, 0, 3));
      kgeometry.vertices.push(new T.Vector3(3, 0, 0));
      kgeometry.vertices.push(new T.Vector3(3, 0, 3));
      kgeometry.vertices.push(new T.Vector3(0.7, 1, 1.5));
      kgeometry.vertices.push(new T.Vector3(2.3, 1, 1.5));


      kgeometry.faceVertexUvs = [[]];
      let k1 = new T.Face3( 1,0, 2);
      kgeometry.faces.push(k1);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(0, 1),
        new T.Vector2(1,1),
      ]);
      let k2 = new T.Face3(1,3, 2);
      kgeometry.faces.push(k2);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k3 = new T.Face3(1,4, 0);
      kgeometry.faces.push(k3);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k4 = new T.Face3(2,5, 3);
      kgeometry.faces.push(k4);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k5 = new T.Face3(3,5, 4);
      kgeometry.faces.push(k5);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k6 = new T.Face3(3,1,4);
      kgeometry.faces.push(k6);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k7 = new T.Face3(0,4, 5);
      kgeometry.faces.push(k7);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k8 = new T.Face3(0,2,5);
      kgeometry.faces.push(k8);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);

      
      kgeometry.computeFaceNormals();
      kgeometry.uvsNeedUpdate = true;
      //
      let kl;
      kl = new T.TextureLoader().load("./images/roof1.jpg");
      
      let kmaterial = new T.MeshStandardMaterial({ map: kl, roughness: 0.75, side: T.DoubleSide });
      let kmesh = new T.Mesh(kgeometry, kmaterial);
      
      var door = new T.MeshLambertMaterial( { color: 'goldenrod' } );
      var doorFrame = new T.MeshLambertMaterial( { color: 'black' } );
      let doorgeometry1 = new T.BoxGeometry( 0.5, 0.8, 0.01 );
      var doorObj = new T.Mesh( doorgeometry1, door );
      let doorgeometry2 = new T.BoxGeometry( 0.6, 0.9, 0 );
      var doorobj2 = new T.Mesh( doorgeometry2, doorFrame );
      let doorGeometry3 = new T.SphereGeometry(0.04);
      var doorWindowobj3 = new T.Mesh( doorGeometry3, doorFrame );
      doorWindowobj3.translateX(0.13);
      var doorG = new T.Group();
      doorG.add( doorobj2 );
      doorG.add( doorObj );
      doorG.add( doorWindowobj3 );

      let fullHouse = new T.Group();
      fullHouse.add(mesh);
      fullHouse.add(kmesh);
      kmesh.translateY(2);
      windowG.translateY(1.1);
      windowG.translateX(0.6);
      fullHouse.add(windowG);
      fullHouse.add(doorG);
      doorG.rotateY(-1.5);
      doorG.translateZ(-3.1);
      doorG.translateY(0.6);
      doorG.translateX(1.6);
      super(`Cottage-${++simpleHouseCount}`, fullHouse);
    }
 }
 export class GrBuilding2 extends GrObject {
  constructor(num) {
    let geometry = new T.Geometry();
    //
    geometry.vertices.push(new T.Vector3(0, 0, 0));
    geometry.vertices.push(new T.Vector3(0, 0, 3));
    geometry.vertices.push(new T.Vector3(3, 0, 0));
    geometry.vertices.push(new T.Vector3(3, 0, 3));

    geometry.vertices.push(new T.Vector3(0, 2, 0));
    geometry.vertices.push(new T.Vector3(0, 2, 3));
    geometry.vertices.push(new T.Vector3(3, 2, 0));
    geometry.vertices.push(new T.Vector3(3, 2, 3));

    geometry.faceVertexUvs = [[]];
    let f1 = new T.Face3( 1,0, 2);
    geometry.faces.push(f1);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(0, 1),
      new T.Vector2(1,1),
    ]);
    let f2 = new T.Face3(1,3, 2);
    geometry.faces.push(f2);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(1, 0),
      new T.Vector2(1,1),
    ]);
    let f3 = new T.Face3(0, 1, 5);
    geometry.faces.push(f3);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(0, 1),
      new T.Vector2(1,1),
    ]);
    let f4 = new T.Face3(0, 4, 5);
    geometry.faces.push(f4);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(1, 0),
      new T.Vector2(1,1),
    ]);
    let f5 = new T.Face3(3,1, 5);
    geometry.faces.push(f5);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(0, 1),
      new T.Vector2(1,1),
    ]);
    let f6 = new T.Face3(3, 7, 5);
    geometry.faces.push(f6);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(1, 0),
      new T.Vector2(1,1),
    ]);
    let f7 = new T.Face3(2,3, 7);
    geometry.faces.push(f7);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(0, 1),
      new T.Vector2(1,1),
    ]);
    let f8 = new T.Face3(2,6, 7);
    geometry.faces.push(f8);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(1, 0),
      new T.Vector2(1,1),
    ]);
    let f9 = new T.Face3( 4,6, 2);
    geometry.faces.push(f9);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(0, 1),
      new T.Vector2(1,1),
    ]);
    let f10 = new T.Face3(4,0,2);
    geometry.faces.push(f10);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(1, 0),
      new T.Vector2(1,1),
    ]);

    
    geometry.computeFaceNormals();
    geometry.uvsNeedUpdate = true;
    //
    let tl;
    if(num == 0){
    tl = new T.TextureLoader().load("./images/brick.png");
    }
    else if(num == 2){
      tl = new T.TextureLoader().load("./images/whiteBrick.jpg");
      }
    else{
      tl = new T.TextureLoader().load("./images/coolBrick.jpg");
      
    }
    let material = new T.MeshStandardMaterial({ map: tl, roughness: 0.75, side: T.DoubleSide });
    let mesh = new T.Mesh(geometry, material);
    var window = new T.MeshLambertMaterial( { color: 'cyan' } );
    var frame = new T.MeshLambertMaterial( { color: 'white' } );
    let geometry1 = new T.BoxGeometry( 0.5, 0.5, 0.01 );
    let geometry2 = new T.BoxGeometry( 0.6, 0.6, 0 );
    var windowobj5 = new T.Mesh( geometry1, window );
    var windowobj6 = new T.Mesh( geometry2, frame );
    var windowobj7 = new T.Mesh( geometry1, window );
    var windowobj8 = new T.Mesh( geometry2, frame );
    var windowG = new T.Group();
    windowG.add( windowobj5 );
    windowG.add( windowobj6 );
    windowobj5.translateX(2.5);
    windowobj6.translateX(2.5);
    windowobj5.rotateY(1.5);
    windowobj6.rotateY(1.5);
    windowobj5.translateX(-0.5);
    windowobj6.translateX(-0.5);
    windowG.add( windowobj7 );
    windowG.add( windowobj8 );
    windowobj7.translateX(2.5);
    windowobj8.translateX(2.5);
    windowobj7.rotateY(1.5);
    windowobj8.rotateY(1.5);
    windowobj7.translateX(-2.3);
    windowobj8.translateX(-2.3);
    windowobj7.translateZ(0.1);
    windowobj8.translateZ(0.1);

    let kgeometry = new T.Geometry();
      //
      kgeometry.vertices.push(new T.Vector3(0, 0, 0));
      kgeometry.vertices.push(new T.Vector3(0, 0, 3));
      kgeometry.vertices.push(new T.Vector3(3, 0, 0));
      kgeometry.vertices.push(new T.Vector3(3, 0, 3));
      kgeometry.vertices.push(new T.Vector3(1.5, 1, 1.5));


      kgeometry.faceVertexUvs = [[]];
      let k1 = new T.Face3( 1,0, 2);
      kgeometry.faces.push(k1);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(0, 1),
        new T.Vector2(1,1),
      ]);
      let k2 = new T.Face3(1,3, 2);
      kgeometry.faces.push(k2);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k3 = new T.Face3(1,4, 0);
      kgeometry.faces.push(k3);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k4 = new T.Face3(2,4, 3);
      kgeometry.faces.push(k4);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k5 = new T.Face3(1,4, 3);
      kgeometry.faces.push(k5);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k6 = new T.Face3(2,4, 0);
      kgeometry.faces.push(k6);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);

      
      kgeometry.computeFaceNormals();
      kgeometry.uvsNeedUpdate = true;
      //
      let kl;
      kl = new T.TextureLoader().load("./images/roof2.jpg");
      
      let kmaterial = new T.MeshStandardMaterial({ map: kl, roughness: 0.75, side: T.DoubleSide });
      let kmesh = new T.Mesh(kgeometry, kmaterial);
    
    var door = new T.MeshLambertMaterial( { color: 'goldenrod' } );
    var doorFrame = new T.MeshLambertMaterial( { color: 'black' } );
    let doorgeometry1 = new T.BoxGeometry( 0.5, 0.8, 0.01 );
    var doorObj = new T.Mesh( doorgeometry1, door );
    let doorgeometry2 = new T.BoxGeometry( 0.6, 0.9, 0 );
    var doorobj2 = new T.Mesh( doorgeometry2, doorFrame );
    let doorGeometry3 = new T.SphereGeometry(0.04);
    var doorWindowobj3 = new T.Mesh( doorGeometry3, doorFrame );
    doorWindowobj3.translateX(0.13);
    var doorG = new T.Group();
    doorG.add( doorobj2 );
    doorG.add( doorObj );
    doorG.add( doorWindowobj3 );

    let fullHouse = new T.Group();
    fullHouse.add(mesh);
    fullHouse.add(kmesh);
    kmesh.translateY(2);
    windowG.translateY(1.1);
    windowG.translateX(0.6);
    fullHouse.add(windowG);
    fullHouse.add(doorG);
    doorG.rotateY(-1.5);
    doorG.translateZ(-3.1);
    doorG.translateY(0.6);
    doorG.translateX(1.6);
    super(`Cottage-${++simpleHouseCount}`, fullHouse);
  }
}
export class GrBuilding3 extends GrObject {
  constructor(num) {
    let geometry = new T.Geometry();
    //
    geometry.vertices.push(new T.Vector3(0, 0, 0));
    geometry.vertices.push(new T.Vector3(0, 0, 3));
    geometry.vertices.push(new T.Vector3(3, 0, 0));
    geometry.vertices.push(new T.Vector3(3, 0, 3));

    geometry.vertices.push(new T.Vector3(0, 2, 0));
    geometry.vertices.push(new T.Vector3(0, 2, 3));
    geometry.vertices.push(new T.Vector3(3, 2, 0));
    geometry.vertices.push(new T.Vector3(3, 2, 3));

    geometry.faceVertexUvs = [[]];
    let f1 = new T.Face3( 1,0, 2);
    geometry.faces.push(f1);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(0, 1),
      new T.Vector2(1,1),
    ]);
    let f2 = new T.Face3(1,3, 2);
    geometry.faces.push(f2);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(1, 0),
      new T.Vector2(1,1),
    ]);
    let f3 = new T.Face3(0, 1, 5);
    geometry.faces.push(f3);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(0, 1),
      new T.Vector2(1,1),
    ]);
    let f4 = new T.Face3(0, 4, 5);
    geometry.faces.push(f4);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(1, 0),
      new T.Vector2(1,1),
    ]);
    let f5 = new T.Face3(3,1, 5);
    geometry.faces.push(f5);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(0, 1),
      new T.Vector2(1,1),
    ]);
    let f6 = new T.Face3(3, 7, 5);
    geometry.faces.push(f6);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(1, 0),
      new T.Vector2(1,1),
    ]);
    let f7 = new T.Face3(2,3, 7);
    geometry.faces.push(f7);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(0, 1),
      new T.Vector2(1,1),
    ]);
    let f8 = new T.Face3(2,6, 7);
    geometry.faces.push(f8);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(1, 0),
      new T.Vector2(1,1),
    ]);
    let f9 = new T.Face3( 4,6, 2);
    geometry.faces.push(f9);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(0, 1),
      new T.Vector2(1,1),
    ]);
    let f10 = new T.Face3(4,0,2);
    geometry.faces.push(f10);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(1, 0),
      new T.Vector2(1,1),
    ]);

    
    geometry.computeFaceNormals();
    geometry.uvsNeedUpdate = true;
    //
    let tl;
    if(num == 0){
    tl = new T.TextureLoader().load("./images/brick.png");
    }
    else if(num == 2){
      tl = new T.TextureLoader().load("./images/whiteBrick.jpg");
      }
    else{
      tl = new T.TextureLoader().load("./images/coolBrick.jpg");
      
    }
    let material = new T.MeshStandardMaterial({ map: tl, roughness: 0.75, side: T.DoubleSide });
    let mesh = new T.Mesh(geometry, material);
    var window = new T.MeshLambertMaterial( { color: 'cyan' } );
    var frame = new T.MeshLambertMaterial( { color: 'white' } );
    let geometry1 = new T.BoxGeometry( 0.5, 0.5, 0.01 );
    let geometry2 = new T.BoxGeometry( 0.6, 0.6, 0 );
    var windowobj5 = new T.Mesh( geometry1, window );
    var windowobj6 = new T.Mesh( geometry2, frame );
    var windowobj7 = new T.Mesh( geometry1, window );
    var windowobj8 = new T.Mesh( geometry2, frame );
    var windowG = new T.Group();
    windowG.add( windowobj5 );
    windowG.add( windowobj6 );
    windowobj5.translateX(2.5);
    windowobj6.translateX(2.5);
    windowobj5.rotateY(1.5);
    windowobj6.rotateY(1.5);
    windowobj5.translateX(-0.5);
    windowobj6.translateX(-0.5);
    windowG.add( windowobj7 );
    windowG.add( windowobj8 );
    windowobj7.translateX(2.5);
    windowobj8.translateX(2.5);
    windowobj7.rotateY(1.5);
    windowobj8.rotateY(1.5);
    windowobj7.translateX(-2.3);
    windowobj8.translateX(-2.3);
    windowobj7.translateZ(0.1);
    windowobj8.translateZ(0.1);

    let kgeometry = new T.Geometry();
      //
      kgeometry.vertices.push(new T.Vector3(0, 0, 0));
      kgeometry.vertices.push(new T.Vector3(0, 0, 3));
      kgeometry.vertices.push(new T.Vector3(3, 0, 0));
      kgeometry.vertices.push(new T.Vector3(3, 0, 3));
      kgeometry.vertices.push(new T.Vector3(0, 0, 1.5));
      kgeometry.vertices.push(new T.Vector3(3, 0, 1.5));
      kgeometry.vertices.push(new T.Vector3(0, 1, 0.75));
      kgeometry.vertices.push(new T.Vector3(3, 1, 0.75));
      kgeometry.vertices.push(new T.Vector3(0, 1, 2.25));
      kgeometry.vertices.push(new T.Vector3(3, 1, 2.25));

      kgeometry.faceVertexUvs = [[]];
      let k1 = new T.Face3( 1,0, 2);
      kgeometry.faces.push(k1);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(0, 1),
        new T.Vector2(1,1),
      ]);
      let k2 = new T.Face3(1,3, 2);
      kgeometry.faces.push(k2);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k3 = new T.Face3(4,6, 0);
      kgeometry.faces.push(k3);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k4 = new T.Face3(8,4, 1);
      kgeometry.faces.push(k4);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k5 = new T.Face3(5,7, 2);
      kgeometry.faces.push(k5);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k6 = new T.Face3(9,5, 3);
      kgeometry.faces.push(k6);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k7 = new T.Face3(8,1, 3);
      kgeometry.faces.push(k7);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k8 = new T.Face3(8,9, 3);
      kgeometry.faces.push(k8);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k9 = new T.Face3(8,4, 5);
      kgeometry.faces.push(k9);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k10 = new T.Face3(8,9, 5);
      kgeometry.faces.push(k10);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k11 = new T.Face3(6,4, 5);
      kgeometry.faces.push(k11);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k12 = new T.Face3(6,7, 5);
      kgeometry.faces.push(k12);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k13 = new T.Face3(6,0, 2);
      kgeometry.faces.push(k13);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);
      let k14 = new T.Face3(6,7, 2);
      kgeometry.faces.push(k14);
      kgeometry.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1,1),
      ]);

      
      kgeometry.computeFaceNormals();
      kgeometry.uvsNeedUpdate = true;
      //
      let kl;
      kl = new T.TextureLoader().load("./images/roof3.jpg");
      
      let kmaterial = new T.MeshStandardMaterial({ map: kl, roughness: 0.75, side: T.DoubleSide });
      let kmesh = new T.Mesh(kgeometry, kmaterial);
    var door = new T.MeshLambertMaterial( { color: 'goldenrod' } );
    var doorFrame = new T.MeshLambertMaterial( { color: 'black' } );
    let doorgeometry1 = new T.BoxGeometry( 0.5, 0.8, 0.01 );
    var doorObj = new T.Mesh( doorgeometry1, door );
    let doorgeometry2 = new T.BoxGeometry( 0.6, 0.9, 0 );
    var doorobj2 = new T.Mesh( doorgeometry2, doorFrame );
    let doorGeometry3 = new T.SphereGeometry(0.04);
    var doorWindowobj3 = new T.Mesh( doorGeometry3, doorFrame );
    doorWindowobj3.translateX(0.13);
    var doorG = new T.Group();
    doorG.add( doorobj2 );
    doorG.add( doorObj );
    doorG.add( doorWindowobj3 );

    let fullHouse = new T.Group();
    fullHouse.add(mesh);
    fullHouse.add(kmesh);
    kmesh.translateY(2);
    windowG.translateY(1.1);
    windowG.translateX(0.6);
    fullHouse.add(windowG);
    fullHouse.add(doorG);
    doorG.rotateY(-1.5);
    doorG.translateZ(-3.1);
    doorG.translateY(0.6);
    doorG.translateX(1.6);
    super(`Cottage-${++simpleHouseCount}`, fullHouse);
  }
}
  export class Tree extends GrObject {
    constructor() {
    var leaveDarkMaterial = new T.MeshLambertMaterial( { color: 0x91E56E } );
    var leaveLightMaterial = new T.MeshLambertMaterial( { color: 0xA2FF7A } );
    var leaveDarkDarkMaterial = new T.MeshLambertMaterial( { color: 0x71B356 } );
    var stemMaterial = new T.MeshLambertMaterial( { color: 0x7D5A4F } );
  let geometry = new T.BoxGeometry( 1, 1, 1 );
  var stem = new T.Mesh( geometry, stemMaterial );
  stem.position.set( 0, 0, 0 );
  stem.scale.set( 0.3, 1.5, 0.3 );
  
  var squareLeave01 = new T.Mesh( geometry, leaveDarkMaterial );
  squareLeave01.position.set( 0.5, 1.6, 0.5 );
  squareLeave01.scale.set( 0.8, 0.8, 0.8 );
  
  var squareLeave02 = new T.Mesh( geometry, leaveDarkMaterial );
  squareLeave02.position.set( -0.4, 1.3, -0.4 );
  squareLeave02.scale.set( 0.7, 0.7, 0.7 );
  
  var squareLeave03 = new T.Mesh( geometry, leaveDarkMaterial );
  squareLeave03.position.set( 0.4, 1.7, -0.5 );
  squareLeave03.scale.set( 0.7, 0.7, 0.7 );
  
  var leaveDark = new T.Mesh( geometry, leaveDarkMaterial );
  leaveDark.position.set( 0, 1.2, 0 );
  leaveDark.scale.set( 1, 2, 1 );
  
  var leaveLight = new T.Mesh( geometry, leaveLightMaterial );
  leaveLight.position.set( 0, 1.2, 0 );
  leaveLight.scale.set( 1.1, 0.5, 1.1 );
  
  
  var tree = new T.Group();
  tree.add( leaveDark );
  tree.add( leaveLight );
  tree.add( squareLeave01 );
  tree.add( squareLeave02 );
  tree.add( squareLeave03 );
  tree.add( stem );
  
  super(`Tree-${++simpleTreeCount}`,tree);
  }
}
export class Road extends GrObject {
  constructor() {
  var stemMaterial = new T.MeshLambertMaterial( { color: "#42464d" } );
let geometry = new T.BoxGeometry( 15, 0.1, 230 );
var stem = new T.Mesh( geometry, stemMaterial );
var sMaterial = new T.MeshLambertMaterial( { color: "yellow" } );
let geometry2 = new T.BoxGeometry( 2, 0.1, 17 );

stem.position.set( 0, 0, 0 );
stem.scale.set( 0.3, 1.5, 0.3 );
var s = new T.Mesh( geometry2, sMaterial );
s.position.set( 0, 0.1, -5 );
s.scale.set( 0.3, 1.5, 0.3 );
var s2 = new T.Mesh( geometry2, sMaterial );
s2.position.set( 0, 0.1, 13 );
s2.scale.set( 0.3, 1.5, 0.3 );
var s3 = new T.Mesh( geometry2, sMaterial );
s3.position.set( 0, 0.1, 26 );
s3.scale.set( 0.3, 1.5, 0.3 );
var s4 = new T.Mesh( geometry2, sMaterial );
s4.position.set( 0, 0.1, -25 );
s4.scale.set( 0.3, 1.5, 0.3 );
var tree = new T.Group();
tree.add( stem );
tree.add( s );
tree.add( s2 );
tree.add( s3 );
tree.add( s4 );

super(`Road-${++simpleRoadCount}`,tree);
}
}

function skyscraper() {

let astr_group = new T.Group();
let loader = new OBJLoader();
loader.load("./images/obj/MagicTower.obj", function(astronaut) {
  astr_group.add(astronaut);
});
if (astr_group) {
  astr_group.position.set(0, 7, 0);
  astr_group.scale.set(1, 1, 1);
}
let as_group = new T.Group();
loader.load("./images/obj/Skyscraper1.obj", function(astronaut) {
  as_group.add(astronaut);
});
if (as_group) {
  as_group.position.set(10, 1, 10);
  as_group.scale.set(0.3, 0.3, 0.3);
}
let ast_group = new T.Group();
loader.load("./images/obj/Building.obj", function(astronaut) {
    ast_group.add(astronaut);
  });
  if (ast_group) {
    ast_group.position.set(10, 1, -10);
    ast_group.scale.set(0.06, 0.06, 0.06);
  }
  let astro_group = new T.Group();
loader.load("./images/obj/EmpireState.obj", function(astronaut) {
    astro_group.add(astronaut);
  });
  if (astro_group) {
    astro_group.position.set(-10, 0, -10);
    astro_group.scale.set(0.25,0.25, 0.25);
  }
  let astron_group = new T.Group();
  loader.load("./images/obj/150_Water_Ave.obj", function(astronaut) {
    astron_group.add(astronaut);
  });
  if (astron_group) {
    astron_group.position.set(-10, 0, 10);
    astron_group.rotateX(Math.PI*1.5);
    astron_group.scale.set(5,5, 8);
  }
  let sky = new T.Group();
  sky.add(as_group);
  sky.add(ast_group);
  sky.add(astr_group);
  sky.add(astron_group);
  sky.add(astro_group);
return sky;
}
export class SkyScraper extends GrObject {
  constructor(){
  const car = skyscraper();
  super(`Skyscraper-${skyCtr++}`,car);
}
}
export class Aquarium extends GrObject {
  constructor(num) {
    let geometry = new T.Geometry();
    geometry.vertices.push(new T.Vector3(0, 0, 0));
    geometry.vertices.push(new T.Vector3(0, 0, 7));
    geometry.vertices.push(new T.Vector3(7, 0, 0));
    geometry.vertices.push(new T.Vector3(7, 0, 7));

    geometry.vertices.push(new T.Vector3(0, 7, 0));
    geometry.vertices.push(new T.Vector3(0, 7, 7));
    geometry.vertices.push(new T.Vector3(7, 7, 0));
    geometry.vertices.push(new T.Vector3(7, 7, 7));
    geometry.faceVertexUvs = [[]];
    let f3 = new T.Face3(1,5, 3);
    geometry.faces.push(f3);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(0, 1),
      new T.Vector2(1,0),
    ]);
    let f4 = new T.Face3(3,5, 7);
    geometry.faces.push(f4);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(1, 0),  
      new T.Vector2(0,1),
      new T.Vector2(1, 1),  
    ]);
    let f5 = new T.Face3(3,6,7);
    geometry.faces.push(f5);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 0),
      new T.Vector2(1, 1),
      new T.Vector2(0,1),
    ]);
    let f6 = new T.Face3(6,3,2);
    geometry.faces.push(f6);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(1,1),
      new T.Vector2(0, 0),
      
      new T.Vector2(1,0),
      
      
      
    ]);
    let f7 = new T.Face3(6,2,0);
    geometry.faces.push(f7);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0, 1),
      new T.Vector2(0, 0),
      new T.Vector2(1,0),
    ]);
    let f8 = new T.Face3(0,6,4);
    geometry.faces.push(f8);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(1, 0),
      new T.Vector2(0,1),
      new T.Vector2(1, 1)
    ]);
    let f9 = new T.Face3(4,0,1);
    geometry.faces.push(f9);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(0,1),
      new T.Vector2(0,0),
      
      new T.Vector2(1, 0),
    ]);
    let f10 = new T.Face3(5,4,1);
    geometry.faces.push(f10);
    geometry.faceVertexUvs[0].push([
      new T.Vector2(1,1),
      new T.Vector2(0,1),
      new T.Vector2(1, 0),
    ]);
    let f11 = new T.Face3(7,5,4);
    geometry.faces.push(f11);
    let f12 = new T.Face3(6,7,4);
    geometry.faces.push(f12);
    geometry.computeFaceNormals();
    geometry.uvsNeedUpdate = true;
    let tl;
    if(num == 0){
      tl = new T.TextureLoader().load("./images/cinema.png");
      }
      else if(num == 2){
        tl = new T.TextureLoader().load("./images/musuem.png");
        }
      else{
        tl = new T.TextureLoader().load("./images/bank.png");
      }
    let material = new T.MeshStandardMaterial({ map: tl, roughness: 0.75, side: T.DoubleSide });
      let aquarium = new T.Mesh(geometry, material);
    super(`Entertainment-${++entertainmentCount}`,aquarium);
  }
}