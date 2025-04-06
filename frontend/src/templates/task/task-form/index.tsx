import React, { useEffect } from 'react';
import { withFormik, FormikProps } from 'formik';
import { string, object } from 'yup';
import { Button, Input, TextArea } from 'components';
import { FormValues, TaskFormProps } from 'types/task';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

function TaskForm(props: FormikProps<FormValues> & TaskFormProps) {
  const { storeTask } = useSelector((state: RootState) => state.task);
  useEffect(() => {
    if (storeTask) {
      props.values.title = '';
      props.values.description = '';
      props.setSubmitting(false);
    }
  }, [storeTask]);
  return (
    <div className='py-8 px-[6vw] md:h-screen flex flex-col justify-center '>
      <form
        onSubmit={props.handleSubmit}
        className='border rounded-md border-slate-300'
      >
        <div className='font-bold text-[20px] py-2 bg-blue-200/20 px-4 '>
          <h1 className='text-blue-950'>Add a Task</h1>
        </div>
        <div className='w-full space-y-6 p-4'>
          <Input
            name='title'
            label='Title'
            type='text'
            placeholder='Enter title.'
            values={props.values}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            errors={props.errors}
            touches={props.touched}
          />
          <TextArea
            name='description'
            placeholder='Enter description.'
            label='Description'
            values={props.values}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            errors={props.errors}
            touches={props.touched}
          />

          <div className='flex flex-col md:flex-row justify-end'>
            <Button
              name='Add'
              type='submit'
              disabled={props.isSubmitting}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default withFormik<TaskFormProps, FormValues>({
  validationSchema: object().shape({
    title: string().required('Title is required'),
    description: string().required('Description is required'),
  }),
  handleSubmit: (values, { props, ...actions }) => {
    props.onSubmit(values, actions);
  },
})(TaskForm);
