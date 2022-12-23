import React, { useContext, useState } from 'react'
import { useAuth } from '../../utils/hooks'
import ErrorPage from '../global/ErrorPage'
import {
  AdminPageContainer,
  AdminPageSignInContainer,
  AdminPageTitle,
  SubmitButton,
  AdminPageFormContainer,
  SlobyErrorMessage,
} from '../../utils/styles/AdminPage'
import { SlobyInput } from '../../utils/styles/global'
import { ContentContext } from '../../utils/context/ContentContext'
import { TAdminPage, TAdminPageForm } from '../../utils/types'
import { AdminPageErrorMessages } from '../../utils/constans'
import SlobyValidate from '../../lib/SlobyValidate'
import { IEventType } from '../../utils/types'
import { RootState } from '../../store'
import { Navigate, useNavigate } from 'react-router-dom'

type validateInitalState = {
  username: string
  password: string
}

export const validateInitalState: validateInitalState = {
  username: '',
  password: '',
}

const slobyError = ''

function AdminPage() {
  const isUserHavePermission = useAuth()
  const { admin_page } = useContext(ContentContext)
  const adminPageForm = new SlobyValidate(validateInitalState)
  const navigate = useNavigate()

  return isUserHavePermission ? (
    <AdminPageContainer>
      <AdminPageSignInContainer>
        <AdminPageTitle>Log In</AdminPageTitle>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            if (!adminPageForm.submit(e, 'username>10password>6')) return false
            navigate('/admin/dashboard')
          }}
        >
          <AdminPageFormContainer>
            <SlobyInput
              placeholder={'username...'}
              type={'text'}
              value={adminPageForm.inputs.username}
              onChange={(e: React.FormEvent<HTMLFormElement> | any) =>
                adminPageForm.handleChange(e)
              }
              name={'username'}
            />
            <SlobyInput
              placeholder={'password...'}
              type={'password'}
              value={adminPageForm.inputs.password}
              onChange={(e: React.FormEvent<HTMLFormElement> | any) =>
                adminPageForm.handleChange(e)
              }
              name={'password'}
            />
            <SlobyErrorMessage>{slobyError}</SlobyErrorMessage>
            <SubmitButton type="submit">Submit</SubmitButton>
          </AdminPageFormContainer>
        </form>
      </AdminPageSignInContainer>
    </AdminPageContainer>
  ) : (
    <ErrorPage
      errorMessage={AdminPageErrorMessages.USER_DONT_HAVE_PERMISSION}
    />
  )
}

export default AdminPage
