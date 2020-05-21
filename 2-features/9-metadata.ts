import 'reflect-metadata';

/*
const plane = {
  color: 'red',
};

Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 10, plane);

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);
console.log(note, height);

Reflect.defineMetadata('note', 'bye there', plane, 'color');
const note = Reflect.getMetadata('note', plane, 'color');
console.log(note);
*/

/*
@printMetadata
class Plane {
  color: string = 'red';

  @addSecret('Hi there')
  fly(): void {
    console.log('vrrrr');
  }
}

function addSecret(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}
*/

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);
    router.get(path, middleware, target.prototype[type]);
  }
}
