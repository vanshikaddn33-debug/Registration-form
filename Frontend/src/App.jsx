import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Registration from './pages/Registration'
import ContactDetails from './pages/ContactDetails'
import Success from './Pages/SuccessPage'

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    year: '',
    branch: '',
    phone: '',
    github: '',
    language: '',
    gender: '',
    residence: '',
    laptop: ''
  })

  const updateForm = (data) => {
    setFormData((previous) => ({ ...previous, ...data }))
  }

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Registration
            formData={formData}
            updateForm={updateForm}
          />
        }
      />

      <Route
        path='/contact'
        element={
          <ContactDetails
            formData={formData}
            updateForm={updateForm}
          />
        }
      />

      <Route
        path='/success'
        element={<Success name={formData.name} />}
      />

      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default App