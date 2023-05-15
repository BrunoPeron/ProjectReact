import { LabelsDropDown } from './LabelDropDownModel';
import './Styles.css';

function LabelDropDown({destiny, name}: LabelsDropDown) {
    return (
        <a href={destiny}>{name}</a>
    );
}

export default LabelDropDown