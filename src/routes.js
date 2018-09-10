import Landing from './containers/landing'
import StepOne from './containers/stepOne'
import StepTwo from './containers/stepTwo'
import Thanks from './containers/thanks'
import SubmissionError from './containers/error'

export const routes = [
  { path: '/', component: Landing, exact: true },
  { path: '/stepOne', component: StepOne, exact: false },
  { path: '/stepTwo', component: StepTwo, exact: false },
  { path: '/thanks', component: Thanks, exact: false },
  { path: '/error', component: SubmissionError, exact: false },
]
