/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { shaderMaterial } from "../libs/CS559-Framework/shaderHelper.js";

// define your vehicles here - remember, they need to be imported
// into the "main" program
let count = 0;
let hotairbloon = 0;
function createWheels() {
    const geometry = new T.BoxBufferGeometry(0.5, 0.5, 1.75);
    const material = new T.MeshLambertMaterial({ color: 0x333333 });
    const wheel = new T.Mesh(geometry, material);
    return wheel;
  }
  function createCar() {
    const car = new T.Group();
    const texture1 = new T.TextureLoader().load("./images/car-back.jpg");
    texture1.center = new T.Vector2(0.5, 0.5);
    texture1.rotation = Math.PI;
    texture1.flipY = false;

    const texture2 = new T.TextureLoader().load("./images/car-front.jpg");
    texture2.center = new T.Vector2(0.5, 0.5);
    texture2.rotation = Math.PI;
    texture2.flipY = false;
    const backWheel = createWheels();
    backWheel.position.y = 0.3;
    backWheel.position.x = -0.9;
    car.add(backWheel);
  
    const frontWheel = createWheels();
    frontWheel.position.y = 0.3;
    frontWheel.position.x = 0.9;
    car.add(frontWheel);
  
    const main = new T.Mesh(
      new T.BoxBufferGeometry(3, 0.75, 1.5),[
      new T.MeshLambertMaterial({ map: texture2 }),
      new T.MeshLambertMaterial({ map: texture1 }),
      new T.MeshLambertMaterial({ color: "hotpink" }),
      new T.MeshLambertMaterial({ color: "hotpink" }),
      new T.MeshLambertMaterial({ color: "hotpink" }),
      new T.MeshLambertMaterial({ color: "hotpink" }),
      ]
    );
    main.position.y = 0.55;
    car.add(main);
  
    const texture = new T.TextureLoader().load("./images/window.jpg");
    texture.center = new T.Vector2(0.5, 0.5);
    texture.rotation = Math.PI;
    texture.flipY = false;
  
    const cabin = new T.Mesh(new T.BoxBufferGeometry(1.6, 0.6, 1.2), [
      new T.MeshLambertMaterial({ map: texture }),
      new T.MeshLambertMaterial({ map: texture}),
      new T.MeshLambertMaterial({ color: 0xffffff }),
      new T.MeshLambertMaterial({ color: 0xffffff }),
      new T.MeshLambertMaterial({ map: texture }),
      new T.MeshLambertMaterial({ map: texture }),
    ]);
    cabin.position.x = -0.3;
    cabin.position.y = 1.25;
    car.add(cabin);
  
    return car;
  }
  
  function createTruck() {
    const car = new T.Group();
    const texture1 = new T.TextureLoader().load("./images/truck-back.jpg");
    texture1.center = new T.Vector2(0.5, 0.5);
    texture1.rotation = Math.PI;
    texture1.flipY = false;

    const texture2 = new T.TextureLoader().load("./images/truck-front.jpg");
    texture2.center = new T.Vector2(0.5, 0.5);
    texture2.rotation = Math.PI;
    texture2.flipY = false;
    const backWheel = createWheels();
    backWheel.position.y = 0.3;
    backWheel.position.x = -1.9;
    car.add(backWheel);
  
    const frontWheel = createWheels();
    frontWheel.position.y = 0.3;
    frontWheel.position.x = 2.0;
    car.add(frontWheel);
  
    const main = new T.Mesh(
      new T.BoxBufferGeometry(6, 0.75, 1.5),[
      new T.MeshLambertMaterial({ map: texture2 }),
      new T.MeshLambertMaterial({ map: texture1 }),
      new T.MeshLambertMaterial({ color: "red" }),
      new T.MeshLambertMaterial({ color: "red" }),
      new T.MeshLambertMaterial({ color: "red" }),
      new T.MeshLambertMaterial({ color: "red" }),
      ]
    );
    main.position.y = 0.55;
    car.add(main);
  
    const texture = new T.TextureLoader().load("./images/truckshield.jpg");
    texture.center = new T.Vector2(0.5, 0.5);
    texture.rotation = Math.PI;
    texture.flipY = false;
  
    const cabin = new T.Mesh(new T.BoxBufferGeometry(1.6, 0.6, 1.2), [
      new T.MeshLambertMaterial({ map: texture }),
      new T.MeshLambertMaterial({ map: texture}),
      new T.MeshLambertMaterial({ color: "red" }),
      new T.MeshLambertMaterial({ color: "red" }),
      new T.MeshLambertMaterial({ map: texture }),
      new T.MeshLambertMaterial({ map: texture }),
    ]);
    cabin.position.x = 1.8;
    cabin.position.y = 1.25;
    car.add(cabin);
    const cargotexture = new T.TextureLoader().load("./images/cargo.jpg");
    cargotexture.center = new T.Vector2(0.5, 0.5);
    cargotexture.rotation = Math.PI;
    cargotexture.flipY = false;
    const cargo = new T.Mesh(new T.BoxBufferGeometry(3.9, 1.5, 1.5), [
        new T.MeshLambertMaterial({ map: cargotexture  }),
        new T.MeshLambertMaterial({ map: cargotexture }),
        new T.MeshLambertMaterial({ map: cargotexture }),
        new T.MeshLambertMaterial({ map: cargotexture }),
        new T.MeshLambertMaterial({ map: cargotexture }),
        new T.MeshLambertMaterial({ map: cargotexture }),
      ]);
      cargo.position.x = -1.0;
      cargo.position.y = 1.65;
      car.add(cargo);
  
    return car;
  }
  
  export class Car extends GrObject {
    constructor(){
    const car = createCar();
    super("car",car);
    this.time = 0;
    this.whole_ob = car;

    this.ridePoint = new T.Object3D();
    this.ridePoint.translateY(0.7);
    this.ridePoint.rotateY(Math.PI/2);
    this.whole_ob.add(this.ridePoint);
    this.rideable = this.ridePoint;
}
stepWorld(step, timeOfDay) {
  this.time = step/50;
  if(this.whole_ob.position.z == 0 && this.whole_ob.position.x ==0){
    this.whole_ob.rotateY(Math.PI*1.5);
    this.whole_ob.position.set(32,0,-32);
  }
  if(this.whole_ob.position.x==32 && this.whole_ob.position.z <33){
    this.whole_ob.position.z += this.time;
    if(this.whole_ob.position.z>32){
      this.whole_ob.position.z = 32;
    }
    }

  if(this.whole_ob.position.x==32 && this.whole_ob.position.z==32){
    this.whole_ob.rotateY(Math.PI*1.5);
  }
    
  if(this.whole_ob.position.x>-33 && this.whole_ob.position.z == 32){
    this.whole_ob.position.x -= this.time;
    if(this.whole_ob.position.x<-32){
      this.whole_ob.position.x = -32;
    }
    }
  
    if(this.whole_ob.position.x == -32 && this.whole_ob.position.z == 32){
      this.whole_ob.rotateY(Math.PI*1.5);
      }
  if(this.whole_ob.position.x == -32 && this.whole_ob.position.z>-33){
    this.whole_ob.position.z -= this.time;
    if(this.whole_ob.position.z<-32){
      this.whole_ob.position.z = -32;
    }
    }
    if(this.whole_ob.position.x == -32 && this.whole_ob.position.z == -32){
      this.whole_ob.rotateY(Math.PI*1.5);
      }
    if(this.whole_ob.position.x<33 && this.whole_ob.position.z==-32){
      this.whole_ob.position.x += this.time;
      if(this.whole_ob.position.x>32){
        this.whole_ob.position.x = 32;
      }
      }
      if(this.whole_ob.position.x==32 && this.whole_ob.position.z==-32){
        this.whole_ob.rotateY(Math.PI*1.5);
        }
}
  }
  export class Truck extends GrObject {
    constructor(){
    const car = createTruck();
    super("truck",car);
    this.time = 0;
    this.whole_ob = car;
    this.ridePoint = new T.Object3D();
    this.ridePoint.translateY(0.7);
    this.ridePoint.rotateY(Math.PI/2);
    this.whole_ob.add(this.ridePoint);
    this.rideable = this.ridePoint;
}
stepWorld(step, timeOfDay) {
  this.time = step/50;
  if(this.whole_ob.position.z == 0 && this.whole_ob.position.x ==0){
    this.whole_ob.rotateY(Math.PI);
    this.whole_ob.position.set(32,0,32);
  }
  if(this.whole_ob.position.x>-33 && this.whole_ob.position.z == 32){
    this.whole_ob.position.x -= this.time;
    if(this.whole_ob.position.x<-32){
      this.whole_ob.position.x = -32;
    }
    }
  if(this.whole_ob.position.x==-32 && this.whole_ob.position.z==32){
    this.whole_ob.rotateY(Math.PI*1.5);
  }
  if(this.whole_ob.position.x==32 && this.whole_ob.position.z <33){
    this.whole_ob.position.z += this.time;
    if(this.whole_ob.position.z>32){
      this.whole_ob.position.z = 32;
    }
    }
    if(this.whole_ob.position.x == 32 && this.whole_ob.position.z == 32){
      this.whole_ob.rotateY(Math.PI*1.5);
      }
  if(this.whole_ob.position.x == -32 && this.whole_ob.position.z>-33){
    this.whole_ob.position.z -= this.time;
    if(this.whole_ob.position.z<-32){
      this.whole_ob.position.z = -32;
    }
    }
    if(this.whole_ob.position.x == -32 && this.whole_ob.position.z == -32){
      this.whole_ob.rotateY(Math.PI*1.5);
      }
    if(this.whole_ob.position.x<33 && this.whole_ob.position.z==-32){
      this.whole_ob.position.x += this.time;
      if(this.whole_ob.position.x>32){
        this.whole_ob.position.x = 32;
      }
      }
      if(this.whole_ob.position.x==32 && this.whole_ob.position.z==-32){
        this.whole_ob.rotateY(Math.PI*1.5);
        }
}
  }

  function createBalloon() {
    let balloon = new T.SphereBufferGeometry(2);
    let shaderMat = shaderMaterial("./images/11-09-03.vs", "./images/11-09-03.fs", {
      side: T.DoubleSide,
      derivatives:true,
      uniforms: {
        radius: { value: 0.3 },
        suns: { value: 4.0 },
        blur: { value: -1.0 },
      },
    });
  
    let mesh = new T.Mesh(balloon,shaderMat);
    let seats = new T.BoxBufferGeometry(2,2,2);
    let mesh2 = new T.Mesh(seats,shaderMat);
    let hot = new T.Group();
    hot.add(mesh);
    hot.add(mesh2);
    mesh2.translateY(-3.5);
    return hot;
  }

  export class HotAir extends GrObject {
    constructor(){
    const hotair = createBalloon();
    super(`Hot air Ballon-${hotairbloon++}`,hotair);
    this.time = 0;
    this.whole_ob = hotair;
}
stepWorld(step, timeOfDay) {
this.time = step/200;
if(count<200){
    this.whole_ob.translateY(Math.sin(this.time));
    this.whole_ob.rotateY(Math.PI/(this.time*1200));
    this.whole_ob.translateX(Math.sin(this.time));
    count++;
}
else if(count<400){
  this.whole_ob.translateY(-Math.sin(this.time));
  this.whole_ob.rotateY(Math.PI/(this.time*1200));
  this.whole_ob.translateX(Math.sin(this.time));
  count++;
}
else{
  count =0;
}
if(this.whole_ob.position.y<5){
  this.whole_ob.position.y = 5;
}
    
  
}
  }