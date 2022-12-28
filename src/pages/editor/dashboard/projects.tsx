import React from 'react'
import DashboardLayout from '../../../components/layouts/dashboard/DashboardLayout'
import Projects from '../../../components/dashboard/dashboardProjects/ProjectsSection'
import { QueryClientProvider } from 'react-query'

export default function projects() {
  return (
    <div className='flex'>
        <DashboardLayout>
          <Projects />
        </DashboardLayout>
    </div>
  )
}