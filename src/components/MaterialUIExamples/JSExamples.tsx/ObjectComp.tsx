
export function ObjectComp() {
    const object1 = {};

    
    Object.defineProperties(object1, {
        property1: {
          value: 42,
          writable: true,
        },
        property2: {},
      });;

    console.log(object1);

    return <h2>ObjectComp</h2>
}
