import { Routes } from "@angular/router";
import { EmployeeList } from "./employee-list/employee-list";
import { Holidays } from "./holidays/holidays";
import { Department } from "./department/department";
import { CreateEmployeLeave } from "./leave-manage/create-employe-leave/create-employe-leave";
import { CreateHrLeave } from "./leave-manage/create-hr-leave/create-hr-leave";
import { EmployeeLeave } from "./leave-manage/employee-leave/employee-leave";
import { HrLeave } from "./leave-manage/hr-leave/hr-leave";
import { HrAttendance } from "./attendance/hr-attendance/hr-attendance";
import { MainAttendance } from "./attendance/main-attendance/main-attendance";
import { Estimates } from "./sales/estimates/estimates";
import { Payments } from "./sales/payments/payments";
import { Expenses } from "./sales/expenses/expenses";
import { EmployeeSalary } from "./payroll/employee-salary/employee-salary";
import { Payslip } from "./payroll/payslip/payslip";
import { CreatePayslip } from "./payroll/create-payslip/create-payslip";

export const MANAGEMENT_ROUTES: Routes = [
  {
    path: 'hr/employee-list',
    component: EmployeeList,
    title: 'Employee',
  },
  {
    path: 'hr/holidays',
    component: Holidays,
    title: 'Holidays',
  },
  {
    path: 'hr/leave/create-employee',
    component: CreateEmployeLeave,
    title: 'Add Leave (Employee)',
  },
  {
    path: 'hr/create-leave',
    component: CreateHrLeave,
    title: 'Add Leave (HR)',
  },
  {
    path: 'hr/leave/employee',
    component: EmployeeLeave,
    title: 'Leave Manage (Employee)',
  },
  {
    path: 'hr/leave',
    component: HrLeave,
    title: 'Leave Manage (HR)',
  },
  {
    path: 'hr/attendance',
    component: HrAttendance,
    title: 'Attendance',
  },
  {
    path: 'hr/attendance-main',
    component: MainAttendance,
    title: 'Main Attendance',
  },
  {
    path: 'hr/department',
    component: Department,
    title: 'Department',
  },
  {
    path: 'hr/sales/estimates',
    component: Estimates,
    title: 'Estimates',
  },
  {
    path: 'hr/sales/payments',
    component: Payments,
    title: 'Payments',
  },
  {
    path: 'hr/sales/expenses',
    component: Expenses,
    title: 'Expenses',
  },
  {
    path: 'hr/payroll/employee-salary',
    component: EmployeeSalary,
    title: 'Employee Salary',
  },
  {
    path: 'hr/payroll/payslip',
    component: Payslip,
    title: 'Payslip',
  },
  {
    path: 'hr/payroll/create-payslip',
    component: CreatePayslip,
    title: 'Create Payslip',
  }

]