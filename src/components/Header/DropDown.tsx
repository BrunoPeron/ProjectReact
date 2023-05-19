import './Styles.css';
import LabelDropDown from "./LabelDropDown";
import {LabelsDropDown} from "./LabelDropDownModel";
function DropDown(properties: { values: Array<LabelsDropDown>, name: string }) {
    let labels: Array<LabelsDropDown> = [];
    properties.values.forEach((value: LabelsDropDown) => {
        labels.push({destiny: value.destiny, name: value.name});
    });
    return (
        <div className='dropdown'>
            <button className={'dropdown-button'}>{properties.name}</button>
            <div className={'dropdown-content'}>
                {labels.map((label, index) => <LabelDropDown key={index} name={label['destiny']} destiny={label['name']}/> )}
            </div>
        </div>
    );
}

export default DropDown