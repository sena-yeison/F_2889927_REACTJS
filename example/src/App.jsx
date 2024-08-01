import { useState } from 'react'
import CompanyForm from './components/company/companyForm'
import EmployeeFrom from './components/employee/employeeForm'
import CompaniesList from './components/company/companiesList'
import EmployeesList from './components/employee/empoloyeeList'

function App() {
  const [companies, setCompanies] = useState([]);
  const [employees, setEmployees] = useState([]);

  const addCompany = (company) => {
    setCompanies([...companies, company])
  }
  const addEmployee = (employee) => {
    setEmployees([...employees,employee])
  }

  return (
    <>
    <h1>Formulario de Empresa y empleados</h1>
      <CompanyForm addCompany={addCompany}/>
      <EmployeeFrom addEmployee={addEmployee} companies={companies}/>
      <CompaniesList companies={companies} />
      <EmployeesList employees={employees}/>
    </>
  );
}

export default App
