
export function DateComp() {
    const date = new Date('2024-01-02T12:00:00Z');
    console.log(date)
    console.log(date.getDate())

    date.setDate(13)
    date.setMonth(1)
    console.log(date)

    console.log(Date.parse('2024'))
    const unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
    const javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT');

    console.log(unixTimeZero);
    // Expected output: 0

    console.log(javaScriptRelease);
    // Expected output: 818035920000

    return <p>Finding Sum</p>
}