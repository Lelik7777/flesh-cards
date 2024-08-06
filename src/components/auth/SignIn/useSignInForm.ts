import { SubmitHandler, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

/**
 * Zod schema for sign in form validation
 */

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().default(false),
})

/**
 * Type definition for form inputs based on Zod schema
 */

export type FormInputs = z.infer<typeof signInSchema>

/**
 * Custom hook for managing sign-in form
 *
 * This hook encapsulates the logic for handling the sign-in form,
 * including form state, validation, and submission.
 *
 * @param {Function} onSubmit - Callback function to handle form submission
 * @returns {Object} - Object containing form methods and state
 * @returns {Object} control - Control object for react-hook-form
 * @returns {Object} errors - Form errors object
 * @returns {Function} handleSubmit - Function to handle form submission
 * @returns {Function} onSubmitForm - Function to handle form submission with validation
 * @returns {Function} register - Function to register form fields
 */

export const useSignInForm = (onSubmit: (data: FormInputs) => void) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormInputs>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(signInSchema),
  })

  const onSubmitForm: SubmitHandler<FormInputs> = data => {
    onSubmit(data)
  }

  return {
    control,
    errors,
    handleSubmit,
    onSubmitForm,
    register,
  }
}
