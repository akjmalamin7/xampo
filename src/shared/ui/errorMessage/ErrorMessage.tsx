import GenericText from "../genericText";

interface Props {
  message?: string;
}
const ErrorMessage = ({ message }: Props) => {
  return (
    <div>
      <GenericText size="xsm" fontWeight="regular" className="text-red-600">{message || ""}</GenericText>
    </div>
  );
};

export default ErrorMessage;
