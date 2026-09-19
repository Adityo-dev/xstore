import DynamicActionButton, {
  DynamicActionButtonProps,
} from "@/components/shared/DynamicActionButton/DynamicActionButton";

function CustomButton(props: DynamicActionButtonProps) {
  return <DynamicActionButton {...props} />;
}

export default CustomButton;
