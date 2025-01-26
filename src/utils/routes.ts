const Routes = {
    home: '/',
    courses: '/courses',
    contact: '/contact',
    course: (slug: string) => `/courses/${slug}`,
}

export default Routes;
