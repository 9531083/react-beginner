import componentsImg from "../../assets/components.png"
import propsImg from "../../assets/config.png"
import jsxImg from "../../assets/jsx-ui.png"
import stateImg from "../../assets/state-mgmt.png"

export const CORE_CONCEPTS =[
    {
        title:"Components",
        image:componentsImg,
        description:"The core UI building block - compose the user interface by combining multiple components."
    },
    {
        title:"JSX",
        image: jsxImg,
        description: "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
    },
    {
        title: "Props",
        image: propsImg,
        description: "Make components configurable (and therefore reusable) by passing input data to them."
    },
    {
        title: "State",
        image: stateImg,
        description: "React-managed data which, when changed, causes the component to re-render & the UI to update."
    }
]