type Props = {
  warningText: string;
};

export default function Warning({ warningText }: Props) {
  return <p className="warning">{warningText}</p>;
}
