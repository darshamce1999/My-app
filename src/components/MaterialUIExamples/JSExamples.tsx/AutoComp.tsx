import { Autocomplete, Box, Input, Stack, TextField } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import style from "./AutoComp.module.css"
import { debounceUtil, throtleUtil } from "./AutoCompUtil";

export const AutoComp = () => {
    const [state, setState] = useState<string | null>();

    const skills = ['React','Redux','JavaScript', 'TypeScript']
    

    return <><Autocomplete options={skills} 
            renderInput={(props)=>{return <TextField {...props}/>}}
            sx={{ width: 300 }}
            onChange={(event, value)=>{
                setState(value)
            }}
            onInputChange={(event, value)=>{
                console.log(value)
            }}
            freeSolo
            />
            <p>you have selected {state}</p>
            </>
}

export const AutoCompCustomLogic = () => {
    const [state, setState] = useState<{label:string, code:number} | null>();
    const [option, setOption] = useState<{label:string, code:number}[]>();

    const country = [{label:'india', code:91},{label:'swedon', code:21},{label:'finland', code:31}] 

    function handleChange(value:string) {
        const filterdata = country.filter((data) => {
            return data.code.toString().includes(value)
        })
        setOption(filterdata)
    }
    

    return <><Autocomplete 
            renderInput={(props)=>{return <TextField {...props}/>}}
            sx={{ width: 300 }}
            onChange={(event, value)=>{
                setState(value)
            }}
            onInputChange={(event, value)=>{
                handleChange(value)
            }}
            renderOption={(props, option)=>{
                return <li {...props}>{option.label}  + {option.code}</li>
            }}
            options={option? option: country}
            filterOptions={(option)=>{
                console.log(option)
                return [...option];
            }} 
            //when using custom logic for search, when we type it won't return anything, 
            //to fix that use filterOptions and return options
            />
            <p>you have selected {state?.label}</p>
            </>
}

export const AutoCompWithNativeHtml = () => {
    const countries = ['india','swedon', 'finland', "Australia", "France"]

    const [filter, setfilter] = useState<string[]>(countries);
    const [state, setState] = useState<string| null>();
    const [showSuggestion, setShowSuggestion] = useState<boolean>(false);

    function handleSearch(seachText:string) {
        if(seachText.length>1) {
            const refinedData = countries.filter((data)=>{
                return data.toLowerCase().includes(seachText.toLowerCase())
            })
            setfilter(refinedData);
            setShowSuggestion(true)
        } else {
            setShowSuggestion(false)
        }
    }

    return <><Stack sx={{width:"200px", paddingLeft:"200px"}}>
            <Input 
                onChange={(event)=>{
                    handleSearch(event.target.value)
                    setState(null)
                }}
                value={state}
            />
                {showSuggestion && filter.map((country)=>{
                    return <div className={style.suggestion} onClick={()=>{
                        setState(country)
                    }}>{country}</div>
                })}
            </Stack>
            </>
}


export const AutoCompWithDebounce = () => {
    const countries = ['india','swedon', 'finland', "Australia", "France"]

    const [filter, setfilter] = useState<string[]>(countries);
    const [state, setState] = useState<string| null>();
    const [showSuggestion, setShowSuggestion] = useState<boolean>(false);

    const timer = useRef<any>();

    function handleSearch(seachText:string) {
        if(seachText.length > 1) {
            const refinedData = countries.filter((data)=>{
                return data.toLowerCase().includes(seachText.toLowerCase())
            })
            setfilter(refinedData);
            setShowSuggestion(true)
        } else {
            setShowSuggestion(false)
        }
    }

    function debounceFn() {
        return function(search:string, time:number=4000) {
            if(timer) clearTimeout(timer.current)
            timer.current = setTimeout(()=>{
                handleSearch(search)
            }, time)
        }
    }


    return <><Stack sx={{width:"200px", paddingLeft:"200px"}}>
            <Input 
                onChange={(event)=>{
                    debounceFn()(event.target.value, 4000)
                    setState(null)
                }}
                value={state}
            />
                {showSuggestion && filter.map((country)=>{
                    return <div className={style.suggestion} onClick={()=>{
                        setState(country)
                    }}>{country}</div>
                })}
            </Stack>
            </>
}

export const AutoCompWithDebounceWithoutUeRef = () => {
    const countries = ['india','swedon', 'finland', "Australia", "France"]

    const [filter, setfilter] = useState<string[]>(countries);
    const [state, setState] = useState<string| null>();
    const [showSuggestion, setShowSuggestion] = useState<boolean>(false);

    function handleSearch(seachText:string) {
        if(seachText.length > 1) {
            const refinedData = countries.filter((data)=>{
                return data.toLowerCase().includes(seachText.toLowerCase())
            })
            setfilter(refinedData);
            setShowSuggestion(true)
        } else {
            setShowSuggestion(false)
        }
    }


    return <><Stack sx={{width:"200px", paddingLeft:"200px"}}>
            <Input 
                onChange={(event)=>{
                    debounceUtil(handleSearch, event.target.value)
                    setState(null)
                }}
                value={state}
            />
                {showSuggestion && filter.map((country)=>{
                    return <div className={style.suggestion} onClick={()=>{
                        setState(country)
                    }}>{country}</div>
                })}
            </Stack>
            </>
}

export const AutoCompWithDebounceWithTrolling = () => {
    const countries = ['india','swedon', 'finland', "Australia", "France"]

    const [filter, setfilter] = useState<string[]>(countries);
    const [state, setState] = useState<string| null>();
    const [showSuggestion, setShowSuggestion] = useState<boolean>(false);

    const timerRef = useRef<any>()

    function handleSearch(seachText:string) {
        if(seachText.length > 1) {
            const refinedData = countries.filter((data)=>{
                return data.toLowerCase().includes(seachText.toLowerCase())
            })
            setfilter(refinedData);
            setShowSuggestion(true)
        } else {
            setShowSuggestion(false)
        }
    }

    return <><Stack sx={{width:"200px", paddingLeft:"200px"}}>
            <Input 
                onChange={(event)=>{
                    throtleUtil(handleSearch, event.target.value)
                    setState(null)
                }}
                value={state}
            />
                {showSuggestion && filter.map((country)=>{
                    return <div className={style.suggestion} onClick={()=>{
                        setState(country)
                    }}>{country}</div>
                })}
            </Stack>
            </>
}