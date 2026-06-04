
export function MapComp() {
    const p = new Map();
    p.set('fname', 'Darshan')
    p.set('Lname', 'NR')
    p.set('fname', 1)

    const obj = {fname: 'Darshan', lname: 1};
    console.log(obj.fname.split('s',3))
    console.log(Object.entries(obj))
    

    return <p>Map comp</p>
}
