import { Option, Select } from "@material-tailwind/react";

interface Props {
  options: any;
  label: string;
  value: any;
  type?: string;
  onChange: (e: any) => void; // for function type
  color?: any;
}

export default function BBDropdown(props: Props) {
  return (
    <Select
      color="blue"
      label={props.label}
      onChange={props.onChange}
      value={props.value}
    >
      {props.options.map((obj: any) => {
        return <Option>{obj.label}</Option>;
      })}
    </Select>
  );
}
