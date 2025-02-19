import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/connection',
      name: 'connection',
      component: () => import('../views/ConnectionView.vue'),
    },
    {
      path: '/',
      redirect: '/students',
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('../views/students/ListStudentView.vue'),
    },
    {
      path: '/students/:id',
      name: 'getstudent',
      component: () => import('../views/students/GetStudentView.vue'),
    },
    {
      path: '/students/add',
      name: 'addstudent',
      component: () => import('../views/students/AddStudentView.vue'),
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/Courses/CoursesView.vue'),
    },
    {
      path: '/courses/new',
      name: 'newCourses',
      component: () => import('../views/Courses/NewCoursesView.vue'),
    },
    {
      path: '/courses/edit/:id',
      name: 'editCourses',
      component: () => import('../views/Courses/EditCoursesView.vue'),
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import('../views/stats/StatisticsPage.vue')
    },
    {
      path: '/grades',
      name: 'grades',
      component: () => import('../views/grades/GradesPage.vue')
    },
    {
      path: '/grades/new',
      name: 'addGrade',
      component: () => import('../views/grades/AddGradePage.vue')
    },
    {
      path: '/grades/:id/edit',
      name: 'editGrade',
      component: () => import('../views/grades/EditGradePage.vue')
    }
  ],
})

export default router
