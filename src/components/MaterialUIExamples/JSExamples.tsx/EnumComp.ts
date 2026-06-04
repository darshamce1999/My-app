import React from 'react'

export function EnumComp() {

    const enum fruit {
        apple,
        mango, 
        grapes
    }

    const enum dryFruit {
       dates = "Dates from Saudi",
       cashew = "CAshew from Afgan",
       almonds = "ALmonds from India",
    }

    // console.log(fruit.mango)
    // console.log(dryFruit['dates'])


    type info<Data extends {name: string}> = {
        data:Data
    }

    function abc(x: info<{name:string, age: number}>) {
        return x
    }
    const result = abc({data: {name:"Darshan", age:22}})
    // console.log(result)


    function xyz(x: info<{name:string}>) {
        return x
    }
    const result2 = xyz({data: {name:"Darshan"}})


    enum TimesheetFieldDataType {
        /** A string. */
        String = 'String',
        /** A number (no distinction between integers and floating point numbers). */
        Number = 'Number',
        /** A boolean. */
        Boolean = 'Boolean',
        /** A calendar date. Just the date portion, without any time or time zone information. */
        Date = 'Date',
        /** A complete date-time that uniquely identifies a specific moment in time. */
        DateTime = 'DateTime'
    }
  
    function getRequiredFieldValue<DataType extends TimesheetFieldDataType>(aa:DataType):any {
        return aa
    }
    // console.log(getRequiredFieldValue(TimesheetFieldDataType.String))



    interface objType {
        name: string;
        age:number;
        relationShipStatus: boolean
    }

    const obj:objType = {
        name: "Darshan",
        age:26,
        relationShipStatus: false
    }

    const objRes = typeof obj;
    // console.log(objRes)
}

export default EnumComp