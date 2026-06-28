import { Switch, Route } from 'wouter';
import LearnPage from './LearnPage';
import PhonicsSoundGridPage from './PhonicsSoundGridPage';
import SoundLessonDetailPage from './SoundLessonDetailPage';

export function LearnRoutes() {
  return (
    <Switch>
      {/* Main Learn Page */}
      <Route path="/learn" component={LearnPage} />

      {/* Reception Routes */}
      <Route path="/learn/reception" component={LearnPage} />
      <Route path="/learn/reception/reading" component={LearnPage} />
      <Route path="/learn/reception/phonics" component={PhonicsSoundGridPage} />
      <Route path="/learn/reception/phonics/phase-2" component={PhonicsSoundGridPage} />
      <Route path="/learn/reception/phonics/phase-2/:soundId" component={SoundLessonDetailPage} />

      {/* Year 1 Routes (Placeholders) */}
      <Route path="/learn/year-1" component={LearnPage} />

      {/* Year 2 Routes (Placeholders) */}
      <Route path="/learn/year-2" component={LearnPage} />
    </Switch>
  );
}
