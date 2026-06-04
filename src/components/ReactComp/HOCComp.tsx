import React from "react";

const HOCComp = (InputComp:any) => {
    class NewComp extends React.Component<{},  {count: number}> {
        constructor(props:{}) {
            super(props);
            this.state = {
                count:0
            }
        }

        render() {
            return <InputComp count={this.state.count} increment={()=>{this.setState({count:this.state.count+1})}} />
        }
    }
    return NewComp
}

export default HOCComp;