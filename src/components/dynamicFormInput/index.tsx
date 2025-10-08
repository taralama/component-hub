import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

interface Education {
  degreeTitle?: string;
  schoolName?: string;
  cityName?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  photo: File;
}

const DynamicFormInput = () => {
  const { register, handleSubmit, control } = useForm<{
    education: Education[];
  }>();
  const { append, fields, remove } = useFieldArray({
    control,
    name: 'education',
  });

  const onSubmit = (data: Education) => {
    console.log(data);
  };

  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the selected file
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create preview URL
      console.log(imageUrl);
      setPreview(imageUrl);
    }
  };

  return (
    <form onSubmit={handleSubmit(() => onSubmit)}>
      <input
        id="image"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {preview && <img src={preview} alt="Selected Preview" width="200"></img>}
      <button
        className="bg-red-600 block px-5 text-white rounded py-2"
        onClick={() => {
          setPreview('');
        }}
      >
        remove Picture
      </button>
      {fields.map((field, index) => (
        <div key={index}>
          <label htmlFor={field.id}>Degree</label>
          <input
            className={'border block rounded border-blue-500'}
            type="text"
            id={field.id}
            {...register(`education.${index}.degreeTitle`)}
          />
          <button
            className="block bg-red-500 p-3 rounded"
            type="button"
            onClick={() => remove(index)}
          >
            remove
          </button>
          <label htmlFor={field.id}>Name of school</label>
          <input
            className={'border block rounded border-blue-500'}
            type="text"
            id={field.id}
            {...register(`education.${index}.schoolName`)}
          />
          <button
            className="block bg-red-500 p-3 rounded"
            type="button"
            onClick={() => remove(index)}
          >
            remove
          </button>
          <label htmlFor={field.id}>Name of city</label>
          <input
            className={'border block rounded border-blue-500'}
            type="text"
            id={field.id}
            {...register(`education.${index}.cityName`)}
          />
          <button
            className="block bg-red-500 p-3 rounded"
            type="button"
            onClick={() => remove(index)}
          >
            remove
          </button>
          <label htmlFor={field.id}>Degree</label>
          <input
            className={'border block rounded border-blue-500'}
            type="text"
            id={field.id}
            {...register(`education.${index}.degreeTitle`)}
          />
          <button
            className="block bg-red-500 p-3 rounded"
            type="button"
            onClick={() => remove(index)}
          >
            remove
          </button>
          <label htmlFor={field.id}>Date of start</label>
          <input
            className={'border block rounded border-blue-500'}
            type="text"
            id={field.id}
            {...register(`education.${index}.startDate`)}
          />
          <button
            className="block bg-red-500 p-3 rounded"
            type="button"
            onClick={() => remove(index)}
          >
            remove
          </button>
          <label htmlFor={field.id}>Date of end</label>
          <input
            className={'border block rounded border-blue-500'}
            type="text"
            id={field.id}
            {...register(`education.${index}.endDate`)}
          />
          <button type="button" onClick={() => remove(index)}>
            remove
          </button>
          <label htmlFor={field.id}>Description</label>
          <input
            className={'border block rounded border-blue-500'}
            type="text"
            id={field.id}
            {...register(`education.${index}.description`)}
          />
          <button
            className="block bg-red-500 p-3 rounded"
            type="button"
            onClick={() => remove(index)}
          >
            remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({} as Education)}>
        add school
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicFormInput;
