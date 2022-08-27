import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";


const SelectField = ({label, selectField, items, onFieldChange}) => {
    return (
        <FormControl className="selectInputBox">
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className={"selectBox"}
                defaultValue={selectField}
                label={label}
                onChange={onFieldChange}
            >
                {items.map((item,index) => {
                    console.log("items",item)
                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}
export default SelectField;