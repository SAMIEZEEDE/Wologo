import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-wrapComponent
import { wrapComponent } from '../components/wrap.component';
//CORE_REFERENCE_IMPORT-dialogComponent
import { dialogComponent } from '../components/dialog.component';
//CORE_REFERENCE_IMPORT-leadService
import { leadService } from '../services/lead/lead.service';
//CORE_REFERENCE_IMPORT-protection_planComponent
import { protection_planComponent } from '../components/protection_plan.component';
//CORE_REFERENCE_IMPORT-select_PlanComponent
import { select_PlanComponent } from '../components/select_Plan.component';
//CORE_REFERENCE_IMPORT-nicotin_statusComponent
import { nicotin_statusComponent } from '../components/nicotin_status.component';
//CORE_REFERENCE_IMPORT-GenderComponent
import { GenderComponent } from '../components/Gender.component';
//CORE_REFERENCE_IMPORT-residing_stateComponent
import { residing_stateComponent } from '../components/residing_state.component';
//CORE_REFERENCE_IMPORT-ocupationComponent
import { ocupationComponent } from '../components/ocupation.component';
//CORE_REFERENCE_IMPORT-incomeComponent
import { incomeComponent } from '../components/income.component';
//CORE_REFERENCE_IMPORT-government_emplyeeComponent
import { government_emplyeeComponent } from '../components/government_emplyee.component';
//CORE_REFERENCE_IMPORT-employment_statusComponent
import { employment_statusComponent } from '../components/employment_status.component';
//CORE_REFERENCE_IMPORT-date_of_birthComponent
import { date_of_birthComponent } from '../components/date_of_birth.component';
//CORE_REFERENCE_IMPORT-registerComponent
import { registerComponent } from '../components/register.component';
//CORE_REFERENCE_IMPORT-summary_listComponent
import { summary_listComponent } from '../components/summary_list.component';
//CORE_REFERENCE_IMPORT-samary_cardComponent
import { samary_cardComponent } from '../components/samary_card.component';
//CORE_REFERENCE_IMPORT-recommendationsComponent
import { recommendationsComponent } from '../components/recommendations.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-wrapComponent
  wrapComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dialogComponent
  dialogComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-protection_planComponent
  protection_planComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-select_PlanComponent
  select_PlanComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-nicotin_statusComponent
  nicotin_statusComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-GenderComponent
  GenderComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-residing_stateComponent
  residing_stateComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ocupationComponent
  ocupationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-incomeComponent
  incomeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-government_emplyeeComponent
  government_emplyeeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-employment_statusComponent
  employment_statusComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-date_of_birthComponent
  date_of_birthComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-registerComponent
  registerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-summary_listComponent
  summary_listComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-samary_cardComponent
  samary_cardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-recommendationsComponent
  recommendationsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-leadService
  leadService,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'home',
    component: homeComponent,
    children: [
      { path: 'summary-card', component: samary_cardComponent },
      { path: 'quotes', component: recommendationsComponent },
      { path: 'summary', component: summary_listComponent },
      { path: 'register', component: registerComponent },
      { path: 'date-of-birth', component: date_of_birthComponent },
      { path: 'gender', component: GenderComponent },
      { path: 'employment-status', component: employment_statusComponent },
      { path: 'government-employee', component: government_emplyeeComponent },
      { path: 'income', component: incomeComponent },
      { path: 'nicotine', component: nicotin_statusComponent },
      { path: 'occupation', component: ocupationComponent },
      { path: 'state', component: residing_stateComponent },
      { path: 'select', component: select_PlanComponent },
      { path: 'protection', component: protection_planComponent },
      { path: 'wrap', component: wrapComponent },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
