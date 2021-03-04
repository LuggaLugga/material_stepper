import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
import Step3 from "./step3/Step3";

export default function steps() {
    return [
        {
            name: "Step 1",
            Component: Step1
        },
        {
            name: "Step 2",
            Component: Step2
        },
        {
            name: "Step 3",
            Component: Step3
        }
    ]
}