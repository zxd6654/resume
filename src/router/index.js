import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const PartOne = () => import('@/components/PartOne');
const PartTwo = () => import('@/components/PartTwo');
const PartThree = () => import('@/components/PartThree');
const PartFour = () => import('@/components/PartFour');
const PartFive = () => import('@/components/PartFive');
const PartSix = () => import('@/components/PartSix');
const PartSeven = () => import('@/components/PartSeven');
const PartEight=()=>import('@/components/PartEight');
const PartNine=()=>import('@/components/PartNine');

export default new Router({
    routes: [
        {
            path: '/',
            components: {
                PartOne: PartOne,
                PartTwo: PartTwo,
                PartThree: PartThree,
                PartFour: PartFour,
                PartFive: PartFive,
                PartSix: PartSix,
                PartSeven: PartSeven,
                PartEight:PartEight,
                PartNine:PartNine,
            }
        },
        {
            path: '/PartOne',
            name: 'PartOne',
            component: PartOne
        },
        {
            path: '/PartTwo',
            name: 'PartTwo',
            component: PartTwo
        },
        {
            path: '/PartThree',
            name: 'PartThree',
            component: PartThree
        },
        {
            path: '/PartFour',
            name: 'PartFour',
            component: PartFour
        },
        {
            path: '/PartFive',
            name: 'PartFive',
            component: PartFive
        },
        {
            path: '/PartSix',
            name: 'PartSix',
            component: PartSix
        },
        {
            path: '/PartSeven',
            name: 'PartSeven',
            component: PartSeven
        },
        {
            path: '/PartEight',
            name: 'PartEight',
            component: PartEight
        },
        {
            path: '/PartNine',
            name: 'PartNine',
            component: PartNine
        },
    ]
})
