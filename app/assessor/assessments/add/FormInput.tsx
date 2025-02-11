import { Input } from '@/components/ui/input';
import { FieldError } from 'react-hook-form';

interface FormInputProps {
  type: string;
  placeholder: string;
  register: any;
  name: string;
  error?: FieldError;
}

export const FormInput: React.FC<FormInputProps> = ({ type, placeholder, register, name, error }) => {
  return (
    <div className="p-2 w-[15rem] min-w-[14rem] border-2 border-gray-700 rounded-md">
      <Input className="w-full" type={type} placeholder={placeholder} {...register(name)} />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};
