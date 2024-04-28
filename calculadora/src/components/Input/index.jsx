import { InputContaniner } from './styles';

export default function Input({ value }) {
  return (
    <InputContaniner>
      <input disabled value={value} />
    </InputContaniner>
  )
}
