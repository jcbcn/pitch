
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SquadComponent } from './pages/squad/squad.page';
import { SeasonsComponent } from './pages/seasons/seasons.page';
import { ChallengesComponent } from './pages/challenges/challenges.page';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { AuthCallbackComponent } from './auth/components/auth-callback/auth-callback.component';
import { StoreComponent } from './pages/store/store.page';
import { ActivesquadComponent } from './pages/squad/active-squad/active-squad.page';
import { TrainingComponent } from './pages/squad/training/training.page';
import { ClubComponent } from './pages/squad/club/club.page';
import { BuyPageComponent } from './pages/store/buy/buy.page';
import { MatchComponent } from './pages/match/match.page';
import { CurrentSeasonPage } from './pages/seasons/current-season/current-season.page';
import { MatchHistoryPage } from './pages/seasons/match-history/match-history.page';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  {
    path: 'squad', component: SquadComponent, data: { animation: 'squad' }, canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'active', pathMatch: 'full', data: { animation: 'squad' } },
      { path: 'active', component: ActivesquadComponent, data: { animation: 'squad' } },
      { path: 'training', component: TrainingComponent, data: { animation: 'squad' } },
      { path: 'club', component: ClubComponent, data: { animation: 'squad' } }
    ]
  },
  {
    path: 'seasons', component: SeasonsComponent, data: { animation: 'seasons' }, canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'current', pathMatch: 'full' },
      { path: 'current', component: CurrentSeasonPage },
      { path: 'history', component: MatchHistoryPage },
    ]
  },
  { path: 'challenges', component: ChallengesComponent, data: { animation: 'challenges' }, canActivate: [AuthGuardService] },
  {
    path: 'store', component: StoreComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'open', pathMatch: 'full' },
      { path: 'buy', component: BuyPageComponent },
    ]
  },
  { path: 'auth-callback', component: AuthCallbackComponent },
  { path: 'match/:id', component: MatchComponent },
  { path: '',  component: HomePage},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
