import { Option, Select } from "@material-tailwind/react";

interface Props {
  options: any;
  label: string;
  value: any;
  type?: string;
  onChange?: (e: any) => any; // for function type
  color?: any;
  onPress?: (event: any) => any;
  containerProps?: any;
}

export default function BBDropdown(props: Props) {


  return (
    <Select
      color="blue"
      label={props.label}
      onChange={(e: any) => (props.onChange ? props.onChange("") : null)}
      value={props.value}

      containerProps={
        props.containerProps}
    >
      {props.options.map((ele: any) => (

        <Option onClick={() => {
          props.onPress ? props.onPress(ele.label) : null;
        }}
          value={ele.label}
        >{ele.label}
        </Option>
      ))}
    </Select>
  );
}
