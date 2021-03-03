import Step1 from "./step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./step3/Step3";

export default function steps() {
    return [
        {
            name: "Step 1",
            component: Step1
        },
        {
            name: "Step 2",
            component: Step2
        },
        {
            name: "Step3",
            component: Step3
        }
    ]
}